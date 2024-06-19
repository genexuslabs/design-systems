import path from "path";
import * as fs from "fs";

const DIST_PATH = "dist";
const SHOWCASE_ICONS_PATH = "showcase/icons/";
const SRC_ASSETS_ICONS_PATH = "src/assets/icons/";
const SRC_ICONS_GENERATED_PATH = "src/icons/_generated/";

const deleteDirectoryRecursive = directoryPath => {
  if (fs.existsSync(directoryPath)) {
    fs.readdirSync(directoryPath).forEach(file => {
      const currentPath = path.join(directoryPath, file);

      if (fs.lstatSync(currentPath).isDirectory()) {
        // Recursively delete a subdirectory
        deleteDirectoryRecursive(currentPath);
      } else {
        // Delete a file
        fs.unlinkSync(currentPath);
      }
    });

    // Delete the now-empty directory
    fs.rmdirSync(directoryPath);
  }
};

deleteDirectoryRecursive(DIST_PATH);
deleteDirectoryRecursive(SHOWCASE_ICONS_PATH);
deleteDirectoryRecursive(SRC_ASSETS_ICONS_PATH);
deleteDirectoryRecursive(SRC_ICONS_GENERATED_PATH);
