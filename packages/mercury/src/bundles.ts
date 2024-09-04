import { ThemeModel } from "@genexus/chameleon-controls-library";
import { ThemeItemModel } from "@genexus/chameleon-controls-library/dist/types/components/theme/theme-types";

export type MercuryBundles =
  | [MercuryBundleReset, ...MercuryBundleOptimized[]]
  | [MercuryBundleReset, ...MercuryBundleFull[]];

export type MercuryBundleOptimized =
  | MercuryBundleComponent
  | MercuryBundleComponentForm
  | MercuryBundleUtil;

export type MercuryBundleFull =
  | MercuryBundleComponent
  | MercuryBundleUtil
  | MercuryBundleUtilFormFull;

export type MercuryBundleBase = "base/base" | "base/icons";

export type MercuryBundleComponent =
  | "components/accordion"
  | "components/code"
  | "components/dialog"
  | "components/list-box"
  | "components/markdown-viewer"
  | "components/tab"
  | "components/tabular-grid"
  | "components/ticket-list"
  | "components/tree-view";

export type MercuryBundleComponentForm =
  | "components/button"
  | "components/checkbox"
  | "components/combo-box"
  | "components/edit"
  | "components/icon"
  | "components/radio-group"
  | "components/slider";

export type MercuryBundleReset = "resets/box-sizing";

export type MercuryBundleUtil =
  | "utils/form"
  | "utils/layout"
  | "utils/typography"
  // TODO: Use "utils/scrollbar" when the ch-theme supports aliases
  | "chameleon/scrollbar";

export type MercuryBundleUtilFormFull = "utils/form--full";

type BundleNames =
  | MercuryBundleComponent
  | MercuryBundleComponentForm
  | MercuryBundleReset
  | MercuryBundleUtil
  | MercuryBundleUtilFormFull;

const getThemeModelItem = <T extends BundleNames>(
  basePath: string,
  bundleName: T,
  attachStyleSheet: boolean | undefined = undefined
) =>
  attachStyleSheet === undefined
    ? ({
        name: bundleName,
        url: `${basePath}${bundleName}.css`
      } as const satisfies ThemeItemModel)
    : ({
        name: bundleName,
        url: `${basePath}${bundleName}.css`,
        attachStyleSheet
      } as const satisfies ThemeItemModel);

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
export const getThemeBundles = (basePath: string) =>
  [
    // Components
    getThemeModelItem(basePath, "components/accordion"),
    getThemeModelItem(basePath, "components/button"),
    getThemeModelItem(basePath, "components/checkbox"),
    getThemeModelItem(basePath, "components/code"),
    getThemeModelItem(basePath, "components/combo-box"),
    getThemeModelItem(basePath, "components/dialog"),
    getThemeModelItem(basePath, "components/icon"),
    getThemeModelItem(basePath, "components/edit"),
    getThemeModelItem(basePath, "components/list-box"),
    getThemeModelItem(basePath, "components/markdown-viewer", false),
    getThemeModelItem(basePath, "components/radio-group"),
    getThemeModelItem(basePath, "components/slider"),
    getThemeModelItem(basePath, "components/tab"),
    getThemeModelItem(basePath, "components/tabular-grid"),
    getThemeModelItem(basePath, "components/ticket-list"),
    getThemeModelItem(basePath, "components/tree-view"),

    // Resets
    getThemeModelItem(basePath, "resets/box-sizing"),

    // Utils
    getThemeModelItem(basePath, "utils/form"),
    getThemeModelItem(basePath, "utils/form--full"),
    getThemeModelItem(basePath, "utils/layout"),
    getThemeModelItem(basePath, "utils/typography"),
    getThemeModelItem(basePath, "chameleon/scrollbar")
  ] as const satisfies ThemeModel;
