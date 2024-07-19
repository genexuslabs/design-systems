import { BUTTON_ICONS } from "./icons-showcase-paths.js";
// All definitions in this script are used for local testing purposes
// only. The IDE Web's SDK implements all this and more
import { defineCustomElements } from "https://unpkg.com/@genexus/chameleon-controls-library@6.0.0-next.19/dist/esm/loader.js";
import { registryProperty } from "https://unpkg.com/@genexus/chameleon-controls-library@6.0.0-next.19/dist/esm/index.js";
import { getImagePathCallbackDefinitions } from "./assets-manager.js";

// Register getImagePath callbacks
registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);

window.BUTTON_ICONS = BUTTON_ICONS;

defineCustomElements(window);
