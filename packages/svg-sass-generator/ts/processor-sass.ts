#!/usr/bin/env node
// libraries
import { writeFileSync, mkdir } from "fs";
import path from "path";
import cheerio from "cheerio";
import minimist from "minimist";
// partials-common
import { getIcons } from "./partials-common/get-icons.js";
import { ColorScheme, IconType } from "./partials-common/types.js";
import { getStatesObject } from "./partials-svg/utils.js";
import {
  RED,
  RESET_COLOR,
  getSvgString,
  getPathWithoutSrcDir,
} from "./partials-common/utils.js";
import { deleteDirectory } from "./partials-common/file-system-utils.js";

let monochromeCategoriesList: string[] = [];
let multicolorCategoriesList: string[] = [];

// Files and Directories

const args = minimist(process.argv.slice(2));

const SRC_PATH = await args.srcDir;
const OUTPUT_PATH = await args.outDir;
const COLOR_STATES_PATH = await args.configFilePath;
const VENDOR_ALIAS = await args.vendorAlias;
const ALL_LISTS_FILENAME = "categories-lists.scss";
const CATEGORIES_VARIABLES_IMPORTS_FILENAME =
  "categories-variables-imports.scss";
const CATEGORIES_PLACEHOLDERS_IMPORTS_FILENAME =
  "categories-placeholders-imports.scss";
const CATEGORY_VARIABLES_FILENAME_SUFFIX = "__variables";
const CATEGORY_PLACEHOLDERS_FILENAME_SUFFIX = "__placeholders";
const ICON_PREFIX = VENDOR_ALIAS ? `--icon-${VENDOR_ALIAS}` : `--icon`;

// Start fresh (delete current output directory)
deleteDirectory(OUTPUT_PATH);

const iconsPromise = getIcons(SRC_PATH);
const colorStates = getStatesObject(COLOR_STATES_PATH).statesObject;

iconsPromise
  .then((iconsArray: string[]) => {
    processIconsSass(SRC_PATH, iconsArray);
  })
  .catch((error) => {
    const msg = `There was an error processing the icons. error: ${error}.`;
    throw new Error(`${RED} ${msg} ${RESET_COLOR}`);
  });

/**
 * @description: it process an array of svg icons, and creates a sass file for each category/directory.
 * @param iconsArray: an array strings, where each string represents the icon path.
 */
export function processIconsSass(sourceDir: string, iconsArray: string[]) {
  const iconsCatalog: iconsCatalog = {
    monochrome: {},
    multicolor: {},
  };

  iconsArray.forEach((iconPath) => {
    addIconInCatalog(sourceDir, iconPath, iconsCatalog);
  });

  // iconsCatalog is ready
  const categoriesListsObject: categoriesLists = {
    monochrome: {},
    multicolor: {},
  };
  processIconsCatalog(iconsCatalog, categoriesListsObject);
  saveIconsCategoriesImportsOnDisk("variables");
  // The following functions were commented because at the time of writing it only makes sense
  // to generate the custom properties. If we need to generate placeholders or categories lists
  // in the future, these functions are here ready to be applied.
  // saveIconsListsOnDisk(categoriesListsObject);
  // saveIconsCategoriesImportsOnDisk("placeholders");
  // saveMixinsOnDisk();
}

const addIconInCatalog = (
  sourceDir: string,
  iconPath: string,
  iconsCatalog: iconsCatalog
) => {
  let states: string[] = [];
  const svgString = getSvgString(iconPath);
  const svgCheerio = cheerio.load(svgString);
  const svgElement = svgCheerio("svg");
  const viewsElements = svgElement.find("view");
  const iconType = svgElement.attr("data-scheme") as IconType;

  if (iconType === "monochrome") {
    viewsElements.each((i, view) => {
      const viewState = cheerio(view).attr("id");
      states.push(viewState);
    });
  } else if (iconType === "multicolor") {
    states = ["enabled", "hover", "active", "disabled"];
  }
  updateIconsCatalog(sourceDir, iconPath, iconsCatalog, iconType, states);
};

/**
 * @description: it creates a catalog object of all the icons, organized by category, and then light and dark.
 * @param sourceDir: the source directory
 * @param iconsPaths: an array strings, where each string represents the icon path.
 */
const updateIconsCatalog = (
  sourceDir: string,
  iconPath: string,
  iconsCatalog: iconsCatalog,
  iconType: IconType,
  states: string[]
): iconsCatalog | void => {
  const cleanPath = getPathWithoutSrcDir(sourceDir, iconPath);
  const iconPathArray = cleanPath.split(path.sep);
  const category = iconPathArray[iconPathArray.length - 3];
  const scheme = iconPathArray[iconPathArray.length - 2];
  const filename = iconPathArray[iconPathArray.length - 1];
  if (!iconsCatalog[iconType][category]) {
    iconsCatalog[iconType][category] = { light: [], dark: [] };
  }
  iconsCatalog[iconType][category][scheme as ColorScheme].push({
    fileName: filename,
    states: states,
    iconType: iconType,
  });
};

const processIconsCatalog = (
  iconsCatalog: iconsCatalog,
  categoriesListsObject: categoriesLists
) => {
  // 1. process monochrome
  for (const category in iconsCatalog.monochrome) {
    processCatalogCategory(
      "monochrome",
      category,
      iconsCatalog.monochrome[category],
      categoriesListsObject
    );
  }

  // 2. process multicolor
  for (const category in iconsCatalog.multicolor) {
    processCatalogCategory(
      "multicolor",
      category,
      iconsCatalog.multicolor[category],
      categoriesListsObject
    );
  }
};

const processCatalogCategory = (
  iconType: IconType,
  categoryName: string,
  categoryIcons: lightDarkIcons,
  categoriesListsObject: categoriesLists
) => {
  saveCategory(iconType, categoryName);
  const sassFilesContent = createSassFiles(
    categoryName,
    categoryIcons,
    categoriesListsObject,
    iconType
  );
  saveSassOnDisk(
    sassFilesContent.customPropertiesSass,
    iconType,
    `${categoryName}${CATEGORY_VARIABLES_FILENAME_SUFFIX}`
  );
  // At the time of writing we no longer want to generate the placeholders selectors.
  // saveSassOnDisk(
  //   sassFilesContent.placeHoldersSelectorsSass,
  //   iconType,
  //   `${categoryName}${CATEGORY_PLACEHOLDERS_FILENAME_SUFFIX}`
  // );
};

const createSassFiles = (
  categoryName: string,
  categoryIcons: lightDarkIcons,
  categoriesListsObject: categoriesLists,
  iconType: IconType
): SassFiles => {
  // Save icon on categoriesListsObject for further use.
  if (!categoriesListsObject[iconType].hasOwnProperty(categoryName)) {
    categoriesListsObject[iconType][categoryName] = [];
  }
  // category list (only once. iterate over dark or light, is the same)
  categoryIcons.dark.forEach((icon, index) => {
    const iconName = icon.fileName.substring(0, icon.fileName.lastIndexOf("."));
    categoriesListsObject[iconType][categoryName].push(iconName);
  });
  // End of Save icon on categoriesListsObject for further use.

  // Icons Custom Properties
  const lightCustomProperties = createIconsCustomProperties(
    categoryName,
    categoryIcons,
    "light"
  );
  const darkCustomProperties = createIconsCustomProperties(
    categoryName,
    categoryIcons,
    "dark"
  );

  // Icons Sass List and Placeholders
  const darkPlaceholders = createPlaceholders(
    categoryName,
    categoryIcons,
    "dark"
  );
  const lightPlaceholders = createPlaceholders(
    categoryName,
    categoryIcons,
    "light"
  );

  const allIconsCustomProperties = `
  /* =================================
  LIGHT CUSTOM PROPERTIES
  ================================= */

  ${lightCustomProperties}

  /* =================================
  DARK CUSTOM PROPERTIES
  ================================= */

  ${darkCustomProperties}
  `;

  const allPlaceholders = `

  /* =================================
  LIGHT PLACEHOLDERS SELECTORS
  ================================= */
  ${lightPlaceholders}

  
  /* =================================
  DARK PLACEHOLDERS SELECTORS
  ================================= */
  ${darkPlaceholders}
  `;

  return {
    customPropertiesSass: allIconsCustomProperties,
    placeHoldersSelectorsSass: `%icon__${categoryName} {
      ${allPlaceholders}
    }`,
  };
};

const createPlaceholders = (
  categoryName: string,
  categoryIcons: lightDarkIcons,
  scheme: ColorScheme
): string => {
  let placeholderSelectors = ``;

  // (iterate over dark or light, is the same)
  categoryIcons.dark.forEach((icon) => {
    const stateSeparator = icon.iconType === "monochrome" ? "_" : "--";
    const iconName = icon.fileName.split(".")[0];

    placeholderSelectors += `

    /* - - - - - - - - - - - - 
    ${icon.fileName} 
    - - - - - - - - - - - - */
    `;

    // placeholder selectors
    icon.states.forEach((state) => {
      placeholderSelectors += `
    &_${iconName}${stateSeparator}${state} {
      --icon-path: var(${ICON_PREFIX}__${categoryName}_${iconName}${stateSeparator}${state});
    }`;
    });
  });

  return `${placeholderSelectors}`;
};

const createIconsCustomProperties = (
  categoryName: string,
  categoryIcons: lightDarkIcons,
  scheme: ColorScheme
) => {
  let iconsCustomProperties = `:root.${scheme} {
  /*${categoryName}*/\n`;
  categoryIcons[scheme].forEach((icon) => {
    const iconName = icon.fileName.split(".")[0];
    const stateSeparator = icon.iconType === "monochrome" ? "_" : "--";
    const iconStates = icon.states;
    if (iconStates) {
      iconStates.forEach((iconState) => {
        iconsCustomProperties += `  ${ICON_PREFIX}__${categoryName}_${iconName}${stateSeparator}${iconState}: url('#{$icons-path}${categoryName}/${scheme}/${icon.fileName}#${iconState}'); \n`;
      });
    }
  });
  iconsCustomProperties += `\n  }`;
  return iconsCustomProperties;
};

/**
 * @description it saves the category in the array, for creating sass categories lists later.
 */
const saveCategory = (type: IconType, categoryName: string) => {
  if (type === "monochrome") {
    monochromeCategoriesList.push(categoryName);
  } else if (type === "multicolor") {
    multicolorCategoriesList.push(categoryName);
  }
};

const saveSassOnDisk = (
  sassFileContent: string,
  type: IconType,
  categoryName: string
) => {
  const sassDirectoryPath = path.join(OUTPUT_PATH, type);
  const filePath = path.join(sassDirectoryPath, `${categoryName}.scss`);

  mkdir(sassDirectoryPath, { recursive: true }, function (err) {
    try {
      // Write the content to the file synchronously
      writeFileSync(filePath, sassFileContent);
    } catch (err) {
      const msg = `There was an error saving ${categoryName}.scss the icon on disk. error: ${err}`;
      console.error(`${RED} ${msg} ${RESET_COLOR}`);
      return false;
    }
  });
  return true;
};

const saveIconsListsOnDisk = (categoriesListsObject: categoriesLists) => {
  let output = ``;

  // Monochrome Categories and Colors
  output += `/* - - - - - - - - - - - - - - - -
 Monochrome Categories and Colors
 - - - - - - - - - - - - - - - - -*/\n\n`;

  output += monochromeColorsListString();
  output += monochromeCategoriesListString();

  // Monochrome Lists
  output += `\n\n/* - - - - - - - - - - - 
Monochrome lists
- - - - - - - - - - - */`;

  const monochromeCategoriesSassList = convertObjectCategoriesToSassLists(
    categoriesListsObject.monochrome
  );
  output += monochromeCategoriesSassList;

  output += `\n\n$all-monochrome-lists: (`;
  monochromeCategoriesList.forEach((category) => {
    output += `\n  ${category}: $${category},`;
  });
  output += `\n);`;

  // Multicolor Lists
  output += `\n\n/* - - - - - - - - - - - 
Multicolor lists
- - - - - - - - - - - */`;

  const multicolorCategoriesSassList = convertObjectCategoriesToSassLists(
    categoriesListsObject.multicolor
  );
  output += multicolorCategoriesSassList;

  output += `\n\n$all-multicolor-lists: (`;
  multicolorCategoriesList.forEach((category) => {
    output += `\n  ${category}: $${category},`;
  });
  output += `\n);`;

  // Save on disk
  const filePath = path.join(OUTPUT_PATH, ALL_LISTS_FILENAME);

  mkdir(OUTPUT_PATH, { recursive: true }, function (err) {
    try {
      // Write the content to the file synchronously
      writeFileSync(filePath, output);
    } catch (err) {
      const msg = `There was an error saving ${ALL_LISTS_FILENAME} the icon on disk. error: ${err}`;
      console.error(`${RED} ${msg} ${RESET_COLOR}`);
      return false;
    }
  });

  return true;
};

const saveIconsCategoriesImportsOnDisk = (
  fileType: "variables" | "placeholders"
): boolean => {
  let output = ``;
  const fileName =
    fileType === "variables"
      ? CATEGORIES_VARIABLES_IMPORTS_FILENAME
      : CATEGORIES_PLACEHOLDERS_IMPORTS_FILENAME;
  const fileNamSuffix =
    fileType === "variables"
      ? CATEGORY_VARIABLES_FILENAME_SUFFIX
      : CATEGORY_PLACEHOLDERS_FILENAME_SUFFIX;

  output += `\n/*multicolor lists*/`;
  multicolorCategoriesList.forEach((category) => {
    output += `\n@import "./multicolor/${category}${fileNamSuffix}";`;
  });

  output += `\n\n/*monochrome lists*/`;
  monochromeCategoriesList.forEach((category) => {
    output += `\n@import "./monochrome/${category}${fileNamSuffix}";`;
  });

  const filePath = path.join(OUTPUT_PATH, fileName);

  mkdir(OUTPUT_PATH, { recursive: true }, function (err) {
    try {
      // Write the content to the file synchronously
      writeFileSync(filePath, output);
    } catch (err) {
      const msg = `There was an error saving ${fileName} the icon on disk. error: ${err}`;
      console.error(`${RED} ${msg} ${RESET_COLOR}`);
      return false;
    }
  });

  return true;
};

const convertObjectCategoriesToSassLists = (
  categoriesList: categoriesList
): string => {
  let sassString = ``;

  for (const category in categoriesList) {
    const categoryIcons = categoriesList[category];
    const iconsString = categoryIcons.join(", ");
    sassString += `
 
// ${category}
$${category}: ${iconsString};`;
  }
  return sassString;
};

const monochromeColorsListString = (): string => {
  let output = `$monochrome-colors: (\n`;
  const monochromeColors = colorStates.monochrome.colors;
  monochromeColors.forEach((color, i) => {
    const isLastColor = i === monochromeColors.length - 1;
    const colorStates = Object.entries(color.states);
    output += `  ${color.name}: (\n`;

    colorStates.forEach(([stateName, colorValue], stateIndex, statesArray) => {
      if (!colorValue) {
        return;
      }
      const isLastState = stateIndex === statesArray.length - 1;
      output += `    ${stateName}`;
      output += !isLastState ? ",\n" : "\n";
    });
    output += !isLastColor ? " ),\n" : " )\n";
  });
  output += `);`;
  return output;
};

const monochromeCategoriesListString = (): string => {
  let output = `\n\n$monochrome-categories: (\n`;
  const monochromeCategories = colorStates.monochrome.iconsCategories;
  monochromeCategories.forEach((category, i) => {
    const isLastCategory = i === monochromeCategories.length - 1;
    const categoryName = category.folder;
    const categoryColors = Object.entries(category.colors);

    output += ` ${categoryName}: (\n`;

    categoryColors.forEach(
      ([colorName, colorValue], colorIndex, colorsArray) => {
        if (!colorValue) {
          return;
        }
        const isLastColor = colorIndex === colorsArray.length - 1;
        output += `   ${colorName}`;
        output += !isLastColor ? ",\n" : "\n";
      }
    );
    output += !isLastCategory ? " ),\n" : " )\n";
  });
  output += `);`;
  return output;
};

const monochromeMapFunctions = (): string => {
  return `\n\n// functions for monochrome or multicolor:
@function category-is-excluded($category, $categories-list) {
  @return index($category, $categories-list) != null;
}

// functions for monochrome only:
@function get-monochrome-category-colors($category) {
  @return map-get($monochrome-categories, $category);
}

@function get-monochrome-color-states($color) {
  @return map-get($monochrome-colors, $color);
}
  
// functions for multicolor only:
@function get-multicolor-color-states(){
  $multicolorStates: (enabled, hover, active, disabled);
  @return $multicolorStates;
}
`;
};

const monochromeSelectorsMixin = (): string => {
  return `\n@mixin generate-monochrome-icons-selectors(
  $all-monochrome-lists,
  $css-prefix: "icon",
  $prefix-category-separator: "__",
  $category-icon-separator: "_",
  $icon-color-separator: "_",
  $color-state-separator: "--",
  $ignored-categories
) {
  @each $category-name, $category-icons in $all-monochrome-lists {
    $category-is-excluded: category-is-excluded(
      $category-name,
      $ignored-categories
    );
    @if (not($category-is-excluded)) {
      $category-colors: get-monochrome-category-colors($category-name);
      @each $icon in $category-icons {
        @each $color in $category-colors {
          $color-states: get-monochrome-color-states($color);
          @each $state in $color-states {
            .#{$css-prefix}#{$prefix-category-separator}#{$category-name}#{$category-icon-separator}#{$icon}#{$icon-color-separator}#{$color} {
              &:#{$state} {
                --icon-path: var(
                  --icon#{$prefix-category-separator}#{$category-name}#{$category-icon-separator}#{$icon}#{$icon-color-separator}#{$color}#{$color-state-separator}#{$state}
                );
              }
            }
          }
        }
      }
    }
  }
}`;
};

export interface iconsCatalog {
  monochrome: catalogCategory;
  multicolor: catalogCategory;
}

export type catalogCategory = {
  [category: string]: lightDarkIcons;
};

export type lightDarkIcons = {
  light: { fileName: string; states: string[]; iconType: IconType }[];
  dark: { fileName: string; states: string[]; iconType: IconType }[];
};

type SassFiles = {
  customPropertiesSass: string;
  placeHoldersSelectorsSass: string;
};

interface categoriesList {
  [key: string]: string[];
}

interface categoriesLists {
  monochrome: categoriesList;
  multicolor: categoriesList;
}
