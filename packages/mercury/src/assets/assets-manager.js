import { MERCURY_ASSETS } from "./MERCURY_ASSETS";

const ASSETS_BY_VENDOR = {};
const ALIAS_TO_VENDOR_NAME = {};

const SEPARATOR = "__";

/**
 * Given a vendor and its assets, it register the assets of the vendor. After
 * the registration, the `getAsset` function can be used to retrieve any assets
 * related to the vendor.
 * @param {string} vendorName The name of the vendor (for example, "Mercury"). Must be unique.
 * @param {string} vendorAlias The alias of the vendor (for example, "mer"). Must be unique.
 * @param {any} assets
 */
export const registerAssets = (vendorName, vendorAlias, assets) => {
  // Already registered
  if (ASSETS_BY_VENDOR[vendorName] || ALIAS_TO_VENDOR_NAME[vendorAlias]) {
    return;
  }

  ASSETS_BY_VENDOR[vendorName] = assets;
  ALIAS_TO_VENDOR_NAME[vendorAlias] = vendorName;
};

/**
 * @typedef {Object} AssetMetadata
 * @property {string} category - The category of the icon
 * @property {string} name - The state of the icon
 * @property {string=} colorType - The type of color of the icon
 */

/**
 * @param {string} vendorAlias The name or alias of the vendor.
 * @param {AssetMetadata} assetMetadata The metadata required to retrieve the icon
 * @return The required asset or undefined if not found.
 */
export const getAsset = (vendorAliasOrName, assetMetadata) => {
  const vendorName =
    ALIAS_TO_VENDOR_NAME[vendorAliasOrName] ?? vendorAliasOrName;
  const vendorAssets = ASSETS_BY_VENDOR[vendorName];

  if (!vendorAssets) {
    return undefined;
  }

  const iconCategoryObject = vendorAssets.icons[assetMetadata.category];

  console.log(iconCategoryObject);

  // The category does not exists
  if (!iconCategoryObject) {
    return undefined;
  }
  const iconNameObject = iconCategoryObject[assetMetadata.name];

  console.log(iconNameObject);

  // The name in the category does not exists
  if (!iconNameObject) {
    return undefined;
  }

  return assetMetadata.colorType
    ? iconNameObject[assetMetadata.colorType]
    : iconNameObject;
};

/**
 * Given the metadata of the icon, it transforms the metadata into a string
 * that contains the given information.
 * @param {IconMetadata} iconMetadata
 * @param {string} vendorAlias
 */
export const iconMetadataToPath = (iconMetadata, vendorAlias = "mer") => {
  const additionalInfo = iconMetadata.colorType
    ? `${SEPARATOR}${iconMetadata.colorType}`
    : "";
  return `${vendorAlias}${SEPARATOR}${iconMetadata.category}${SEPARATOR}${iconMetadata.name}${additionalInfo}`;
};

/**
 * @param {string} iconName
 * @param {"enabled" | "hover" | "active" | "disabled"} suffix
 */
const getCustomFullValue = (iconName, suffix) =>
  `var(--icon__${iconName}--${suffix})`;

export const getImagePathCallback = iconPath => {
  const iconMetadata = iconPath.split(SEPARATOR);
  const vendorAlias = iconMetadata[0];
  const category = iconMetadata[1];
  const name = iconMetadata[2];
  const colorType = iconMetadata[3];

  if (colorType) {
    const assetStates = getAsset(vendorAlias, { category, name });

    const result = {
      base: getCustomFullValue(assetStates.enabled.name, "enabled")
    };

    if (assetStates.hover) {
      result.hover = getCustomFullValue(assetStates.hover.name, "hover");
    }

    if (assetStates.active) {
      result.active = getCustomFullValue(assetStates.active.name, "active");
    }

    if (assetStates.disabled) {
      result.disabled = getCustomFullValue(
        assetStates.disabled.name,
        "disabled"
      );
    }

    return result;
  }
  // Monochrome icon without states
  else {
    const assetPath = getAsset(vendorAlias, { category, name });

    return {
      base: getCustomFullValue(assetPath.name, "enabled")
    };
  }
};

export const getImagePathCallbackIde = (item, direction) => {
  const paths = getImagePathCallback(
    direction === "start" ? item.startImgSrc : item.endImgSrc
  );

  return { default: paths, expanded: paths };
};

// Initialize Mercury at the start
registerAssets("Mercury", "mer", MERCURY_ASSETS);
