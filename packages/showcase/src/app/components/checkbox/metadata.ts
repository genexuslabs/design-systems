import { ComponentMetadata } from "../../../common/types";

export const checkboxMetadata = {
  title: "Checkbox",
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
    ],

    indeterminate: [
      {
        tag: "ch-checkbox",
        properties: [
          { name: "class", value: "checkbox" },
          { name: "caption", value: "The caption" },
          { name: "indeterminate", value: true }
        ]
      }
    ],

    disabled: [
      {
        tag: "ch-checkbox",
        properties: [
          { name: "class", value: "checkbox" },
          { name: "caption", value: "The caption" },
          { name: "disabled", value: true }
        ]
      }
    ],

    withIcon: [
      {
        tag: "ch-checkbox",
        properties: [
          { name: "class", value: "checkbox" },
          { name: "caption", value: "The caption" },
          { name: "startImgSrc", value: "ADD_CIRCLE_ICON", variable: true }
        ]
      }
    ],

    groupingCheckboxesBlock: [
      {
        tag: "div",
        properties: [{ name: "class", value: "field-group" }],
        children: [
          {
            tag: "ch-checkbox",
            properties: [
              { name: "class", value: "checkbox" },
              { name: "caption", value: "The caption 1" }
            ]
          },
          {
            tag: "ch-checkbox",
            properties: [
              { name: "class", value: "checkbox" },
              { name: "caption", value: "The caption 2" }
            ]
          },
          {
            tag: "ch-checkbox",
            properties: [
              { name: "class", value: "checkbox" },
              { name: "caption", value: "The caption 3" }
            ]
          }
        ]
      }
    ],

    groupingCheckboxesInline: [
      {
        tag: "div",
        properties: [{ name: "class", value: "field-group-inline" }],
        children: [
          {
            tag: "ch-checkbox",
            properties: [
              { name: "class", value: "checkbox" },
              { name: "caption", value: "The caption 1" }
            ]
          },
          {
            tag: "ch-checkbox",
            properties: [
              { name: "class", value: "checkbox" },
              { name: "caption", value: "The caption 2" }
            ]
          },
          {
            tag: "ch-checkbox",
            properties: [
              { name: "class", value: "checkbox" },
              { name: "caption", value: "The caption 3" }
            ]
          }
        ]
      }
    ]
  }
} as const satisfies ComponentMetadata;
