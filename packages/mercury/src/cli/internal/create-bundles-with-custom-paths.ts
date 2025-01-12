import fs from "node:fs";
import path from "node:path";

import type { BundleAssociationMetadata } from "./types";

// @ts-expect-error: This file does exists after the bundle transpilation process
import { bundleMappings } from "../../bundles/js/bundle-mappings.js";
import {
  getBundleNameWithHash,
  getHash,
  replacePlaceholdersInBundle
} from "./utils.js";
import { printBundleWasCreated } from "./print-utils.js";

const findLargestPath = (): number => {
  let largestBundleLength = 0;

  (bundleMappings as BundleAssociationMetadata[]).forEach(entry => {
    largestBundleLength = Math.max(
      largestBundleLength,
      entry.bundleName.length
    );
  });

  return largestBundleLength;
};

export const createBundlesWithCustomPaths = (args: {
  globant: boolean;
  iconsPath: string;
  fontFacePath: string;
  outDirPath: string;
}) => {
  const { fontFacePath, iconsPath } = args;
  const outDir = path.join(args.outDirPath);
  const CREATED_DIRS = new Set();

  const largestBundleLength = findLargestPath();

  (bundleMappings as BundleAssociationMetadata[]).forEach(entry => {
    const { bundleName, fileDir, transpiledBundle } = entry;

    const compiledBundleWithoutPlaceholders = replacePlaceholdersInBundle(
      transpiledBundle,
      fontFacePath,
      iconsPath
    );
    const hash = getHash(compiledBundleWithoutPlaceholders);

    if (fileDir && !CREATED_DIRS.has(fileDir)) {
      fs.mkdirSync(path.join(outDir, fileDir), { recursive: true });
      CREATED_DIRS.add(fileDir);
    }

    const filePathToCreateBundle = path.join(
      outDir,
      getBundleNameWithHash(bundleName, hash)
    );

    fs.writeFileSync(filePathToCreateBundle, compiledBundleWithoutPlaceholders);

    printBundleWasCreated({
      outDir,
      bundleName,
      compiledBundleWithoutPlaceholders,
      filePathToCreateBundle,
      largestBundleLength
    });
  });
};
