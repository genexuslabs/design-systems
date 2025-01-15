import fs from "node:fs";
import path from "node:path";
import * as sass from "sass";

import {
  BASE_BUNDLE_WITH_BACK_SLASH,
  BASE_GLOBANT_CSS_FILE,
  BASE_GLOBANT_FILE,
  BASE_GLOBANT_JS_FILE,
  BASE_GLOBANT_SCSS_FILE,
  BASE_SCSS_FILE,
  BUNDLE_MAPPING_ENTRIES,
  BUNDLE_MAPPING_FILE,
  CSS_BUNDLES_OUT_DIR,
  DEFAULT_FONT_FACE_PATH,
  DEFAULT_ICONS_PATH,
  JS_BUNDLES_OUT_DIR,
  SCSS_BUNDLES_OUT_DIR
} from "./constants.js";
import { BundleMetadata, FileMetadata } from "./types.js";
import {
  getBundleNameWithoutSpecialChars,
  replacePlaceholdersInBundle
} from "./utils.js";
import { printBundleWasTranspiled } from "./print-utils.js";

const transpileBundle = (filePath: string, globant: boolean) =>
  sass.compile(filePath, {
    loadPaths: [globant ? "src/config/globant" : "src/config/default"],
    style: "compressed"
  }).css;

const CSS_CREATED_DIRS = new Set();
const JS_CREATED_DIRS = new Set();
const BUNDLES: BundleMetadata[] = [];

const addBaseGlobantFile = (
  fileMetadata: FileMetadata,
  cssOutDir: string,
  jsOutDir: string
) => {
  const { filePath } = fileMetadata;

  BUNDLES.push({
    fileDir: fileMetadata.dir
      .replace(SCSS_BUNDLES_OUT_DIR, "")
      .replace("\\", "/"),
    bundleNameWithBackSlash: filePath
      .replace(SCSS_BUNDLES_OUT_DIR, "")
      .replace(BASE_SCSS_FILE, BASE_GLOBANT_FILE)
  });

  const transpiledBundle = transpileBundle(filePath, true);

  // Store the CSS file with its default values
  fs.writeFileSync(
    path.join(cssOutDir, BASE_GLOBANT_CSS_FILE),
    replacePlaceholdersInBundle(
      transpiledBundle,
      DEFAULT_FONT_FACE_PATH,
      DEFAULT_ICONS_PATH
    )
  );

  // Store the CSS file in a JS file with placeholders for the values
  fs.writeFileSync(
    path.join(jsOutDir, BASE_GLOBANT_JS_FILE),
    `export const bundle = \`${transpiledBundle}\`;`
  );

  printBundleWasTranspiled(
    filePath.replace(BASE_SCSS_FILE, BASE_GLOBANT_SCSS_FILE)
  );
};

export const transpileCssBundleWithPlaceholder = (
  fileMetadata: FileMetadata
) => {
  const { fileName, filePath } = fileMetadata;

  const cssOutDir = fileMetadata.dir.replace(
    SCSS_BUNDLES_OUT_DIR,
    CSS_BUNDLES_OUT_DIR
  );
  const jsOutDir = fileMetadata.dir.replace(
    SCSS_BUNDLES_OUT_DIR,
    JS_BUNDLES_OUT_DIR
  );
  const fileNameCssExt = fileName.replace(".scss", ".css");
  const fileNameJsExt = fileName.replace(".scss", ".js");
  const bundleNameWithBackSlash = filePath
    .replace(SCSS_BUNDLES_OUT_DIR, "")
    .replace(".scss", "");

  BUNDLES.push({
    fileDir: fileMetadata.dir
      .replace(SCSS_BUNDLES_OUT_DIR, "")
      .replace("\\", "/"),
    bundleNameWithBackSlash
  });

  // Create the file directory if it does not exists
  if (!CSS_CREATED_DIRS.has(cssOutDir)) {
    fs.mkdirSync(cssOutDir, { recursive: true });
    fs.mkdirSync(jsOutDir, { recursive: true });

    CSS_CREATED_DIRS.add(cssOutDir);
    JS_CREATED_DIRS.add(jsOutDir);
  }

  const transpiledBundle = transpileBundle(filePath, false);

  // Store the CSS file with its default values
  fs.writeFileSync(
    path.join(cssOutDir, fileNameCssExt),
    replacePlaceholdersInBundle(
      transpiledBundle,
      DEFAULT_FONT_FACE_PATH,
      DEFAULT_ICONS_PATH
    )
  );

  // Store the CSS file in a JS file with placeholders for the values
  fs.writeFileSync(
    path.join(jsOutDir, fileNameJsExt),
    `export const bundle = \`${transpiledBundle}\`;`
  );

  printBundleWasTranspiled(filePath);

  if (bundleNameWithBackSlash === BASE_BUNDLE_WITH_BACK_SLASH) {
    addBaseGlobantFile(fileMetadata, cssOutDir, jsOutDir);
  }
};

const createBundleEntryInMappingFile = <
  B extends string,
  F extends string,
  T extends string
>(
  bundleName: B,
  fileDir: F,
  transpiledBundleRef: T
) =>
  `  {
    ${BUNDLE_MAPPING_ENTRIES.BUNDLE_NAME}: "${bundleName}",
    ${BUNDLE_MAPPING_ENTRIES.FILE_DIR}: "${fileDir}",
    ${BUNDLE_MAPPING_ENTRIES.TRANSPILED_BUNDLE}: ${transpiledBundleRef}
  }` as const;

export const createBundleMappingsFile = () => {
  let bundleAssociationImports = "";
  let bundleMappingObjectEntries = "";

  BUNDLES.forEach(bundleMetadata => {
    const bundleName = bundleMetadata.bundleNameWithBackSlash
      .replaceAll("\\", "/")
      .substring(1);

    const transpiledBundleRef = getBundleNameWithoutSpecialChars(bundleName);
    const bundleEntry = createBundleEntryInMappingFile(
      bundleName,
      bundleMetadata.fileDir,
      transpiledBundleRef
    );

    bundleAssociationImports += `import { bundle as ${transpiledBundleRef} } from "./${bundleName}.js";\n`;

    // Concat entries in the object
    bundleMappingObjectEntries +=
      bundleMappingObjectEntries === "" ? bundleEntry : ",\n" + bundleEntry;
  });

  bundleMappingObjectEntries = `\nexport const bundleMappings = [\n${bundleMappingObjectEntries}\n];`;

  // Create the JS file that contains all mappings for the bundle
  fs.writeFileSync(
    path.join(JS_BUNDLES_OUT_DIR, BUNDLE_MAPPING_FILE),
    bundleAssociationImports + bundleMappingObjectEntries
  );
};
