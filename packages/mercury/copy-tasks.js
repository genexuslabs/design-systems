import path from "path";
import * as fs from "fs";

/*
Steps:

- - - - - - - - - - - - - 
Copy to /DIST
- - - - - - - - - - - - - 

Step 1: Copy 'src/assets/', except from '_generated' directory
(we don't want '_generated' in the /dist, only the folders inside '_generated').
Step 2: Copy 'src/assets/icons/_generated/*'

- - - - - - - - - - - - - 
Copy to /showcase 
- - - - - - - - - - - - - 
(all required files should be copied to /showcase, so that the showcase can be
distributed with absolute independence of /dist).

Step 3: Copy generated icons
Step 4: Copy 'dist/bundles/css/all.css'
Step 5: Copy 'dist/assets/fonts/'
Step 6: Copy 'dist/assets-manager.js' 
Step 7: Copy 'dist/bundles.js' 
Step 8: Copy 'dist/assets/MERCURY_ASSETS.js' 
*/

const ASSETS_MANAGER_JS = "assets-manager.js";
const BUNDLES_JS = "bundles.js";
const MERCURY_ASSETS_JS = "MERCURY_ASSETS.js";

const SVG_SASS_GENERATOR_GENERATED_FOLDER = "_generated";
const SRC_ASSETS_DIR = "./src/assets/";
const GENERATED_ICONS_DIR = path.join(
  SRC_ASSETS_DIR,
  `icons/${SVG_SASS_GENERATOR_GENERATED_FOLDER}`
);

const DIST_ASSETS_DIR = "./dist/assets/";
const DIST_BUNDLES_CSS_DIR = "./dist/bundles/css/";
const DIST_FONTS_DIR = "./dist/assets/fonts/";
const DIST_ICONS_DIR = path.join(DIST_ASSETS_DIR, "icons");

const SHOWCASE_PATH = "showcase/";
const SHOWCASE_SCRIPTS_DIR = path.join(SHOWCASE_PATH, "assets/scripts");
const SHOWCASE_ICONS_DIR = path.join(SHOWCASE_PATH, "assets/icons");
const SHOWCASE_FONTS_DIR = path.join(SHOWCASE_PATH, "assets/fonts");

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
copyFolderSync(SRC_ASSETS_DIR, DIST_ASSETS_DIR);

// Step 2
copyFolderSync(GENERATED_ICONS_DIR, DIST_ICONS_DIR);

// Step 3
copyFolderSync(GENERATED_ICONS_DIR, path.join(SHOWCASE_ICONS_DIR));

// Step 4
copyFileToFolder(path.join(DIST_BUNDLES_CSS_DIR, "all.css"), SHOWCASE_PATH);

// Step 5
copyFolderSync(DIST_FONTS_DIR, SHOWCASE_FONTS_DIR);

// Step 6
copyFileToFolder(path.join("dist/", ASSETS_MANAGER_JS), SHOWCASE_SCRIPTS_DIR);

// Step 7
copyFileToFolder(path.join("dist/", BUNDLES_JS), SHOWCASE_SCRIPTS_DIR);

// Step 8
copyFileToFolder(
  path.join(DIST_ASSETS_DIR, MERCURY_ASSETS_JS),
  path.join(SHOWCASE_SCRIPTS_DIR, "assets")
);

console.log("copy-tasks.js copied successfully");
