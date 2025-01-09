import { ComponentMetadata } from "../../../common/types";

const COMPONENT_CLASS = "input";

export const searchMetadata = {
  title: "Search",
  description:
    'A input of type "search" is a specialized HTML input element designed for search functionality within a webpage. It allows users to enter search queries, providing a streamlined and intuitive interface for finding content.',
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
            properties: [{ name: "for", value: "search" }],
            children: { text: "Search", type: "text" }
          },
          {
            tag: "ch-edit",
            class: COMPONENT_CLASS,
            properties: [
              { name: "id", value: "search" },
              { name: "type", value: "search" }
            ]
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
        properties: [
          { name: "accessibleName", value: "Search" },
          { name: "type", value: "search" }
        ]
      }
    },

    value: {
      linkId: "value",
      title: "3. Value",
      template: {
        tag: "ch-edit",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Search" },
          { name: "value", value: "Pat Taylor" },
          { name: "type", value: "search" }
        ]
      }
    },

    placeholder: {
      linkId: "placeholder",
      title: "4. Placeholder",
      template: {
        tag: "ch-edit",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Search" },
          { name: "placeholder", value: "e.g. Mike Shinoda" },
          { name: "type", value: "search" }
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
          { name: "accessibleName", value: "Search" },
          { name: "disabled", value: true },
          { name: "value", value: "Pat Taylor" },
          { name: "type", value: "search" }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
