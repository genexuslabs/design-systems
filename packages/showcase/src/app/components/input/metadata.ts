import { ComponentMetadata } from "../../../common/types";

export const inputMetadata = {
  title: "Input",
  description:
    "A primary HTML input element is a crucial part of a webpage, designed to capture user data and facilitate interactions. It serves as the main interface for users to enter information such as text, numbers, or dates, making it essential for data collection and user engagement, whether within a form or used independently.",
  codeSnippets: {
    default: [
      {
        tag: "ch-edit",
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "class", value: "input" }
        ]
      }
    ],

    value: [
      {
        tag: "ch-edit",
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "class", value: "input" },
          { name: "value", value: "Pat Taylor" }
        ]
      }
    ],

    placeholder: [
      {
        tag: "ch-edit",
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "class", value: "input" },
          { name: "placeholder", value: "e.g. Mike Shinoda" }
        ]
      }
    ],

    disabled: [
      {
        tag: "ch-edit",
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "class", value: "input" },
          { name: "disabled", value: true },
          { name: "value", value: "Pat Taylor" }
        ]
      }
    ],

    withIcon: [
      {
        tag: "ch-edit",
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "class", value: "input" },
          { name: "startImgSrc", value: "USER_ICON", variable: true }
        ]
      }
    ]
  }
} as const satisfies ComponentMetadata;
