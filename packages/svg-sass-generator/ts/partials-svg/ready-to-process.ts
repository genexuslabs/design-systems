import * as fs from "fs";
import {
  RED,
  RESET_COLOR,
  colorizeJson,
} from "../partials-common/utilities.js";

import { validateStatesSchema } from "./states-validator.js";
import { getStatesObject, isJsonFileValid } from "./utilities.js";
import { join } from "path";
import { validateSchemaReturn } from "./states-validator.js";
import colorize from "json-colorizer";
import { log } from "./log.js";
import { deleteDirectoryRecursive } from "../partials-common/delete-directory.js";
import { iconsColorsSchema } from "../partials-common/types.js";

const DIR_PATH_REGEX = /^\.\/?[\w-\/]+\/?$/;
const JSON_FILENAME_REGEX = /^(?:\/?(\w+\/)*)(\w+\.json)$/;
/**
 * @description Validates if required folders paths and states file and schema are valid, as this is required for processing the icons.
 */
export function readyToProcess(
  SRC_DIRECTORY: string,
  OUTPUT_DIRECTORY: string,
  STATES_FILENAME: string,
  LOG_PATH: string,
  numberOfArgsProvided: number
): readyObj {
  const shouldWriteToLog = !!LOG_PATH;
  //clean the log directory first for a fresh log.
  if (shouldWriteToLog) {
    deleteDirectoryRecursive(LOG_PATH);
  }

  // 1. check arguments quantity

  // 4 arguments should have been provided:
  // subtract 1 because the first argument is the command for running the processor
  // (we only care about configuration arguments provided by the user).

  numberOfArgsProvided -= 2;
  if (numberOfArgsProvided !== 4) {
    const msg = `Error: 4 arguments are expected, but ${numberOfArgsProvided} were provided. Please provide the required arguments: \n
    1: icons source directory
    2: icons destination directory
    3: color states json file
    4: the directory path for the icons-log.txt file. (only directory, file name should not be included).
    `;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  }

  // 2. validate SRC_DIRECTORY
  if (!DIR_PATH_REGEX.test(SRC_DIRECTORY)) {
    const msg = `Source Directory Error: "${SRC_DIRECTORY}" is not a valid directory path for the source directory argument (argument number 1).`;

    log(msg, LOG_PATH, shouldWriteToLog);
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  } else if (!fs.existsSync(SRC_DIRECTORY)) {
    const msg = `Source Directory Error: The source folder ${SRC_DIRECTORY} does not exists`;

    log(msg, LOG_PATH, shouldWriteToLog);
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  }

  // 3. validate OUTPUT_DIRECTORY
  if (!DIR_PATH_REGEX.test(OUTPUT_DIRECTORY)) {
    const msg = `Output Directory Error: "${OUTPUT_DIRECTORY}" is not a valid directory path for the destination directory argument (argument number 2).`;

    log(msg, LOG_PATH, shouldWriteToLog);
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    return {
      ready: false,
      statesJson: null,
    };
  }

  // 4-A. validate states json filename format
  const statesFileIsValid = isJsonFileValid(STATES_FILENAME);

  // if (!JSON_FILENAME_REGEX.test(STATES_FILENAME)) {
  //   const msg = `States Filename Error: color states json filename is not well formatted. filename received: "${STATES_FILENAME}". (argument number 3)`;

  //   log(msg, LOG_PATH, shouldWriteToLog);
  //   console.error(`${RED} ${msg} ${RESET_COLOR}`);

  //   return {
  //     ready: false,
  //     statesJson: null,
  //   };
  // }

  // 4-B. validate states json file
  const statesPath = join(SRC_DIRECTORY, STATES_FILENAME);
  const statesResult = getStatesObject(statesPath);
  if (!statesResult.valid) {
    const msg = `State File Validation Error: the provided color states json file ${STATES_FILENAME}" is not valid. Errors found: ${statesResult.info}`;
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
    let msg = `States Schema Error: color states file ${STATES_FILENAME} schema is not valid. The following errors have been found: \n\n`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);

    validateSchemaResult.errors.forEach((error) => {
      const errorString = JSON.stringify(error, null, 2);
      console.log(colorize(errorString, { colors: colorizeJson }));

      msg += errorString;
    });

    log(msg, LOG_PATH, shouldWriteToLog);
    return {
      ready: false,
      statesJson: null,
    };
  }

  // 6. clear and create output directory for a fresh start
  deleteDirectoryRecursive(OUTPUT_DIRECTORY);
  if (!fs.existsSync(OUTPUT_DIRECTORY)) {
    fs.mkdirSync(OUTPUT_DIRECTORY);
  }

  return {
    ready: true,
    statesJson: statesResult.statesObject,
  };
}

export type readyObj = {
  ready: boolean;
  statesJson: iconsColorsSchema;
};
