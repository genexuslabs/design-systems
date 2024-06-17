// libraries
import { writeFileSync, mkdir } from "fs";
import path from "path";
import cheerio from "cheerio";
// partials-common
import { getIcons } from "./partials-common/get-icons.js";
import { ColorScheme, IconType } from "./partials-common/types.js";
import {
  RED,
  RESET_COLOR,
  getSvgString,
  getPathWithoutSrcDir,
} from "./partials-common/utils.js";
import { deleteDirectory } from "./partials-common/file-system-utils.js";
import { createIconsObject } from "./processor-ts.js";

let monochromeCategoriesList: string[] = [];
let multicolorCategoriesList: string[] = [];

// Files and Directories
const SRC_PATH = await process.argv[2];
const OUTPUT_PATH = await process.argv[3];
const ALL_LISTS_FILENAME = "all-lists.scss";

// Start fresh (delete current output directory)
deleteDirectory(OUTPUT_PATH);

const iconsPromise = getIcons(SRC_PATH);
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
  processIconsCatalog(iconsCatalog);
  const iconsObject = createIconsObject(iconsCatalog);
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

const processIconsCatalog = (iconsCatalog: iconsCatalog) => {
  // 1. process monochrome
  for (const category in iconsCatalog.monochrome) {
    processCatalogCategory(
      "monochrome",
      category,
      iconsCatalog.monochrome[category]
    );
  }

  // 2. process multicolor
  for (const category in iconsCatalog.multicolor) {
    processCatalogCategory(
      "multicolor",
      category,
      iconsCatalog.multicolor[category]
    );
  }
};

const processCatalogCategory = (
  type: IconType,
  categoryName: string,
  categoryIcons: lightDarkIcons
) => {
  saveCategory(type, categoryName);
  const sassFileContent = createSassFileString(categoryName, categoryIcons);
  saveSassOnDisk(sassFileContent, type, categoryName);
  saveMainSassOnDisk();
};

const createSassFileString = (
  categoryName: string,
  categoryIcons: lightDarkIcons
): string => {
  let categoryList = ` $${categoryName}: `;

  // category list (only once. iterate over dark or light, is the same)
  categoryIcons.dark.forEach((icon, index) => {
    const iconName = icon.fileName.substring(0, icon.fileName.lastIndexOf("."));
    categoryList +=
      index === categoryIcons.dark.length - 1
        ? `${iconName};`
        : `${iconName}, `;
  });

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

  const output = `
  ${allIconsCustomProperties}
  ${categoryList}
    %icon__${categoryName} {
  ${allPlaceholders}
    }
  `;

  return output;
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
      --icon-path: var(--icon__${categoryName}_${iconName}${stateSeparator}${state});
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
        iconsCustomProperties += `  --icon__${categoryName}_${iconName}${stateSeparator}${iconState}: url('#{$icons-path}${categoryName}/${scheme}/${icon.fileName}#${iconState}'); \n`;
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

const saveMainSassOnDisk = () => {
  let output = ``;

  output += `\n/*multicolor lists*/`;
  multicolorCategoriesList.forEach((category) => {
    output += `\n@import "./multicolor/${category}";`;
  });

  output += `\n\n/*monochrome lists*/`;
  monochromeCategoriesList.forEach((category) => {
    output += `\n@import "./monochrome/${category}";`;
  });

  output += `\n\n$all-multicolor-lists: (`;
  multicolorCategoriesList.forEach((category) => {
    output += `\n${category}: $${category},`;
  });
  output += `\n);`;

  output += `\n\n$all-monochrome-lists: (`;
  monochromeCategoriesList.forEach((category) => {
    output += `\n${category}: $${category},`;
  });
  output += `\n);`;

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
