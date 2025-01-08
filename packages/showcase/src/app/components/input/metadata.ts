import { ComponentMetadata } from "../../../common/types";

export const inputMetadata = {
  title: "Input",
  description:
    "A primary HTML input element is a crucial part of a webpage, designed to capture user data and facilitate interactions. It serves as the main interface for users to enter information such as text, numbers, or dates, making it essential for data collection and user engagement, whether within a form or used independently.",
  codeSnippets: {
    default: {
      linkId: "default",
      title: "1. Default",
      template: [
        {
          tag: "ch-edit",
          class: "input",
          properties: [{ name: "accessibleName", value: "Name" }]
        }
      ]
    },

    value: {
      linkId: "value",
      title: "2. Value",
      template: [
        {
          tag: "ch-edit",
          class: "input",
          properties: [
            { name: "accessibleName", value: "Name" },
            { name: "value", value: "Pat Taylor" }
          ]
        }
      ]
    },

    placeholder: {
      linkId: "placeholder",
      title: "3. Placeholder",
      template: [
        {
          tag: "ch-edit",
          class: "input",
          properties: [
            { name: "accessibleName", value: "Name" },
            { name: "placeholder", value: "e.g. Mike Shinoda" }
          ]
        }
      ]
    },

    disabled: {
      linkId: "disabled",
      title: "4. Disabled",
      template: [
        {
          tag: "ch-edit",
          class: "input",
          properties: [
            { name: "accessibleName", value: "Name" },
            { name: "disabled", value: true },
            { name: "value", value: "Pat Taylor" }
          ]
        }
      ]
    },

    withIcon: {
      linkId: "with-icon",
      title: "5. With Icon",
      template: [
        {
          tag: "ch-edit",
          class: "input",
          properties: [
            { name: "accessibleName", value: "Name" },
            { name: "startImgSrc", value: "USER_ICON", variable: true }
          ]
        }
      ]
    }
  }
} as const satisfies ComponentMetadata;
