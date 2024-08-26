import { ThemeModel } from "@genexus/chameleon-controls-library";

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

export type MercuryBundleBase =
  | "base/base"
  | "base/icons"
  | "chameleon/scrollbar";

export type MercuryBundleComponent =
  | "components/accordion"
  | "components/code"
  | "components/dialog"
  | "components/markdown-viewer"
  | "components/tab"
  | "components/tabular-grid"
  | "components/tree-view";

export type MercuryBundleComponentForm =
  | "components/button"
  | "components/checkbox"
  | "components/combo-box"
  | "components/edit"
  | "components/radio-group";

export type MercuryBundleReset = "resets/box-sizing";

export type MercuryBundleUtil =
  | "utils/form"
  | "utils/layout"
  | "utils/typography";

export type MercuryBundleUtilFormFull = "utils/form--full";

type BundleNames =
  | MercuryBundleComponent
  | MercuryBundleComponentForm
  | MercuryBundleReset
  | MercuryBundleUtil
  | MercuryBundleUtilFormFull;

const getThemeModelItem = <T extends BundleNames>(
  basePath: string,
  bundleName: T
) =>
  ({
    name: bundleName,
    url: `${basePath}${bundleName}.css`
  } as const);

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
    getThemeModelItem(basePath, "components/edit"),
    getThemeModelItem(basePath, "components/markdown-viewer"),
    getThemeModelItem(basePath, "components/radio-group"),
    getThemeModelItem(basePath, "components/tab"),
    getThemeModelItem(basePath, "components/tabular-grid"),
    getThemeModelItem(basePath, "components/tree-view"),

    // Resets
    getThemeModelItem(basePath, "resets/box-sizing"),

    // Utils
    getThemeModelItem(basePath, "utils/form"),
    getThemeModelItem(basePath, "utils/form--full"),
    getThemeModelItem(basePath, "utils/layout"),
    getThemeModelItem(basePath, "utils/typography")
  ] as const satisfies ThemeModel;
