import * as fs from "fs";
import path from "path";

import { RED, RESET_COLOR } from "../partials-common/utils.js";
import { validateStatesSchema } from "./color-states-validator.js";
import { getStatesObject } from "./utils.js";
import { DIR_PATH_REGEX } from "../partials-common/utils.js";
import { join, extname } from "path";
import { validateSchemaReturn } from "./color-states-validator.js";
import { log } from "./log.js";
import {
  deleteDirectory,
  createDir,
} from "../partials-common/file-system-utils.js";
import { IconsColorsSchema } from "../partials-common/types.js";

/**
 * @description Validates if required folders paths and states file and schema are valid, as this is required for processing the icons.
 */
export function readyToProcess(
  SRC_PATH: string,
  OUTPUT_PATH: string,
  CONFIG_FILE_PATH: string,
  SHOWCASE_PATH: string,
  LOG_PATH: string
): readyObj {
  const shouldWriteToLog = !!LOG_PATH;
  //clean the log directory first for a fresh log.
  if (shouldWriteToLog) {
    deleteDirectory(LOG_PATH);
  }

  // 1. validate that all the required arguments were provided:
  // --srcDir
  if (!SRC_PATH) {
    const msg = `--srcDir argument was not provided. Please provide the source directory for the icons. ie.: --srcDir=my-icons/`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);
    return {
      ready: false,
      statesJson: null,
    };
  }
  // --outDir
  if (!OUTPUT_PATH) {
    const msg = `--outDir argument was not provided. Please provide the output directory for the icons. ie.: --outDir=generated-icons/`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);
    return {
      ready: false,
      statesJson: null,
    };
  }
  // --configFilePath
  if (!CONFIG_FILE_PATH) {
    const msg = `--configFilePath argument was not provided. Please provide the configuration file, that should provide the required information about colors, categories, and states. ie.: --configFilePath=config/colors-config.json`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);
    return {
      ready: false,
      statesJson: null,
    };
  }
  // --showcaseDir
  if (!SHOWCASE_PATH) {
    const msg = `--showcaseDir argument was not provided. Please provide the showcase directory for the icons. ie.: --showcaseDir=showcase/`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);
    return {
      ready: false,
      statesJson: null,
    };
  }
  // --logDir
  if (!LOG_PATH) {
    const msg = `--logDir argument was not provided. Please provide the log directory. This is where errors will be logged in. ie.: --logDir=log/`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);
    return {
      ready: false,
      statesJson: null,
    };
  }

  // 2. validate SRC_PATH
  //if (!DIR_PATH_REGEX.test(SRC_PATH)) {
  if (!fs.lstatSync(SRC_PATH).isDirectory()) {
    // a better way to validate dir path
    const msg = `Source Directory Error #1: "${SRC_PATH}" is not a valid directory path for the source directory argument (argument number 1).`;

    log(msg, LOG_PATH, shouldWriteToLog);
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  } else if (!fs.existsSync(SRC_PATH)) {
    const msg = `Source Directory Error #2: The source folder ${SRC_PATH} does not exists`;

    log(msg, LOG_PATH, shouldWriteToLog);
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  }

  // 3. validate OUTPUT_PATH
  if (!DIR_PATH_REGEX.test(OUTPUT_PATH)) {
    const msg = `Output Directory Error #1: "${OUTPUT_PATH}" is not a valid directory path for the destination directory argument (argument number 2).`;

    log(msg, LOG_PATH, shouldWriteToLog);
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  }

  // 4-A. validate "color states" filepath and extension
  fs.access(CONFIG_FILE_PATH, fs.constants.F_OK | fs.constants.R_OK, (err) => {
    if (err) {
      const msg = `"Color States" file validation error #1: "${CONFIG_FILE_PATH}" is not a valid file or ${CONFIG_FILE_PATH} does not exists. Please check that argument (argument number 3).`;

      log(msg, LOG_PATH, shouldWriteToLog);
      console.error(`${RED} ${msg} ${RESET_COLOR}`);
    } else {
      // Validate that extension is a.json
      const colorStatesIsJson =
        extname(CONFIG_FILE_PATH).toLowerCase() === ".json";
      if (!colorStatesIsJson) {
        const msg = `"Color States" file validation error #1: the provided color states file "${CONFIG_FILE_PATH}" is not a json file. This file is expected to be a json.`;
        console.error(`${RED} ${msg} ${RESET_COLOR}`);
        log(msg, LOG_PATH, shouldWriteToLog);
      }
    }
  });

  // 4-B. validate states json file
  const statesResult = getStatesObject(CONFIG_FILE_PATH);
  if (!statesResult.valid) {
    const msg = `"Color States" file validation error #2: the provided color states json file ${CONFIG_FILE_PATH}" is not valid. Errors found: ${statesResult.info}`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);
    log(msg, LOG_PATH, shouldWriteToLog);

    return {
      ready: false,
      statesJson: null,
    };
  }

  // 5. states files retrieved, now validate states schema
  const validateSchemaResult: validateSchemaReturn = validateStatesSchema(
    statesResult.statesObject
  );
  if (!validateSchemaResult.isValid) {
    let msgLog = `"Color States" Schema Error #3: color states file ${CONFIG_FILE_PATH} schema is not valid. The following errors have been found: \n\n`;

    const msgConsole = `States Schema Error #3: color states file ${CONFIG_FILE_PATH} schema is not valid. Please, read the log file under ${LOG_PATH} to know what went wrong.`;

    validateSchemaResult.errors.forEach((error) => {
      const errorString = JSON.stringify(error, null, 2);
      msgLog += `${errorString}\n`;
    });

    log(msgLog, LOG_PATH, shouldWriteToLog);
    console.error(`${RED} ${msgConsole} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  }

  // 6. validate SHOWCASE_PATH
  if (!DIR_PATH_REGEX.test(SHOWCASE_PATH)) {
    const msg = `Showcase Directory Error: "${SHOWCASE_PATH}" is not a valid directory path for the showcase directory argument (argument number 4).`;

    log(msg, LOG_PATH, shouldWriteToLog);
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  }

  // 7. clear and create directories for a fresh start
  const outputPath = OUTPUT_PATH;
  deleteDirectory(outputPath);
  createDir(outputPath);

  return {
    ready: true,
    statesJson: statesResult.statesObject,
  };
}

export type readyObj = {
  ready: boolean;
  statesJson: IconsColorsSchema;
};
