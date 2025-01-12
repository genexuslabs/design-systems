import path from "node:path";

export const SCSS_BUNDLES_INPUT_DIR = path.join("src", "bundles", "scss");

export const BASE_BUNDLES_OUT_DIR = path.join("dist", "bundles");
export const SCSS_BUNDLES_OUT_DIR = path.join(BASE_BUNDLES_OUT_DIR, "scss");
export const CSS_BUNDLES_OUT_DIR = path.join(BASE_BUNDLES_OUT_DIR, "css");
export const JS_BUNDLES_OUT_DIR = path.join(BASE_BUNDLES_OUT_DIR, "js");

export const KB = 1000;

export const ICONS_PATH_PLACEHOLDER = "{{ICONS_PATH}}";
export const FONT_FACE_PATH_PLACEHOLDER = "{{FONT_FACE_PATH}}";

export const DEFAULT_FONT_FACE_PATH = "./assets/fonts/";
export const DEFAULT_ICONS_PATH = "./assets/icons/";

export const SPECIAL_CHARS_IN_BUNDLE_NAME_REGEX = /[\/-]/g;
