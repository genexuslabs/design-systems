#!/usr/bin/env node

import fs from "fs";
import path from "path";

// Define the path to the parent directory containing the folders
const SRC_DIRECTORY = await process.argv[2];
const OUTPUT_DIRECTORY = await process.argv[3];
const MONOCHROME_STATES_FILE = await process.argv[4];
const MONOCHROME_ID = "monochrome";
const MULTICOLOR_ID = "multicolor";
let monochromeLists = [];
let multicolorLists = [];

function getStatesJson() {
  try {
    const statesJson = fs.readFileSync(`./${MONOCHROME_STATES_FILE}`, "utf8");
    return JSON.parse(statesJson);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(
        `states.json not found in /${SRC_DIRECTORY}. All states will be generated for every icon.`
      );
    } else {
      console.error(
        `Error reading ${SRC_DIRECTORY}/states.json:`,
        error.message
      );
    }
  }
}

// Function to read the directories and files
function readDirectoriesAndFiles(directoryPath) {
  // Read the contents of the directory
  const files = fs.readdirSync(directoryPath);

  // Filter out only directories
  const directories = files.filter(file =>
    fs.statSync(path.join(directoryPath, file)).isDirectory()
  );

  // Initialize an array to store the objects
  const result = [];

  // Iterate over each directory
  directories.forEach(directory => {
    const categoryName = directory;
    const icons = [];

    // Read the contents of the current directory
    const filesInDirectory = fs.readdirSync(
      path.join(directoryPath, directory)
    );

    // Filter out only SVG files
    const svgFiles = filesInDirectory.filter(
      file => path.extname(file).toLowerCase() === ".svg"
    );

    // Add each SVG file to the icons array
    svgFiles.forEach(svgFile => {
      icons.push(path.parse(svgFile).name);
    });

    // Create an object with category and icons array and push it to the result array
    result.push({ categoryName, icons });
  });

  return result;
}

function writeSassFiles(iconsLists) {
  // Create the 'sass-output' directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIRECTORY)) {
    fs.mkdirSync(OUTPUT_DIRECTORY);
  }

  iconsLists.forEach(iconsList => {
    if (!iconsList.icons.length) {
      //only proceed if the list is not empty
      return;
    }
    const iconsType = getIconsType(iconsList);

    // Create .sass file
    const sassFileName = `_${iconsList.categoryName}.scss`;
    const sassFilePath = path.join(
      `${OUTPUT_DIRECTORY}/${iconsType}`,
      sassFileName
    );

    // Write sass list to .sass file
    let sassContent = `$icons-${iconsList.categoryName}: ${iconsList.icons.join(
      ", "
    )};`;

    if (iconsType === MONOCHROME_ID) {
      sassContent += monochromeStyles(iconsList);
      monochromeLists.push(iconsList.categoryName);
    } else if (iconsType === MULTICOLOR_ID) {
      sassContent += multicolorStyles(iconsList);
      multicolorLists.push(iconsList.categoryName);
    }

    createFolder(iconsType);
    fs.writeFileSync(sassFilePath, sassContent);
  });
}

function createFolder(type) {
  const path = `${OUTPUT_DIRECTORY}/${type}`;
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path);
  }
}

/**
 * @description It returns the icon type (multicolor or monochrome). This is needed to determine how to write the sass file css selectors.
 */
function getIconsType(iconsList) {
  if (statesJson === undefined) {
    /*If no monochrome states file is found, the category is considered as "multicolor" */
    return;
  }
  const categoryName = iconsList.categoryName;
  const categoryFound = statesJson[categoryName];
  if (categoryFound) {
    return MONOCHROME_ID;
  } else {
    return MULTICOLOR_ID;
  }
}

function monochromeStyles(iconsList) {
  let output = "";
  let list = "";
  const category = iconsList.categoryName;
  iconsList.icons.forEach(icon => {
    list += `
  // ${icon}.svg`;
    const states = Object.keys(statesJson[category][icon]["states"]);
    states.forEach(state => {
      list += `
  &-${icon}--${state}-light {
    --icon-path :url("#{$icons-path}icons/${category}/light/${icon}.svg#${state}");
  }
  &-${icon}--${state}-dark {
    --icon-path :url("#{$icons-path}icons/${category}/dark/${icon}.svg#${state}");
  }
      `;
    });
  });
  output += `
%icon__${iconsList.categoryName} {
  ${list}
}
  `;
  return output;
}

function multicolorStyles(iconsList) {
  let output = "";
  let list = "";
  const category = iconsList.categoryName;
  iconsList.icons.forEach(icon => {
    list += `
  // ${icon}.svg
  &-${icon}--enabled-light {
    --icon-path: url("#{$icons-path}icons/${iconsList.categoryName}/light/${icon}.svg#enabled");
  }
  &-${icon}--enabled-dark {
    --icon-path: url("#{$icons-path}icons/${iconsList.categoryName}/dark/${icon}.svg#enabled");
  }

  &-${icon}--hover-light {
    --icon-path: url("#{$icons-path}icons/${iconsList.categoryName}/light/${icon}.svg#hover");
  }
  &-${icon}--hover-dark {
    --icon-path: url("#{$icons-path}icons/${iconsList.categoryName}/dark/${icon}.svg#hover");
  }

  &-${icon}--active-light {
    --icon-path: url("#{$icons-path}icons/${iconsList.categoryName}/light/${icon}.svg#active");
  }
  &-${icon}--active-dark {
    --icon-path: url("#{$icons-path}icons/${iconsList.categoryName}/dark/${icon}.svg#active");
  }

  &-${icon}--disabled-light {
    --icon-path: url("#{$icons-path}icons/${iconsList.categoryName}/light/${icon}.svg#disabled");
  }
  &-${icon}--disabled-dark {
    --icon-path: url("#{$icons-path}icons/${iconsList.categoryName}/dark/${icon}.svg#disabled");
  }
    `;
  });
  output += `
%icon__${iconsList.categoryName} {
  ${list}
}
  `;
  return output;
}

/**
 * @description this function writes on disk a single .scss file that imports each .scss file for each icons category. This is the only .scss file that the final user should import later. (One .scss file per icons category is more easy to understand and inspect, rather than all the icons categories on a single file)
 */
function writeImportScss(iconsLists) {
  // Create .sass file
  const sassFileName = `svg-generator-icons-lists.scss`;
  const sassFilePath = path.join(OUTPUT_DIRECTORY, sassFileName);

  let iconsListsOutput = `@mixin svg-generator-icons-lists($icons-path: "./assets/icons") {`;

  /* --------------------------
  Import monochrome icons lists
  --------------------------- */

  let sassContentMonochrome = "";
  if (monochromeLists.length) {
    let iconsImports = "";
    sassContentMonochrome += `
    
    `;
    monochromeLists.forEach(list => {
      iconsImports += `@import "./${MONOCHROME_ID}/${list}";\n`;
    });
    iconsListsOutput += `
  ${iconsImports}
  $all-monochrome-lists: (`;
    monochromeLists.forEach((list, i) => {
      iconsListsOutput += `
    ${list}: $icons-${list}`;

      if (i === monochromeLists.length - 1) {
        iconsListsOutput += `
  );`;
      } else {
        iconsListsOutput += `,`;
      }
    });

    sassContentMonochrome += `
    ${iconsListsOutput}`;
  }

  /* --------------------------
  Import multicolor icons lists
  --------------------------- */

  let sassContentMulticolor = "";
  if (multicolorLists.length) {
    let iconsImports = "";
    sassContentMulticolor += `
  
    `;
    multicolorLists.forEach(list => {
      iconsImports += `@import "./${MULTICOLOR_ID}/${list}";\n`;
    });
    iconsListsOutput += `
  ${iconsImports}
  $all-multicolor-lists: (`;
    multicolorLists.forEach((list, i) => {
      iconsListsOutput += `
    ${list}: $icons-${list}`;

      if (i === multicolorLists.length - 1) {
        iconsListsOutput += `
  );`;
      } else {
        iconsListsOutput += `,`;
      }
    });

    sassContentMulticolor += `
    ${iconsListsOutput}
}`;
  }

  iconsListsOutput += `}`;

  fs.writeFileSync(sassFilePath, iconsListsOutput);
}

/**
 * @description It clears the OUTPUT_DIRECTORY
 */
function clearOutputDir() {
  fs.rmSync(OUTPUT_DIRECTORY, { recursive: true, force: true }, err => {
    if (err) {
      throw err;
    }
  });
}

//run
const statesJson = getStatesJson();
clearOutputDir();
const iconsLists = readDirectoriesAndFiles(SRC_DIRECTORY);
writeSassFiles(iconsLists);
writeImportScss(iconsLists);
