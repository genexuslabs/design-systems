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
export const suggestOptions = signal({
  alreadyProcessed: false,
  autoExpand: true,
  hideMatchesAndShowNonMatches: false,
  highlightMatchedItems: false,
  matchCase: false,
  regularExpression: false,
  strict: false
});

export const fruitsTabModel = signal<TabModel>([
  { id: "apples", name: "Apples" },
  { id: "bananas", name: "Bananas" },
  { id: "cherries", name: "Cherries" }
]);

export const objectsTreeViewModel = signal<TreeViewModel>([
  {
    id: "root",
    caption: "GeneXusNext Develop",
    startImgSrc: getIconPath({ category: "objects", name: "version" }),
    expanded: true,
    leaf: false,
    items: [
      {
        id: "Main_Programs",
        caption: "Main Programs",
        startImgSrc: getIconPath({ category: "objects", name: "category" }),
        expanded: true,
        items: [
          {
            id: "Main_Programs.Prompt",
            caption: "Prompt",
            startImgSrc: getIconPath({
              category: "objects",
              name: "panel-for-sd"
            }),
            leaf: true,
            metadata: "Panel"
          },
          {
            id: "Main_Programs.ApiHealthCheck",
            caption: "ApiHealthCheck",
            startImgSrc: getIconPath({ category: "objects", name: "api" }),
            leaf: true
          },
          {
            id: "Main_Programs.BackHome",
            caption: "BackHome",
            startImgSrc: getIconPath({
              category: "objects",
              name: "web-panel"
            }),
            leaf: true
          },
          {
            id: "Main_Programs.Login",
            caption: "Login",
            startImgSrc: getIconPath({
              category: "objects",
              name: "web-panel"
            }),
            leaf: true
          },
          {
            id: "Main_Programs.ProvisioningServices",
            caption: "ProvisioningServices",
            startImgSrc: getIconPath({ category: "objects", name: "api" }),
            leaf: true
          },
          {
            id: "Main_Programs.VersionCheck",
            caption: "VersionCheck",
            startImgSrc: getIconPath({
              category: "objects",
              name: "procedure"
            }),
            leaf: true
          }
        ]
      },
      {
        id: "Root_Module",
        caption: "Root Module",
        startImgSrc: getIconPath({ category: "objects", name: "module" }),
        expanded: false,
        items: [
          {
            id: "Root_Module.Images",
            caption: "Images",
            startImgSrc: getIconPath({ category: "objects", name: "image" }),
            leaf: true
          },
          {
            id: "Root_Module.GXNext",
            caption: "GXNext",
            startImgSrc: getIconPath({ category: "objects", name: "dso" }),
            leaf: true
          },
          {
            id: "Root_Module.GeneXusNext",
            caption: "GeneXusNext",
            startImgSrc: getIconPath({ category: "objects", name: "dso" }),
            leaf: true
          },
          {
            id: "Root_Module.Files",
            caption: "Files",
            startImgSrc: getIconPath({ category: "objects", name: "file" }),
            leaf: true
          },
          {
            id: "Root_Module.Domain",
            caption: "Domain ",
            startImgSrc: getIconPath({ category: "objects", name: "file" }),
            leaf: true
          }
        ]
      },
      {
        id: "References",
        caption: "References",
        startImgSrc: getIconPath({ category: "objects", name: "references" }),
        leaf: true
      },
      {
        id: "Customization",
        caption: "Customization",
        startImgSrc: getIconPath({
          category: "objects",
          name: "customization"
        }),
        expanded: true,
        items: [
          {
            id: "Customization.Files",
            caption: "Files",
            startImgSrc: getIconPath({ category: "objects", name: "file" }),
            leaf: true
          },
          {
            id: "Customization.Images",
            caption: "Images",
            startImgSrc: getIconPath({ category: "objects", name: "image" }),
            leaf: true
          }
        ]
      },
      {
        id: "Documentation",
        caption: "Documentation",
        startImgSrc: getIconPath({ category: "objects", name: "document" }),
        leaf: true
      }
    ]
  }
]);

export const pillsModel = signal<ComboBoxModel>([
  {
    value: "enabled",
    caption: "Enabled"
  },
  {
    value: "processing",
    caption: "Processing"
  },
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
