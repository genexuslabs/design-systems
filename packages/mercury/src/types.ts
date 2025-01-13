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
  | "components/chat"
  | "components/code"
  | "components/dialog"
  | "components/dropdown"
  | "components/flexible-layout"
  | "components/layout-splitter"
  | "components/list-box"
  | "components/markdown-viewer"
  | "components/navigation-list"
  | "components/pills"
  | "components/segmented-control"
  | "components/sidebar"
  | "components/tab"
  | "components/tabular-grid"
  | "components/ticket-list"
  | "components/tooltip"
  | "components/tree-view"
  | "components/widget";

export type MercuryBundleComponentForm =
  | "components/button"
  | "components/checkbox"
  | "components/combo-box"
  | "components/edit"
  | "components/icon"
  | "components/radio-group"
  | "components/slider"
  | "components/switch";

export type MercuryBundleReset = "resets/box-sizing";

export type MercuryBundleUtil =
  | "utils/elevation"
  | "utils/form"
  | "utils/layout"
  | "utils/spacing"
  | "utils/typography"
  // TODO: Use "utils/scrollbar" when the ch-theme supports aliases
  | "chameleon/scrollbar";

export type MercuryBundleUtilFormFull = "utils/form--full";

export type MercuryBundleMapping = {
  [key in
    | MercuryBundleComponent
    | MercuryBundleComponentForm
    | MercuryBundleReset
    | MercuryBundleUtil
    | MercuryBundleUtilFormFull]: `${key}-${string}`;
};

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
 *     objects: { // Category
 *       stencil: { // Icon Name
 *         enabled: { // State
 *           name: "objects_stencil--enabled"
 *         }
 *       },
 *     },
 *     windows-tools: { // Category
 *       workflow: { // Icon Name
 *         "on-surface": { // Color Type
 *           enabled: { // State
 *             name: "windows-tools_workflow_on-surface--enabled"
 *           },
 *           hover: {
 *             name: "windows-tools_workflow_on-surface--hover"
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
  | AssetsColorType;

export type AssetsColorType = { [key: string]: AssetsIconMetadata };

export interface AssetsIconMetadata {
  name: string;
}
