import { ComponentMetadata } from "../../../common/types";
import { chameleonImportType } from "../../../services/template-language/create-template";
import { iconsModelForMetadata, noIconsModel } from "./models";

const COMPONENT_CLASS = "tree-view";

export const treeViewMetadata = {
  title: "Tree View",
  description:
    "A custom tree component is a hierarchical UI element that visually represents a nested data structure, allowing users to expand and collapse branches. It's commonly used for navigating directories, organizing data, and managing complex relationships within a user-friendly interface.",
  codeSnippets: {
    noIcons: {
      linkId: "default",
      title: "1. Default",
      states: [
        { name: "treeViewModel", type: "TreeViewModel", value: noIconsModel }
      ],
      imports: [chameleonImportType("TreeViewModel")],
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS,
        properties: [{ name: "model", value: "treeViewModel", state: true }]
      }
    },

    showLinesLast: {
      linkId: "show-lines-last",
      title: "2. Show Lines: Last",
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "model", value: "...", variable: true },
          { name: "showLines", value: "last" }
        ]
      }
    },

    showLinesAll: {
      linkId: "show-lines-all",
      title: "3. Show Lines: All",
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "model", value: "...", variable: true },
          { name: "showLines", value: "all" }
        ]
      }
    },

    withIcons: {
      linkId: "with-icons",
      title: "4. With icons",
      imports: [
        chameleonImportType("TreeViewModel"),
        'import { getIconPath, getIconPathExpanded } from "@genexus/mercury/assets-manager.js";'
      ],
      states: [
        {
          name: "treeViewModel",
          type: "TreeViewModel",
          value: iconsModelForMetadata
        }
      ],
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "model", value: "treeViewModel", state: true },
          { name: "showLines", value: "last" }
        ]
      }
    },

    withCheckboxes: {
      linkId: "checkboxes",
      title: "5. Checkboxes",
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "checkbox", value: true },
          { name: "model", value: "...", variable: true },
          { name: "showLines", value: "all" },
          { name: "toggleCheckboxes", value: true }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
