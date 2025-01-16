import { signal } from "@angular/core";
import { getIconPath } from "@genexus/mercury/assets-manager.js";
import type {
  ActionListItemModel,
  ComboBoxModel,
  RadioGroupModel,
  TabModel,
  TreeViewModel
} from "@genexus/chameleon-controls-library";

export const favoriteColorsActionListModel = signal<ActionListItemModel[]>([
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
]);

export const favoriteColorsComboBoxModel = signal<ComboBoxModel>([
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
]);

export const favoriteColorsRadioGroupModel = signal<RadioGroupModel>([
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
]);

export const favoriteColorsSuggestModel = signal<ComboBoxModel>([
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
]);

// export const suggestOptions = signal({
//   alreadyProcessed: false,
//   autoExpand: true,
//   hideMatchesAndShowNonMatches: false,
//   highlightMatchedItems: false,
//   matchCase: false,
//   regularExpression: false,
//   strict: false
// });

export const fruitsTabModel = signal<TabModel>([
  { id: "apples", name: "Apples" },
  { id: "bananas", name: "Bananas" },
  { id: "cherries", name: "Cherries" }
]);

export const pillsModel = signal<ComboBoxModel>([
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
]);
