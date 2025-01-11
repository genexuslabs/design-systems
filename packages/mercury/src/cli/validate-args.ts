import { styleText } from "node:util";

const ARGUMENT_VALUE_AND_NAME_SEPARATOR_REGEX = /\s*=\s*/g;
const ERROR_IN_CHECK = false;
const SUCCESS_CHECK = true;
const DEFAULT_FONT_FACE_PATH = "./assets/fonts/";
const DEFAULT_ICONS_PATH = "./assets/icons/";

const [, , ...args] = process.argv;

const ICONS_PATH_ARGUMENTS = new Set(["--icons-path", "--icons", "--i", "-i"]);
const FONT_FACE_PATH_ARGUMENTS = new Set([
  "--font-face-path",
  "--font-face",
  "--f",
  "-f"
]);
const GLOBANT_ARGUMENTS = new Set(["--globant", "--gl"]);

const isIconsArgument = (arg: string) => ICONS_PATH_ARGUMENTS.has(arg);
const isFontFaceArgument = (arg: string) => FONT_FACE_PATH_ARGUMENTS.has(arg);
const isGlobantArgument = (arg: string) => GLOBANT_ARGUMENTS.has(arg);

const printArgumentDoesNotExists = (arg: string) =>
  console.log(
    styleText("red", "error ") +
      styleText("gray", "Argument does not exists: ") +
      `'${arg}'`
  );

const printDuplicatedArgument = (arg: string) =>
  console.log(
    styleText("red", "error ") +
      styleText("gray", "Duplicated argument type: ") +
      `'${arg}'`
  );

const printInvalidArgument = (arg: string) =>
  console.log(
    styleText("red", "error ") +
      styleText("gray", "Invalid argument: ") +
      `'${arg}'`
  );

const printMissingFontPathArgument = () =>
  console.log(
    styleText(
      "yellow",
      "[warning]: Missing --font-face-path argument. The path "
    ) +
      styleText("cyan", "'./assets/fonts/'") +
      styleText("yellow", " will be used as default.")
  );

const printMissingIconsPathArgument = () =>
  console.log(
    styleText("yellow", "[warning]: Missing --icons-path argument. The path ") +
      styleText("cyan", "'./assets/icons/'") +
      styleText("yellow", " will be used as default.")
  );

let hasGlobant = false;
let hasFontFacePath = false;
let hasIconsPath = false;

let fontFacePath = "";
let iconsPath = "";

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

  printArgumentDoesNotExists(argument);
  return ERROR_IN_CHECK;
};

export const getArguments = ():
  | {
      globant: boolean;
      iconsPath: string;
      fontFacePath: string;
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

  return {
    globant: hasGlobant,
    fontFacePath,
    iconsPath
  };
};
