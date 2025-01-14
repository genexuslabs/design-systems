import type { ComboBoxModel } from "@genexus/chameleon-controls-library";
import { ComponentMetadataBeforeAfter } from "../../common/types";
import { chameleonImportType } from "../../services/template-language/create-template";

export const geminiMigrationMetadata = {
  title: "Gemini Migration",
  description:
    'When migrating from the "Gemini" design system to "Mercury," you\'ll be transitioning your project\'s styles, components, and design principles to align with the new system. This process involves updating your codebase to replace Gemini-specific components and styles with their Mercury equivalents, ensuring consistency with Mercury\'s guidelines. The migration guide will provide you with step-by-step instructions to help make this transition as smooth as possible.',
  codeSnippets: {
    gxgButtonTextOnly: {
      linkId: "gxg-button-text-only",
      title: "1. gxg-button: Text only",
      before: {
        template: {
          tag: "gxg-button",
          properties: [{ name: "type", value: "primary-icon-only" }],
          children: "Caption"
        }
      },
      after: {
        template: {
          tag: "button",
          class: "button-primary",
          properties: [{ name: "type", value: "button" }],
          children: "Caption"
        }
      }
    },

    gxgButtonTextWithIcon: {
      linkId: "gxg-button-text-with-icon",
      title: "2. gxg-button: Text with icon",
      before: {
        template: {
          tag: "gxg-button",
          properties: [
            { name: "type", value: "primary-text-icon" },
            { name: "icon", value: "navigation/arrow-down" }
          ],
          children: "Caption"
        }
      },
      after: {
        imports: [
          'import { AssetsManager } from "@genexusm-sdk/common-components";'
        ],
        variables: [
          {
            name: "ICON",
            value:
              'AssetsManager.getIconPath({ category: "gemini-tools", name: "add-circle", colorType: "on-primary" })'
          }
        ],
        template: {
          tag: "button",
          class: "button-primary button-icon-and-text",
          properties: [{ name: "type", value: "button" }],
          children: [
            {
              tag: "ch-image",
              class: "icon-sm",
              properties: [{ name: "src", value: "ICON", variable: true }]
            },
            "Caption"
          ]
        }
      }
    },

    gxgComboBox: {
      linkId: "gxg-combo-box",
      title: "3. gxg-combo-box",
      before: {
        template: {
          tag: "gxg-combo-box",
          properties: [
            { name: "label", value: "Favorite Colors" },
            { name: "placeholder", value: "Select an item" },
            { name: "value", value: "yellow" }
          ],
          children: [
            {
              tag: "gxg-combo-box-item",
              properties: [{ name: "value", value: "red" }],
              children: "Red"
            },
            {
              tag: "gxg-combo-box-item",
              properties: [{ name: "value", value: "blue" }],
              children: "Blue"
            },
            {
              tag: "gxg-combo-box-item",
              properties: [{ name: "value", value: "green" }],
              children: "Green"
            },
            {
              tag: "gxg-combo-box-item",
              properties: [{ name: "value", value: "yellow" }],
              children: "Yellow"
            },
            {
              tag: "gxg-combo-box-item",
              properties: [{ name: "value", value: "purple" }],
              children: "Purple"
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("ComboBoxModel")],
        states: [
          {
            name: "favoriteColorsModel",
            type: "ComboBoxModel",
            value: [
              { value: "red", caption: "Red" },
              { value: "blue", caption: "Blue" },
              { value: "green", caption: "Green" },
              { value: "yellow", caption: "Yellow" },
              { value: "purple", caption: "Purple" }
            ] satisfies ComboBoxModel
          }
        ],
        template: {
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "favorite-colors" }],
              children: "Favorite Colors"
            },
            {
              tag: "ch-combo-box-render",
              class: "combo-box",
              properties: [
                { name: "id", value: "favorite-colors" },
                { name: "model", value: "favoriteColorsModel", state: true },
                { name: "placeholder", value: "Select an item" },
                { name: "value", value: "yellow" }
              ]
            }
          ]
        }
      }
    },

    gxgFormCheckbox: {
      linkId: "gxg-form-checkbox",
      title: "4. gxg-form-checkbox",
      before: {
        template: {
          tag: "gxg-form-checkbox",
          properties: [
            { name: "value", value: "true" },
            { name: "label", value: "The Caption" }
          ]
        }
      },
      after: {
        template: {
          tag: "ch-checkbox",
          class: "checkbox",
          properties: [
            { name: "caption", value: "The Caption" },
            { name: "checkedValue", value: "true" },
            { name: "value", value: "true" }
          ]
        }
      }
    }
  }
} as const satisfies ComponentMetadataBeforeAfter;
