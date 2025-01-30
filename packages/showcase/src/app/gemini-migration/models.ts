import type {
  ActionListModel,
  ComboBoxModel,
  RadioGroupModel,
  TabModel
} from "@genexus/chameleon-controls-library";

// TODO: Fix action list issue when clicking on an item
export const favoriteColorsActionListModel: ActionListModel = [
  {
    id: "red",
    type: "actionable",
    caption: "Red"
  },
  {
    id: "blue",
    type: "actionable",
    caption: "Blue"
  },
  {
    id: "green",
    type: "actionable",
    caption: "Green"
  },
  {
    id: "yellow",
    type: "actionable",
    caption: "Yellow"
  },
  {
    id: "purple",
    type: "actionable",
    caption: "Purple"
  }
];

export const favoriteColorsComboBoxModel: ComboBoxModel = [
  {
    value: "red",
    caption: "Red"
  },
  {
    value: "blue",
    caption: "Blue"
  },
  {
    value: "green",
    caption: "Green"
  },
  {
    value: "yellow",
    caption: "Yellow"
  },
  {
    value: "purple",
    caption: "Purple"
  }
];

export const carsComboBoxModel: ComboBoxModel = [
  {
    value: "audi",
    caption: "Audi"
  },
  {
    value: "bmw",
    caption: "BMW"
  },
  {
    value: "citroen",
    caption: "Citroen"
  },
  {
    value: "ford",
    caption: "Ford"
  }
];

export const favoriteColorsRadioGroupModel: RadioGroupModel = [
  {
    value: "red",
    caption: "Red"
  },
  {
    value: "blue",
    caption: "Blue"
  },
  {
    value: "green",
    caption: "Green"
  },
  {
    value: "yellow",
    caption: "Yellow"
  },
  {
    value: "purple",
    caption: "Purple"
  }
];

export const favoriteColorsSuggestModel: ComboBoxModel = [
  {
    value: "red",
    caption: "Red"
  },
  {
    value: "blue",
    caption: "Blue"
  },
  {
    value: "green",
    caption: "Green"
  },
  {
    value: "yellow",
    caption: "Yellow"
  },
  {
    value: "purple",
    caption: "Purple"
  }
];

// export const suggestOptions = signal({
//   alreadyProcessed: false,
//   autoExpand: true,
//   hideMatchesAndShowNonMatches: false,
//   highlightMatchedItems: false,
//   matchCase: false,
//   regularExpression: false,
//   strict: false
// });

export const fruitsTabModel: TabModel = [
  { id: "apples", name: "Apples" },
  { id: "bananas", name: "Bananas" },
  { id: "cherries", name: "Cherries" }
];

export const pillsModel: ComboBoxModel = [
  {
    value: "success",
    caption: "Success"
  },
  {
    value: "error",
    caption: "Error"
  },
  {
    value: "warning",
    caption: "Warning"
  }
];

export const objectsAccordionModel = [
  {
    id: "file",
    caption: "objects: file",
    expanded: true
  },
  {
    id: "domain",
    caption: "objects: domain"
  },
  {
    id: "procedure",
    caption: "objects: procedure"
  },
  {
    id: "document",
    caption: "objects: document"
  }
];
