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
    }
  }
} as const satisfies ComponentMetadata;
