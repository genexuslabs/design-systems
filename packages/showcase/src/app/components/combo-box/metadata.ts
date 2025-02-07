import { ComponentMetadata } from "../../../common/types";
import { comboBoxModel } from "./models";

const COMPONENT_CLASS = "combo-box";

export const comboBoxMetadata = {
  title: "Combo Box",
  description:
    "A combo box is a versatile UI component in HTML, designed to combine the features of a text input and a select element. It allows users to either type a custom value or select from a predefined list of options. This component enhances user interaction by providing auto-suggestions, search functionality, and the flexibility to handle both fixed and dynamic input. It is ideal for scenarios where users need the convenience of a dropdown list with the added capability of entering custom data.",
  codeSnippets: {
    default: {
      linkId: "default",
      title: "1. Default",
      additionalInfoTemplate: {
        metadata: "a combo-box",
        type: "label-and-for"
      },
      states: [
        {
          name: "comboBoxModel",
          type: "ComboBoxModel",
          value: comboBoxModel
        }
      ],
      template: {
        tag: "div",
        class: "field field-block",
        children: [
          {
            tag: "label",
            class: "label",
            properties: [{ name: "for", value: "options" }],
            children: "Options"
          },
          {
            tag: "ch-combo-box-render",
            class: COMPONENT_CLASS,
            properties: [
              { name: "id", value: "options" },
              {
                name: "model",
                value: "comboBoxModel",
                state: true,
                variable: true
              }
            ]
          }
        ]
      }
    },

    noLabel: {
      linkId: "default",
      title: "2. No Label",
      avoidStateImportAndVariablesDisplay: true,
      states: [
        {
          name: "comboBoxModel",
          type: "ComboBoxModel",
          value: comboBoxModel
        }
      ],
      template: {
        tag: "ch-combo-box-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Options" },
          {
            name: "model",
            value: "comboBoxModel",
            state: true,
            variable: true
          }
        ]
      }
    },

    disabled: {
      linkId: "disabled",
      title: "3. Disabled",
      avoidStateImportAndVariablesDisplay: true,
      states: [
        {
          name: "comboBoxModel",
          type: "ComboBoxModel",
          value: comboBoxModel
        }
      ],
      template: {
        tag: "ch-combo-box-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Options" },
          { name: "disabled", value: true },
          {
            name: "model",
            value: "comboBoxModel",
            state: true,
            variable: true
          }
        ]
      }
    },

    placeholder: {
      linkId: "placeholder",
      title: "4. Placeholder",
      avoidStateImportAndVariablesDisplay: true,
      states: [
        {
          name: "comboBoxModel",
          type: "ComboBoxModel",
          value: comboBoxModel
        }
      ],
      template: {
        tag: "ch-combo-box-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Options" },
          {
            name: "model",
            value: "comboBoxModel",
            state: true,
            variable: true
          },
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
    }

    // errors: {
    //   linkId: "errors",
    //   title: "6. Error",
    //   template: "TODO"
    // }
  }
} as const satisfies ComponentMetadata;
