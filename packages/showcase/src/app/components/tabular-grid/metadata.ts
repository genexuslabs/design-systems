import { ComponentMetadata } from "../../../common/types";

import { CSS_SELECTORS } from "./classes";

const MAKE_BUTTON = (label: string) => ({
  tag: "button",
  class: "button-tertiary",
  children: label,
  properties: [{ name: "type", value: "button" }]
});

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
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [
          { name: "rowSelectionMode", value: "none" },
          { name: "keyboardNavigationMode", value: "focus" }
        ],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "settingable", value: false },
                  { name: "sortable", value: true }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "name" },
                  { name: "columnName", value: "Country Name" },
                  { name: "settingable", value: false },
                  { name: "sortable", value: true }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "population" },
                  { name: "columnName", value: "Country Population" },
                  { name: "settingable", value: false },
                  { name: "sortable", value: true }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "language" },
                  { name: "columnName", value: "Country Language" },
                  { name: "settingable", value: false },
                  { name: "sortable", value: true }
                ]
              }
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "Argentina"
              },
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "45.400.000"
              },
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "Español"
              }
            ]
          },
          `<!-- Add as many rows as needed -->`
        ]
      }
    },

    withRowSet: {
      linkId: "with-row-set",
      title: "2. With Rowset",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [{ name: "rowSelectionMode", value: "none" }],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "settingable", value: false },
                  { name: "sortable", value: true }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "name" },
                  { name: "columnName", value: "Country Name" },
                  { name: "settingable", value: false },
                  { name: "sortable", value: true }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "population" },
                  { name: "columnName", value: "Country Population" },
                  { name: "settingable", value: false },
                  { name: "sortable", value: true }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "language" },
                  { name: "columnName", value: "Country Language" },
                  { name: "settingable", value: false },
                  { name: "sortable", value: true }
                ]
              }
            ]
          },
          {
            tag: "ch-tabular-grid-rowset",
            class: CSS_SELECTORS.TABULAR_GRID_ROWSET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-rowset-legend",
                class: CSS_SELECTORS.TABULAR_GRID_ROWSET_LEGEND_CLASS,
                children: "América del Sur"
              },
              {
                tag: "ch-tabular-grid-row",
                class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
                properties: [{ name: "rowid", value: "bo" }],
                children: [
                  {
                    tag: "ch-tabular-grid-cell",
                    class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                    children: "BO"
                  },
                  {
                    tag: "ch-tabular-grid-cell",
                    class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                    children: "Bolivia"
                  },
                  {
                    tag: "ch-tabular-grid-cell",
                    class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                    children: "11.800.000"
                  },
                  {
                    tag: "ch-tabular-grid-cell",
                    class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                    children: "Español"
                  }
                ]
              },
              {
                tag: "ch-tabular-grid-rowset",
                class: CSS_SELECTORS.TABULAR_GRID_ROWSET_CLASS,
                children: [
                  {
                    tag: "ch-tabular-grid-rowset-legend",
                    class: CSS_SELECTORS.TABULAR_GRID_ROWSET_LEGEND_CLASS,
                    children: "Campeones del mundo"
                  },
                  {
                    tag: "ch-tabular-grid-row",
                    class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
                    properties: [{ name: "rowid", value: "ar" }],
                    children: [
                      {
                        tag: "ch-tabular-grid-cell",
                        class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                        children: "AR"
                      },
                      {
                        tag: "ch-tabular-grid-cell",
                        class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                        children: "Argentina"
                      },
                      {
                        tag: "ch-tabular-grid-cell",
                        class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                        children: "45.400.000"
                      },
                      {
                        tag: "ch-tabular-grid-cell",
                        class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                        children: "Español"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    },

    selectionSingleKeyboardFocus: {
      linkId: "selection-single-keyboard-focus",
      title: "3. Selection: single + keyboard: focus",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [
          { name: "rowSelectionMode", value: "single" },
          { name: "keyboardNavigationMode", value: "focus" }
        ],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "settingable", value: false }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->"
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          },
          "<!-- Add more ch-tabular-grid-row's as needed... -->"
        ]
      }
    },

    selectionSingleKeyboardSelect: {
      linkId: "selection-single-keyboard-select",
      title: "4. Selection: single + keyboard: select",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [
          { name: "rowSelectionMode", value: "single" },
          { name: "keyboardNavigationMode", value: "select" }
        ],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "settingable", value: false }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->"
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          },
          "<!-- Add more ch-tabular-grid-row's as needed... -->"
        ]
      }
    },

    selectionMultipleKeyboardFocus: {
      linkId: "selection-multiple-keyboard-focus",
      title: "5. Selection: multiple + keyboard: focus",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [
          { name: "rowSelectionMode", value: "multiple" },
          { name: "keyboardNavigationMode", value: "focus" }
        ],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "settingable", value: false }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->"
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          },
          "<!-- Add more ch-tabular-grid-row's as needed... -->"
        ]
      }
    },

    selectionMultipleKeyboardSelect: {
      linkId: "selection-multiple-keyboard-select",
      title: "6. Selection: multiple + keyboard: select",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [
          { name: "rowSelectionMode", value: "multiple" },
          { name: "keyboardNavigationMode", value: "selection" }
        ],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "settingable", value: false }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->"
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          },
          "<!-- Add more ch-tabular-grid-row's as needed... -->"
        ]
      }
    },

    rowMarkKeyboardSelect: {
      linkId: "row-mark-keyboard-select",
      title: "7. Row mark + keyboard: select",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [
          { name: "rowSelectionMode", value: "multiple" },
          { name: "keyboardNavigationMode", value: "select" }
        ],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "columnType", value: "rich" },
                  { name: "richRowSelector", value: "" },
                  { name: "richRowSelectorMode", value: "mark" },
                  { name: "settingable", value: false }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "name" },
                  { name: "columnName", value: "Country Name" },
                  { name: "settingable", value: false }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->"
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          },
          "<!-- Add more ch-tabular-grid-row's as needed... -->"
        ]
      }
    },

    rowMarkKeyboardFocus: {
      linkId: "row-mark-keyboard-focus",
      title: "8. Row mark + keyboard: focus",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [
          { name: "rowSelectionMode", value: "multiple" },
          { name: "keyboardNavigationMode", value: "focus" }
        ],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "columnType", value: "rich" },
                  { name: "richRowSelector", value: "" },
                  { name: "richRowSelectorMode", value: "mark" },
                  { name: "settingable", value: false }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "name" },
                  { name: "columnName", value: "Country Name" },
                  { name: "settingable", value: false }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->"
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          },
          "<!-- Add more ch-tabular-grid-row's as needed... -->"
        ]
      }
    },

    rowReorderDragging: {
      linkId: "row-reorder-dragging",
      title: "9. Row reorder (dragging)",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [{ name: "rowSelectionMode", value: "multiple" }],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "columnType", value: "rich" },
                  { name: "richRowDrag", value: "" },
                  { name: "settingable", value: false }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "name" },
                  { name: "columnName", value: "Country Name" },
                  { name: "settingable", value: false }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->"
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          },
          "<!-- Add more ch-tabular-grid-row's as needed... -->"
        ]
      }
    },

    rowAction: {
      linkId: "row-action",
      title: "10. Row action",
      template: {
        tag: "ch-tabular-grid",
        class: CSS_SELECTORS.TABULAR_GRID_CLASS,
        properties: [{ name: "rowSelectionMode", value: "multiple" }],
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "code" },
                  { name: "columnName", value: "Country Code" },
                  { name: "settingable", value: false }
                ]
              },
              "<!-- Add more ch-tabular-grid-column's as needed -->",
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnId", value: "actions" },
                  { name: "columnName", value: "Actions" },
                  { name: "columnNameHidden", value: true },
                  { name: "size", value: "min-content" },
                  { name: "columnType", value: "rich" },
                  { name: "richRowActions", value: true },
                  { name: "settingable", value: false }
                ]
              }
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "AR"
              },
              "<!-- Add more ch-tabular-grid-cell's as needed... -->"
            ]
          },
          "<!-- Add more ch-tabular-grid-row's as needed... -->",
          {
            tag: "ch-tabular-grid-row-actions",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_ACTIONS_CLASS,
            properties: [{ name: "showOnRowHover", value: true }],
            children: [MAKE_BUTTON("Action A"), MAKE_BUTTON("Action B")]
          },
          {
            tag: "ch-tabular-grid-row-actions",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_ACTIONS_CLASS,
            properties: [{ name: "showOnRowActions", value: true }],
            children: [
              MAKE_BUTTON("Action C"),
              MAKE_BUTTON("Action D"),
              MAKE_BUTTON("Action E")
            ]
          },
          {
            tag: "ch-tabular-grid-row-actions",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_ACTIONS_CLASS,
            properties: [{ name: "showOnRowContext", value: true }],
            children: [
              MAKE_BUTTON("Action A"),
              MAKE_BUTTON("Action B"),
              MAKE_BUTTON("Action C"),
              MAKE_BUTTON("Action D"),
              MAKE_BUTTON("Action E")
            ]
          }
        ]
      }
    },

    treeGrid: {
      linkId: "tree-grid",
      title: "11. Tree grid",
      template: {
        tag: "ch-tabular-grid",
        class: `${CSS_SELECTORS.TABULAR_GRID_CLASS} ${CSS_SELECTORS.TABULAR_GRID_SHOW_NODE_ICONS_CLASS}`,
        children: [
          {
            tag: "ch-tabular-grid-columnset",
            class: CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnName", value: "Name" },
                  { name: "settingable", value: false },
                  { name: "columnType", value: "tree" },
                  { name: "freeze", value: "start" },
                  { name: "size", value: "20%" }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnName", value: "Type" },
                  { name: "settingable", value: false },
                  { name: "size", value: "80%" }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnName", value: "Description" },
                  { name: "settingable", value: false },
                  { name: "size", value: "500px" }
                ]
              },
              {
                tag: "ch-tabular-grid-column",
                class: CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS,
                properties: [
                  { name: "columnName", value: "Is Collection" },
                  { name: "settingable", value: false },
                  { name: "size", value: "100px" }
                ]
              }
            ]
          },
          {
            tag: "ch-tabular-grid-row",
            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
            children: [
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "Target"
              },
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: ""
              },
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "Target"
              },
              {
                tag: "ch-tabular-grid-cell",
                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                children: "false"
              },
              {
                tag: "ch-tabular-grid-rowset",
                class: CSS_SELECTORS.TABULAR_GRID_ROWSET_CLASS,
                children: [
                  {
                    tag: "ch-tabular-grid-row",
                    class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
                    children: [
                      {
                        tag: "ch-tabular-grid-cell",
                        class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                        children: "Devices"
                      },
                      {
                        tag: "ch-tabular-grid-cell",
                        class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                        children: ""
                      },
                      {
                        tag: "ch-tabular-grid-cell",
                        class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                        children: "Devices List"
                      },
                      {
                        tag: "ch-tabular-grid-cell",
                        class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                        children: "true"
                      },
                      {
                        tag: "ch-tabular-grid-rowset",
                        class: CSS_SELECTORS.TABULAR_GRID_ROWSET_CLASS,
                        children: [
                          {
                            tag: "ch-tabular-grid-row",
                            class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
                            children: [
                              {
                                tag: "ch-tabular-grid-cell",
                                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                                children: "Device"
                              },
                              {
                                tag: "ch-tabular-grid-cell",
                                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                                children: ""
                              },
                              {
                                tag: "ch-tabular-grid-cell",
                                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                                children: ""
                              },
                              {
                                tag: "ch-tabular-grid-cell",
                                class: CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                                children: ""
                              },
                              {
                                tag: "ch-tabular-grid-rowset",
                                class: CSS_SELECTORS.TABULAR_GRID_ROWSET_CLASS,
                                children: [
                                  {
                                    tag: "ch-tabular-grid-row",
                                    class: CSS_SELECTORS.TABULAR_GRID_ROW_CLASS,
                                    children: [
                                      {
                                        tag: "ch-tabular-grid-cell",
                                        class:
                                          CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                                        children: "DeviceToken"
                                      },
                                      {
                                        tag: "ch-tabular-grid-cell",
                                        class:
                                          CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                                        children: "Character(500)"
                                      },
                                      {
                                        tag: "ch-tabular-grid-cell",
                                        class:
                                          CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                                        children: "DeviceToken"
                                      },
                                      {
                                        tag: "ch-tabular-grid-cell",
                                        class:
                                          CSS_SELECTORS.TABULAR_GRID_CELL_CLASS,
                                        children: "false"
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;

export const tabularGridHelpersMetadata = {
  title: "Tabular Grid: Helpers",
  description:
    "Helper classes in a tabular grid component are crucial for ensuring flexibility and consistency in layout and styling across complex tables. They allow developers to easily apply specific alignments, spacing, and formatting to various table elements without needing to write custom CSS for each instance.",
  codeSnippets: {
    alignCellsBlockStart: {
      linkId: "align-cells-block-start",
      title: "12. Align cells: block start",
      template: {
        tag: "ch-tabular-grid",
        class: `${CSS_SELECTORS.TABULAR_GRID_CLASS} ${CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_BLOCK_START_CLASS}`,
        children: ["<!-- Your grid content here -->"]
      }
    },

    alignCellsBlockCenter: {
      linkId: "align-cells-block-center",
      title: "13. Align cells: block center",
      template: {
        tag: "ch-tabular-grid",
        class: `${CSS_SELECTORS.TABULAR_GRID_CLASS} ${CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_BLOCK_CENTER_CLASS}`,
        children: ["<!-- Your grid content here -->"]
      }
    },

    alignCellsBlockEnd: {
      linkId: "align-cells-block-end",
      title: "14. Align cells: block end",
      template: {
        tag: "ch-tabular-grid",
        class: `${CSS_SELECTORS.TABULAR_GRID_CLASS} ${CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_BLOCK_END_CLASS}`,
        children: ["<!-- Your grid content here -->"]
      }
    },

    alignCellsInlineStart: {
      linkId: "align-cells-inline-start",
      title: "15. Align cells: inline start",
      template: {
        tag: "ch-tabular-grid",
        class: `${CSS_SELECTORS.TABULAR_GRID_CLASS} ${CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_INLINE_START_CLASS}`,
        children: ["<!-- Your grid content here -->"]
      }
    },

    alignCellsInlineCenter: {
      linkId: "align-cells-inline-center",
      title: "16. Align cells: inline center",
      template: {
        tag: "ch-tabular-grid",
        class: `${CSS_SELECTORS.TABULAR_GRID_CLASS} ${CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_INLINE_CENTER_CLASS}`,
        children: ["<!-- Your grid content here -->"]
      }
    },

    alignCellsInlineEnd: {
      linkId: "align-cells-inline-end",
      title: "17. Align cells: inline end",
      template: {
        tag: "ch-tabular-grid",
        class: `${CSS_SELECTORS.TABULAR_GRID_CLASS} ${CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_INLINE_END_CLASS}`,
        children: ["<!-- Your grid content here -->"]
      }
    }
  }
} as const satisfies ComponentMetadata;
