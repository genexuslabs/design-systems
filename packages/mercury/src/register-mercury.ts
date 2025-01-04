import { MERCURY_ALIAS, registerAssets } from "./assets-manager.js";
import { MERCURY_ASSETS } from "./assets/MERCURY_ASSETS.js";

export const registerMercury = () =>
  registerAssets("Mercury", MERCURY_ALIAS, MERCURY_ASSETS);
