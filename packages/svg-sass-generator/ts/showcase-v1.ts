import { glob } from "glob";
import { readFileSync, writeFileSync } from "fs";
import { writeFile } from "./partials-common/file-system-utils.js";
//import sass from "sass";
import * as sass from "sass";
import { join } from "path";
import cheerio from "cheerio";
import { processMulticolorFigures } from "./partials-svg/process-multicolor-figures.js";
import { saveSvgOnDisk } from "./partials-svg/utils.js";
import { RED, RESET_COLOR } from "./partials-common/utils.js";
import { iconType } from "./partials-common/types.js";

//Directories
const SRC_SASS_FOLDER = await process.argv[2];
const ICONS_SELECTORS_GENERATOR = await process.argv[3];
const OUTPUT_PATH = await process.argv[4];
const SVG_ICONS_SRC = await process.argv[5];
const SRC_ICONS_LISTS = "svg-generator-icons-lists.scss";
const SRC_ICONS_LISTS_SELECTORS = "svg-generator-icons-lists-selectors.scss";
const COMPILED_CSS_FILENAME = "icons-selectors.css";
const ICONS_CATALOG_JSON_FILENAME = "icons-catalog.json";
let iconsCatalog: iconsCatalog = { multicolor: {}, monochrome: {} };

const getSassContent = (scssSourceFilePath: string): string => {
  try {
    // Read the file synchronously
    const data = readFileSync(scssSourceFilePath, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

const createShowcaseIconsList = (
  sourceIconsList: string,
  iconSelectorsGenerator: string,
  iconsPath: string
): string => {
  const output = `
$icons-path: "${iconsPath}";
${sourceIconsList} \n
${iconSelectorsGenerator}
  `;
  return output;
};

// const saveOnDisk = (content: string, outputPath: string): void => {
//   try {
//     // Write the data to a new file
//     writeFileSync(outputPath, content, "utf8");
//   } catch (err) {
//     console.error("Error:", err);
//   }
// };

const scssSourceFilePath = join(SRC_SASS_FOLDER, SRC_ICONS_LISTS);
const sourceSassContent = getSassContent(scssSourceFilePath);
const iconSelectorsGeneratorContent = getSassContent(ICONS_SELECTORS_GENERATOR);
const showcaseIconsList = createShowcaseIconsList(
  sourceSassContent,
  iconSelectorsGeneratorContent,
  SVG_ICONS_SRC
);

// save SRC_ICONS_LISTS_SELECTORS
const iconListSavedOnDisk = writeFile(
  join(SRC_SASS_FOLDER, SRC_ICONS_LISTS_SELECTORS),
  showcaseIconsList
);

// compile SRC_ICONS_LISTS_SELECTORS
const scssResult = sass.compile(
  join(SRC_SASS_FOLDER, SRC_ICONS_LISTS_SELECTORS),
  { style: "expanded" }
);
const cssResult = scssResult["css"];

// save compiled css on disk
const cssResultSavedOnDisk = writeFile(
  join(OUTPUT_PATH, COMPILED_CSS_FILENAME),
  cssResult
);

const cssResultString = cssResult.replace(/[\r\n]+/g, "");
const colorLists = cssResultString.split("lists*/");

const multicolorSelectors = colorLists[1];
const monochromeSelectors = colorLists[2];

const parseCssString = (originalCss: string): string => {
  // remove { --icon-path : url ...}
  let parsed = originalCss.replace(/\{[^}]+\}/g, "");
  // remove html.dark
  parsed = parsed.replace(/html\.dark\s/g, "");
  // remove unnecessary spaces
  parsed = parsed.replace(/ +/g, " ");
  // remove break lines
  parsed = parsed.replace(/[\r\n]+/g, "");
  // remove space after coma
  return parsed.replace(/,\s*/g, ",");
};

const getSelectorsArray = (parsedCss: string): string[] => {
  return parsedCss.split(" ");
};

/**
 * @description: it clears out some items that are not css icon selectors, like an empty string, or a comment.
 */
const parseCssArray = (cssArray: string[]): string[] => {
  return cssArray.filter((cssSelector) => cssSelector.startsWith("."));
};

const processIconSelectors = (cssArray: string[], iconType: iconType): void => {
  let iconName: string;
  let prevIconName: string;
  cssArray.forEach((cssIconSelector) => {
    let newIcon = false;
    let iconBaseName: string = null;
    // some selectors have two forms: with or without pseudo-selector (:hover, : active).
    const splittedSelectors = splitCssSelector(cssIconSelector);
    const category = getIconCategory(splittedSelectors[0]);
    iconName = getIconName(splittedSelectors[0]);

    if (iconName !== prevIconName) {
      newIcon = true;
      prevIconName = iconName;
    }
    if (iconType === "multicolor" && newIcon) {
      if (splittedSelectors[0].includes(":")) {
        iconBaseName = splittedSelectors[0].split(":")[0];
      } else {
        iconBaseName = splittedSelectors[0].split("--")[0];
      }
    }

    let staticSelector;
    // replace(/\./g, "") removes the dot (.) from the class name.
    // we want the class name without the dot (.)
    if (splittedSelectors.length === 1) {
      staticSelector = splittedSelectors[0].replace(/\./g, "");
    } else if (splittedSelectors.length === 2) {
      if (splittedSelectors[0].includes(":")) {
        staticSelector = splittedSelectors[1].replace(/\./g, "");
      } else {
        staticSelector = splittedSelectors[0].replace(/\./g, "");
      }
    }

    // Check if the property exists, if not, create it
    if (!iconsCatalog[iconType][category]) {
      iconsCatalog[iconType][category] = {};
    }
    if (newIcon) {
      iconsCatalog[iconType][category][iconName] = {
        iconBaseName: iconBaseName,
        iconSelectors: [],
      };
    }
    iconsCatalog[iconType][category][iconName].iconSelectors.push(
      staticSelector
    );
  });
};

const getIconCategory = (iconCssSelector: string): string => {
  const startIndex = iconCssSelector.indexOf("__") + 2; // Adding 2 to exclude the "__"
  const endIndex = iconCssSelector.indexOf("_", startIndex);
  const category = iconCssSelector.substring(startIndex, endIndex);
  return category;
};

const getIconName = (iconCssSelector: string): string => {
  const iconNameSeparatorIndex = iconCssSelector.lastIndexOf("_");
  const iconName = iconCssSelector
    .substring(iconNameSeparatorIndex + 1)
    .split("--")[0]
    .split(":")[0];
  return iconName;
};

const splitCssSelector = (cssSelector: string): string[] => {
  const separator = ",";
  const selectorSplitted = cssSelector.split(separator);
  if (cssSelector.includes(separator)) {
    return selectorSplitted;
  } else {
    return [selectorSplitted[0]];
  }
};

const saveCatalogJsonOnDisk = (): string | void => {
  const iconsCatalogJson = JSON.stringify(iconsCatalog, null, 2);
  const iconsCatalogJsonSavedOnDissk = writeFile(
    join(OUTPUT_PATH, ICONS_CATALOG_JSON_FILENAME),
    iconsCatalogJson
  );
};

// process multicolor selectors (add them to iconsCatalog)
const multicolorParsedCssString = parseCssString(multicolorSelectors);
const multicolorCssArray = getSelectorsArray(multicolorParsedCssString);
const multicolorCssArrayParsed = parseCssArray(multicolorCssArray);
processIconSelectors(multicolorCssArrayParsed, "multicolor");

// process monochrome selectors (add them to iconsCatalog)
const monochromeParsedCssString = parseCssString(monochromeSelectors);
const monochromeCssArray = getSelectorsArray(monochromeParsedCssString);
const monochromeCssArrayParsed = parseCssArray(monochromeCssArray);
processIconSelectors(monochromeCssArrayParsed, "monochrome");

saveCatalogJsonOnDisk();

export type iconsCategory = Record<string, iconSelectors>;

export type iconSelectors = {
  iconBaseName: string;
  iconSelectors: string[];
};
export type iconsCatalog = {
  monochrome: Record<string, iconsCategory>;
  multicolor: Record<string, iconsCategory>;
};
