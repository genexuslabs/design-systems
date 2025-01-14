export type UnanimoBundles =
  | [UnanimoBundleReset, ...UnanimoBundleOptimized[]]
  | [UnanimoBundleReset, ...UnanimoBundleFull[]];

export type UnanimoBundleOptimized =
  | UnanimoBundleComponent
  | UnanimoBundleComponentForm
  | UnanimoBundleUtil;

export type UnanimoBundleFull =
  | UnanimoBundleComponent
  | UnanimoBundleUtil
  | UnanimoBundleUtilFormFull;

// TODO: Add the "base/icons" bundle
export type UnanimoBundleBase = "base/base" | "base/icons";

export type UnanimoBundleComponent =
  | "components/accordion"
  | "components/chat"
  | "components/code"
  | "components/dialog"
  | "components/dropdown"
  | "components/flexible-layout"
  | "components/layout-splitter"
  | "components/list-box" // TODO: Add this component
  | "components/markdown-viewer"
  | "components/navigation-list"
  | "components/pills" // TODO: Add this component
  | "components/segmented-control"
  | "components/sidebar"
  | "components/tab"
  | "components/tabular-grid" // TODO: Add this component
  | "components/ticket-list" // TODO: Add this component
  | "components/tooltip" // TODO: Add this component
  | "components/tree-view"
  | "components/widget"; // TODO: Add this component

export type UnanimoBundleComponentForm =
  | "components/button"
  | "components/checkbox"
  | "components/combo-box"
  | "components/edit"
  | "components/icon"
  | "components/radio-group"
  | "components/slider"
  | "components/switch";

export type UnanimoBundleReset = "resets/box-sizing";

export type UnanimoBundleUtil =
  | "utils/elevation" // TODO: Add this bundle
  | "utils/form" // TODO: Add this bundle
  | "utils/layout" // TODO: Add this bundle
  | "utils/spacing" // TODO: Add this bundle
  | "utils/typography"
  // TODO: Use "utils/scrollbar" when the ch-theme supports aliases
  | "chameleon/scrollbar"; // TODO: Add this bundle

export type UnanimoBundleUtilFormFull = "utils/form--full";
