import { ComponentMetadata } from "../../../common/types";

const COMPONENT_CLASS = "input";

export const inputMetadata = {
  title: "Input",
  description:
    "A primary HTML input element is a crucial part of a webpage, designed to capture user data and facilitate interactions. It serves as the main interface for users to enter information such as text, numbers, or dates, making it essential for data collection and user engagement, whether within a form or used independently.",
  codeSnippets: {
    default: {
      linkId: "default",
      title: "1. Default",
      template: {
        tag: "div",
        class: "field field-block",
        children: [
          {
            tag: "label",
            class: "label",
            properties: [{ name: "for", value: "name" }],
            children: "Name"
          },
          {
            tag: "ch-edit",
            class: COMPONENT_CLASS,
            properties: [{ name: "id", value: "name" }]
          }
        ]
      }
    },

    noLabel: {
      linkId: "no-label",
      title: "2. No Label",
      template: {
        tag: "ch-edit",
        class: COMPONENT_CLASS,
        properties: [{ name: "accessibleName", value: "Name" }]
      }
    },

    withValue: {
      linkId: "with-value",
      title: "3. With Value",
      template: {
        tag: "ch-edit",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "value", value: "Pat Taylor" }
        ]
      }
    },

    withPlaceholder: {
      linkId: "with-placeholder",
      title: "4. With Placeholder",
      template: {
        tag: "ch-edit",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "placeholder", value: "e.g. Mike Shinoda" }
        ]
      }
    },

    disabled: {
      linkId: "disabled",
      title: "5. Disabled",
      template: {
        tag: "ch-edit",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "disabled", value: true },
          { name: "value", value: "Pat Taylor" }
        ]
      }
    },

    withIcon: {
      linkId: "with-icon",
      title: "6. With Icon",
      template: {
        tag: "ch-edit",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Name" },
          { name: "startImgSrc", value: "USER_ICON", variable: true }
        ]
      }
    },

    errors: {
      linkId: "errors",
      title: "7. Error",
      template: "TODO"
    }
  }
} as const satisfies ComponentMetadata;
