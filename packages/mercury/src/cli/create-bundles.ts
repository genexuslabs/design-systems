#!/usr/bin/env node

import fs from "node:fs";

import { createCssBundleWithHash, walkSync } from "./file-management.js";
import {
  BASE_BUNDLES_OUT_DIR,
  SCSS_BUNDLES_INPUT_DIR,
  SCSS_BUNDLES_OUT_DIR
} from "./constants.js";

// Clear bundle output directories
if (fs.existsSync(BASE_BUNDLES_OUT_DIR)) {
  fs.rmSync(BASE_BUNDLES_OUT_DIR, { recursive: true });
}

// Copy the content and create bundles
fs.cp(
  SCSS_BUNDLES_INPUT_DIR,
  SCSS_BUNDLES_OUT_DIR,
  { recursive: true },
  async err => {
    if (err) {
      console.log("Error", err);
      return;
    }

    for (const fileMetadata of walkSync(SCSS_BUNDLES_OUT_DIR)) {
      createCssBundleWithHash(fileMetadata);
    }
  }
);
