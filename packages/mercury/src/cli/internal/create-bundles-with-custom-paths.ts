import fs from "node:fs";
import path from "node:path";

import type { BundleAssociationMetadata, CLIArguments } from "./types";

// @ts-expect-error: This file does exists after the bundle transpilation process
import { bundleMappings } from "../../bundles/js/bundle-mappings.js";
import {
  BASE_BUNDLE,
  BASE_GLOBANT_BUNDLE,
  BUNDLE_MAPPING_TO_HASH_FILE
} from "./constants.js";
import {
  getBundleNameWithHash,
  getHash,
  replacePlaceholdersInBundle
} from "./utils.js";
import {
  printBundleToHashMappingsWasCreated,
  printBundleWasCreated
} from "./print-utils.js";

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

const getActualBundleName = (bundleName: string) =>
  bundleName === BASE_BUNDLE || bundleName === BASE_GLOBANT_BUNDLE
    ? BASE_BUNDLE
    : bundleName;

const shouldSkipBundleCreation = (bundleName: string, globant: boolean) =>
  (bundleName === BASE_BUNDLE && globant) ||
  (bundleName === BASE_GLOBANT_BUNDLE && !globant);

export const createBundlesWithCustomPaths = (args: CLIArguments) => {
  const { avoidHash, fontFacePath, iconsPath, globant } = args;
  const outDir = path.join(args.outDirPath);
  const CREATED_DIRS = new Set();

  const largestBundleLength = findLargestPath();
  let bundleMappingToHashObjectEntries = "";

  (bundleMappings as BundleAssociationMetadata[]).forEach(entry => {
    const { bundleName, fileDir, transpiledBundle } = entry;

    if (shouldSkipBundleCreation(bundleName, globant)) {
      return;
    }
    const actualBundleName = getActualBundleName(bundleName);

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

    const bundleNameWithHash = avoidHash.has(actualBundleName)
      ? actualBundleName
      : getBundleNameWithHash(actualBundleName, hash);
    const filePathToCreateBundle = path.join(
      outDir,
      `${bundleNameWithHash}.css`
    );
    fs.writeFileSync(filePathToCreateBundle, compiledBundleWithoutPlaceholders);

    printBundleWasCreated({
      outDir,
      bundleName: actualBundleName,
      compiledBundleWithoutPlaceholders,
      filePathToCreateBundle,

      // WA to improve style
      largestBundleLength:
        largestBundleLength + (avoidHash.has(actualBundleName) ? 17 : 0)
    });

    // Store the bundle mapping.
    // For example: "components/button" --> "components/button-9f82641938b85445"
    const bundleToHashEntry = `  "${actualBundleName}": "${bundleNameWithHash}"`;

    // Concat entries in the object
    bundleMappingToHashObjectEntries +=
      bundleMappingToHashObjectEntries === ""
        ? bundleToHashEntry
        : ",\n" + bundleToHashEntry;
  });

  bundleMappingToHashObjectEntries = `export const bundleToHashMappings = {\n${bundleMappingToHashObjectEntries}\n} as const;\n`;

  const bundleMappingFilePath = path.join(outDir, BUNDLE_MAPPING_TO_HASH_FILE);

  fs.writeFileSync(bundleMappingFilePath, bundleMappingToHashObjectEntries);
  printBundleToHashMappingsWasCreated({
    outDir,
    filePath: bundleMappingFilePath
  });
};
