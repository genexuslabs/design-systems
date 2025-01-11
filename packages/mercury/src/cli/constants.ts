import path from "node:path";

export const SCSS_BUNDLES_INPUT_DIR = path.join("src", "bundles", "scss");

export const BASE_BUNDLES_OUT_DIR = path.join("dist", "bundles");
export const SCSS_BUNDLES_OUT_DIR = path.join(BASE_BUNDLES_OUT_DIR, "scss");
export const CSS_BUNDLES_OUT_DIR = path.join(BASE_BUNDLES_OUT_DIR, "css");
