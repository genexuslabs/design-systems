import fs from "node:fs";
import path from "node:path";

import type { FileMetadata } from "./types";

export const ensureDirectoryExistsAndItsClear = (dirPath: string) => {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true });
  }

  fs.mkdirSync(dirPath, { recursive: true });
};

export function* walkSync(dir: string): Generator<FileMetadata> {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield { dir, fileName: file.name, filePath: path.join(dir, file.name) };
    }
  }
}

export const copyDirectories = (srcDir: string, outDir: string) =>
  fs.cpSync(srcDir, outDir, { recursive: true });
