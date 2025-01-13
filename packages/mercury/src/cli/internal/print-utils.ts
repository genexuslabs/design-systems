import { styleText } from "node:util";

import { getFileSize } from "./utils.js";
import {
  DEFAULT_FONT_FACE_PATH,
  DEFAULT_ICONS_PATH,
  DEFAULT_OUT_DIR_PATH,
  SCSS_BUNDLES_OUT_DIR
} from "./constants.js";

export const printBundleWasCreated = (args: {
  outDir: string;
  bundleName: string;
  largestBundleLength: number;
  filePathToCreateBundle: string;
  compiledBundleWithoutPlaceholders: string;
}) =>
  console.log(
    styleText("greenBright", "  Created: ") +
      styleText("white", args.outDir) +
      styleText(
        "whiteBright",
        args.filePathToCreateBundle.replace(args.outDir, "")
      ) +
      styleText(
        "cyan",
        " ".repeat(1 + args.largestBundleLength - args.bundleName.length) +
          getFileSize(args.compiledBundleWithoutPlaceholders)
      )
  );

export const printBundleToHashMappingsWasCreated = (args: {
  outDir: string;
  filePath: string;
}) =>
  console.log(
    "\n" +
      styleText("greenBright", "  Created: ") +
      styleText("white", args.outDir) +
      styleText("whiteBright", args.filePath.replace(args.outDir, ""))
  );

export const printBundleWasTranspiled = (filePath: string) =>
  console.log(
    styleText("greenBright", "  Transpiled: ") +
      styleText("white", SCSS_BUNDLES_OUT_DIR) +
      styleText("whiteBright", filePath.replace(SCSS_BUNDLES_OUT_DIR, ""))
  );

export const printArgumentDoesNotExistsError = (arg: string) =>
  console.log(
    styleText("red", "  error ") +
      styleText("gray", "Argument does not exists: ") +
      `'${arg}'`
  );

export const printDuplicatedArgumentError = (arg: string) =>
  console.log(
    styleText("red", "  error ") +
      styleText("gray", "Duplicated argument type: ") +
      `'${arg}'`
  );

export const printInvalidArgumentError = (arg: string) =>
  console.log(
    styleText("red", "  error ") +
      styleText("gray", "Invalid argument: ") +
      `'${arg}'`
  );

export const printMissingFontPathArgumentWarning = () =>
  console.log(
    styleText(
      "yellow",
      "  [warning]: Missing --font-face-path argument. The path "
    ) +
      styleText("cyan", `'${DEFAULT_FONT_FACE_PATH}'`) +
      styleText("yellow", " will be used as default.")
  );

export const printMissingIconsPathArgumentWarning = () =>
  console.log(
    styleText(
      "yellow",
      "  [warning]: Missing --icons-path argument. The path "
    ) +
      styleText("cyan", `'${DEFAULT_ICONS_PATH}'`) +
      styleText("yellow", " will be used as default.")
  );

export const printMissingOutDirPathArgumentWarning = () =>
  console.log(
    styleText("yellow", "  [warning]: Missing --outDir argument. The path ") +
      styleText("cyan", `'${DEFAULT_OUT_DIR_PATH}'`) +
      styleText("yellow", " will be used as default.")
  );
