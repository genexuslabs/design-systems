// libraries
import { readFileSync } from "fs";
// partials-common
import { RED, RESET_COLOR } from "./utilities.js";
/**
 * @description it tries to read an icon file and returns the icon markup as a string.
 * @param iconPath: the icon path.
 */
export function getSvgString(iconPath) {
    try {
        return readFileSync(iconPath, "utf8");
    }
    catch (error) {
        throw new Error(`${RED} There was an error reading ${iconPath} error: ${error}. ${RESET_COLOR}`);
    }
}
