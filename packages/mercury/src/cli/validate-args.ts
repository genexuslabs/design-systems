import { styleText } from "node:util";

import { DEFAULT_FONT_FACE_PATH, DEFAULT_ICONS_PATH } from "./constants.js";

const ARGUMENT_VALUE_AND_NAME_SEPARATOR_REGEX = /\s*=\s*/g;
const ERROR_IN_CHECK = false;
const SUCCESS_CHECK = true;

const DEFAULT_OUT_DIR_PATH = "./.mercury";

const [, , ...args] = process.argv;

const ICONS_PATH_ARGUMENTS = new Set(["--icons-path", "--icons", "--i", "-i"]);
const FONT_FACE_PATH_ARGUMENTS = new Set([
  "--font-face-path",
  "--font-face",
  "--f",
  "-f"
]);
const OUT_DIR_ARGUMENTS = new Set(["--outdir", "--o", "-o"]);
const GLOBANT_ARGUMENTS = new Set(["--globant", "--gl"]);

const isFontFaceArgument = (arg: string) =>
  FONT_FACE_PATH_ARGUMENTS.has(arg.toLowerCase());
const isGlobantArgument = (arg: string) =>
  GLOBANT_ARGUMENTS.has(arg.toLowerCase());
const isIconsArgument = (arg: string) =>
  ICONS_PATH_ARGUMENTS.has(arg.toLowerCase());
const isOutDirArgument = (arg: string) =>
  OUT_DIR_ARGUMENTS.has(arg.toLowerCase());

const printArgumentDoesNotExists = (arg: string) =>
  console.log(
    styleText("red", "  error ") +
      styleText("gray", "Argument does not exists: ") +
      `'${arg}'`
  );

const printDuplicatedArgument = (arg: string) =>
  console.log(
    styleText("red", "  error ") +
      styleText("gray", "Duplicated argument type: ") +
      `'${arg}'`
  );

const printInvalidArgument = (arg: string) =>
  console.log(
    styleText("red", "  error ") +
      styleText("gray", "Invalid argument: ") +
      `'${arg}'`
  );

const printMissingFontPathArgument = () =>
  console.log(
    styleText(
      "yellow",
      "  [warning]: Missing --font-face-path argument. The path "
    ) +
      styleText("cyan", `'${DEFAULT_FONT_FACE_PATH}'`) +
      styleText("yellow", " will be used as default.")
  );

const printMissingIconsPathArgument = () =>
  console.log(
    styleText(
      "yellow",
      "  [warning]: Missing --icons-path argument. The path "
    ) +
      styleText("cyan", `'${DEFAULT_ICONS_PATH}'`) +
      styleText("yellow", " will be used as default.")
  );

const printMissingOutDirPathArgument = () =>
  console.log(
    styleText("yellow", "  [warning]: Missing --outDir argument. The path ") +
      styleText("cyan", `'${DEFAULT_OUT_DIR_PATH}'`) +
      styleText("yellow", " will be used as default.")
  );

let hasGlobant = false;
let hasFontFacePath = false;
let hasIconsPath = false;
let hasOutDirPath = false;

let fontFacePath = "";
let iconsPath = "";
let outDirPath = "";

const checkArgument = (argument: string): boolean => {
  if (isGlobantArgument(argument)) {
    if (hasGlobant) {
      printDuplicatedArgument(argument);
      return ERROR_IN_CHECK;
    }

    hasGlobant = true;
    return SUCCESS_CHECK;
  }

  const argNameWithValue = argument.split(
    ARGUMENT_VALUE_AND_NAME_SEPARATOR_REGEX
  );

  if (argNameWithValue.length !== 2) {
    printInvalidArgument(argument);
    return ERROR_IN_CHECK;
  }
  const argName = argNameWithValue[0];
  const argValue = argNameWithValue[1];

  if (isFontFaceArgument(argName)) {
    if (hasFontFacePath) {
      printDuplicatedArgument(argument);
      return ERROR_IN_CHECK;
    }

    fontFacePath = argValue;
    hasFontFacePath = true;
    return SUCCESS_CHECK;
  }

  if (isIconsArgument(argName)) {
    if (hasIconsPath) {
      printDuplicatedArgument(argument);
      return ERROR_IN_CHECK;
    }

    iconsPath = argValue;
    hasIconsPath = true;
    return SUCCESS_CHECK;
  }

  if (isOutDirArgument(argName)) {
    if (hasOutDirPath) {
      printDuplicatedArgument(argument);
      return ERROR_IN_CHECK;
    }

    outDirPath = argValue;
    hasOutDirPath = true;
    return SUCCESS_CHECK;
  }

  printArgumentDoesNotExists(argument);
  return ERROR_IN_CHECK;
};

export const getArguments = ():
  | {
      globant: boolean;
      iconsPath: string;
      fontFacePath: string;
      outDirPath: string;
    }
  | undefined => {
  for (let index = 0; index < args.length; index++) {
    if (checkArgument(args[index]) === ERROR_IN_CHECK) {
      return undefined;
    }
  }

  if (!fontFacePath) {
    printMissingFontPathArgument();
    fontFacePath = DEFAULT_FONT_FACE_PATH;
  }

  if (!iconsPath) {
    printMissingIconsPathArgument();
    iconsPath = DEFAULT_ICONS_PATH;
  }

  if (!outDirPath) {
    printMissingOutDirPathArgument();
    outDirPath = DEFAULT_OUT_DIR_PATH;
  }

  return {
    globant: hasGlobant,
    fontFacePath,
    iconsPath,
    outDirPath
  };
};
