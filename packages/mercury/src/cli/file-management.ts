import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { styleText } from "node:util";
import * as sass from "sass";

import { CSS_BUNDLES_OUT_DIR, SCSS_BUNDLES_OUT_DIR } from "./constants.js";

const CREATED_DIRS = new Set();
const KB = 1000;

const compileBundle = (filePath: string) =>
  sass.compile(filePath, { loadPaths: ["src"], style: "compressed" }).css;

const getHash = (fileContent: string) =>
  crypto.createHash("md5").update(fileContent).digest("hex").substring(16);

const getFileSize = (fileContent: string) => {
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

export function* walkSync(
  dir: string
): Generator<{ dir: string; fileName: string; filePath: string }> {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield { dir, fileName: file.name, filePath: path.join(dir, file.name) };
    }
  }
}

export const createCssBundleWithHash = (fileMetadata: {
  dir: string;
  fileName: string;
  filePath: string;
}) => {
  const outDir = fileMetadata.dir.replace(
    SCSS_BUNDLES_OUT_DIR,
    CSS_BUNDLES_OUT_DIR
  );
  const fileName = fileMetadata.fileName.replace(".scss", "");

  const filePathWithHash = path.join(
    outDir,
    `${fileName}-${getHash(fileName)}.css`
  );

  // Create file directory if it does not exists
  if (!CREATED_DIRS.has(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
    CREATED_DIRS.add(outDir);
  }

  const compiledBundle = compileBundle(fileMetadata.filePath);

  fs.writeFileSync(filePathWithHash, compiledBundle);
  console.log(
    styleText("greenBright", "  Created: ") +
      styleText("white", CSS_BUNDLES_OUT_DIR) +
      styleText(
        "whiteBright",
        filePathWithHash.replace(CSS_BUNDLES_OUT_DIR, "")
      ) +
      styleText("cyan", " " + getFileSize(compiledBundle))
  );
};
