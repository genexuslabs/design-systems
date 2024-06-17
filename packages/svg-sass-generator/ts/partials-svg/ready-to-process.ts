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
  COLOR_STATES_PATH: string,
  SHOWCASE_PATH: string,
  LOG_PATH: string,
  numberOfArgsProvided: number
): readyObj {
  const shouldWriteToLog = !!LOG_PATH;
  //clean the log directory first for a fresh log.
  if (shouldWriteToLog) {
    deleteDirectory(LOG_PATH);
  }

  // 1. check arguments quantity

  // 5 arguments should have been provided:
  // subtract 2 because the first argument is node,
  // and the second argument is the command for running the processor.
  // (we only care about configuration arguments provided by the user).

  numberOfArgsProvided -= 2;
  if (numberOfArgsProvided < 5) {
    const msg = `Error: 5 arguments are expected, but ${numberOfArgsProvided} were provided. Please provide the required arguments: \n
    1: icons source directory
    2: icons destination directory
    3: color states json file
    4: icons showcase directory
    5: the directory path for the icons-log.txt file. (only directory, file name should not be included).
    `;
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
  fs.access(COLOR_STATES_PATH, fs.constants.F_OK | fs.constants.R_OK, (err) => {
    if (err) {
      const msg = `"Color States" file validation error #1: "${COLOR_STATES_PATH}" is not a valid file or ${COLOR_STATES_PATH} does not exists. Please check that argument (argument number 3).`;

      log(msg, LOG_PATH, shouldWriteToLog);
      console.error(`${RED} ${msg} ${RESET_COLOR}`);
    } else {
      // Validate that extension is a.json
      const colorStatesIsJson =
        extname(COLOR_STATES_PATH).toLowerCase() === ".json";
      if (!colorStatesIsJson) {
        const msg = `"Color States" file validation error #1: the provided color states file "${COLOR_STATES_PATH}" is not a json file. This file is expected to be a json.`;
        console.error(`${RED} ${msg} ${RESET_COLOR}`);
        log(msg, LOG_PATH, shouldWriteToLog);
      }
    }
  });

  // 4-B. validate states json file
  const statesResult = getStatesObject(COLOR_STATES_PATH);
  if (!statesResult.valid) {
    const msg = `"Color States" file validation error #2: the provided color states json file ${COLOR_STATES_PATH}" is not valid. Errors found: ${statesResult.info}`;
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
    let msgLog = `"Color States" Schema Error #3: color states file ${COLOR_STATES_PATH} schema is not valid. The following errors have been found: \n\n`;

    const msgConsole = `States Schema Error #3: color states file ${COLOR_STATES_PATH} schema is not valid. Please, read the log file under ${LOG_PATH} to know what went wrong.`;

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
