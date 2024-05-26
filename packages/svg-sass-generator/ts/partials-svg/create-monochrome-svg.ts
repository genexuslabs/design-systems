// libraries
import cheerio from "cheerio";
import { optimize } from "svgo";
// partials svg
import {
  SVG_FIGURES,
  getPathInfo,
  getFigureType,
  removeSpacesAndLineBreaks,
} from "./utils.js";
// partials common
import {
  ColorScheme,
  PathInfo,
  IconsColorsSchema,
  MonochromeColor,
  MonochromeIconCategory,
  MonochromeIconCategoryColors,
  MonochromeIconResult,
  IconTypeMap,
  MonochromeColorsMap,
  ElementStates,
} from "../partials-common/types.js";

import { log } from "./log.js";

let warnings: warningInfo[] = [];
let colorSchemeValue: ColorScheme;
let monochromeColors: MonochromeColor[];
let monochromeIconsCategories: MonochromeIconCategory[];
let pathInfo: PathInfo;
let CSS_VAR_NAME = "--color";
let SVG_ID = "icon-def";

export const createMonochromeSvg = (
  svgSourceCheerio: cheerio.Root,
  statesJson: IconsColorsSchema,
  iconPath: string,
  srcPath: string,
  colorScheme: ColorScheme,
  LOG_PATH: string,
  STATES_FILENAME: string,
  monochromeColorsMap: MonochromeColorsMap
): MonochromeIconResult => {
  const svg = svgSourceCheerio("svg");
  const svgWidth = svg.attr("width");
  const svgHeight = svg.attr("height");
  const svgFigures = svgSourceCheerio(SVG_FIGURES.join(","));

  warnings = []; //clear warnings array from the prev. icon
  iconPath = iconPath;
  statesJson = statesJson;
  colorSchemeValue = colorScheme;
  monochromeColors = statesJson.monochrome.colors;
  monochromeIconsCategories = statesJson.monochrome.iconsCategories;
  pathInfo = getPathInfo(srcPath, iconPath);
  LOG_PATH = LOG_PATH;

  // check width and height
  if (!svgWidth || !svgHeight) {
    const msg = `
svg element was provided without width or/and height. This attributes are required. This icon will be ignored. \n
  category: ${pathInfo.categoryFolderName}
  icon type: monochrome,
  scheme: ${colorScheme}
  icon: ${pathInfo.fileName}\n`;
    log(msg, LOG_PATH);
    return {
      processed: false,
      svgString: undefined,
    };
  }

  // check if category of icon exist on the states json
  const iconCategoryIndex = monochromeIconsCategories.findIndex(
    (iconCategory) => {
      return iconCategory.folder === pathInfo.categoryFolderName;
    }
  );

  if (iconCategoryIndex === -1) {
    const msg = `
Icon folder was not found on "${STATES_FILENAME} on 'monochrome.iconsCategories' ". The icon folder name is expected to be the same as the icon svg parent folder name. This icon will be ignored. \n
  category (folder) not found: ${pathInfo.categoryFolderName}
  icon type: monochrome,
  scheme: ${colorScheme}
  icon: ${pathInfo.fileName}\n`;
    log(msg, LOG_PATH);
    return {
      processed: false,
      svgString: undefined,
    };
  }

  // get a state of the svg before processing, to compare later.
  const originalFiguresString = cheerio.html(svgFigures);

  // icon category exist on states json. Process icon figures
  svgFigures.each((index, figure) => {
    const figureCheerio = cheerio(figure);
    const figureTagName = figureCheerio.get(0).name;
    const figureUpdated = setCssVarName(index, figureCheerio);
    if (!figureUpdated) {
      warnings.push({
        info: `Figure was not updated because it does not has a fill or stroke, hence no css variable was added to this figure. This does not breaks the process. The rest of the figures will try to be processed`,
        figure: figureTagName,
        index: index,
      });
    }
    //clear css class
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

  // If the original icon string differs from the updated, then it considered as processed
  const processedFiguresString = cheerio.html(svgFigures);

  const originalAndUpdatedDiffer =
    removeSpacesAndLineBreaks(originalFiguresString) !==
    removeSpacesAndLineBreaks(processedFiguresString);

  let createdSvg: string = undefined;

  if (originalAndUpdatedDiffer) {
    // if some of the figures were updated, continue with the svg processing. Otherwise return the result now. No need to keep processing.
    createdSvg = createStylesViewsUses(
      processedFiguresString,
      iconCategoryIndex,
      svgWidth,
      svgHeight,
      monochromeColorsMap
    );
  } else {
    return {
      processed: false,
      svgString: cheerio.html(svgFigures),
    };
  }

  if (createdSvg) {
    const optimizedSvg = optimize(createdSvg, {
      multipass: true,
      plugins: ["inlineStyles"],
    }).data;

    return {
      processed: true,
      svgString: optimizedSvg,
    };
  }
};

const createStylesViewsUses = (
  svgFiguresString: string,
  iconCategoryIndex: number,
  svgWidth: string,
  svgHeight: string,
  monochromeColorsMap: MonochromeColorsMap
): string => {
  let viewsUses: string = ``;
  const width = parseFloat(svgWidth);
  const height = parseFloat(svgHeight);

  const iconCategoryColors: MonochromeIconCategoryColors =
    monochromeIconsCategories[iconCategoryIndex].colors;

  let i: number = 0;
  Object.entries(iconCategoryColors).forEach((color): void => {
    const x = i * width;
    const colorName = color[0];
    const colorApplies = color[1];
    if (colorApplies) {
      const colorStates = getColorStates(colorName, monochromeColorsMap);
      console.log("colorStates", colorStates);
      // console.log("colorStates", colorStates);
      // view and use
      // viewsUses += `<view id="${color}" viewBox="${x} 0 ${width} ${height}" />
      //   <use
      //     href="#${SVG_ID}"
      //     x="${x}"
      //     y="0"
      //     style="${CSS_VAR_NAME}:${colorValue}"
      //   />
      //   `;
      // i++;
    }
  });

  Object.entries(iconCategoryColors).forEach(([color, isEnabled]): void => {
    // if (isEnabled) {
    //   const x = i * width;
    //   const colorValue = getColorValue(color);
    //   // view and use
    //   viewsUses += `<view id="${color}" viewBox="${x} 0 ${width} ${height}" />
    //   <use
    //     href="#${SVG_ID}"
    //     x="${x}"
    //     y="0"
    //     style="${CSS_VAR_NAME}:${colorValue}"
    //   />
    //   `;
    //   i++;
    // }
  });

  return `
  <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" data-scheme="${IconTypeMap.monochrome}">
    <defs>
      <g id="icon-def">
          ${svgFiguresString}
      </g>
    </defs>
    ${viewsUses}
  </svg>`;
};

const getColorStates = (
  colorName: string,
  monochromeColorsMap: MonochromeColorsMap
): ElementStates => {
  const colorIndex = monochromeColorsMap.get(colorName);
  if (colorIndex) {
    return monochromeColors[colorIndex].states;
  }
  return null;
};

const setCssVarName = (
  i: number,
  svgFigure: cheerio.Cheerio
): cheerio.Cheerio => {
  const cssVar = `var(${CSS_VAR_NAME})`;
  const figureType = getFigureType(svgFigure);
  if (figureType == "both") {
    svgFigure.attr("fill", cssVar);
    svgFigure.attr("stroke", cssVar);
  } else if (figureType == "path") {
    svgFigure.attr("fill", cssVar);
  } else if (figureType == "stroke") {
    svgFigure.attr("stroke", cssVar);
    // WA to prevent fill black
    svgFigure.attr("fill", "transparent");
  } else if (!figureType) {
    //it is not fill or stroke
    return undefined;
  }
  return svgFigure;
};

type warningInfo = {
  info: string;
  figure: string;
  index: number;
};
