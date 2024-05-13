import * as fs from "fs";
import { RED, RESET_COLOR, colorizeJson } from "../partials-common/utils.js";

import { validateStatesSchema } from "./states-validator.js";
import { getStatesObject } from "./utils.js";
import { DIR_PATH_REGEX } from "../partials-common/utils.js";

import { join, extname } from "path";
import { validateSchemaReturn } from "./states-validator.js";
import colorize from "json-colorizer";
import { log } from "./log.js";
import {
  deleteDirectory,
  createDir,
} from "../partials-common/file-system-utils.js";
import { iconsColorsSchema } from "../partials-common/types.js";

/**
 * @description Validates if required folders paths and states file and schema are valid, as this is required for processing the icons.
 */
export function readyToProcess(
  SRC_PATH: string,
  OUTPUT_PATH: string,
  STATES_FILENAME: string,
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
  // subtract 1 because the first argument is the command for running the processor
  // (we only care about configuration arguments provided by the user).

  numberOfArgsProvided -= 2;
  if (numberOfArgsProvided !== 5) {
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
  if (!DIR_PATH_REGEX.test(SRC_PATH)) {
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

  // 4-A. validate color states is a json
  const colorStatesIsJson = extname(STATES_FILENAME).toLowerCase() === ".json";
  if (!colorStatesIsJson) {
    const msg = `State File Validation Error #1: the provided color states file "${STATES_FILENAME}" is not a json file. This file is expected to be a json.`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);
    log(msg, LOG_PATH, shouldWriteToLog);
  }

  // 4-B. validate states json file
  const statesPath = join(SRC_PATH, STATES_FILENAME);
  const statesResult = getStatesObject(statesPath);
  if (!statesResult.valid) {
    const msg = `State File Validation Error #2: the provided color states json file ${STATES_FILENAME}" is not valid. Errors found: ${statesResult.info}`;
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
    let msg = `States Schema Error #3: color states file ${STATES_FILENAME} schema is not valid. The following errors have been found: \n\n`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    validateSchemaResult.errors.forEach((error) => {
      const errorString = JSON.stringify(error, null, 2);

      msg += errorString;
    });

    log(msg, LOG_PATH, shouldWriteToLog);
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
  deleteDirectory(OUTPUT_PATH);
  createDir(OUTPUT_PATH);

  return {
    ready: true,
    statesJson: statesResult.statesObject,
  };
}

export type readyObj = {
  ready: boolean;
  statesJson: iconsColorsSchema;
};
