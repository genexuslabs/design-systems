import { ComponentMetadata } from "../../../common/types";
import { chameleonImportType } from "../../../services/template-language/create-template";

export const tabularGridMetadata = {
  title: "Tabular Grid",
  description:
    "A grid-table is a fundamental component on a webpage, designed to display data in a structured, tabular format. It organizes information into rows and columns, making it easy for users to view, compare, and analyze data efficiently. This layout is ideal for presenting large datasets, financial information, or any content that benefits from a clear, orderly arrangement.",
  codeSnippets: {
    selectionNoneKeyboardFocus: {
      linkId: "selection-none-keyboard-focus",
      title: "1. Selection: none + keyboard: focus",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid",
        properties: [
          { name: "rowSelectionMode", value: "none" },
          { name: "keyboardNavigationMode", value: "focus" }
        ],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: "tabular-grid-column-set",
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: "tabular-grid-column",
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "settingable", value: "false" },
                  { name: "sortable", value: "true" }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->"
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: "tabular-grid-row",
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: "tabular-grid-cell",
                children: ["<!--  Your cell content -->"]
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          }
        ]
      }
    },

    withRowSet: {
      linkId: "tabular-grid-rowsets",
      title: "With Rowset",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid",
        properties: [{ name: "row-selection-mode", value: "none" }],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: "tabular-grid-column-set",
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: "tabular-grid-column",
                properties: [
                  { name: "column-id", value: "code" },
                  { name: "column-name", value: "Country Code" },
                  { name: "settingable", value: "false" }
                ]
              },
              '<!-- Add more "ch-tabular-grid-column" objects here as needed -->'
            ]
          },
          {
            tag: "ch-tabular-grid-rowset",
            class: "tabular-grid-rowset",
            children: [
              {
                tag: "ch-tabular-grid-rowset-legend",
                class: "tabular-grid-rowset-legend",
                children: "América del Sur"
              },
              {
                tag: "ch-tabular-grid-row",
                class: "tabular-grid-row",
                properties: [{ name: "rowid", value: "bo" }],
                children: [
                  {
                    tag: "ch-tabular-grid-cell",
                    class: "tabular-grid-cell",
                    children: "BO"
                  },
                  '<!-- Add more "ch-tabular-grid-cell" objects here as needed -->'
                ]
              },
              '<!-- Add more "ch-tabular-grid-row" objects here as needed -->',
              {
                tag: "ch-tabular-grid-rowset",
                class: "tabular-grid-rowset",
                children: [
                  {
                    tag: "ch-tabular-grid-rowset-legend",
                    class: "tabular-grid-rowset-legend",
                    children: "Campeones del mundo"
                  },
                  {
                    tag: "ch-tabular-grid-row",
                    class: "tabular-grid-row",
                    properties: [{ name: "rowid", value: "ar" }],
                    children: [
                      {
                        tag: "ch-tabular-grid-cell",
                        class: "tabular-grid-cell",
                        children: "AR"
                      },
                      '<!-- Add more "ch-tabular-grid-cell" objects here as needed -->'
                    ]
                  },
                  '<!-- Add more "ch-tabular-grid-row" objects here as needed -->'
                ]
              }
            ]
          }
        ]
      }
    },

    selectionSimpleKeyboardFocus: {
      linkId: "selection-simple-keyboard-focus",
      title: "3. Selection: simple + keyboard: focus",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    selectionSimpleKeyboardSelect: {
      linkId: "selection-simple-keyboard-select",
      title: "4. Selection: simple + keyboard: select",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    selectionMultipleKeyboardFocus: {
      linkId: "selection-multiple-keyboard-focus",
      title: "5. Selection: multiple + keyboard: focus",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    selectionMultipleKeyboardSelect: {
      linkId: "selection-multiple-keyboard-select",
      title: "6. Selection: multiple + keyboard: select",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    rowMarkKeyboardSelect: {
      linkId: "row-mark-keyboard-select",
      title: "7. Row mark + keyboard: select",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    rowMarkKeyboardFocus: {
      linkId: "row-mark-keyboard-focus",
      title: "8. Row mark + keyboard: focus",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    rowReorderDragging: {
      linkId: "row-reorder-dragging",
      title: "9. Row reorder (dragging)",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    rowAction: {
      linkId: "row-action",
      title: "10. Row action",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    treeGrid: {
      linkId: "tree-grid",
      title: "11. Tree grid",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    propertyGrid: {
      linkId: "property-grid",
      title: "12. Property grid",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    alignCellsBlockStart: {
      linkId: "align-cells-block-start",
      title: "13. Align cells: block start",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    alignCellsBlockCenter: {
      linkId: "align-cells-block-center",
      title: "14. Align cells: block center",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    alignCellsBlockEnd: {
      linkId: "align-cells-block-end",
      title: "15. Align cells: block end",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    alignCellsInlineStart: {
      linkId: "align-cells-inline-start",
      title: "16. Align cells: inline start",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    alignCellsInlineCenter: {
      linkId: "align-cells-inline-center",
      title: "17. Align cells: inline center",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    },

    alignCellsInlineEnd: {
      linkId: "align-cells-inline-end",
      title: "18. Align cells: inline end",
      template: {
        tag: "ch-tabular-grid",
        class: "tabular-grid"
      }
    }
  }
} as const satisfies ComponentMetadata;
