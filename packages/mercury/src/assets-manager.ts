import { MERCURY_ASSETS } from "./assets/MERCURY_ASSETS";

const ASSETS_BY_VENDOR: { [key in string]: Assets } = {};
const ALIAS_TO_VENDOR_NAME: { [key in string]: string } = {};

const SEPARATOR = "/";

export type AssetsMetadata = {
  category: string;
  name: string;
  colorType?: string;
};

/**
 * For example:
 * ```
 * {
 *   icons: {
 *     objects: {
 *       stencil: {
 *         name: "objects_stencil--enabled"
 *       },
 *       version: {
 *         onPrimary: {
 *           base: {
 *             name: "objects_version_onPrimary_base--enabled"
 *           },
 *           hover: {
 *             name: "objects_version_onPrimary_base--hover"
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 * ```
 */
export type Assets = {
  icons: { [key in string]: AssetsCategories };
};

export type AssetsCategories = { [key: string]: AssetsIconName };

export type AssetsIconName =
  | {
      [key: string]: AssetsColorType;
    }
  | AssetsIconMetadata;

export type AssetsColorType = { [key: string]: AssetsIconMetadata };

export interface AssetsIconMetadata {
  name: string;
}

export type ImageMultiState = {
  base: string;
  hover?: string;
  active?: string;
  focus?: string;
  disabled?: string;
};

/**
 * Given a vendor and its assets, it register the assets of the vendor. After
 * the registration, the `getAsset` function can be used to retrieve any assets
 * related to the vendor.
 * @param {string} vendorName The name of the vendor (for example, "Mercury"). Must be unique.
 * @param {string} vendorAlias The alias of the vendor (for example, "mer"). Must be unique.
 * @param {any} assets
 */
export const registerAssets = (
  vendorName: string,
  vendorAlias: string,
  assets: Assets
) => {
  // Already registered
  if (ASSETS_BY_VENDOR[vendorName] || ALIAS_TO_VENDOR_NAME[vendorAlias]) {
    return;
  }

  ASSETS_BY_VENDOR[vendorName] = assets;
  ALIAS_TO_VENDOR_NAME[vendorAlias] = vendorName;
};

/**
 * @param vendorAlias The name or alias of the vendor.
 * @param assetMetadata The metadata required to retrieve the icon
 * @return The required asset or undefined if not found.
 */
export const getAsset = (
  vendorAliasOrName: string,
  assetMetadata: AssetsMetadata
): AssetsColorType | AssetsIconMetadata | undefined => {
  const vendorName =
    ALIAS_TO_VENDOR_NAME[vendorAliasOrName] ?? vendorAliasOrName;
  const vendorAssets = ASSETS_BY_VENDOR[vendorName];

  if (!vendorAssets) {
    return undefined;
  }

  const iconCategoryObject = vendorAssets.icons[assetMetadata.category];

  // The category does not exists
  if (!iconCategoryObject) {
    return undefined;
  }
  const iconNameObject = iconCategoryObject[assetMetadata.name];

  // The name in the category does not exists
  if (!iconNameObject) {
    return undefined;
  }

  return assetMetadata.colorType
    ? (
        iconNameObject as {
          [key: string]: AssetsColorType;
        }
      )[assetMetadata.colorType]
    : (iconNameObject as AssetsIconMetadata);
};

/**
 * Given the metadata of the icon, it transforms the metadata into a string
 * that contains the given information.
 */
export const iconMetadataToPath = (
  iconMetadata: AssetsMetadata,
  vendorAlias: string = "mer"
) => {
  const additionalInfo = iconMetadata.colorType
    ? `${SEPARATOR}${iconMetadata.colorType}`
    : "";

  return `${vendorAlias}${SEPARATOR}${iconMetadata.category}${SEPARATOR}${iconMetadata.name}${additionalInfo}` as const;
};

const getCustomFullValue = (
  iconName: string,
  suffix?: "enabled" | "hover" | "active" | "disabled"
) =>
  suffix
    ? (`var(--icon__${iconName}--${suffix})` as const)
    : (`var(--icon__${iconName})` as const);

/**
 * Parses the incoming iconMetadata, assuming Mercury as the default vendor if
 * the vendor is not specified (it is not found in the register)
 */
const parseIconMetadata = (
  iconPath: string
): {
  vendor: string;
  category: string;
  name: string;
  colorType: string | undefined;
} => {
  const iconMetadata = iconPath.split(SEPARATOR);

  const vendorAliasOrName = iconMetadata[0];

  const vendorName =
    ALIAS_TO_VENDOR_NAME[vendorAliasOrName] ?? vendorAliasOrName;
  const vendorAssets = ASSETS_BY_VENDOR[vendorName];

  // The vendor is not contained in the path, assume by default Mercury.
  if (!vendorAssets) {
    const category = iconMetadata[0]; // Assume that the first value is the category
    const name = iconMetadata[1];
    const colorType: string | undefined = iconMetadata[2];

    return {
      vendor: "mer",
      category,
      name,
      colorType: colorType
    };
  }

  const category = iconMetadata[1];
  const name = iconMetadata[2];
  const colorType: string | undefined = iconMetadata[3];

  return {
    vendor: vendorAliasOrName,
    category,
    name,
    colorType: colorType
  };
};

export const getImagePathCallback = (
  iconPath: string
): ImageMultiState | undefined => {
  const { vendor, category, name, colorType } = parseIconMetadata(iconPath);

  if (colorType) {
    const assetStates = getAsset(vendor, { category, name, colorType }) as
      | AssetsColorType
      | undefined;

    if (!assetStates) {
      return undefined;
    }

    const result: ImageMultiState = {
      base: getCustomFullValue(assetStates.enabled.name)
    };

    if (assetStates.hover) {
      result.hover = getCustomFullValue(assetStates.hover.name);
    }

    if (assetStates.active) {
      result.active = getCustomFullValue(assetStates.active.name);
    }

    if (assetStates.disabled) {
      result.disabled = getCustomFullValue(assetStates.disabled.name);
    }

    return result;
  }
  // Monochrome icon without states
  else {
    const assetPath = getAsset(vendor, { category, name }) as
      | AssetsIconMetadata
      | undefined;

    if (!assetPath) {
      return undefined;
    }

    return {
      base: getCustomFullValue(assetPath.name, "enabled")
    };
  }
};

export const getTreeViewImagePathCallback = (
  item: { startImgSrc?: string; endImgSrc?: string },
  direction: "start" | "end"
): { default: ImageMultiState } | undefined => {
  if (
    (!item.startImgSrc && direction === "start") ||
    (!item.endImgSrc && direction === "end")
  ) {
    return undefined;
  }

  const paths = getImagePathCallback(
    direction === "start" ? item.startImgSrc! : item.endImgSrc!
  );

  if (!paths) {
    return undefined;
  }

  return { default: paths };
};

// Initialize Mercury at the start
registerAssets("Mercury", "mer", MERCURY_ASSETS);
