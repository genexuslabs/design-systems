// libraries
import path from "path";
import cheerio from "cheerio";
// partials-common
import { getIcons } from "./partials-common/get-icons.js";
import { RED, RESET_COLOR } from "./partials-common/utils.js";
import { getSvgString } from "./partials-common/utils.js";
import { savedOnDisk } from "./partials-common/types.js";

// partials-svg
import { processMulticolorFigures } from "./partials-svg/process-multicolor-figures.js";
import { saveSvgOnDisk } from "./partials-svg/utils.js";
import {
  iconsColorsSchema,
  processedIconInfo,
  colorScheme,
  multicolorSchema,
} from "./partials-common/types.js";
import { createMulticolorSvg } from "./partials-svg/create-multicolor-svg.js";
import { createMonochromeSvg } from "./partials-svg/create-monochrome-svg.js";
import { readyToProcess, readyObj } from "./partials-svg/ready-to-process.js";
import { getIconType } from "./partials-svg/get-icon-type.js";
import { log } from "./partials-svg/log.js";
// showcase
import { savedIcons, pushSavedIcon } from "./showcase-v2.js";

//Import partials or utils
//Files and Directories
const SRC_PATH = await process.argv[2];
const OUTPUT_PATH = await process.argv[3];
const STATES_FILENAME = await process.argv[4];
const LOG_PATH = await process.argv[5];
const numberOfArgsProvided = process.argv.length;
const shouldWriteToLog = !!LOG_PATH;
let multiColorStates: string[];

// for the showcase (showcase.js)
const savedIconsOnDisk: savedIcons = {
  multicolor: {},
  monochrome: {},
};

// 1. Check if is ready to process
const readyObj: readyObj = readyToProcess(
  SRC_PATH,
  OUTPUT_PATH,
  STATES_FILENAME,
  LOG_PATH,
  numberOfArgsProvided
);

if (readyObj.ready) {
  //clear

  const iconsPromise = getIcons(SRC_PATH);
  iconsPromise
    .then((result: string[]) => {
      processIcons(result, readyObj.statesJson);
      console.log("savedIconsOnDisk", savedIconsOnDisk);
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
        let lightMultiColorSvgSavedOnDisk: savedOnDisk;
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
            "light",
            statesJson
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
        let darkMultiColorSvgSavedOnDisk: savedOnDisk;
        if (svgIconDark) {
          darkMultiColorSvgSavedOnDisk = saveSvgOnDisk(
            svgIconDark,
            iconPath,
            SRC_PATH,
            OUTPUT_PATH,
            "dark",
            LOG_PATH
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
      const svgCheerioClone = cheerio.load(svgCheerio.html());

      /* ==================
      MONOCHROME LIGHT
      ================== */
      // Create and get svg

      const svgIconLight = createMonochromeSvg(
        svgCheerio,
        statesJson,
        iconPath,
        SRC_PATH,
        "light",
        LOG_PATH,
        STATES_FILENAME
      );

      // Save svg on disk
      let lightMonoChromeSvgSavedOnDisk: savedOnDisk;
      if (svgIconLight.processed) {
        lightMonoChromeSvgSavedOnDisk = saveSvgOnDisk(
          svgIconLight.svgString,
          iconPath,
          SRC_PATH,
          OUTPUT_PATH,
          "light",
          LOG_PATH
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
        svgCheerioClone,
        statesJson,
        iconPath,
        SRC_PATH,
        "dark",
        LOG_PATH,
        STATES_FILENAME
      );

      // Save svg on disk
      let darkMonoChromeSvgSavedOnDisk: savedOnDisk;
      if (svgIconDark.processed) {
        darkMonoChromeSvgSavedOnDisk = saveSvgOnDisk(
          svgIconDark.svgString,
          iconPath,
          SRC_PATH,
          OUTPUT_PATH,
          "dark",
          LOG_PATH
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
