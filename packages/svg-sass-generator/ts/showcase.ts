import { glob } from "glob";
import { readFileSync } from "fs";
//import sass from "sass";
import * as sass from "sass";
import { join } from "path";
import cheerio from "cheerio";
import { processMulticolorFigures } from "./partials-svg/process-multicolor-figures.js";
import { saveSvgOnDisk } from "./partials-svg/utilities.js";
import { RED, RESET_COLOR } from "./partials-common/utilities.js";
import { iconType } from "./partials-common/types.js";

//Directories
const SRC_SASS_FOLDER = await process.argv[2];
const OUTPUT_DIRECTORY = await process.argv[3];
const SASS_FILE_NAME = "svg-generator-icons-lists.scss";
let iconsCatalog: iconsCatalog = { multicolor: {}, monochrome: {} };

const scssFilePath = join(SRC_SASS_FOLDER, SASS_FILE_NAME);
const scssResult = sass.compile(scssFilePath, { style: "expanded" });
const cssResult = scssResult["css"];
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

const processIconsSelectors = (
  cssArray: string[],
  iconType: iconType
): void => {
  cssArray.forEach((cssIconSelector) => {
    // some selectors have two forms: with or without pseudo-selector (:hover, : active).
    const splittedSelectors = splitCssSelector(cssIconSelector);
    const category = getIconCategory(splittedSelectors[0]);
    // Check if the property exists, if not, create it
    if (!iconsCatalog[iconType][category]) {
      iconsCatalog[iconType][category] = [];
      iconsCatalog[iconType][category].push({
        staticSelector: splittedSelectors[0],
        pseudoSelector: splittedSelectors[1],
      });
    } else {
      iconsCatalog[iconType][category].push({
        staticSelector: splittedSelectors[0],
        pseudoSelector: splittedSelectors[1],
      });
    }
  });
};

const getIconCategory = (iconCssSelector: string): string => {
  const startIndex = iconCssSelector.indexOf("__") + 2; // Adding 2 to exclude the "__"
  const endIndex = iconCssSelector.indexOf("_", startIndex);
  const category = iconCssSelector.substring(startIndex, endIndex);
  return category;
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

const processCatalogJs = (): string => {
  console.dir(iconsCatalog, { depth: null });
  return "";
};

// process multicolor selectors (add them to iconsCatalog)
const multicolorParsedCssString = parseCssString(multicolorSelectors);
const multicolorCssArray = getSelectorsArray(multicolorParsedCssString);
const multicolorCssArrayParsed = parseCssArray(multicolorCssArray);
processIconsSelectors(multicolorCssArrayParsed, "multicolor");

// process monochrome selectors (add them to iconsCatalog)
const monochromeParsedCssString = parseCssString(monochromeSelectors);
const monochromeCssArray = getSelectorsArray(monochromeParsedCssString);
const monochromeCssArrayParsed = parseCssArray(monochromeCssArray);
processIconsSelectors(monochromeCssArrayParsed, "monochrome");

const catalogJs = processCatalogJs();

export type iconsSelectors = {
  staticSelector: string;
  pseudoSelector: string;
}[];
export type iconsCatalog = {
  monochrome: Record<string, iconsSelectors>;
  multicolor: Record<string, iconsSelectors>;
};
