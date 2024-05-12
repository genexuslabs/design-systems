import fs from "fs";
import {
  getStatesJsonReturn,
  colorScheme,
  pathInfo,
  figureType,
} from "../partials-common/types.js";
import path from "path";
import { writeFile } from "../partials-common/file-system-utils.js";

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
  "polyline",
];

const ICONS_DIRECTORY = "icons";

/**
 * @description It returns the monochrome states json as a JSON.
 */
export const getStatesObject = (STATES_PATH: string): getStatesJsonReturn => {
  try {
    // Read the file synchronously
    const statesString: string = fs.readFileSync(STATES_PATH, "utf8");
    return {
      valid: true,
      info: "Ok",
      statesObject: JSON.parse(statesString),
    };
  } catch (error) {
    return {
      valid: false,
      info: `Error reading file: ${error}`,
      statesObject: null,
    };
  }
};

export const saveSvgOnDisk = (
  svgString: string,
  iconPath: string,
  srcPath: string,
  outputDirectory: string,
  colorScheme: colorScheme,
  LOG_PATH: string
): boolean => {
  // construct file path
  const schemeFolderName = colorScheme;
  const pathInfo = getPathInfo(srcPath, iconPath);

  const fileDirectoriesPath = path.join(
    outputDirectory,
    ICONS_DIRECTORY,
    pathInfo.categoryFolderName || "",
    schemeFolderName
  );

  const filePath = path.join(fileDirectoriesPath, pathInfo.fileName);

  const savedSuccessfully = writeFile(filePath, svgString, LOG_PATH);
  return savedSuccessfully;
};

export const getPathInfo = (sourcePath: string, iconPath: string): pathInfo => {
  // paths forwards slashes (/) should be replaced with backward slashed (\) because
  // "the path methods only add backward slashes (\)."
  const fileName = iconPath.replace(/\//g, "\\").split(path.sep).pop();
  const iconPathSegments = iconPath.replace(/\//g, "\\").split(path.sep);
  const sourcePathSegments = sourcePath.replace(/\//g, "\\").split(path.sep);
  const sourceFolder = sourcePathSegments[sourcePathSegments.length - 1];
  let category = null;
  if (
    iconPathSegments.length == 2 ||
    (iconPathSegments.length > 2 &&
      iconPathSegments[iconPathSegments.length - 2] === sourceFolder)
  ) {
    // the icon has no category folder, because the icon is a direct child of the source directory
    category = null;
  } else if (iconPathSegments.length > 2) {
    // the icon has a category folder
    category = iconPathSegments[iconPathSegments.length - 2];
  }
  return {
    categoryFolderName: category,
    fileName: fileName,
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
