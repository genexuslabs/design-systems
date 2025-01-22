#!/usr/bin/env node

import { createBundlesWithCustomPaths } from "./internal/create-bundles-with-custom-paths.js";
import { ensureDirectoryExistsAndItsClear } from "./internal/file-management.js";
import { getArguments } from "./internal/validate-args.js";
import { measureTime } from "./internal/utils.js";

measureTime(() => {
  // Improve process visualization
  console.log("");

  const args = getArguments();

  if (args) {
    ensureDirectoryExistsAndItsClear(args.outDirPath);

    createBundlesWithCustomPaths(args);
  }
});
