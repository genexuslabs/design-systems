// libraries
import path from "path";

//Log colors
export const RED = "\x1b[31m";
export const GREEN = "\x1b[32m";
export const RESET_COLOR = "\x1b[0m";
export const colorizeJson = {
  STRING_KEY: "white",
  STRING_LITERAL: "green",
  NUMBER_LITERAL: "blue"
};

/**
 * @description it returns a file path without the sourceDirectory.
 */
export const getCleanPath = (sourceDir: string, filePath: string): string => {
  return path.relative(sourceDir, filePath);
};

/**
 * @description it returns an array of file paths without the sourceDirectory.
 */
export const getCleanPaths = (
  sourceDir: string,
  filePaths: string[]
): string[] => {
  return filePaths.map(filePath => path.relative(sourceDir, filePath));
};
