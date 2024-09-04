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
];
