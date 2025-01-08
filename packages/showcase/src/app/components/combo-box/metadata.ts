import { ComponentMetadata } from "../../../common/types";

export const comboBoxMetadata = {
  title: "Combo Box",
  description:
    "A checkbox input element is a versatile component on a webpage, designed to allow users to make binary choices. It is typically used for selecting multiple options from a list or toggling a setting on and off, making it an essential tool for enhancing user interaction and data collection.",
  codeSnippets: {
    default: [
      {
        tag: "ch-checkbox",
        properties: [
          { name: "class", value: "checkbox" },
          { name: "caption", value: "The caption" }
        ]
      }
    ]
  }
} as const satisfies ComponentMetadata;
