#!/usr/bin/env node
import stringifyObject from "stringify-object";
import path from "path";
import * as fs from "fs";
// partials-common
import { writeFile } from "./partials-common/file-system-utils.js";
import { IconsColorsSchema } from "./partials-common/types.js";
import {
  MonochromeColorsMap,
  MonochromeCategoriesMap,
  MonochromeColor,
  MonochromeIconCategory,
  IconType,
  ElementState,
  ElementStates,
} from "./partials-common/types.js";

const FREEZE_FUNCTION = `const freeze = <T extends { [key in string]: any }>(objectToFreeze: T) =>
  Object.freeze(objectToFreeze);

`;

/**
 *
 * @param description: This function receives an array of source icons paths, and generates an
 * object, that contains the information for every icon: category, icon name, and icon path.
 */
export const generateIconsObject = (
  sourceIconsArray: string[],
  iconsObjectFilePath: string,
  iconsColorsSchema: IconsColorsSchema,
  monochromeColorsMap: MonochromeColorsMap,
  monochromeCategoriesMap: MonochromeCategoriesMap,
  defaultColorType: string
): boolean => {
  if (!sourceIconsArray || !iconsObjectFilePath) {
    return false;
  }

  const monochromeColors = iconsColorsSchema.monochrome.colors;
  const monochromeCategories = iconsColorsSchema.monochrome.iconsCategories;

  const iconsObject: IconsObject = {};

  // Add icons information
  sourceIconsArray.forEach((iconPath) => {
    const normalizedIconPath = path.normalize(iconPath);
    const fileName = path.parse(normalizedIconPath).name;
    const categoryName = path.basename(path.dirname(normalizedIconPath));
    // const categoryNameCamelCase = kebabToCamelCase(categoryName);

    let iconType: IconType = monochromeCategoriesMap.has(categoryName)
      ? "monochrome"
      : "multicolor";

    if (!iconsObject.hasOwnProperty(categoryName)) {
      if (iconType === "monochrome") {
        iconsObject[categoryName] = {};
      }
    }

    if (iconType === "multicolor") {
      // is multicolor
      iconsObject[`${categoryName}`] = {
        ...iconsObject[categoryName],
        [fileName]: {
          enabled: {
            name: `${`${categoryName}`}_${fileName}--enabled`,
          },
          hover: {
            name: `${`${categoryName}`}_${fileName}--hover`,
          },
          active: {
            name: `${`${categoryName}`}_${fileName}--active`,
          },
          disabled: {
            name: `${`${categoryName}`}_${fileName}--disabled`,
          },
        },
      } as MulticolorCategory;
    } else {
      // is monochrome
      iconsObject[`${categoryName}`] = {
        ...iconsObject[categoryName],
        [`${fileName}`]: monochromeIconInfo(
          categoryName,
          fileName,
          monochromeColors,
          monochromeCategories,
          monochromeColorsMap,
          monochromeCategoriesMap
        ),
      } as MonochromeCategory;
    }
  });

  const generateConfig = (defaultColorType: string): Config => {
    return { defaultColorType: defaultColorType };
  };

  const normalizedIconsObjectFilePath = normalizeFilePath(iconsObjectFilePath);
  const objectName = getFileNameFromPath(normalizedIconsObjectFilePath);
  const prettyIconsObject = stringifyObject(iconsObject, {
    indent: "  ",
    singleQuotes: false,
  });
  const config = stringifyObject(generateConfig(defaultColorType), {
    indent: "  ",
    singleQuotes: false,
  });

  const output = `export const ${objectName} = {
  config: ${config},
  icons: ${prettyIconsObject}
};`;

  // Freeze all objects.
  const freezedObjectsOutput =
    FREEZE_FUNCTION + output.replace(/{/g, "freeze({").replace(/}/g, "})");

  writeFile(normalizedIconsObjectFilePath, freezedObjectsOutput);
};

/**
 * @description: This function takes a user-provided file path (userPath) and ensures it conforms to a standardized format for JavaScript file paths. It addresses various potential input formats and ensures consistency by appending a .js extension if necessary based on the structure of the provided path.
 */
const normalizeFilePath = (userPath: string) => {
  // Normalize the path to handle different OS separators
  const normalizedPath = path.normalize(userPath);

  // Check if the normalizedPath already ends with '.js'
  if (normalizedPath.endsWith(".js")) {
    return normalizedPath; // Return as is, it's already correct
  }

  // Split the path into its components
  const parts = normalizedPath.split(path.sep);

  // Get the last part of the path (file or directory name)
  const lastPart = parts[parts.length - 1];

  // Check if lastPart includes a file extension (has a dot)
  if (lastPart.includes(".")) {
    return normalizedPath; // Return as is, it has a file extension
  }

  // Otherwise, assume it's a directory name and append a '.js' file
  const correctedPath = path.join(normalizedPath, `${lastPart}.js`);

  return correctedPath;
};

const kebabToCamelCase = (string: string): string => {
  return string.replace(/-([a-z0-9])/gi, (_, letter) => letter.toUpperCase());
};

const getFileNameFromPath = (filePath: string) => {
  // Normalize the file path
  const normalizedPath = path.normalize(filePath);
  const baseName = path.basename(normalizedPath, path.extname(normalizedPath));
  return kebabToCamelCase(baseName);
};

const monochromeIconInfo = (
  categoryName: string,
  fileName: string,
  monochromeColors: MonochromeColor[],
  monochromeCategories: MonochromeIconCategory[],
  monochromeColorsMap: MonochromeColorsMap,
  monochromeCategoriesMap: MonochromeCategoriesMap
): MonochromeIcon => {
  const colorsObj: MonochromeIcon = {};
  const iconColorsIndex = monochromeCategoriesMap.get(categoryName);
  const iconColors = monochromeCategories[iconColorsIndex].colors;
  for (const color in iconColors) {
    if (iconColors[color]) {
      colorsObj[`${color}`] = {};
      const colorIndex = monochromeColorsMap.get(color);
      const colorStates: ElementStates = monochromeColors[colorIndex].states;
      for (const state in colorStates) {
        if (colorStates[state as ElementState]) {
          (colorsObj[color][state] as unknown as Icon) = {
            name: `${categoryName}_${fileName}_${color}--${state}`,
          } as Icon;
        }
      }
    }
  }
  return colorsObj;
};

// Monochrome Types

interface MonochromeCategory {
  [key: string]: MonochromeIcon;
}

interface MonochromeIcon {
  [key: string]: MonochromeColorObj;
}

interface MonochromeColorObj {
  [key: string]: Icon;
}

// Multicolor Types

interface MulticolorCategory {
  [key: string]: Icon;
}

// Monochrome && Multicolor

interface IconsObject {
  [category: string]: MonochromeCategory | MulticolorCategory;
}

type Icon = {
  name: string;
};

interface Config {
  defaultColorType?: string;
}
