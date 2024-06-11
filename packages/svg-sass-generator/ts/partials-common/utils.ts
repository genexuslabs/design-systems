// libraries
import path from "path";
// libraries
import { readFileSync } from "fs";

//Log colors
export const RED = "\x1b[31m";
export const GREEN = "\x1b[32m";
export const RESET_COLOR = "\x1b[0m";
export const colorizeJson = {
  STRING_KEY: "white",
  STRING_LITERAL: "green",
  NUMBER_LITERAL: "blue",
};

/**
 * @description it returns a file path without the sourceDirectory.
 */
export const getPathWithoutSrcDir = (
  sourceDir: string,
  filePath: string
): string => {
  return path.relative(sourceDir, filePath);
};

/**
 * @description it tries to read an icon file and returns the icon markup as a string.
 * @param iconPath: the icon path.
 */
export function getSvgString(iconPath: string) {
  try {
    return readFileSync(iconPath, "utf8");
  } catch (error) {
    throw new Error(
      `${RED} There was an error reading ${iconPath} error: ${error}. ${RESET_COLOR}`
    );
  }
}

/**
 * @description: DIR_PATH_REGEX regex validates if a given directory path is valid.
 * Any of the following are considered valid:
 * assets
 * /assets
 * ./assets
 * ./assets/
 * assets/icons
 * /assets/icons/
 * ./assets/icons
 * ./assets/icons/
 * ./assets/icons/
 */
export const DIR_PATH_REGEX =
  /^(?:\.{0,2}\/)?(?:[a-zA-Z0-9_-]+\/)*[a-zA-Z0-9_-]+\/?$/;

export const OUTPUT_GENERATED = "_generated/";
