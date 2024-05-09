import { join, dirname } from "path";
import * as fs from "fs";
import { log } from "../partials-svg/log.js";
import { RED, RESET_COLOR } from "../partials-common/utilities.js";

/**
 * Recursively deletes a directory and its contents.
 * @param {string} directoryPath The path of the directory to delete.
 */
export const deleteDirectory = (directoryPath: string) => {
  if (!fs.existsSync(directoryPath)) {
    // Directory does not exist.
    return;
  }

  fs.readdirSync(directoryPath).forEach((file) => {
    const filePath = join(directoryPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      deleteDirectory(filePath);
    } else {
      fs.unlinkSync(filePath);
    }
  });

  fs.rmdirSync(directoryPath);
};

/**
 * Recursively writes a file and creates necessary directories if they don't exist.
 * @param {string} filePath The path of the file to write.
 * @param {string | Buffer} data The data to write to the file.
 */
export const writeFile = (
  filePath: string,
  data: string,
  LOG_PATH: string
): boolean => {
  try {
    const directory = dirname(filePath);

    // Check if directory exists
    if (!fs.existsSync(directory)) {
      // If directory does not exist, create it recursively.
      fs.mkdirSync(directory, { recursive: true });
    }

    // Write the file
    fs.writeFileSync(filePath, data);
    return true;
    console.log(`File "${filePath}" successfully written.`);
  } catch (error) {
    const msg = `Error writing file "${filePath}`;
    console.error(`${RED} ${msg} ${RESET_COLOR}`);
    log(msg, LOG_PATH, true);
    return false;
  }
};
