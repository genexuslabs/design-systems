import { SVG_FIGURES } from "./utils.js";
import {
  FigureType,
  IconsColorsSchema,
  MulticolorFiguresResult,
} from "../partials-common/types.js";
import cheerio from "cheerio";
import { getFigureType, removeSpacesAndLineBreaks } from "./utils.js";
import { log } from "./log.js";

let warnings: warningInfo[] = [];
let usedColors: string[] = [];

export const processMulticolorFigures = (
  svgCheerio: cheerio.Root,
  statesJson: IconsColorsSchema,
  iconPath: string,
  LOG_PATH: string
): MulticolorFiguresResult => {
  const svg = svgCheerio("svg");
  const svgWidth = svg.attr("width");
  const svgHeight = svg.attr("height");
  const svgFigures = svgCheerio(SVG_FIGURES.join(","));

  warnings = []; //clear warnings array from the prev. icon
  usedColors = []; //clear usedColors array from the prev. icon

  //check width and height
  if (!svgWidth || !svgHeight) {
    const msg = `icon with svg element was provided without width or/and height. This attributes are required. This icon will be ignored. \n 
    path: ${iconPath}`;
    log(msg, LOG_PATH);
    return {
      processed: false,
      cheerioSvgFigures: null,
      usedColors: null,
      size: {
        width: svgWidth,
        height: svgHeight,
      },
    };
  }

  // get a state of the svg before processing, to compare later.
  const originalFiguresString = cheerio.html(svgFigures);

  svgFigures.each((i, figure) => {
    const cheerioObj = cheerio(figure);
    processFigure(i, cheerioObj, statesJson);
  });

  // write messages on the log if any
  if (warnings.length) {
    const msg = `Some warnings were generated during icon processing. 
    
    🔸 Path: ${iconPath} \n`;

    const formattedWarnings = warnings
      .map((warning) => {
        return `
      - Figure: ${warning.figure}
      - Reason: ${warning.info}
      - Figure Index: ${warning.index}
      `;
      })
      .join("");

    log(msg + formattedWarnings, LOG_PATH, true, "warning");
  }

  // If the original icon string differs from the updated, then it is
  // considered as processed
  const processedFiguresString = cheerio.html(svgFigures);

  const originalAndUpdatedDiffer =
    removeSpacesAndLineBreaks(originalFiguresString) !==
    removeSpacesAndLineBreaks(processedFiguresString);

  return {
    processed: originalAndUpdatedDiffer,
    cheerioSvgFigures: svgFigures,
    usedColors: usedColors,
    size: {
      width: svgWidth,
      height: svgHeight,
    },
  };
};

const processFigure = (
  index: number,
  svgFigure: cheerio.Cheerio,
  statesJson: IconsColorsSchema
): cheerio.Cheerio => {
  const cssClasses = svgFigure.attr("class");
  const colorName = getColorName(index, svgFigure, cssClasses, statesJson);

  if (!colorName) {
    // copy as is
    return svgFigure;
  } else {
    const updatedFigure = updateFigureFillOrStroke(svgFigure, colorName);
    usedColors.push(colorName);
    //remove classes and return
    return updatedFigure.removeClass(cssClasses);
  }
};

const updateFigureFillOrStroke = (
  svgFigure: cheerio.Cheerio,
  colorName: string
): cheerio.Cheerio => {
  const figureType = getFigureType(svgFigure);
  const cssVar = `var(--${colorName})`;
  if (figureType == "path") {
    svgFigure.attr("fill", cssVar);
  } else if (figureType == "stroke") {
    svgFigure.attr("stroke", cssVar);
  } else if (figureType == "both") {
    svgFigure.attr("fill", cssVar);
    svgFigure.attr("stroke", cssVar);
  } else if (!figureType) {
    //it is not fill or stroke
  }

  return svgFigure;
};

const getColorName = (
  index: number,
  svgFigure: cheerio.Cheerio,
  cssClasses: string,
  statesJson: IconsColorsSchema
): string => {
  const figureTagName = svgFigure.get(0).name; /*revisar*/
  const cssPrefix: string = statesJson.multicolor.cssPrefix;
  const cssClassesArray = cssClasses.split(" ");
  const colorClass = cssClassesArray.find((cssClass) =>
    cssClass.startsWith(cssPrefix)
  );

  // check class-name css prefix
  if (!colorClass) {
    warnings.push({
      info: `svg figure not processed, because no css class was found with the provided prefix '${cssPrefix}'. note: This figure will remain unchanged, but it does not break the icon processing.`,
      figure: figureTagName,
      index: index,
    });
    return undefined;
  }

  // class-name css prefix is valid.
  // check if class exists
  const cssClassNameFound = statesJson.multicolor.colors.find((color) => {
    return `${cssPrefix}${color.cssClass}` === colorClass;
  });
  if (!cssClassNameFound) {
    warnings.push({
      info: `svg figure not processed, because a valid css class was found, but it was not found on the color states json. note: This figure will remain unchanged, but it does not break the icon processing.`,
      figure: figureTagName,
      index: index,
    });
    return undefined;
  }

  //remove prefix to return only the color name, not the class
  const colorName = colorClass.substring(cssPrefix.length);
  return colorName;
};

type warningInfo = {
  info: string;
  figure: string;
  index: number;
};
