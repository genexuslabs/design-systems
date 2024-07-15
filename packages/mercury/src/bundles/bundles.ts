export type MercuryBundles = MercuryBundle[];

export type MercuryBundle =
  | MercuryBundleBase
  | MercuryBundleComponent
  | MercuryBundleReset
  | MercuryBundleUtil;

export type MercuryBundleBase = "base/base" | "base/icons";

export type MercuryBundleComponent =
  | "components/button"
  | "components/checkbox"
  | "components/code"
  | "components/combo-box"
  | "components/dialog"
  | "components/edit"
  | "components/radio-group"
  | "components/tab"
  | "components/tabular-grid"
  | "components/tree-view";

export type MercuryBundleReset = "resets/box-sizing";

export type MercuryBundleUtil =
  | "utils/form"
  | "utils/form--full"
  | "utils/layout"
  | "utils/typography";
