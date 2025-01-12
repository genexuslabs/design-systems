#!/usr/bin/env node

import fs from "node:fs";

import {
  createCssBundleWithHash,
  ensureDirectoryExistsAndItsClear,
  createBundleAssociation,
  walkSync
} from "./file-management.js";
import {
  BASE_BUNDLES_OUT_DIR,
  SCSS_BUNDLES_INPUT_DIR,
  SCSS_BUNDLES_OUT_DIR
} from "./constants.js";

// Clear bundle directories
ensureDirectoryExistsAndItsClear(BASE_BUNDLES_OUT_DIR);

// Copy the src/bundles/scss content to the dist/bundles/scss and create the
// bundles
fs.cp(
  SCSS_BUNDLES_INPUT_DIR,
  SCSS_BUNDLES_OUT_DIR,
  { recursive: true },
  async err => {
    if (err) {
      console.log("Error", err);
      return;
    }

    const filesToProcessMetadata: {
      dir: string;
      fileName: string;
      filePath: string;
    }[] = [];
    let largestPath = 0;

    for (const fileMetadata of walkSync(SCSS_BUNDLES_OUT_DIR)) {
      filesToProcessMetadata.push(fileMetadata);

      // Find the largest path to pretty print the output file sizes
      largestPath = Math.max(largestPath, fileMetadata.filePath.length);
    }

    filesToProcessMetadata.forEach(fileMetadata =>
      createCssBundleWithHash(fileMetadata, largestPath)
    );

    console.log(createBundleAssociation());
  }
);
