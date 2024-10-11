const getThemeModelItem = (basePath, bundleName, attachStyleSheet = undefined) => attachStyleSheet === undefined
    ? {
        name: bundleName,
        url: `${basePath}${bundleName}.css`
    }
    : {
        name: bundleName,
        url: `${basePath}${bundleName}.css`,
        attachStyleSheet
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
export const getThemeBundles = (basePath) => [
    // Components
    getThemeModelItem(basePath, "components/accordion"),
    getThemeModelItem(basePath, "components/button"),
    getThemeModelItem(basePath, "components/chat"),
    getThemeModelItem(basePath, "components/checkbox"),
    getThemeModelItem(basePath, "components/code"),
    getThemeModelItem(basePath, "components/combo-box"),
    getThemeModelItem(basePath, "components/flexible-layout"),
    getThemeModelItem(basePath, "components/dialog"),
    getThemeModelItem(basePath, "components/icon"),
    getThemeModelItem(basePath, "components/edit"),
    getThemeModelItem(basePath, "components/list-box"),
    getThemeModelItem(basePath, "components/markdown-viewer", false),
    getThemeModelItem(basePath, "components/navigation-list"),
    getThemeModelItem(basePath, "components/pills"),
    getThemeModelItem(basePath, "components/radio-group"),
    getThemeModelItem(basePath, "components/segmented-control"),
    getThemeModelItem(basePath, "components/sidebar"),
    getThemeModelItem(basePath, "components/slider"),
    getThemeModelItem(basePath, "components/tab"),
    getThemeModelItem(basePath, "components/tabular-grid"),
    getThemeModelItem(basePath, "components/ticket-list"),
    getThemeModelItem(basePath, "components/tooltip"),
    getThemeModelItem(basePath, "components/tree-view"),
    getThemeModelItem(basePath, "components/widget"),
    // Resets
    getThemeModelItem(basePath, "resets/box-sizing"),
    // Utils
    getThemeModelItem(basePath, "utils/form"),
    getThemeModelItem(basePath, "utils/form--full"),
    getThemeModelItem(basePath, "utils/layout"),
    getThemeModelItem(basePath, "utils/typography"),
    getThemeModelItem(basePath, "chameleon/scrollbar")
];
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
 *   "./assets/css/"
 * );
 *
 * HTML/render/template:
 *   <Host>
 *     <ch-theme model={CSS_BUNDLES}></ch-theme>
 *     ...
 *   </Host>
 * ```
 */
export const getBundles = (bundles, basePath) => basePath
    ? bundles.map(bundle => getThemeModelItem(basePath, bundle))
    : bundles;
