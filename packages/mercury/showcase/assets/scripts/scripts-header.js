import { BUTTON_ICONS } from "./icons-showcase-paths.js";
// All definitions in this script are used for local testing purposes
// only. The IDE Web's SDK implements all this and more
import { defineCustomElements } from "https://unpkg.com/@genexus/chameleon-controls-library@6.0.0-next.49/dist/esm/loader.js";
import { registryProperty } from "https://unpkg.com/@genexus/chameleon-controls-library@6.0.0-next.49/dist/esm/index.js";
import {
  getImagePathCallbackDefinitions,
  getIconPath
} from "./assets-manager.js";

// Register getImagePath callbacks
registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);

// Make accessible globally:
window.BUTTON_ICONS = BUTTON_ICONS;
window.getIconPath = getIconPath;
defineCustomElements(window);
