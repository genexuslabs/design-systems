import type { ThemeModel } from "@genexus/chameleon-controls-library";
import type { ThemeItemModel } from "@genexus/chameleon-controls-library/dist/types/components/theme/theme-types.d.ts";
import type {
  UnanimoBundleComponent,
  UnanimoBundleComponentForm,
  UnanimoBundleFull,
  UnanimoBundleOptimized,
  UnanimoBundleReset,
  UnanimoBundleUtil,
  UnanimoBundleUtilFormFull
} from "./types.ts";

type BundleNames =
  | UnanimoBundleComponent
  | UnanimoBundleComponentForm
  | UnanimoBundleReset
  | UnanimoBundleUtil
  | UnanimoBundleUtilFormFull;

const getThemeModelItem = <T extends BundleNames, S extends string>(
  basePath: string,
  bundleName: T,
  bundleNamePrefix: S | undefined,
  attachStyleSheet: boolean | undefined = undefined
) => {
  const bundleNameWithPrefix = bundleNamePrefix
    ? bundleNamePrefix + bundleName
    : bundleName;
  const bundleURL = `${basePath}${bundleName}.css`;

  return attachStyleSheet === undefined
    ? ({
        name: bundleNameWithPrefix,
        url: bundleURL
      } as const satisfies ThemeItemModel)
    : ({
        name: bundleNameWithPrefix,
        url: bundleURL,
        attachStyleSheet
      } as const satisfies ThemeItemModel);
};

/**
 * Given the basePath, returns all bundles (except base and icons) in the
 * format of type `ThemeModel`.
 *
 * This is useful for defining the following in an `index.html`:
 *
 * ```tsx
 * const THEME_BUNDLES = getThemeBundles("<base path>");
 *
 * HTML/render/template:
 *   <body>
 *     <ch-theme model={THEME_BUNDLES}></ch-theme>
 *     ...
 *   </body>
 * ```
 */
export const getThemeBundles = (basePath: string, bundleNamePrefix?: string) =>
  [
    // Components
    getThemeModelItem(basePath, "components/accordion", bundleNamePrefix),
    getThemeModelItem(basePath, "components/button", bundleNamePrefix),
    getThemeModelItem(basePath, "components/chat", bundleNamePrefix),
    getThemeModelItem(basePath, "components/checkbox", bundleNamePrefix),
    getThemeModelItem(basePath, "components/code", bundleNamePrefix),
    getThemeModelItem(basePath, "components/combo-box", bundleNamePrefix),
    getThemeModelItem(basePath, "components/flexible-layout", bundleNamePrefix),
    getThemeModelItem(basePath, "components/dialog", bundleNamePrefix),
    getThemeModelItem(basePath, "components/dropdown", bundleNamePrefix),
    getThemeModelItem(basePath, "components/icon", bundleNamePrefix),
    getThemeModelItem(basePath, "components/edit", bundleNamePrefix),
    getThemeModelItem(basePath, "components/layout-splitter", bundleNamePrefix),
    getThemeModelItem(basePath, "components/list-box", bundleNamePrefix),
    getThemeModelItem(
      basePath,
      "components/markdown-viewer",
      bundleNamePrefix,
      false
    ),
    getThemeModelItem(basePath, "components/navigation-list", bundleNamePrefix),
    getThemeModelItem(basePath, "components/pills", bundleNamePrefix),
    getThemeModelItem(basePath, "components/radio-group", bundleNamePrefix),
    getThemeModelItem(
      basePath,
      "components/segmented-control",
      bundleNamePrefix
    ),
    getThemeModelItem(basePath, "components/sidebar", bundleNamePrefix),
    getThemeModelItem(basePath, "components/slider", bundleNamePrefix),
    getThemeModelItem(basePath, "components/tab", bundleNamePrefix),
    getThemeModelItem(basePath, "components/tabular-grid", bundleNamePrefix),
    getThemeModelItem(basePath, "components/ticket-list", bundleNamePrefix),
    getThemeModelItem(basePath, "components/toggle", bundleNamePrefix),
    getThemeModelItem(basePath, "components/tooltip", bundleNamePrefix),
    getThemeModelItem(basePath, "components/tree-view", bundleNamePrefix),
    getThemeModelItem(basePath, "components/widget", bundleNamePrefix),

    // Resets
    getThemeModelItem(basePath, "resets/box-sizing", bundleNamePrefix),

    // Utils
    getThemeModelItem(basePath, "utils/form", bundleNamePrefix),
    getThemeModelItem(basePath, "utils/elevation", bundleNamePrefix),
    getThemeModelItem(basePath, "utils/form--full", bundleNamePrefix),
    getThemeModelItem(basePath, "utils/layout", bundleNamePrefix),
    getThemeModelItem(basePath, "utils/spacing", bundleNamePrefix),
    getThemeModelItem(basePath, "utils/typography", bundleNamePrefix),
    getThemeModelItem(basePath, "chameleon/scrollbar", bundleNamePrefix)
  ] as const satisfies ThemeModel;

const addPrefixToBundleNames = (
  bundles: UnanimoBundleOptimized[] | UnanimoBundleFull[],
  bundleNamePrefix?: string
) =>
  bundleNamePrefix ? bundles.map(bundle => bundleNamePrefix + bundle) : bundles;

/**
 * Given the bundles array and the basePath (optional), returns the given
 * bundles in the format of type `ThemeModel`.
 *
 * This is useful for defining the following in a dialog:
 *
 * ```tsx
 * const CSS_BUNDLES: ThemeModel = getBundles(
 *   [
 *     "components/accordion",
 *     "components/button",
 *     "components/checkbox",
 *     "components/combo-box",
 *     "components/edit",
 *     "components/tree-view",
 *     "utils/form",
 *     "utils/layout",
 *   ],
 *   "./assets/css/", (optional)
 *   "unanimo" (optional)
 * );
 *
 * HTML/render/template:
 *   <Host>
 *     <ch-theme model={CSS_BUNDLES}></ch-theme>
 *     ...
 *   </Host>
 * ```
 */
export const getBundles = (
  bundles: UnanimoBundleOptimized[] | UnanimoBundleFull[],
  basePath?: string,
  bundleNamePrefix?: string
): ThemeModel =>
  basePath
    ? bundles.map(bundle =>
        getThemeModelItem(basePath, bundle, bundleNamePrefix)
      )
    : addPrefixToBundleNames(bundles, bundleNamePrefix);
