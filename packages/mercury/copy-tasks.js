import path from "path";
import * as fs from "fs";

/*
Steps:

1) Step 1: Copy everything inside './src/assets' to './dist/assets', except '_generated'
directory (we don't want '_generated' in the /dist, only the folders inside '_generated')

2) Step 2: Copy the icons inside './src/assets/icons/_generated' to './dist/assets/icons/'
*/

const assetsSrc = "./src/assets/";
const assetsDist = "./dist/assets/";
const excludeFolder = "_generated";
const generatedIconsPath = path.join(assetsSrc, "icons/_generated/");
const distIconsPath = path.join(assetsDist, "icons");

// Copy Assets
const copyFolderSync = (source, target) => {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const items = fs.readdirSync(source);

  items.forEach(item => {
    const sourcePath = path.join(source, item);
    const targetPath = path.join(target, item);

    if (item === excludeFolder) {
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

// Step 1
copyFolderSync(assetsSrc, assetsDist);
// Step 2
copyFolderSync(generatedIconsPath, distIconsPath);

console.log("copy-task.js copied successfully");
