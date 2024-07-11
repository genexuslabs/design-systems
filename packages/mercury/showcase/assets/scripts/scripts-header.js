import { BUTTON_ICONS } from "./icons-showcase-paths.js";
import { getImagePathCallback } from "./assets-manager.js";
// Make all globally accessible
window.getImagePathCallback = getImagePathCallback;
window.BUTTON_ICONS = BUTTON_ICONS;
