import { join } from "path";
import * as fs from "fs";

const DIST_DIRECTORY = await process.argv[2];

/**
 * Recursively deletes a directory and its contents.
 * @param {string} directoryPath The path of the directory to delete.
 */
export const deleteDirectoryRecursive = (directoryPath: string) => {
  if (!fs.existsSync(directoryPath)) {
    // Directory does not exist.
    return;
  }

  fs.readdirSync(directoryPath).forEach((file) => {
    const filePath = join(directoryPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      deleteDirectoryRecursive(filePath);
    } else {
      fs.unlinkSync(filePath);
    }
  });

  fs.rmdirSync(directoryPath);
};

deleteDirectoryRecursive(DIST_DIRECTORY);
