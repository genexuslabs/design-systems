import type {
  ComboBoxModel,
  RadioGroupModel,
  ActionListModel,
  TabModel
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
    },

    gxgGrid: {
      linkId: "gxg-grid",
      title: "8. gxg-grid",
      before: {
        template: {
          tag: "gxg-grid",
          children: [
            {
              tag: "ch-grid",
              children: [
                {
                  tag: "ch-grid-columnset",
                  children: [
                    {
                      tag: "ch-grid-column",
                      properties: [
                        { name: "column-name", value: "Country Name" },
                        { name: "column-name-position", value: "text" },
                        { name: "settingable", value: "false" }
                      ]
                    },
                    {
                      tag: "ch-grid-column",
                      properties: [
                        { name: "column-name", value: "Country Code" },
                        { name: "column-name-position", value: "text" },
                        { name: "settingable", value: "false" }
                      ]
                    },
                    {
                      tag: "ch-grid-column",
                      properties: [
                        { name: "column-name", value: "Population" },
                        { name: "column-name-position", value: "text" },
                        { name: "settingable", value: "false" }
                      ]
                    }
                  ]
                },
                {
                  tag: "ch-grid-row",
                  children: [
                    { tag: "ch-grid-cell", children: "Uruguay" },
                    { tag: "ch-grid-cell", children: "UY" },
                    { tag: "ch-grid-cell", children: "~3.5 million" }
                  ]
                },
                {
                  tag: "ch-grid-row",
                  children: [
                    { tag: "ch-grid-cell", children: "Brazil" },
                    { tag: "ch-grid-cell", children: "BR" },
                    { tag: "ch-grid-cell", children: "~214 million" }
                  ]
                },
                {
                  tag: "ch-grid-row",
                  children: [
                    { tag: "ch-grid-cell", children: "Argentina" },
                    { tag: "ch-grid-cell", children: "AR" },
                    { tag: "ch-grid-cell", children: "~46 million" }
                  ]
                }
              ]
            }
          ]
        }
      },
      after: {
        template: {
          tag: "ch-tabular-grid",
          class: "tabular-grid",
          children: [
            {
              tag: "ch-tabular-grid-columnset",
              class: "tabular-grid-column-set",
              children: [
                {
                  tag: "ch-tabular-grid-column",
                  class: "tabular-grid-column",
                  properties: [
                    { name: "column-name", value: "Country Name" },
                    { name: "column-name-position", value: "text" },
                    { name: "settingable", value: "false" }
                  ]
                },
                {
                  tag: "ch-tabular-grid-column",
                  class: "tabular-grid-column",
                  properties: [
                    { name: "column-name", value: "Country Code" },
                    { name: "column-name-position", value: "text" },
                    { name: "settingable", value: "false" }
                  ]
                },
                {
                  tag: "ch-tabular-grid-column",
                  class: "tabular-grid-column",
                  properties: [
                    { name: "column-name", value: "Population" },
                    { name: "column-name-position", value: "text" },
                    { name: "settingable", value: "false" }
                  ]
                }
              ]
            },
            {
              tag: "ch-tabular-grid-row",
              class: "tabular-grid-row",
              children: [
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "Uruguay"
                },
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "UY"
                },
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "~3.5 million"
                }
              ]
            },
            {
              tag: "ch-tabular-grid-row",
              class: "tabular-grid-row",
              children: [
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "Brazil"
                },
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "BR"
                },
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "~214 million"
                }
              ]
            },
            {
              tag: "ch-tabular-grid-row",
              class: "tabular-grid-row",
              children: [
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "Argentina"
                },
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "AR"
                },
                {
                  tag: "ch-tabular-grid-cell",
                  class: "tabular-grid-cell",
                  children: "~46 million"
                }
              ]
            }
          ]
        }
      }
    },

    gxgIcon: {
      linkId: "gxg-icon",
      title: "9. gxg-icon",
      before: {
        template: {
          tag: "gxg-icon",
          properties: [
            { name: "type", value: "gemini-tools/add-circle" },
            { name: "color", value: "mercury-primary" },
            { name: "size", value: "small" }
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
              'AssetsManager.getIconPath({category: "gemini-tools", name: "add-circle", colorType: "on-primary" })'
          }
        ],
        template: {
          tag: "ch-image",
          properties: [{ name: "src", value: "ICON", variable: true }],
          class: "icon-sm"
        }
      }
    },

    gxgLabel: {
      linkId: "gxg-label",
      title: "gxg-label",
      before: {
        template: {
          tag: "gxg-label",
          properties: [{ name: "label-position", value: "above" }],
          children: "This is the label"
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
              properties: [{ name: "htmlFor", value: "your-control-id" }],
              children: "The Label Caption"
            },
            "<!-- Your related control here -->"
          ]
        }
      }
    },

    gxgListBox: {
      linkId: "gxg-list-box",
      title: "4. gxg-list-box",
      before: {
        template: {
          tag: "gxg-list-box",
          properties: [{ name: "the-title", value: "My Listbox Caption" }],
          children: [
            {
              tag: "gxg-list-box-item",
              properties: [{ name: "value", value: "red" }],
              children: "Red"
            },
            {
              tag: "gxg-list-box-item",
              properties: [{ name: "value", value: "blue" }],
              children: "Blue"
            },
            {
              tag: "gxg-list-box-item",
              properties: [{ name: "value", value: "green" }],
              children: "Green"
            },
            {
              tag: "gxg-list-box-item",
              properties: [{ name: "value", value: "yellow" }],
              children: "Yellow"
            },
            {
              tag: "gxg-list-box-item",
              properties: [{ name: "value", value: "purple" }],
              children: "Purple"
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("ActionListModel")],
        states: [
          {
            name: "listBoxItems",
            type: "ActionListModel",
            value: [
              { id: "red", type: "actionable", caption: "Red" },
              { id: "blue", type: "actionable", caption: "Blue" },
              { id: "green", type: "actionable", caption: "Green" },
              { id: "yellow", type: "actionable", caption: "Yellow" },
              { id: "purple", type: "actionable", caption: "Purple" }
            ] satisfies ActionListModel
          }
        ],
        template: {
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "list-box-items" }],
              children: "List Box Items"
            },
            {
              tag: "ch-action-list-render",
              class: "list-box",
              properties: [
                { name: "id", value: "list-box-items" },
                { name: "model", value: "listBoxItems", state: true }
              ]
            }
          ]
        }
      }
    },

    gxgSuggest: {
      linkId: "gxg-suggest",
      title: "gxg-suggest",
      before: {
        template: {
          tag: "gxg-suggest",
          children: [
            {
              tag: "ch-suggest",
              properties: [
                {
                  name: "value",
                  value: "this.selectedColor.name",
                  variable: true
                },
                {
                  name: "onValueChanged",
                  value: "this.colorChangedHandler",
                  variable: true
                }
              ],
              children: "{this.renderSuggestLists(this.colorSuggestions)}"
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("ActionListModel")],
        states: [
          {
            name: "suggestModel",
            type: "ActionListModel",
            value: [
              { id: "red", type: "actionable", caption: "Red" },
              { id: "blue", type: "actionable", caption: "Blue" },
              { id: "green", type: "actionable", caption: "Green" },
              { id: "yellow", type: "actionable", caption: "Yellow" },
              { id: "purple", type: "actionable", caption: "Purple" }
            ] satisfies ActionListModel
          },
          {
            name: "suggestOptions",
            type: "ComboBoxSuggestOptions",
            value: {
              alreadyProcessed: false,
              autoExpand: true,
              hideMatchesAndShowNonMatches: false,
              highlightMatchedItems: false,
              matchCase: false,
              regularExpression: false,
              strict: false
            }
          }
        ],
        template: {
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "suggest" }],
              children: "Favorite Colors"
            },
            {
              tag: "ch-combo-box-render",
              class: "combo-box",
              properties: [
                { name: "id", value: "suggest" },
                { name: "accessibleName", value: "My Favorite Colors" },
                { name: "model", value: "suggestModel", state: true },
                { name: "placeholder", value: "Select your favorite color" },
                { name: "suggest", value: true },
                { name: "suggestOptions", value: "suggestOptions", state: true }
              ]
            }
          ]
        }
      }
    },

    gxgTabs: {
      linkId: "gxg-tabs",
      title: "gxg-tabs",
      before: {
        template: {
          tag: "gxg-tabs",
          properties: [
            { name: "id", value: "gxgTabs" },
            { name: "position", value: "top" }
          ],
          children: [
            {
              tag: "gxg-tab-bar",
              properties: [
                { name: "slot", value: "tab-bar-container" },
                { name: "id", value: "tab-bar" }
              ],
              children: [
                {
                  tag: "gxg-tab-button",
                  properties: [
                    { name: "slot", value: "tab-bar" },
                    { name: "tab-label", value: "apples" },
                    { name: "tab", value: "apples" },
                    { name: "key", value: "apples" },
                    { name: "is-selected", value: true }
                  ]
                },
                {
                  tag: "gxg-tab-button",
                  properties: [
                    { name: "slot", value: "tab-bar" },
                    { name: "tab-label", value: "bananas" },
                    { name: "tab", value: "bananas" },
                    { name: "key", value: "bananas" },
                    { name: "icon", value: "gemini-tools/settings" }
                  ]
                },
                {
                  tag: "gxg-tab-button",
                  properties: [
                    { name: "slot", value: "tab-bar" },
                    { name: "tab-label", value: "cherries" },
                    { name: "tab", value: "cherries" },
                    { name: "key", value: "cherries" },
                    { name: "icon", value: "gemini-tools/settings" },
                    { name: "hidden", value: true }
                  ]
                }
              ]
            },
            {
              tag: "gxg-tab",
              properties: [
                { name: "tab", value: "apples" },
                { name: "key", value: "apples" },
                { name: "isSelected", value: true }
              ],
              children:
                "<p>An apple is a sweet, edible fruit produced by an apple tree...</p>"
            },
            {
              tag: "gxg-tab",
              properties: [
                { name: "tab", value: "bananas" },
                { name: "key", value: "bananas" },
                { name: "isSelected", value: false }
              ],
              children: "<p>A banana is an elongated, edible fruit...</p>"
            },
            {
              tag: "gxg-tab",
              properties: [
                { name: "tab", value: "cherries" },
                { name: "key", value: "cherries" },
                { name: "isSelected", value: false }
              ],
              children: "<p>A cherry is the fruit of many plants...</p>"
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("TabModel")],
        states: [
          {
            name: "fruitsModel",
            type: "TabModel",
            value: [
              { id: "apples", name: "Apples" },
              { id: "bananas", name: "Bananas" },
              { id: "cherries", name: "Cherries" }
            ] satisfies TabModel
          }
        ],
        template: {
          tag: "ch-tab-render",
          class: "tab tab-indicator-start",
          properties: [
            { name: "tab-list-position", value: "inline-start" },
            { name: "selected-id", value: "apples" },
            { name: "model", value: "fruitsModel", state: true }
          ],
          children: [
            {
              tag: "div",
              properties: [
                { name: "slot", value: "apples" },
                { name: "class", value: "spacing-body" }
              ],
              children: {
                tag: "p",
                class: "text-body",
                children: "An apple is a sweet, edible fruit..."
              }
            },
            {
              tag: "div",
              properties: [
                { name: "slot", value: "bananas" },
                { name: "class", value: "spacing-body" }
              ],
              children: {
                tag: "p",
                class: "text-body",
                children: "A banana is an elongated, edible fruit..."
              }
            },
            {
              tag: "div",
              properties: [
                { name: "slot", value: "cherries" },
                { name: "class", value: "spacing-body" }
              ],
              children: {
                tag: "p",
                class: "text-body",
                children: "A cherry is the fruit of many plants..."
              }
            }
          ]
        }
      }
    },

    gxgText: {
      linkId: "gxg-text",
      title: "gxg-text",
      before: {
        template: {
          tag: "gxg-text",
          properties: [{ name: "type", value: "text-regular" }],
          children: `Genexus is a development platform that automates application creation using a
  model-driven approach. It allows developers to focus on high-level design, generating 
  code  for web, mobile, and desktop applications, resulting in faster development cycles 
  and fewer errors.`
        }
      },
      after: {
        template: {
          tag: "p",
          class: "text-body",
          children: `Genexus is a development platform that automates application creation using a 
  model-driven approach. It allows developers to focus on high-level design, generating code 
  for web, mobile, and desktop applications, resulting in faster development cycles and fewer 
  errors.`
        }
      }
    },

    gxgTitle: {
      linkId: "gxg-title",
      title: "gxg-title",
      before: {
        template: [
          {
            tag: "gxg-title",
            properties: [{ name: "type", value: "title-01" }],
            children: "This is a heading 1"
          },
          {
            tag: "gxg-title",
            properties: [{ name: "type", value: "title-02" }],
            children: "This is a heading 2"
          },
          {
            tag: "gxg-title",
            properties: [{ name: "type", value: "title-03" }],
            children: "This is a heading 3"
          },
          {
            tag: "gxg-title",
            properties: [{ name: "type", value: "title-04" }],
            children: "This is a heading 4"
          },
          {
            tag: "gxg-title",
            properties: [{ name: "type", value: "title-05" }],
            children: "This is a heading 5"
          },
          {
            tag: "gxg-title",
            properties: [{ name: "type", value: "title-06" }],
            children: "This is a heading 6"
          }
        ]
      },
      after: {
        template: [
          { tag: "h1", class: "heading-1", children: "This is a heading 1" },
          { tag: "h2", class: "heading-2", children: "This is a heading 2" },
          { tag: "h3", class: "heading-3", children: "This is a heading 3" },
          { tag: "h4", class: "heading-4", children: "This is a heading 4" },
          { tag: "h5", class: "heading-5", children: "This is a heading 5" },
          { tag: "h6", class: "heading-6", children: "This is a heading 6" }
        ]
      }
    }
  }
} as const satisfies ComponentMetadataBeforeAfter;
