import path from "path";
import * as fs from "fs";

/*
Steps:

Step 1: Copy 'src/assets/' to 'dist/assets/', except from '_generated' directory
(we don't want '_generated' in the /dist, only the folders inside '_generated')

Step 2: Copy 'src/assets/icons/_generated/*' to 'dist/assets/icons/'

Step 3: Copy generated icons to 'showcase/assets/icons/' as well so that the showcase folder
can be distributed with its own icons, independently of 'dist/assets/icons'

Step 4: Copy "dist/css/" to 'showcase/css/' as well so that the showcase folder
can be distributed with its own css/, independently of 'dist/css/'

Step 5: Copy "dist/assets/fonts/" to 'showcase/assets/fonts/' as well so that the showcase folder
can be distributed with its own fonts/, independently of 'dist/assets/fonts/'

Step 6: Copy 'dist/assets/MERCURY_ASSETS.js' to 'showcase/assets/scripts/MERCURY_ASSETS.js' 

Note: /dist/assets-manager.js is also required on "./showcase/assets/scripts/", but it needs "./assets/MERCURY_ASSETS"
to be updated to "./MERCURY_ASSETS.js", so this file has to be manually copied every time the source changes:
/src/assets-manager.ts. This file is not expected to be updated often anyway.
*/

const SVG_SASS_GENERATOR_GENERATED_FOLDER = "_generated";
const ASSETS_SRC = "./src/assets/";
const ASSETS_DIST = "./dist/assets/";
const ASSETS_CSS = "./dist/css/";
const ASSETS_FONTS = "./dist/assets/fonts/";
const GENERATED_ICONS_PATH = path.join(
  ASSETS_SRC,
  `icons/${SVG_SASS_GENERATOR_GENERATED_FOLDER}`
);
const DIST_ICONS_PATH = path.join(ASSETS_DIST, "icons");
const SHOWCASE_PATH = "showcase/";
const ASSETS_MANAGER = "assets-manager.js";
const MERCURY_ASSETS = "MERCURY_ASSETS.js";

// Copy Folders
const copyFolderSync = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    if (item === SVG_SASS_GENERATOR_GENERATED_FOLDER) {
      console.log(`Skipping folder: ${sourcePath}`);
      return; // Skip the folder
    }

    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Copy folder recursively
      copyFolderSync(sourcePath, targetPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
};

// Copy File
const copyFileToFolder = (sourceFile, targetFolder) => {
  // Check if the source file exists
  if (!fs.existsSync(sourceFile)) {
    console.error(`Source file does not exist: ${sourceFile}`);
    return;
  }

  // Check if the source path is actually a file
  if (!fs.lstatSync(sourceFile).isFile()) {
    console.error(`Source path is not a file: ${sourceFile}`);
    return;
  }

  // Check if the target folder exists; if not, create it
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder, { recursive: true });
  }

  // Get the base name of the source file to use in the target path
  const fileName = path.basename(sourceFile);
  const targetPath = path.join(targetFolder, fileName);

  // Copy the file
  fs.copyFileSync(sourceFile, targetPath);
  console.log(`File copied from ${sourceFile} to ${targetPath}`);
};

// Step 1:
copyFolderSync(ASSETS_SRC, ASSETS_DIST);

// Step 2
copyFolderSync(GENERATED_ICONS_PATH, DIST_ICONS_PATH);

// Step 3
copyFolderSync(
  GENERATED_ICONS_PATH,
  path.join(SHOWCASE_PATH, "assets", "icons")
);

// Step 4
copyFolderSync(ASSETS_CSS, path.join(SHOWCASE_PATH, "css/"));

// Step 5
copyFolderSync(ASSETS_FONTS, path.join(SHOWCASE_PATH, "assets", "fonts"));

// Step 6
copyFileToFolder(
  path.join("dist", "assets", MERCURY_ASSETS),
  path.join(SHOWCASE_PATH, "assets", "scripts")
);

console.log("copy-task.js copied successfully");
