#!/usr/bin/env node

import {
  ensureDirectoryExistsAndItsClear,
  walkSync,
  copyDirectories
} from "./internal/file-management.js";
import {
  BASE_BUNDLES_OUT_DIR,
  SCSS_BUNDLES_INPUT_DIR,
  SCSS_BUNDLES_OUT_DIR
} from "./internal/constants.js";
import {
  createBundleMappingsFile,
  transpileCssBundleWithPlaceholder
} from "./internal/transpile-bundle-and-create-mappings.js";
import { measureTime } from "./internal/utils.js";

measureTime(() => {
  // Clear bundle directories
  ensureDirectoryExistsAndItsClear(BASE_BUNDLES_OUT_DIR);

  // Copy the src/bundles/scss content to the dist/bundles/scss and create the
  // bundles
  copyDirectories(SCSS_BUNDLES_INPUT_DIR, SCSS_BUNDLES_OUT_DIR);

  // Transpile scss bundles into .css and .js files
  for (const fileMetadata of walkSync(SCSS_BUNDLES_OUT_DIR)) {
    transpileCssBundleWithPlaceholder(fileMetadata);
  }

  // Import all .js files into a single file (defined in `BUNDLE_MAPPING_FILE` var)
  createBundleMappingsFile();
});
