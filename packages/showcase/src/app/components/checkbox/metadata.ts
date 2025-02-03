import { ComponentMetadata } from "../../../common/types";

const COMPONENT_CLASS = "checkbox";

export const checkboxMetadata = {
  title: "Checkbox",
  description:
    "A checkbox input element is a versatile component on a webpage, designed to allow users to make binary choices. It is typically used for selecting multiple options from a list or toggling a setting on and off, making it an essential tool for enhancing user interaction and data collection.",
  codeSnippets: {
    checked: {
      linkId: "checked",
      title: "1. Checked",
      template: {
        tag: "ch-checkbox",
        class: COMPONENT_CLASS,
        properties: [
          { name: "caption", value: "The caption" },
          { name: "checkedValue", value: "true" },
          { name: "value", value: "true" }
        ]
      }
    },

    unchecked: {
      linkId: "unchecked",
      title: "2. Unchecked",
      template: {
        tag: "ch-checkbox",
        class: COMPONENT_CLASS,
        properties: [
          { name: "caption", value: "The caption" },
          { name: "checkedValue", value: "true" }
        ]
      }
    },

    indeterminate: {
      linkId: "indeterminate",
      title: "3. Indeterminate",
      template: {
        tag: "ch-checkbox",
        class: COMPONENT_CLASS,
        properties: [
          { name: "caption", value: "The caption" },
          { name: "checkedValue", value: "true" },
          { name: "indeterminate", value: true }
        ]
      }
    },

    disabled: {
      linkId: "disabled",
      title: "4. Disabled",
      template: {
        tag: "ch-checkbox",
        class: COMPONENT_CLASS,
        properties: [
          { name: "caption", value: "The caption" },
          { name: "checkedValue", value: "true" },
          { name: "disabled", value: true }
        ]
      }
    },

    withIcon: {
      language: "ts",
      linkId: "with-icon",
      title: "5. With Icon",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: 'getIconPath({ category: "objects", name: "stencil" })'
        }
      ],
      template: {
        tag: "ch-checkbox",
        class: COMPONENT_CLASS,
        properties: [
          { name: "caption", value: "The caption" },
          { name: "checkedValue", value: "true" },
          { name: "startImgSrc", value: "ICON", variable: true }
        ]
      }
    },

    groupingCheckboxesBlock: {
      linkId: "grouping-checkboxes-block",
      title: "6. Grouping checkboxes: Block",
      template: {
        tag: "div",
        class: "field-group",
        children: [
          {
            tag: "ch-checkbox",
            class: COMPONENT_CLASS,
            properties: [
              { name: "caption", value: "The caption 1" },
              { name: "checkedValue", value: "true" }
            ]
          },
          {
            tag: "ch-checkbox",
            class: COMPONENT_CLASS,
            properties: [
              { name: "caption", value: "The caption 2" },
              { name: "checkedValue", value: "true" }
            ]
          },
          {
            tag: "ch-checkbox",
            class: COMPONENT_CLASS,
            properties: [
              { name: "caption", value: "The caption 3" },
              { name: "checkedValue", value: "true" }
            ]
          }
        ]
      }
    },

    groupingCheckboxesInline: {
      linkId: "grouping-checkboxes-inline",
      title: "7. Grouping checkboxes: Inline",
      template: {
        tag: "div",
        class: "field-group-inline",
        children: [
          {
            tag: "ch-checkbox",
            class: COMPONENT_CLASS,
            properties: [
              { name: "caption", value: "The caption 1" },
              { name: "checkedValue", value: "true" }
            ]
          },
          {
            tag: "ch-checkbox",
            class: COMPONENT_CLASS,
            properties: [
              { name: "caption", value: "The caption 2" },
              { name: "checkedValue", value: "true" }
            ]
          },
          {
            tag: "ch-checkbox",
            class: COMPONENT_CLASS,
            properties: [
              { name: "caption", value: "The caption 3" },
              { name: "checkedValue", value: "true" }
            ]
          }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
