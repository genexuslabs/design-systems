import { ComponentMetadata } from "../../../common/types";

const COMPONENT_CLASS = "tree-view";

export const treeViewMetadata = {
  title: "Tree View",
  description:
    "A custom tree component is a hierarchical UI element that visually represents a nested data structure, allowing users to expand and collapse branches. It's commonly used for navigating directories, organizing data, and managing complex relationships within a user-friendly interface.",
  codeSnippets: {
    noIcons: {
      linkId: "default",
      title: "1. Default",
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS
      }
    },

    showLinesLast: {
      linkId: "show-lines-last",
      title: "2. Show Lines: Last",
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS,
        properties: [{ name: "showLines", value: "last" }]
      }
    },

    showLinesAll: {
      linkId: "show-lines-all",
      title: "3. Show Lines: All",
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS,
        properties: [{ name: "showLines", value: "all" }]
      }
    },

    withIcons: {
      linkId: "with-icons",
      title: "4. With icons",
      template: {
        tag: "ch-tree-view-render",
        class: COMPONENT_CLASS,
        properties: [{ name: "showLines", value: "last" }]
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
          { name: "showLines", value: "all" },
          { name: "toggleCheckboxes", value: true }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
