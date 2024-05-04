import {
  readFileSync,
  writeFile,
  existsSync,
  mkdirSync,
  rmSync,
  mkdir
} from "fs";
import {
  getStatesJsonReturn,
  colorScheme,
  pathInfo,
  figureType
} from "../partials-common/types.js";
import { optimize } from "svgo";
import path from "path";
import { deleteDirectoryRecursive } from "../partials-common/delete-directory.js";
import { log } from "./log.js";
import { RED, RESET_COLOR } from "../partials-common/utilities.js";

/**
 * The list of available svg figures in any svg icon.
 */
export const SVG_FIGURES = [
  "rect",
  "circle",
  "ellipse",
  "line",
  "path",
  "polygon",
  "polyline"
];

/**
 * @description It returns the monochrome states json as a JSON.
 */
export const getStatesObject = (STATES_PATH: string): getStatesJsonReturn => {
  try {
    // Read the file synchronously
    const statesString: string = readFileSync(STATES_PATH, "utf8");
    return {
      valid: true,
      info: "Ok",
      statesObject: JSON.parse(statesString)
    };
  } catch (error) {
    return {
      valid: false,
      info: `Error reading file: ${error}`,
      statesObject: null
    };
  }
};

export const saveSvgOnDisk = (
  svgString: string,
  iconPath: string,
  outputDirectory: string,
  colorScheme: colorScheme,
  LOG_PATH: string
): boolean => {
  // construct file path
  const schemeFolderName = colorScheme;
  const pathInfo = getPathInfo(iconPath);

  const fileDirectoriesPath = path.join(
    outputDirectory,
    pathInfo.categoryFolderName,
    schemeFolderName
  );

  const filePath = path.join(fileDirectoriesPath, pathInfo.fileName);

  mkdir(fileDirectoriesPath, { recursive: true }, function (err) {
    writeFile(filePath, svgString, "utf8", err => {
      if (err) {
        const msg = `There was an error saving the icon on disk. error: ${err}`;
        console.error(`${RED} ${msg} ${RESET_COLOR}`);
        log(msg, LOG_PATH, true);
        return false;
      }
    });
  });
  return true;
};

export const getPathInfo = (iconPath: string): pathInfo => {
  const fileName = iconPath.split(path.sep).pop();
  const segments = iconPath.split(path.sep);
  let category = null;
  if (segments.length > 2) {
    // the icon belongs to a sub-folder (category)
    category = segments[1];
  }
  return {
    categoryFolderName: category,
    fileName: fileName
  };
};

export const getFigureType = (svgFigure: cheerio.Cheerio): figureType => {
  const fill = svgFigure.attr("fill");
  const stroke = svgFigure.attr("stroke");
  if (fill && stroke) {
    return "both";
  }
  if (fill) {
    return "path";
  }
  if (stroke) {
    return "stroke";
  }
  return undefined;
};

export const removeSpacesAndLineBreaks = (str: string) => {
  // Remove spaces and line breaks
  return str.replace(/\s+/g, "");
};
