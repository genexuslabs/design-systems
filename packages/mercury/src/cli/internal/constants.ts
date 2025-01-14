import path from "node:path";
import { BundleAssociationMetadata } from "./types";

export const KB = 1000;

export const SCSS_BUNDLES_INPUT_DIR = path.join("src", "bundles", "scss");

export const BASE_BUNDLES_OUT_DIR = path.join("dist", "bundles");
export const SCSS_BUNDLES_OUT_DIR = path.join(BASE_BUNDLES_OUT_DIR, "scss");
export const CSS_BUNDLES_OUT_DIR = path.join(BASE_BUNDLES_OUT_DIR, "css");
export const JS_BUNDLES_OUT_DIR = path.join(BASE_BUNDLES_OUT_DIR, "js");

export const BASE_BUNDLE = "base/base";
export const BASE_BUNDLE_WITH_BACK_SLASH = "\\base\\base";
export const BASE_GLOBANT_BUNDLE = "base/base-globant";

// Files
export const BUNDLE_MAPPING_FILE = "bundle-mappings.js";
export const BUNDLE_MAPPING_TO_HASH_FILE = "bundle-to-hash-mappings.ts";
export const BASE_SCSS_FILE = "base.scss";
export const BASE_GLOBANT_FILE = "base-globant";
export const BASE_GLOBANT_CSS_FILE = "base-globant.css";
export const BASE_GLOBANT_JS_FILE = "base-globant.js";
export const BASE_GLOBANT_SCSS_FILE = "base-globant.scss";

// Placeholders
export const ICONS_PATH_PLACEHOLDER = "{{ICONS_PATH}}";
export const FONT_FACE_PATH_PLACEHOLDER = "{{FONT_FACE_PATH}}";

// Defaults
export const DEFAULT_FONT_FACE_PATH = "./assets/fonts/";
export const DEFAULT_ICONS_PATH = "./assets/icons/";
export const DEFAULT_OUT_DIR_PATH = "./.mercury";

export const SEPARATE_BY_COMMA_REGEX = /\s*,\s*/g;
export const SPECIAL_CHARS_IN_BUNDLE_NAME_REGEX = /[\/-]/g;

// Bundle mapping entries
export const BUNDLE_MAPPING_ENTRIES = {
  BUNDLE_NAME: "bundleName" satisfies keyof BundleAssociationMetadata,
  FILE_DIR: "fileDir" satisfies keyof BundleAssociationMetadata,
  TRANSPILED_BUNDLE:
    "transpiledBundle" satisfies keyof BundleAssociationMetadata
} as const;
