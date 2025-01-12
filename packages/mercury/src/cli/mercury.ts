#!/usr/bin/env node

import { createBundlesWithCustomPaths } from "./internal/create-bundles-with-custom-paths.js";
import { ensureDirectoryExistsAndItsClear } from "./internal/file-management.js";
import { getArguments } from "./internal/validate-args.js";
import { measureTime } from "./internal/utils.js";

const args = getArguments();

if (args) {
  measureTime(() => {
    ensureDirectoryExistsAndItsClear(args.outDirPath);

    createBundlesWithCustomPaths(args);
  });
}
