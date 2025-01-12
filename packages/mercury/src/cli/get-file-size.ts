import { KB } from "./constants.js";

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
