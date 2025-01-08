import { ComponentMetadata } from "../../../common/types";

export const treeViewMetadata = {
  title: "Tree View",
  description:
    "A custom tree component is a hierarchical UI element that visually represents a nested data structure, allowing users to expand and collapse branches. It's commonly used for navigating directories, organizing data, and managing complex relationships within a user-friendly interface.",
  codeSnippets: {
    noIcons: [
      {
        tag: "ch-tree-view-render",
        properties: [
          { name: "class", value: "tree-view" },
          { name: "showLines", value: "last" }
        ]
      }
    ],

    withCheckboxes: [
      {
        tag: "ch-tree-view-render",
        properties: [
          { name: "class", value: "tree-view" },
          { name: "checkbox", value: true },
          { name: "showLines", value: "all" }
        ]
      }
    ],

    showLinesLast: [
      {
        tag: "ch-tree-view-render",
        properties: [
          { name: "class", value: "tree-view" },
          { name: "showLines", value: "last" }
        ]
      }
    ],

    showLinesNone: [
      {
        tag: "ch-tree-view-render",
        properties: [{ name: "class", value: "tree-view" }]
      }
    ]
  }
} as const satisfies ComponentMetadata;
