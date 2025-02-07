export const COMPONENTS_ROUTES = {
  ACCORDION: "/components/accordion",
  BUTTON: "/components/button",
  CHECKBOX: "/components/checkbox",
  COMBO_BOX: "/components/combo-box",
  DIALOG: "/components/dialog",
  ICON: "/components/icon",
  INPUT: "/components/input",
  LABEL: "/components/label",
  LIST_BOX: "/components/list-box",
  PILLS: "/components/pills",
  PROPERTY_GRID: "/components/property-grid",
  RADIO_GROUP: "/components/radio-group",
  SEARCH: "/components/search",
  SLIDER: "/components/slider",
  TAB: "/components/tab",
  TABULAR_GRID: "/components/tabular-grid",
  TOOLTIP: "/components/tooltip",
  TREE_VIEW: "/components/tree-view",
  WIDGET: "/components/widget"
} as const;

export const UTILITY_CLASSES_ROUTES = {
  ELEVATION: "/utility-classes/elevation",
  FORM: "/utility-classes/form",
  LAYOUT: "/utility-classes/layout",
  SPACING: "/utility-classes/spacing",
  TYPOGRAPHY: "/utility-classes/typography"
} as const;

export const STANDALONE_ROUTES = {
  ICONS: "/icons",
  GEMINI_MIGRATION: "/gemini-migration",
  TOKENS_GENERATOR: "/tokens-generator"
} as const;

export const bundleMapping = {
  [COMPONENTS_ROUTES.ACCORDION]: "components/accordion",
  [COMPONENTS_ROUTES.BUTTON]: "components/button",
  [COMPONENTS_ROUTES.CHECKBOX]: "components/checkbox",
  [COMPONENTS_ROUTES.COMBO_BOX]: "components/combo-box",
  [COMPONENTS_ROUTES.DIALOG]: "components/dialog",
  [COMPONENTS_ROUTES.ICON]: "components/icon",
  [COMPONENTS_ROUTES.INPUT]: "components/edit",
  [COMPONENTS_ROUTES.LABEL]: "utils/form",
  [COMPONENTS_ROUTES.RADIO_GROUP]: "components/radio-group",
  [COMPONENTS_ROUTES.SEARCH]: "components/edit",
  [COMPONENTS_ROUTES.SLIDER]: "components/slider",
  [COMPONENTS_ROUTES.TREE_VIEW]: "components/tree-view",

  [UTILITY_CLASSES_ROUTES.ELEVATION]: "utils/elevation",
  [UTILITY_CLASSES_ROUTES.FORM]: "utils/form",
  [UTILITY_CLASSES_ROUTES.LAYOUT]: "utils/layout",
  [UTILITY_CLASSES_ROUTES.SPACING]: "utils/spacing",
  [UTILITY_CLASSES_ROUTES.TYPOGRAPHY]: "utils/typography"
} as const;

export const URL_MAPPING = {
  [COMPONENTS_ROUTES.ACCORDION]: "Accordion",
  [COMPONENTS_ROUTES.BUTTON]: "Button",
  [COMPONENTS_ROUTES.CHECKBOX]: "Checkbox",
  [COMPONENTS_ROUTES.COMBO_BOX]: "Combo Box",
  [COMPONENTS_ROUTES.DIALOG]: "Dialog",
  [COMPONENTS_ROUTES.ICON]: "Icon",
  [COMPONENTS_ROUTES.INPUT]: "Input",
  [COMPONENTS_ROUTES.LABEL]: "Label",
  [COMPONENTS_ROUTES.LIST_BOX]: "List box",
  [COMPONENTS_ROUTES.PILLS]: "Pills",
  [COMPONENTS_ROUTES.PROPERTY_GRID]: "Property Grid",
  [COMPONENTS_ROUTES.RADIO_GROUP]: "Radio Group",
  [COMPONENTS_ROUTES.SEARCH]: "Search",
  [COMPONENTS_ROUTES.SLIDER]: "Slider",
  [COMPONENTS_ROUTES.TAB]: "Tab",
  [COMPONENTS_ROUTES.TABULAR_GRID]: "Tabular Grid",
  [COMPONENTS_ROUTES.TOOLTIP]: "Tooltip",
  [COMPONENTS_ROUTES.TREE_VIEW]: "Tree View",
  [COMPONENTS_ROUTES.WIDGET]: "Widget",

  "/introduction/what-is-mercury": "What is Mercury?",
  "/introduction/what-is-unanimo": "What is Unanimo?",
  "/introduction/installation/angular": "Installation Angular",
  "/introduction/installation/react": "Installation React",
  "/introduction/installation/stencil-js": "Installation StencilJS",

  [UTILITY_CLASSES_ROUTES.ELEVATION]: "Elevation",
  [UTILITY_CLASSES_ROUTES.FORM]: "Form",
  [UTILITY_CLASSES_ROUTES.LAYOUT]: "Layout",
  [UTILITY_CLASSES_ROUTES.SPACING]: "Spacing",
  [UTILITY_CLASSES_ROUTES.TYPOGRAPHY]: "Typography",

  [STANDALONE_ROUTES.ICONS]: "Icons",
  [STANDALONE_ROUTES.GEMINI_MIGRATION]: "Gemini Migration",
  [STANDALONE_ROUTES.TOKENS_GENERATOR]: "Tokens Generator",

  "/chameleon-compatibility": "Chameleon Compatibility"
} as const;
