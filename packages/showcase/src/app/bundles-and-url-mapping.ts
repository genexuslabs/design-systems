export const COMPONENT_ROUTES = {
  ACCORDION: "/components/accordion",
  BUTTON: "/components/button",
  CHECKBOX: "/components/checkbox",
  COMBO_BOX: "/components/combo-box",
  DIALOG: "/components/dialog",
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

export const bundleMapping = {
  [COMPONENT_ROUTES.ACCORDION]: "components/accordion",
  [COMPONENT_ROUTES.BUTTON]: "components/button",
  [COMPONENT_ROUTES.CHECKBOX]: "components/checkbox",
  [COMPONENT_ROUTES.COMBO_BOX]: "components/combo-box",
  [COMPONENT_ROUTES.DIALOG]: "components/dialog",
  [COMPONENT_ROUTES.INPUT]: "components/edit",
  [COMPONENT_ROUTES.LABEL]: "utils/form",
  [COMPONENT_ROUTES.RADIO_GROUP]: "components/radio-group",
  [COMPONENT_ROUTES.SEARCH]: "components/edit",
  [COMPONENT_ROUTES.SLIDER]: "components/slider",
  [COMPONENT_ROUTES.TREE_VIEW]: "components/tree-view",

  "/utility-classes/elevation": "utils/elevation"
} as const;

export const URL_MAPPING = {
  [COMPONENT_ROUTES.ACCORDION]: "Accordion",
  [COMPONENT_ROUTES.BUTTON]: "Button",
  [COMPONENT_ROUTES.CHECKBOX]: "Checkbox",
  [COMPONENT_ROUTES.COMBO_BOX]: "Combo Box",
  [COMPONENT_ROUTES.DIALOG]: "Dialog",
  [COMPONENT_ROUTES.INPUT]: "Input",
  [COMPONENT_ROUTES.LABEL]: "Label",
  [COMPONENT_ROUTES.LIST_BOX]: "List box",
  [COMPONENT_ROUTES.PILLS]: "Pills",
  [COMPONENT_ROUTES.PROPERTY_GRID]: "Property Grid",
  [COMPONENT_ROUTES.RADIO_GROUP]: "Radio Group",
  [COMPONENT_ROUTES.SEARCH]: "Search",
  [COMPONENT_ROUTES.SLIDER]: "Slider",
  [COMPONENT_ROUTES.TAB]: "Tab",
  [COMPONENT_ROUTES.TABULAR_GRID]: "Tabular Grid",
  [COMPONENT_ROUTES.TOOLTIP]: "Tooltip",
  [COMPONENT_ROUTES.TREE_VIEW]: "Tree View",
  [COMPONENT_ROUTES.WIDGET]: "Widget",

  "/introduction/what-is-mercury": "What is Mercury?",
  "/introduction/what-is-unanimo": "What is Unanimo?",
  "/introduction/installation/angular": "Installation Angular",
  "/introduction/installation/react": "Installation React",
  "/introduction/installation/stencil-js": "Installation StencilJS",

  "/utility-classes/elevation": "Elevation",
  "/icons": "Icons",
  "/chameleon-compatibility": "Chameleon Compatibility"
} as const;
