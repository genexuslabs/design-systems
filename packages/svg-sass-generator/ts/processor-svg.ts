// libraries
import path from "path";
import cheerio from "cheerio";
// partials-common
import { getIcons } from "./partials-common/get-icons.js";
import { RED, RESET_COLOR } from "./partials-common/utilities.js";
import { getSvgString } from "./partials-common/get-svg-string.js";
// partials-svg
import { processMulticolorFigures } from "./partials-svg/process-multicolor-figures.js";
import { saveSvgOnDisk } from "./partials-svg/utilities.js";
import {
  iconsColorsSchema,
  processedIconInfo,
  colorScheme,
} from "./partials-common/types.js";
import { createMulticolorSvg } from "./partials-svg/create-multicolor-svg.js";
import { createMonochromeSvg } from "./partials-svg/create-monochrome-svg.js";
import { readyToProcess, readyObj } from "./partials-svg/ready-to-process.js";
import { getIconType } from "./partials-svg/get-icon-type.js";
import { log } from "./partials-svg/log.js";

//Import partials or utilities
//Files and Directories
const SRC_DIRECTORY = await process.argv[2];
const OUTPUT_DIRECTORY = await process.argv[3];
const STATES_FILENAME = await process.argv[4];
const LOG_PATH = await process.argv[5];
const numberOfArgsProvided = process.argv.length;
const shouldWriteToLog = !!LOG_PATH;

// 1. Check if is ready to process
const readyObj: readyObj = readyToProcess(
  SRC_DIRECTORY,
  OUTPUT_DIRECTORY,
  STATES_FILENAME,
  LOG_PATH,
  numberOfArgsProvided
);

if (readyObj.ready) {
  //clear

  const iconsPromise = getIcons(SRC_DIRECTORY);
  iconsPromise
    .then((result: string[]) => {
      processIcons(result, readyObj.statesJson);
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
function processIcons(iconsArray: string[], statesJson: iconsColorsSchema) {
  let processedIconsInfo: processedIconInfo[] = [];
  iconsArray.forEach((iconPath) => {
    const pathIsValid = validateIconPath(iconPath);
    if (!pathIsValid) {
      return;
    }
    const svgString = getSvgString(iconPath);
    const svgCheerio = cheerio.load(svgString);
    const iconType = getIconType(svgCheerio, statesJson);

    if (iconType === "multicolor") {
      const svgFiguresResult = processMulticolorFigures(
        svgCheerio,
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
        let lightSvgSavedOnDisk = false;
        if (svgIconLight) {
          lightSvgSavedOnDisk = saveSvgOnDisk(
            svgIconLight,
            iconPath,
            OUTPUT_DIRECTORY,
            "light",
            LOG_PATH
          );
        }
        // Save info for the log
        saveProcessedIconInfo(
          processedIconsInfo,
          lightSvgSavedOnDisk,
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
        let darkSvgSavedOnDisk = false;
        if (svgIconDark) {
          darkSvgSavedOnDisk = saveSvgOnDisk(
            svgIconDark,
            iconPath,
            OUTPUT_DIRECTORY,
            "dark",
            LOG_PATH
          );
        }
        // Save info for the log
        saveProcessedIconInfo(
          processedIconsInfo,
          darkSvgSavedOnDisk,
          iconPath,
          "dark"
        );
      }
    } else if (iconType === "monochrome") {
      // clone cheerio object, to process the unmodified object for the dark version.
      const svgCheerioClone = cheerio.load(svgCheerio.html());

      /* ==================
      MONOCHROME LIGHT
      ================== */
      // Create and get svg

      const svgIconLight = createMonochromeSvg(
        svgCheerio,
        statesJson,
        iconPath,
        "light",
        LOG_PATH,
        STATES_FILENAME
      );

      // Save svg on disk
      let lightSvgSavedOnDisk = false;
      if (svgIconLight.processed) {
        lightSvgSavedOnDisk = saveSvgOnDisk(
          svgIconLight.svgString,
          iconPath,
          OUTPUT_DIRECTORY,
          "light",
          LOG_PATH
        );
      }

      // Save info for the log
      saveProcessedIconInfo(
        processedIconsInfo,
        lightSvgSavedOnDisk,
        iconPath,
        "light"
      );

      /* ==================
      MONOCHROME DARK
      ================== */

      // Create and get svg
      const svgIconDark = createMonochromeSvg(
        svgCheerioClone,
        statesJson,
        iconPath,
        "dark",
        LOG_PATH,
        STATES_FILENAME
      );

      // Save svg on disk
      let darkSvgSavedOnDisk = false;
      if (svgIconDark.processed) {
        darkSvgSavedOnDisk = saveSvgOnDisk(
          svgIconDark.svgString,
          iconPath,
          OUTPUT_DIRECTORY,
          "dark",
          LOG_PATH
        );
      }

      // Save info for the log
      saveProcessedIconInfo(
        processedIconsInfo,
        darkSvgSavedOnDisk,
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
  processedIconsInfo: processedIconInfo[]
): void => {
  const processed: processedIconInfo[] = [];
  const notProcessed: processedIconInfo[] = [];
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
      color scheme: ${processed.colorScheme}
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
      color scheme: ${notProcessed.colorScheme}
    `;
  });
  log(msgNotProcessed, LOG_PATH, shouldWriteToLog, "error");
};

const saveProcessedIconInfo = (
  processedIconsInfo: processedIconInfo[],
  wasSavedOnDisk: boolean,
  iconPath: string,
  colorScheme: colorScheme
): void => {
  processedIconsInfo.push({
    iconPath: iconPath,
    colorScheme: colorScheme,
    processed: wasSavedOnDisk,
  });
};

const validateIconPath = (iconPath: string): boolean => {
  const segments = iconPath.split(path.sep);
  // subtract 1 to exclude the file name
  const numFolders = segments.length - 1;

  if (numFolders > 2) {
    const msg = `Please ensure that every icon.svg file is either directly inside the source folder or within a subfolder of the source folder. Files nested deeper than one level beyond the source folder will not be considered valid. ${
      numFolders - 1
    } folders found in: ${iconPath}`;
    log(msg, LOG_PATH, shouldWriteToLog);
    return false;
  }

  return true;
};
