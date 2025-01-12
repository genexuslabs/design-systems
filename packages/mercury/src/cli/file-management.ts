import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { styleText } from "node:util";
import * as sass from "sass";

import {
  CSS_BUNDLES_OUT_DIR,
  DEFAULT_FONT_FACE_PATH,
  DEFAULT_ICONS_PATH,
  FONT_FACE_PATH_PLACEHOLDER,
  ICONS_PATH_PLACEHOLDER,
  JS_BUNDLES_OUT_DIR,
  SCSS_BUNDLES_OUT_DIR,
  SPECIAL_CHARS_IN_BUNDLE_NAME_REGEX
} from "./constants.js";
import { BundleMetadata } from "./types";

const CSS_CREATED_DIRS = new Set();
const JS_CREATED_DIRS = new Set();
const BUNDLES: BundleMetadata[] = [];
// const BUNDLE_MAPPING = new Map<string, string>();

const transpileBundle = (filePath: string) =>
  sass.compile(filePath, { loadPaths: ["src"], style: "compressed" }).css;

export const getHash = (fileContent: string) =>
  crypto.createHash("md5").update(fileContent).digest("hex").substring(16);

export const ensureDirectoryExistsAndItsClear = (dirPath: string) => {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true });
  }

  fs.mkdirSync(dirPath);
};

export function* walkSync(
  dir: string
): Generator<{ dir: string; fileName: string; filePath: string }> {
  const files = fs.readdirSync(dir, { withFileTypes: true });

  for (const file of files) {
    if (file.isDirectory()) {
      yield* walkSync(path.join(dir, file.name));
    } else {
      yield { dir, fileName: file.name, filePath: path.join(dir, file.name) };
    }
  }
}

export const createCssBundleWithHash = (
  fileMetadata: {
    dir: string;
    fileName: string;
    filePath: string;
  },
  _largestPath: number
) => {
  const cssOutDir = fileMetadata.dir.replace(
    SCSS_BUNDLES_OUT_DIR,
    CSS_BUNDLES_OUT_DIR
  );
  const jsOutDir = fileMetadata.dir.replace(
    SCSS_BUNDLES_OUT_DIR,
    JS_BUNDLES_OUT_DIR
  );
  const fileNameCssExt = fileMetadata.fileName.replace(".scss", ".css");
  const fileNameJsExt = fileMetadata.fileName.replace(".scss", ".js");

  BUNDLES.push({
    dir: fileMetadata.dir.replace(SCSS_BUNDLES_OUT_DIR, "").replace("\\", "/"),
    bundleNameWithBackSlash: fileMetadata.filePath
      .replace(SCSS_BUNDLES_OUT_DIR, "")
      .replace(".scss", "")
  });

  // Create the file directory if it does not exists
  if (!CSS_CREATED_DIRS.has(cssOutDir)) {
    fs.mkdirSync(cssOutDir, { recursive: true });
    fs.mkdirSync(jsOutDir, { recursive: true });

    CSS_CREATED_DIRS.add(cssOutDir);
    JS_CREATED_DIRS.add(jsOutDir);
  }

  const transpiledBundle = transpileBundle(fileMetadata.filePath);
  // const fileContentHash = getHash(compiledBundle);
  // const bundleNameWithHash = `${bundleName}-${fileContentHash}`;
  // const filePathWithHash = path.join(
  //   cssOutDir,
  //   `${fileNameNoExt}-${fileContentHash}.css`
  // );

  // Store the CSS file with its default values
  fs.writeFileSync(
    path.join(cssOutDir, fileNameCssExt),
    transpiledBundle
      .replaceAll(ICONS_PATH_PLACEHOLDER, DEFAULT_ICONS_PATH)
      .replaceAll(FONT_FACE_PATH_PLACEHOLDER, DEFAULT_FONT_FACE_PATH)
  );

  // Store the CSS file in a JS file with placeholders for the values
  fs.writeFileSync(
    path.join(jsOutDir, fileNameJsExt),
    `export const bundle = \`${transpiledBundle}\`;`
  );

  console.log(
    styleText("greenBright", "  Transpiled: ") +
      styleText("white", SCSS_BUNDLES_OUT_DIR) +
      styleText(
        "whiteBright",
        fileMetadata.filePath.replace(SCSS_BUNDLES_OUT_DIR, "")
      )
  );

  // console.log(
  //   styleText("greenBright", "  Created: ") +
  //     styleText("white", CSS_BUNDLES_OUT_DIR) +
  //     styleText(
  //       "whiteBright",
  //       filePathWithHash.replace(CSS_BUNDLES_OUT_DIR, "")
  //     ) +
  //     styleText(
  //       "cyan",
  //       " ".repeat(1 + largestPath - fileMetadata.filePath.length) +
  //         getFileSize(compiledBundle)
  //     )
  // );

  // Store the bundle mapping
  // BUNDLE_MAPPING.set(bundleName, bundleNameWithHash);
};

/**
 * @example
 * "base/icons" --> "baseIcons"
 * "utils/form--full" --> "utilsFormFull"
 */
const getBundleNameWithoutSpecialChars = (bundleName: string) => {
  const bundleNameNoSpecialChars = bundleName
    .split(SPECIAL_CHARS_IN_BUNDLE_NAME_REGEX)
    .map(subPath => subPath.charAt(0).toUpperCase() + subPath.slice(1))
    .join("");

  return (
    bundleNameNoSpecialChars.charAt(0).toLowerCase() +
    bundleNameNoSpecialChars.slice(1)
  );
};

export const createBundleAssociation = () => {
  let bundleAssociationImports = "";
  let bundleAssociationObjectEntries = "";

  BUNDLES.forEach(bundleMetadata => {
    const bundleName = bundleMetadata.bundleNameWithBackSlash
      .replaceAll("\\", "/")
      .substring(1);

    const transpiledBundleRef = getBundleNameWithoutSpecialChars(bundleName);
    const bundleEntry = `  { bundleName: "${bundleName}", dir: "${bundleMetadata.dir}", transpiledBundle: ${transpiledBundleRef} }`;

    bundleAssociationImports += `import { bundle as ${transpiledBundleRef} } from "./${bundleName}.js";\n`;

    // Concat entries in the object
    bundleAssociationObjectEntries +=
      bundleAssociationObjectEntries === "" ? bundleEntry : ",\n" + bundleEntry;
  });

  bundleAssociationObjectEntries = `\nexport const bundleMappings = [\n${bundleAssociationObjectEntries}\n];`;

  // Create the JS that contains all mappings for the bundle
  fs.writeFileSync(
    path.join(JS_BUNDLES_OUT_DIR, "bundle-mappings.js"),
    bundleAssociationImports + bundleAssociationObjectEntries
  );
};
