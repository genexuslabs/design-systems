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
*/

const SVG_SASS_GENERATOR_GENERATED_FOLDER = "_generated";
const ASSETS_SRC = "./src/assets/";
const ASSETS_DIST = "./dist/assets/";
const ASSETS_CSS = "./dist/bundles/css/";
const ASSETS_FONTS = "./dist/assets/fonts/";
const GENERATED_ICONS_PATH = path.join(
  ASSETS_SRC,
  `icons/${SVG_SASS_GENERATOR_GENERATED_FOLDER}`
);
const DIST_ICONS_PATH = path.join(ASSETS_DIST, "icons");
const SHOWCASE_PATH = "showcase/";

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

console.log("copy-task.js copied successfully");
