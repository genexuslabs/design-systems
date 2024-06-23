import path from "path";
// libraries
import cheerio from "cheerio";
// partials-common
import { getIcons } from "./partials-common/get-icons.js";
import { RED, RESET_COLOR, getSvgString } from "./partials-common/utils.js";
import { SavedOnDisk } from "./partials-common/types.js";
// partials-svg
import { processMulticolorFigures } from "./partials-svg/process-multicolor-figures.js";
import { saveSvgOnDisk } from "./partials-svg/utils.js";
import {
  IconsColorsSchema,
  ProcessedIconInfo,
  ColorScheme,
  MonochromeColorsMap,
  MonochromeCategoriesMap,
} from "./partials-common/types.js";
import { createMulticolorSvg } from "./partials-svg/create-multicolor-svg.js";
import { createMonochromeSvg } from "./partials-svg/create-monochrome-svg.js";
import { readyToProcess, readyObj } from "./partials-svg/ready-to-process.js";
import { getIconType } from "./partials-svg/get-icon-type.js";
import { log } from "./partials-svg/log.js";
// showcase
import { savedIcons, pushSavedIcon, generateShowcase } from "./showcase.js";
// icons object
import { generateIconsObject } from "./processor-object.js";

//Files and Directories

const SRC_PATH = await process.argv[2];
const OUTPUT_PATH = await process.argv[3];
const COLOR_STATES_PATH = await process.argv[4];
const SHOWCASE_PATH = await process.argv[5];
const LOG_PATH = await process.argv[6];
const ICONS_OBJECT_NAME = await process.argv[7];

// Optional Base URL for the showcase
const showcaseBaseUrl = path.relative(SHOWCASE_PATH, OUTPUT_PATH) + path.sep;

const SHOWCASE_BASE_HREF = (await process.argv[7]) || showcaseBaseUrl;

const numberOfArgsProvided = process.argv.length;
const shouldWriteToLog = !!LOG_PATH;

// for the showcase (showcase.js)
const savedIconsOnDisk: savedIcons = {
  multicolor: {},
  monochrome: {},
};

// 1. Check if is ready to process
const readyObj: readyObj = readyToProcess(
  SRC_PATH,
  OUTPUT_PATH,
  COLOR_STATES_PATH,
  SHOWCASE_PATH,
  LOG_PATH,
  ICONS_OBJECT_NAME,
  numberOfArgsProvided
);

if (readyObj.ready) {
  const iconsPromise = getIcons(SRC_PATH);
  iconsPromise
    .then((iconsResult: string[]) => {
      // 1. Create monochrome maps for quickly access when creating the showcase
      // colors map
      const monochromeColorsMap: MonochromeColorsMap =
        createMonochromeColorsMap(readyObj.statesJson);
      // categories map
      const monochromeCategoriesMap: MonochromeCategoriesMap =
        createMonochromeCategoriesMap(readyObj.statesJson);

      // 2. Process icons (the important stuff!💥)
      processIcons(iconsResult, readyObj.statesJson, monochromeColorsMap);

      // 3. Generate showcase (nice feature to have)
      generateShowcase(
        savedIconsOnDisk,
        OUTPUT_PATH,
        SHOWCASE_PATH,
        LOG_PATH,
        readyObj.statesJson,
        monochromeColorsMap,
        monochromeCategoriesMap,
        SHOWCASE_BASE_HREF
      );
      // 4. Generate icons object
      if (ICONS_OBJECT_NAME) {
        generateIconsObject(
          iconsResult,
          ICONS_OBJECT_NAME,
          readyObj.statesJson,
          monochromeColorsMap,
          monochromeCategoriesMap
        );
      }
    })
    .catch((error) => {
      const msg = `There was an error processing the icons. error: ${error}.`;
      log(msg, LOG_PATH, shouldWriteToLog);
      throw new Error(`${RED} ${msg} ${RESET_COLOR}`);
    });
}

/**
 * @description: it processes the icons, meaning it will create the new svg version for each icon.
 * @param iconsArray: an array strings, where each string represents the icon path.
 */
function processIcons(
  iconsArray: string[],
  statesJson: IconsColorsSchema,
  monochromeColorsMap: MonochromeColorsMap
) {
  let processedIconsInfo: ProcessedIconInfo[] = [];
  iconsArray.forEach((iconPath) => {
    const svgString = getSvgString(iconPath);
    const svgSourceCheerio = cheerio.load(svgString);
    const iconType = getIconType(svgSourceCheerio, statesJson);

    if (iconType === "multicolor") {
      const svgFiguresResult = processMulticolorFigures(
        svgSourceCheerio,
        statesJson,
        iconPath,
        LOG_PATH
      );
      if (svgFiguresResult.processed) {
        /* ==================
        MULTICOLOR LIGHT
        ================== */
        // Create and get svg
        const svgIconLight = createMulticolorSvg(
          svgFiguresResult,
          statesJson,
          "light"
        );
        // Save svg on disk
        let lightMultiColorSvgSavedOnDisk: SavedOnDisk;
        if (svgIconLight) {
          lightMultiColorSvgSavedOnDisk = saveSvgOnDisk(
            svgIconLight,
            iconPath,
            SRC_PATH,
            OUTPUT_PATH,
            "light",
            LOG_PATH
          );

          // Save icon for the showcase
          pushSavedIcon(
            savedIconsOnDisk,
            lightMultiColorSvgSavedOnDisk.svgFilePath,
            "multicolor",
            lightMultiColorSvgSavedOnDisk.category,
            "light"
          );
        }
        // Save info for the log
        saveProcessedIconInfo(
          processedIconsInfo,
          lightMultiColorSvgSavedOnDisk?.saved,
          iconPath,
          "light"
        );

        /* ==================
        MULTICOLOR DARK
        ================== */
        // Create and get svg
        const svgIconDark = createMulticolorSvg(
          svgFiguresResult,
          statesJson,
          "dark"
        );
        // Save svg on disk
        let darkMultiColorSvgSavedOnDisk: SavedOnDisk;
        if (svgIconDark) {
          darkMultiColorSvgSavedOnDisk = saveSvgOnDisk(
            svgIconDark,
            iconPath,
            SRC_PATH,
            OUTPUT_PATH,
            "dark",
            LOG_PATH
          );
          // Save icon for the showcase
          pushSavedIcon(
            savedIconsOnDisk,
            darkMultiColorSvgSavedOnDisk.svgFilePath,
            "multicolor",
            darkMultiColorSvgSavedOnDisk.category,
            "dark"
          );
        }

        // Save info for the log
        saveProcessedIconInfo(
          processedIconsInfo,
          darkMultiColorSvgSavedOnDisk?.saved,
          iconPath,
          "dark"
        );
      }
    } else if (iconType === "monochrome") {
      // clone cheerio object, to process the unmodified object for the dark version.
      const svgSourceCheerioClone = cheerio.load(svgSourceCheerio.html());

      /* ==================
      MONOCHROME LIGHT
      ================== */
      // Create and get svg

      const svgIconLight = createMonochromeSvg(
        svgSourceCheerio,
        statesJson,
        iconPath,
        SRC_PATH,
        "light",
        LOG_PATH,
        COLOR_STATES_PATH,
        monochromeColorsMap
      );

      // Save svg on disk
      let lightMonoChromeSvgSavedOnDisk: SavedOnDisk;

      if (svgIconLight.processed) {
        lightMonoChromeSvgSavedOnDisk = saveSvgOnDisk(
          svgIconLight.svgString,
          iconPath,
          SRC_PATH,
          OUTPUT_PATH,
          "light",
          LOG_PATH
        );
        // Save icon for the showcase
        pushSavedIcon(
          savedIconsOnDisk,
          lightMonoChromeSvgSavedOnDisk.svgFilePath,
          "monochrome",
          lightMonoChromeSvgSavedOnDisk.category,
          "light"
        );
      }

      // Save info for the log
      saveProcessedIconInfo(
        processedIconsInfo,
        lightMonoChromeSvgSavedOnDisk?.saved,
        iconPath,
        "light"
      );

      /* ==================
      MONOCHROME DARK
      ================== */

      // Create and get svg
      const svgIconDark = createMonochromeSvg(
        svgSourceCheerioClone,
        statesJson,
        iconPath,
        SRC_PATH,
        "dark",
        LOG_PATH,
        COLOR_STATES_PATH,
        monochromeColorsMap
      );

      // Save svg on disk
      let darkMonoChromeSvgSavedOnDisk: SavedOnDisk;
      if (svgIconDark.processed) {
        darkMonoChromeSvgSavedOnDisk = saveSvgOnDisk(
          svgIconDark.svgString,
          iconPath,
          SRC_PATH,
          OUTPUT_PATH,
          "dark",
          LOG_PATH
        );
        // Save icon for the showcase
        pushSavedIcon(
          savedIconsOnDisk,
          darkMonoChromeSvgSavedOnDisk.svgFilePath,
          "monochrome",
          darkMonoChromeSvgSavedOnDisk.category,
          "dark"
        );
      }

      // Save info for the log
      saveProcessedIconInfo(
        processedIconsInfo,
        darkMonoChromeSvgSavedOnDisk?.saved,
        iconPath,
        "dark"
      );
    } else if (iconType === undefined) {
      // log info
    }
  });

  logProcessedIconsInfo(processedIconsInfo);
}

const logProcessedIconsInfo = (
  processedIconsInfo: ProcessedIconInfo[]
): void => {
  const processed: ProcessedIconInfo[] = [];
  const notProcessed: ProcessedIconInfo[] = [];
  processedIconsInfo.forEach((processedIcon) => {
    if (processedIcon.processed) {
      processed.push(processedIcon);
    } else {
      notProcessed.push(processedIcon);
    }
  });

  // log processed
  let msgProcessed = `
  ================================================
  ${processed.length} svg's where successfully processed 
  ================================================
  Details:
  `;
  processed.forEach((processed) => {
    msgProcessed += `
      icon path: ${processed.iconPath} 
      color scheme: ${processed.ColorScheme}
    `;
  });
  log(msgProcessed, LOG_PATH, shouldWriteToLog, "success");

  // log not processed

  let msgNotProcessed = `
  ================================================
  ${notProcessed.length} svg's failed and where not processed
  ================================================
  Details:
  `;
  notProcessed.forEach((notProcessed) => {
    msgNotProcessed += `
      icon path: ${notProcessed.iconPath} 
      color scheme: ${notProcessed.ColorScheme}
    `;
  });
  log(msgNotProcessed, LOG_PATH, shouldWriteToLog, "error");
};

const saveProcessedIconInfo = (
  processedIconsInfo: ProcessedIconInfo[],
  wasSavedOnDisk: boolean,
  iconPath: string,
  colorScheme: ColorScheme
): void => {
  processedIconsInfo.push({
    iconPath: iconPath,
    ColorScheme: colorScheme,
    processed: wasSavedOnDisk,
  });
};

const createMonochromeColorsMap = (
  statesJson: IconsColorsSchema
): MonochromeColorsMap => {
  const monochromeColorsMap: MonochromeColorsMap = new Map<string, number>();
  statesJson.monochrome.colors.forEach((color, i) => {
    monochromeColorsMap.set(color.name, i);
  });
  return monochromeColorsMap;
};

const createMonochromeCategoriesMap = (
  statesJson: IconsColorsSchema
): MonochromeCategoriesMap => {
  const monochromeCategoriesMap: MonochromeCategoriesMap = new Map<
    string,
    number
  >();
  statesJson.monochrome.iconsCategories.forEach((category, i) => {
    monochromeCategoriesMap.set(category.folder, i);
  });
  return monochromeCategoriesMap;
};
