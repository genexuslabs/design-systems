import { ComponentMetadata } from "../../../common/types";

export const treeViewMetadata = {
  title: "Tree View",
  description:
    "A custom tree component is a hierarchical UI element that visually represents a nested data structure, allowing users to expand and collapse branches. It's commonly used for navigating directories, organizing data, and managing complex relationships within a user-friendly interface.",
  codeSnippets: {
    noIcons: {
      linkId: "no-icons",
      title: "1. No icons",
      template: [
        {
          tag: "ch-tree-view-render",
          class: "tree-view",
          properties: [{ name: "showLines", value: "last" }]
        }
      ]
    },

    withIcons: {
      linkId: "with-icons",
      title: "2. With icons",
      template: [
        {
          tag: "ch-tree-view-render",
          class: "tree-view",
          properties: [{ name: "showLines", value: "all" }]
        }
      ]
    },

    withCheckboxes: {
      linkId: "checkboxes",
      title: "3. Checkboxes",
      template: [
        {
          tag: "ch-tree-view-render",
          class: "tree-view",
          properties: [
            { name: "checkbox", value: true },
            { name: "showLines", value: "all" }
          ]
        }
      ]
    },

    showLinesLast: {
      linkId: "show-last-line",
      title: "4. Show Lines: Last",
      template: [
        {
          tag: "ch-tree-view-render",
          class: "tree-view",
          properties: [{ name: "showLines", value: "last" }]
        }
      ]
    },

    showLinesNone: {
      linkId: "show-last-none",
      title: "5. Show Lines: None",
      template: [
        {
          tag: "ch-tree-view-render",
          class: "tree-view"
        }
      ]
    }
  }
} as const satisfies ComponentMetadata;
