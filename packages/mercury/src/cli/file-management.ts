import crypto from "crypto";
import fs from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";

const getHash = (fileContent: string) =>
  crypto.createHash("md5").update(fileContent).digest("hex").substring(16);

export const ensureDirectoryExistsAndItsClear = (basePath: string) => {
  const directoryPath = path.join(import.meta.dirname, basePath);

  // If the directory exists, remove it
  if (fs.existsSync(directoryPath)) {
    fs.rmSync(directoryPath, { recursive: true });
  }

  return fsPromises
    .mkdir(path.join(import.meta.dirname, basePath), { recursive: true })
    .catch(console.error);
};

export const createFileWithHash = (
  basePath: string,
  fileName: string,
  fileContent: string
) =>
  fsPromises.writeFile(
    path.join(
      import.meta.dirname,
      basePath,
      `${fileName}-${getHash(fileContent)}.scss`
    ),
    fileContent
  );
