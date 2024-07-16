export type MercuryBundles = MercuryBundleOptimized[] | MercuryBundleFull[];

export type MercuryBundleOptimized =
  | MercuryBundleBase
  | MercuryBundleComponent
  | MercuryBundleComponentForm
  | MercuryBundleReset
  | MercuryBundleUtil;

export type MercuryBundleFull =
  | MercuryBundleBase
  | MercuryBundleComponent
  | MercuryBundleReset
  | MercuryBundleUtil
  | MercuryBundleUtilFormFull;

export type MercuryBundleBase = "base/base" | "base/icons";

export type MercuryBundleComponent =
  | "components/code"
  | "components/dialog"
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
