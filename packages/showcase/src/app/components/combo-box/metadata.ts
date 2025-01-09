import { ComponentMetadata } from "../../../common/types";

const COMPONENT_CLASS = "combo-box";

export const comboBoxMetadata = {
  title: "Combo Box",
  description:
    "A combo box is a versatile UI component in HTML, designed to combine the features of a text input and a select element. It allows users to either type a custom value or select from a predefined list of options. This component enhances user interaction by providing auto-suggestions, search functionality, and the flexibility to handle both fixed and dynamic input. It is ideal for scenarios where users need the convenience of a dropdown list with the added capability of entering custom data.",
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
            properties: [{ name: "for", value: "options" }],
            children: { text: "Options", type: "text" }
          },
          {
            tag: "ch-combo-box-render",
            class: COMPONENT_CLASS,
            properties: [{ name: "id", value: "options" }]
          }
        ]
      }
    },

    noLabel: {
      linkId: "default",
      title: "2. No Label",
      template: {
        tag: "ch-combo-box-render",
        class: COMPONENT_CLASS,
        properties: [{ name: "accessibleName", value: "Options" }]
      }
    },

    disabled: {
      linkId: "disabled",
      title: "3. Disabled",
      template: {
        tag: "ch-combo-box-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Options" },
          { name: "disabled", value: true }
        ]
      }
    },

    placeholder: {
      linkId: "placeholder",
      title: "4. Placeholder",
      template: {
        tag: "ch-combo-box-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Options" },
          { name: "placeholder", value: "Select a value" }
        ]
      }
    },

    withIcons: {
      linkId: "with-icons",
      title: "5. With icons",
      template: {
        tag: "ch-combo-box-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Objects" },
          { name: "value", value: "patterns" }
        ]
      }
    },

    errors: {
      linkId: "errors",
      title: "6. Error",
      template: { text: "TODO", type: "text" }
    }
  }
} as const satisfies ComponentMetadata;
