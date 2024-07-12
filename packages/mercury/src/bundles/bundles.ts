export type MercuryBundles = MercuryBundle[];

export type MercuryBundle = MercuryBundleBase | MercuryBundleComponent;

export type MercuryBundleBase = "base" | "icons";

export type MercuryBundleComponent =
  | "checkbox"
  | "code"
  | "combo-box"
  | "dialog"
  | "radio-group"
  | "tab"
  | "tabular-grid"
  | "tree-view";
