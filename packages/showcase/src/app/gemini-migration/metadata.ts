import type {
  ComboBoxModel,
  RadioGroupModel
} from "@genexus/chameleon-controls-library";
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
    },

    gxgFormRadioGroup: {
      linkId: "gxg-form-radio-group",
      title: "5. gxg-form-radio-group",
      before: {
        template: {
          tag: "gxg-form-radio-group",
          properties: [{ name: "label", value: "My Favorite Color" }],
          children: [
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "red" },
                { name: "value", value: "red" }
              ]
            },
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "blue" },
                { name: "value", value: "blue" }
              ]
            },
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "green" },
                { name: "value", value: "green" }
              ]
            },
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "yellow" },
                { name: "value", value: "yellow" }
              ]
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("RadioGroupModel")],
        states: [
          {
            name: "favoriteColorsModel",
            type: "RadioGroupModel",
            value: [
              { value: "red", caption: "Red" },
              { value: "blue", caption: "Blue" },
              { value: "green", caption: "Green" },
              { value: "yellow", caption: "Yellow" },
              { value: "purple", caption: "Purple" }
            ] satisfies RadioGroupModel
          }
        ],
        template: {
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "favorite-colors-radio" }],
              children: "Favorite Colors"
            },
            {
              tag: "ch-radio-group-render",
              class: "radio-group",
              properties: [
                { name: "id", value: "favorite-colors-radio" },
                {
                  name: "model",
                  value: "favoriteColorsModel",
                  state: true
                },
                { name: "value", value: "yellow" }
              ]
            }
          ]
        }
      }
    },

    gxgFormText: {
      linkId: "gxg-form-text",
      title: "6. gxg-form-text",
      before: {
        template: {
          tag: "gxg-form-text",
          properties: [
            { name: "placeholder", value: "John Smith" },
            { name: "value", value: "Adam Smith" },
            { name: "icon", value: "gemini-tools/add-circle" }
          ]
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
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "user-name" }]
            },
            {
              tag: "ch-edit",
              class: "input",
              properties: [
                { name: "id", value: "user-name" },
                { name: "value", value: "Adam Smith" },
                { name: "placeholder", value: "John Smith" },
                { name: "startImgSrc", value: "ICON", variable: true }
              ]
            }
          ]
        }
      }
    },

    gxgFormTextarea: {
      linkId: "gxg-form-textarea",
      title: "7. gxg-form-textarea",
      before: {
        template: {
          tag: "gxg-form-textarea",
          properties: [
            {
              name: "placeholder",
              value: "I have experience in backend development..."
            },
            { name: "value", value: "" },
            { name: "height", value: "100px" }
          ]
        }
      },
      after: {
        template: {
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "developer-experience" }],
              children: "Developer Experience"
            },
            {
              tag: "ch-edit",
              class: "input",
              properties: [
                { name: "id", value: "developer-experience" },
                { name: "value", value: "" },
                {
                  name: "placeholder",
                  value: "I have experience in backend development..."
                },
                {
                  name: "multiline",
                  value: "true",
                  variable: true
                },
                { name: "autoGrow", value: "true", variable: true }
              ]
            }
          ]
        }
      }
    }
  }
} as const satisfies ComponentMetadataBeforeAfter;
