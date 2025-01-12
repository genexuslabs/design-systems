#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { styleText } from "node:util";

import {
  ensureDirectoryExistsAndItsClear,
  getHash
} from "./file-management.js";
import { getArguments } from "./validate-args.js";

// @ts-expect-error: This file does exists after the bundle transpilation process
import { bundleMappings } from "../bundles/js/bundle-mappings.js";
import {
  DEFAULT_FONT_FACE_PATH,
  DEFAULT_ICONS_PATH,
  FONT_FACE_PATH_PLACEHOLDER,
  ICONS_PATH_PLACEHOLDER
} from "./constants.js";
import type { BundleAssociationMetadata } from "./types";
import { getFileSize } from "./get-file-size.js";

const args = getArguments();

if (args) {
  const outDir = path.join(args.outDirPath);

  ensureDirectoryExistsAndItsClear(outDir);

  const CREATED_DIRS = new Set();

  let largestBundleLength = 0;

  (bundleMappings as BundleAssociationMetadata[]).forEach(entry => {
    largestBundleLength = Math.max(
      largestBundleLength,
      entry.bundleName.length
    );
  });

  (bundleMappings as BundleAssociationMetadata[]).forEach(entry => {
    const { bundleName, dir, transpiledBundle } = entry;

    const compiledBundleWithoutPlaceholders = transpiledBundle
      .replaceAll(ICONS_PATH_PLACEHOLDER, DEFAULT_ICONS_PATH)
      .replaceAll(FONT_FACE_PATH_PLACEHOLDER, DEFAULT_FONT_FACE_PATH);

    const hash = getHash(compiledBundleWithoutPlaceholders);

    if (dir && !CREATED_DIRS.has(dir)) {
      fs.mkdirSync(path.join(outDir, dir), { recursive: true });
      CREATED_DIRS.add(dir);
    }

    const filePathToCreateBundle = path.join(
      outDir,
      `${bundleName}-${hash}.css`
    );

    fs.writeFileSync(filePathToCreateBundle, compiledBundleWithoutPlaceholders);

    console.log(
      styleText("greenBright", "  Created: ") +
        styleText("white", outDir) +
        styleText("whiteBright", filePathToCreateBundle.replace(outDir, "")) +
        styleText(
          "cyan",
          " ".repeat(1 + largestBundleLength - bundleName.length) +
            getFileSize(compiledBundleWithoutPlaceholders)
        )
    );
  });
}
