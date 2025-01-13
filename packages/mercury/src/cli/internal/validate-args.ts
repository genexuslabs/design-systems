import {
  DEFAULT_FONT_FACE_PATH,
  DEFAULT_ICONS_PATH,
  DEFAULT_OUT_DIR_PATH
} from "./constants.js";
import {
  printArgumentDoesNotExistsError,
  printDuplicatedArgumentError,
  printInvalidArgumentError,
  printMissingFontPathArgumentWarning,
  printMissingIconsPathArgumentWarning,
  printMissingOutDirPathArgumentWarning
} from "./print-utils.js";

const ARGUMENT_VALUE_AND_NAME_SEPARATOR_REGEX = /\s*=\s*/g;
const ERROR_IN_CHECK = false;
const SUCCESS_CHECK = true;

const [, , ...args] = process.argv;

const ICONS_PATH_ARGUMENTS = new Set(["--icons-path", "--icons", "--i", "-i"]);
const FONT_FACE_PATH_ARGUMENTS = new Set([
  "--font-face-path",
  "--font-face",
  "--f",
  "-f"
]);
const OUT_DIR_ARGUMENTS = new Set(["--outdir", "--o", "-o"]);
const GLOBANT_ARGUMENTS = new Set(["--globant", "--gl", "-gl"]);

const isFontFaceArgument = (arg: string) =>
  FONT_FACE_PATH_ARGUMENTS.has(arg.toLowerCase());
const isGlobantArgument = (arg: string) =>
  GLOBANT_ARGUMENTS.has(arg.toLowerCase());
const isIconsArgument = (arg: string) =>
  ICONS_PATH_ARGUMENTS.has(arg.toLowerCase());
const isOutDirArgument = (arg: string) =>
  OUT_DIR_ARGUMENTS.has(arg.toLowerCase());

let hasGlobant = false;
let hasFontFacePath = false;
let hasIconsPath = false;
let hasOutDirPath = false;

let anyWarning = false;

let fontFacePath = "";
let iconsPath = "";
let outDirPath = "";

const checkArgument = (argument: string): boolean => {
  if (isGlobantArgument(argument)) {
    if (hasGlobant) {
      printDuplicatedArgumentError(argument);
      return ERROR_IN_CHECK;
    }

    hasGlobant = true;
    return SUCCESS_CHECK;
  }

  const argNameWithValue = argument.split(
    ARGUMENT_VALUE_AND_NAME_SEPARATOR_REGEX
  );

  if (argNameWithValue.length !== 2) {
    printInvalidArgumentError(argument);
    return ERROR_IN_CHECK;
  }
  const argName = argNameWithValue[0];
  const argValue = argNameWithValue[1];

  if (isFontFaceArgument(argName)) {
    if (hasFontFacePath) {
      printDuplicatedArgumentError(argument);
      return ERROR_IN_CHECK;
    }

    fontFacePath = argValue;
    hasFontFacePath = true;
    return SUCCESS_CHECK;
  }

  if (isIconsArgument(argName)) {
    if (hasIconsPath) {
      printDuplicatedArgumentError(argument);
      return ERROR_IN_CHECK;
    }

    iconsPath = argValue;
    hasIconsPath = true;
    return SUCCESS_CHECK;
  }

  if (isOutDirArgument(argName)) {
    if (hasOutDirPath) {
      printDuplicatedArgumentError(argument);
      return ERROR_IN_CHECK;
    }

    outDirPath = argValue;
    hasOutDirPath = true;
    return SUCCESS_CHECK;
  }

  printArgumentDoesNotExistsError(argument);
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
    printMissingFontPathArgumentWarning();
    fontFacePath = DEFAULT_FONT_FACE_PATH;
    anyWarning = true;
  }

  if (!iconsPath) {
    printMissingIconsPathArgumentWarning();
    iconsPath = DEFAULT_ICONS_PATH;
    anyWarning = true;
  }

  if (!outDirPath) {
    printMissingOutDirPathArgumentWarning();
    outDirPath = DEFAULT_OUT_DIR_PATH;
    anyWarning = true;
  }

  // Print a line break to better visualize warnings
  if (anyWarning) {
    console.log("");
  }

  return {
    globant: hasGlobant,
    fontFacePath,
    iconsPath,
    outDirPath
  };
};
