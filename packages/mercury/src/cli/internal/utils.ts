import crypto from "node:crypto";
import { styleText } from "node:util";

import {
  FONT_FACE_PATH_PLACEHOLDER,
  ICONS_PATH_PLACEHOLDER,
  KB,
  SPECIAL_CHARS_IN_BUNDLE_NAME_REGEX
} from "./constants.js";

export const getFileSize = (fileContent: string) => {
  const fileLength = fileContent.length;
  if (fileLength < KB) {
    return fileLength + "B";
  }

  const fileLengthInKB = fileLength / KB;
  if (fileLengthInKB < KB) {
    return fileLengthInKB + "KB";
  }

  const fileLengthInMB = fileLengthInKB / KB;
  if (fileLengthInMB < KB) {
    return fileLengthInMB.toFixed(3) + "MB";
  }

  const fileLengthInGB = fileLengthInMB / KB;
  return fileLengthInGB.toFixed(3) + "GB";
};

export const getHash = (fileContent: string) =>
  crypto.createHash("md5").update(fileContent).digest("hex").substring(16);

export const getBundleNameWithHash = <B extends string, H extends string>(
  bundleName: B,
  hash: H
) => `${bundleName}-${hash}` as const;

export const replacePlaceholdersInBundle = (
  transpiledBundle: string,
  fontFaceValue: string,
  iconsValue: string
) =>
  transpiledBundle
    .replaceAll(ICONS_PATH_PLACEHOLDER, iconsValue)
    .replaceAll(FONT_FACE_PATH_PLACEHOLDER, fontFaceValue);

/**
 * @example
 * "base/icons" --> "baseIcons"
 * "utils/form--full" --> "utilsFormFull"
 */
export const getBundleNameWithoutSpecialChars = (bundleName: string) => {
  const bundleNameNoSpecialChars = bundleName
    .split(SPECIAL_CHARS_IN_BUNDLE_NAME_REGEX)
    .map(subPath => subPath.charAt(0).toUpperCase() + subPath.slice(1))
    .join("");

  return (
    bundleNameNoSpecialChars.charAt(0).toLowerCase() +
    bundleNameNoSpecialChars.slice(1)
  );
};

export const measureTime = (callback: () => void) => {
  console.time(styleText("green", "Done in"));

  callback();

  console.timeEnd(styleText("green", "Done in"));
};
