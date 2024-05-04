// libraries
import { writeFile, mkdir } from "fs";
import path from "path";
import cheerio from "cheerio";
// partials-common
import { getIcons } from "./partials-common/get-icons.js";
import { getCleanPath } from "./partials-common/utilities.js";
import { getSvgString } from "./partials-common/get-svg-string.js";
import { colorScheme, iconType } from "./partials-common/types.js";
import { RED, RESET_COLOR, colorizeJson } from "./partials-common/utilities.js";
import { deleteDirectoryRecursive } from "./partials-common/delete-directory.js";

let monochromeCategoriesList: string[] = [];
let multicolorCategoriesList: string[] = [];

// Files and Directories
const SRC_DIRECTORY = await process.argv[2];
const OUTPUT_DIRECTORY = await process.argv[3];

// Start fresh (delete current output directory)
deleteDirectoryRecursive(OUTPUT_DIRECTORY);

const iconsPromise = getIcons(SRC_DIRECTORY);
iconsPromise
  .then((iconsArray: string[]) => {
    processIconsSass(SRC_DIRECTORY, iconsArray);
  })
  .catch(error => {
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
    multicolor: {}
  };

  iconsArray.forEach(iconPath => {
    addIconInCatalog(sourceDir, iconPath, iconsCatalog);
  });

  // iconsCatalog is ready
  processIconsCatalog(iconsCatalog);
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
  const iconType = svgElement.attr("data-scheme") as iconType;

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
  iconType: iconType,
  states: string[]
): iconsCatalog | void => {
  const cleanPath = getCleanPath(sourceDir, iconPath);
  const iconPathArray = cleanPath.split(path.sep);
  const [category, type, filename] = iconPathArray;
  if (!iconsCatalog[iconType][category]) {
    iconsCatalog[iconType][category] = { light: [], dark: [] };
  }
  iconsCatalog[iconType][category][type as colorScheme].push({
    fileName: filename,
    states: states
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
  type: iconType,
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
  let categoryList = ` $icons-${categoryName}: `;

  // category list (only once. iterate over dark or light, is the same)
  categoryIcons.dark.forEach((icon, index) => {
    const iconName = icon.fileName.substring(0, icon.fileName.lastIndexOf("."));
    categoryList +=
      index === categoryIcons.dark.length - 1
        ? `${iconName};`
        : `${iconName}, `;
  });

  const lightPlaceholders = createPlaceholders(
    categoryName,
    categoryIcons,
    "light"
  );
  const darkPlaceholders = createPlaceholders(
    categoryName,
    categoryIcons,
    "dark"
  );

  const allPlaceholders = `
    /* =================================
    LIGHT
    ================================= */
  ${lightPlaceholders}

    /* =================================
    DARK
    ================================= */
  ${darkPlaceholders}
  `;

  const output = `
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
  scheme: colorScheme
): string => {
  let placeholderSelectors = ``;

  // dark placeholder selectors
  categoryIcons.dark.forEach((icon, index) => {
    const iconName = icon.fileName.split(".")[0];

    placeholderSelectors += `
    /* - - - - - - - - - - - - 
    ${icon.fileName} 
    - - - - - - - - - - - - */
    `;

    // placeholder selectors
    icon.states.forEach(state => {
      placeholderSelectors += `
    &-${iconName}--${state}-${scheme} {
      --icon-path: url("#{$icons-path}icons/${categoryName}/${scheme}/${icon.fileName}#${state}");
    }
    `;
    });
  });

  return placeholderSelectors;
};

/**
 * @description it saves the category in the array, for creating sass categories lists later.
 */
const saveCategory = (type: iconType, categoryName: string) => {
  if (type === "monochrome") {
    monochromeCategoriesList.push(categoryName);
  } else if (type === "multicolor") {
    multicolorCategoriesList.push(categoryName);
  }
};

const saveSassOnDisk = (
  sassFileContent: string,
  type: iconType,
  categoryName: string
) => {
  const sassDirectoryPath = path.join(OUTPUT_DIRECTORY, type);
  const filePath = path.join(sassDirectoryPath, `${categoryName}.scss`);

  mkdir(sassDirectoryPath, { recursive: true }, function (err) {
    writeFile(filePath, sassFileContent, "utf8", err => {
      if (err) {
        const msg = `There was an error saving ${categoryName}.scss the icon on disk. error: ${err}`;
        console.error(`${RED} ${msg} ${RESET_COLOR}`);
        return false;
      }
    });
  });
  return true;
};

const saveMainSassOnDisk = () => {
  let output = ``;

  output += `\n/*multicolor lists*/`;
  multicolorCategoriesList.forEach(category => {
    output += `\n@import "./multicolor/${category}";`;
  });

  output += `\n\n/*monochrome lists*/`;
  monochromeCategoriesList.forEach(category => {
    output += `\n@import "./monochrome/${category}";`;
  });

  output += `\n\n/*all multicolor lists*/`;
  output += `\n$all-multicolor-lists: (`;
  multicolorCategoriesList.forEach(category => {
    output += `\n${category}: $icons-${category}`;
  });
  output += `\n);`;

  output += `\n\n/*all monochrome lists*/\n`;
  output += `$all-monochrome-lists: (`;
  monochromeCategoriesList.forEach(category => {
    output += `\n${category}: $icons-${category}`;
  });
  output += `\n);`;

  const fileName = "svg-generator-icons-lists.scss";
  const filePath = path.join(OUTPUT_DIRECTORY, fileName);

  mkdir(OUTPUT_DIRECTORY, { recursive: true }, function (err) {
    writeFile(filePath, output, "utf8", err => {
      if (err) {
        const msg = `There was an error saving ${fileName} the icon on disk. error: ${err}`;
        console.error(`${RED} ${msg} ${RESET_COLOR}`);
        return false;
      }
    });
  });
  return true;
};

interface iconsCatalog {
  monochrome: catalogCategory;
  multicolor: catalogCategory;
}

export type catalogCategory = {
  [category: string]: lightDarkIcons;
};

export type lightDarkIcons = {
  light: { fileName: string; states: string[] }[];
  dark: { fileName: string; states: string[] }[];
};
