import fs from "fs";
import {
  GetStatesJsonReturn,
  ColorScheme,
  PathInfo,
  FigureType,
} from "../partials-common/types.js";
import path from "path";
import { writeFile } from "../partials-common/file-system-utils.js";
import { SavedOnDisk } from "../partials-common/types.js";

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

/**
 * @description It returns the monochrome states json as a JSON.
 */
export const getStatesObject = (STATES_PATH: string): GetStatesJsonReturn => {
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
  colorScheme: ColorScheme,
  LOG_PATH: string
): SavedOnDisk => {
  // construct file path
  const schemeFolderName = colorScheme;
  const pathInfo = getPathInfo(srcPath, iconPath);

  const filePath = path.join(
    outputDirectory,
    pathInfo.categoryFolderName || "",
    schemeFolderName,
    pathInfo.fileName
  );

  const savedSuccessfully = writeFile(filePath, svgString, LOG_PATH);
  // svgFilePath should include: category + scheme (light or dark) + icon file name.
  // svgFilePath is only for the showcase, and the preceding part of the path is
  // defined on the showcase html page with the base tag.
  return {
    saved: savedSuccessfully,
    svgFilePath: path.join(
      pathInfo.categoryFolderName || "",
      schemeFolderName,
      pathInfo.fileName
    ),
    category: pathInfo.categoryFolderName || null,
  };
};

export const getPathInfo = (sourcePath: string, iconPath: string): PathInfo => {
  const fileName = path.normalize(iconPath).split(path.sep).pop();
  const iconPathSegments = path.normalize(iconPath).split(path.sep);
  const sourcePathSegments = path.normalize(sourcePath).split(path.sep);
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

export const getFigureType = (svgFigure: cheerio.Cheerio): FigureType => {
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
