import { ComponentMetadataBeforeAfter } from "../../common/types";
import { chameleonImportType } from "../../services/template-language/create-template";
import { iconsModelForMetadata } from "../components/tree-view/models";
import {
  objectsAccordionModel,
  carsComboBoxModel,
  favoriteColorsActionListModel,
  favoriteColorsComboBoxModel,
  favoriteColorsRadioGroupModel,
  fruitsTabModel
} from "./models";

export const SCROLLABLE_CLASS = "scrollable";

const ADD_CIRCLE_ICON_TEMPLATE =
  'AssetsManager.getIconPath({ category: "gemini-tools", name: "add-circle", colorType: "on-primary" })';

export const geminiMigrationMetadata = {
  title: "Gemini Migration",
  description:
    'When migrating from the "Gemini" design system to "Mercury," you\'ll be transitioning your project\'s styles, components, and design principles to align with the new system. This process involves updating your codebase to replace Gemini-specific components and styles with their Mercury equivalents, ensuring consistency with Mercury\'s guidelines. The migration guide will provide you with step-by-step instructions to help make this transition as smooth as possible.',
  codeSnippets: {
    gxgAccordion: {
      linkId: "gxg-accordion",
      title: "gxg-accordion",
      before: {
        template: {
          tag: "gxg-accordion",
          properties: [{ name: "mode", value: "classical" }],
          children: [
            {
              tag: "gxg-accordion-item",
              properties: [
                { name: "item-title", value: "objects: file" },
                { name: "item-id", value: "objects-file" }
              ],
              children: "File content here"
            },
            {
              tag: "gxg-accordion-item",
              properties: [
                { name: "item-title", value: "objects: domain" },
                { name: "item-id", value: "objects-domain" }
              ],
              children: "Domain content here"
            },
            {
              tag: "gxg-accordion-item",
              properties: [
                { name: "item-title", value: "objects: procedure" },
                { name: "item-id", value: "objects-procedure" }
              ],
              children: "Procedure content here"
            },
            {
              tag: "gxg-accordion-item",
              properties: [
                { name: "item-title", value: "objects: document" },
                { name: "item-id", value: "objects-document" }
              ],
              children: "Document content here"
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("AccordionModel")],
        states: [
          {
            name: "objectsAccordionModel",
            type: "AccordionModel",
            value: objectsAccordionModel
          }
        ],
        template: {
          tag: "ch-accordion-render",
          properties: [
            { name: "class", value: "accordion-filled" },
            { name: "model", value: "objectsAccordionModel", state: true }
          ],
          children: [
            {
              tag: "div",
              properties: [
                { name: "slot", value: "objects-file" },
                { name: "class", value: "spacing-body" }
              ],
              children: "File content here"
            },
            {
              tag: "div",
              properties: [
                { name: "slot", value: "objects-domain" },
                { name: "class", value: "spacing-body" }
              ],
              children: "Domain content here"
            },
            {
              tag: "div",
              properties: [
                { name: "slot", value: "objects-procedure" },
                { name: "class", value: "spacing-body" }
              ],
              children: "Procedure content here"
            },
            {
              tag: "div",
              properties: [
                { name: "slot", value: "objects-document" },
                { name: "class", value: "spacing-body" }
              ],
              children: "Document content here"
            }
          ]
        }
      }
    },

    gxgButtonTextOnly: {
      linkId: "gxg-button-text-only",
      title: "gxg-button: Text only",
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

    gxgColumns: {
      linkId: "gxg-columns",
      title: "gxg-columns",
      before: {
        template: {
          tag: "gxg-columns",
          properties: [],
          children: [
            {
              tag: "gxg-column",
              properties: [{ name: "width", value: "1/4" }],
              children: "Content fo column 1"
            },
            {
              tag: "gxg-column",
              properties: [{ name: "width", value: "1/4" }],
              children: "Content fo column 2"
            },
            {
              tag: "gxg-column",
              properties: [{ name: "width", value: "1/4" }],
              children: "Content fo column 3"
            },
            {
              tag: "gxg-column",
              properties: [{ name: "width", value: "1/4" }],
              children: "Content fo column 4"
            }
          ]
        }
      },
      after: {
        template: {
          tag: "div",
          class: "layout layout--cols-4",
          children: [
            {
              tag: "div",
              class: "layout__panel",
              children: "Content of column 1"
            },
            {
              tag: "div",
              class: "layout__panel",
              children: "Content of column 2"
            },
            {
              tag: "div",
              class: "layout__panel",
              children: "Content of column 3"
            },
            {
              tag: "div",
              class: "layout__panel",
              children: "Content of column 4"
            }
          ]
        }
      }
    },

    gxgComboBox: {
      linkId: "gxg-combo-box",
      title: "gxg-combo-box",
      before: {
        template: {
          tag: "gxg-combo-box",
          properties: [
            { name: "label", value: "Favorite Colours" },
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
            value: favoriteColorsComboBoxModel
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
              children: "Favorite Colours"
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
      title: "gxg-form-checkbox",
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
      title: "gxg-form-radio-group",
      before: {
        template: {
          tag: "gxg-form-radio-group",
          properties: [{ name: "label", value: "Favorite colors" }],
          children: [
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "red" },
                { name: "value", value: "Red" }
              ]
            },
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "blue" },
                { name: "value", value: "Blue" }
              ]
            },
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "green" },
                { name: "value", value: "Green" }
              ]
            },
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "yellow" },
                { name: "value", value: "Yellow" }
              ]
            },
            {
              tag: "gxg-form-radio",
              properties: [
                { name: "label", value: "purple" },
                { name: "value", value: "Purple" }
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
            value: favoriteColorsRadioGroupModel
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
              children: "Favorite colors"
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
      title: "gxg-form-text",
      before: {
        template: {
          tag: "gxg-form-text",
          properties: [
            { name: "icon", value: "gemini-tools/add-circle" },
            { name: "placeholder", value: "John Smith" },
            { name: "value", value: "Adam Smith" }
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
              properties: [{ name: "for", value: "user-name" }],
              children: "Name"
            },
            {
              tag: "ch-edit",
              class: "input",
              properties: [
                { name: "id", value: "user-name" },
                { name: "placeholder", value: "John Smith" },
                { name: "startImgSrc", value: "ICON", variable: true },
                { name: "value", value: "Adam Smith" }
              ]
            }
          ]
        }
      }
    },

    gxgFormTextarea: {
      linkId: "gxg-form-textarea",
      title: "gxg-form-textarea",
      before: {
        template: {
          tag: "gxg-form-textarea",
          class: "textarea",
          properties: [
            {
              name: "label",
              value: "Developer experience"
            },
            {
              name: "placeholder",
              value: "Add your description here"
            },
            {
              name: "value",
              value: "I have experience in backend development..."
            },
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
              children: "Developer experience"
            },
            {
              tag: "ch-edit",
              class: "input",
              properties: [
                { name: "id", value: "developer-experience" },
                { name: "autoGrow", value: "true", variable: true },
                {
                  name: "multiline",
                  value: "true",
                  variable: true
                },
                {
                  name: "placeholder",
                  value: "Add your description here"
                },
                {
                  name: "value",
                  value: "I have experience in backend development..."
                }
              ]
            }
          ]
        }
      }
    },

    gxgGrid: {
      linkId: "gxg-grid",
      title: "gxg-grid",
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
                        { name: "columnName", value: "Country Name" },
                        { name: "columnNamePosition", value: "text" },
                        { name: "settingable", value: false }
                      ]
                    },
                    {
                      tag: "ch-grid-column",
                      properties: [
                        { name: "columnName", value: "Country Code" },
                        { name: "columnNamePosition", value: "text" },
                        { name: "settingable", value: false }
                      ]
                    },
                    {
                      tag: "ch-grid-column",
                      properties: [
                        { name: "columnName", value: "Population" },
                        { name: "columnNamePosition", value: "text" },
                        { name: "settingable", value: false }
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
              class: "tabular-grid-column-sset",
              children: [
                {
                  tag: "ch-tabular-grid-column",
                  class: "tabular-grid-column",
                  properties: [
                    { name: "columnName", value: "Country Name" },
                    { name: "columnNamePosition", value: "text" },
                    { name: "settingable", value: false }
                  ]
                },
                {
                  tag: "ch-tabular-grid-column",
                  class: "tabular-grid-column",
                  properties: [
                    { name: "columnName", value: "Country Code" },
                    { name: "columnNamePosition", value: "text" },
                    { name: "settingable", value: false }
                  ]
                },
                {
                  tag: "ch-tabular-grid-column",
                  class: "tabular-grid-column",
                  properties: [
                    { name: "columnName", value: "Population" },
                    { name: "columnNamePosition", value: "text" },
                    { name: "settingable", value: false }
                  ]
                }
              ]
            },
            {
              tag: "ch-tabular-grid-row",
              class: "tabularGridRow",
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
              class: "tabularGridRow",
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
              class: "tabularGridRow",
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
      title: "gxg-icon",
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
            value: ADD_CIRCLE_ICON_TEMPLATE
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
          properties: [{ name: "labelPosition", value: "above" }],
          children: "The Label Caption"
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
              properties: [{ name: "for", value: "your-control-id" }],
              children: "The Label Caption"
            },
            "<!-- Your related control here -->"
          ]
        }
      }
    },

    gxgListBox: {
      linkId: "gxg-list-box",
      title: "gxg-list-box",
      before: {
        template: {
          tag: "gxg-list-box",
          properties: [{ name: "theTitle", value: "My Listbox Caption" }],
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
            value: favoriteColorsActionListModel
          }
        ],
        template: {
          tag: "ch-action-list-render",
          class: "list-box",
          properties: [{ name: "model", value: "listBoxItems", state: true }]
        }
      }
    },

    gxgModal: {
      linkId: "gxg-modal",
      title: "gxg-modal",
      before: {
        template: {
          tag: "gxg-modal",
          properties: [
            { name: "id", value: "modal" },
            { name: "modal-title", value: "Terms and conditions agreement" }
          ],
          children: [
            `By accessing this website, you agree to comply with these terms and
conditions. We reserve the right to modify or update these terms at any time
without notice.`,
            {
              tag: "gxg-button",
              properties: [
                { name: "slot", value: "footer" },
                { name: "type", value: "secondary-text-only" }
              ],
              children: "No"
            },
            {
              tag: "gxg-button",
              properties: [
                { name: "slot", value: "footer" },
                { name: "type", value: "primary-text-only" }
              ],
              children: "Yes"
            }
          ]
        }
      },
      after: {
        template:
          "Pelase, refer to the documentation and examples in the plugins repository."
      }
    },

    gxgPills: {
      linkId: "gxg-pills",
      title: "gxg-pills",
      before: {
        template: {
          tag: "div",
          children: [
            {
              tag: "gxg-pill",
              properties: [
                { name: "icon", value: "gemini-tools/success" },
                { name: "type", value: "static" }
              ],
              children: "Success"
            },
            {
              tag: "gxg-pill",
              properties: [
                { name: "icon", value: "gemini-tools/error" },
                { name: "type", value: "static" }
              ],
              children: "Error"
            },
            {
              tag: "gxg-pill",
              properties: [
                { name: "icon", value: "gemini-tools/warning" },
                { name: "type", value: "static" }
              ],
              children: "Warning"
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("ComboBoxModel")],
        states: [
          {
            name: "pillStatusModel",
            type: "ComboBoxModel",
            value: [
              {
                value: "success",
                caption: "Success"
              },
              {
                value: "error",
                caption: "Error"
              },
              {
                value: "warning",
                caption: "Warning"
              }
            ]
          }
        ],
        template: {
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "pills" }],
              children: "Status selection"
            },
            {
              tag: "ch-combo-box-render",
              class: "pill",
              properties: [
                { name: "id", value: "pills" },
                { name: "model", value: "pillStatusModel", state: true },
                { name: "placeholder", value: "Select a status" }
              ]
            }
          ]
        }
      }
    },

    gxgSelect: {
      linkId: "gxg-select",
      title: "gxg-select",
      before: {
        template: {
          tag: "gxg-select",
          properties: [
            { name: "id", value: "gxg-select" },
            { name: "label", value: "Favorite car" },
            { name: "labelPosition", value: "above" },
            { name: "size", value: "5" }
          ],
          children: [
            {
              tag: "gxg-option",
              properties: [{ name: "value", value: "none" }],
              children: "Select car:"
            },
            {
              tag: "gxg-option",
              properties: [{ name: "value", value: "audi" }],
              children: "Audi"
            },
            {
              tag: "gxg-option",
              properties: [{ name: "value", value: "bmw" }],
              children: "BMW"
            },
            {
              tag: "gxg-option",
              properties: [{ name: "value", value: "citroen" }],
              children: "Citroen"
            },
            {
              tag: "gxg-option",
              properties: [{ name: "value", value: "ford" }],
              children: "Ford"
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("ComboBoxModel")],
        states: [
          {
            name: "carsComboBoxModel",
            type: "ComboBoxModel",
            value: carsComboBoxModel
          }
          // TODO: This is only necessary when using strict mode. In that case,
          // only the strict flag should be added.
          // {
          //   name: "suggestOptions",
          //   type: "ComboBoxSuggestOptions",
          //   value: {
          //     alreadyProcessed: false,
          //     autoExpand: true,
          //     hideMatchesAndShowNonMatches: false,
          //     highlightMatchedItems: false,
          //     matchCase: false,
          //     regularExpression: false,
          //     strict: false
          //   }
          // }
        ],
        template: {
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "favorite-car" }],
              children: "Favorite car"
            },
            {
              tag: "ch-combo-box-render",
              class: `combo-box`,
              properties: [
                { name: "id", value: "favorite-car" },
                { name: "model", value: "favoriteCarsModel", state: true },
                { name: "placeholder", value: "Porsche" },
                { name: "value", value: "bmw" }
              ]
            }
          ]
        }
      }
    },

    gxgStack: {
      linkId: "gxg-stack",
      title: "gxg-stack",
      before: {
        template: {
          tag: "gxg-stack",
          properties: [{ name: "columns-space", value: "m" }],
          children: [
            {
              tag: "gxg-form-text",
              properties: [
                { name: "label", value: "Full name" },
                { name: "label-position", value: "top" },
                { name: "placeholder", value: "John Smith" },
                { name: "id", value: "full-name" }
              ]
            },
            {
              tag: "gxg-form-text",
              properties: [
                { name: "label", value: "Job position" },
                { name: "label-position", value: "top" },
                { name: "placeholder", value: "Backend developer" },
                { name: "id", value: "backend-developer" }
              ]
            },
            {
              tag: "gxg-form-text",
              properties: [
                { name: "label", value: "Location" },
                { name: "label-position", value: "top" },
                { name: "placeholder", value: "Miami, Usa" },
                { name: "id", value: "location" }
              ]
            }
          ]
        }
      },
      after: {
        template: {
          tag: "div",
          class: "field-group",
          children: [
            {
              tag: "div",
              class: "field field-block",
              children: [
                {
                  tag: "label",
                  class: "label",
                  properties: [{ name: "htmlFor", value: "full-name" }],
                  children: "Full Name"
                },
                {
                  tag: "ch-edit",
                  properties: [
                    { name: "class", value: "input" },
                    { name: "id", value: "full-name" },
                    { name: "placeholder", value: "John Smith" }
                  ]
                }
              ]
            },
            {
              tag: "div",
              class: "field field-block",
              children: [
                {
                  tag: "label",
                  class: "label",
                  properties: [{ name: "htmlFor", value: "job-position" }],
                  children: "Job Position"
                },
                {
                  tag: "ch-edit",
                  properties: [
                    { name: "class", value: "input" },
                    { name: "id", value: "job-position" },
                    { name: "placeholder", value: "Backend developer" }
                  ]
                }
              ]
            },
            {
              tag: "div",
              class: "field field-block",
              children: [
                {
                  tag: "label",
                  class: "label",
                  properties: [{ name: "htmlFor", value: "location" }],
                  children: "Location"
                },
                {
                  tag: "ch-edit",
                  properties: [
                    { name: "class", value: "input" },
                    { name: "id", value: "location" },
                    { name: "placeholder", value: "Miami, USA" }
                  ]
                }
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
                  value: "selectedColor",
                  variable: true
                }

                // TODO: Add support for events
                // {
                //   name: "onValueChanged",
                //   value: "this.colorChangedHandler",
                //   variable: true
                // }
              ],
              children: "<!-- Your dynamically generated lists items here -->"
            }
          ]
        }
      },
      after: {
        imports: [chameleonImportType("ComboBoxModel")],
        states: [
          {
            name: "suggestModel",
            type: "ComboBoxModel",
            value: favoriteColorsComboBoxModel
          }

          // TODO: This is only necessary when using strict mode. In that case,
          // only the strict flag should be added.
          // {
          //   name: "suggestOptions",
          //   type: "ComboBoxSuggestOptions",
          //   value: {
          //     alreadyProcessed: false,
          //     autoExpand: true,
          //     hideMatchesAndShowNonMatches: false,
          //     highlightMatchedItems: false,
          //     matchCase: false,
          //     regularExpression: false,
          //     strict: false
          //   }
          // }
        ],
        template: {
          tag: "div",
          class: "field field-block",
          children: [
            {
              tag: "label",
              class: "label",
              properties: [{ name: "for", value: "suggest" }],
              children: "Favorite colors"
            },
            {
              tag: "ch-combo-box-render",
              class: "combo-box",
              properties: [
                { name: "id", value: "suggest" },
                { name: "model", value: "suggestModel", state: true },
                { name: "placeholder", value: "Search a color" },
                { name: "suggest", value: true }
                // { name: "suggestOptions", value: "suggestOptions", state: true }
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
                    { name: "tabLabel", value: "apples" },
                    { name: "tab", value: "apples" },
                    { name: "key", value: "apples" },
                    { name: "isSelected", value: true }
                  ]
                },
                {
                  tag: "gxg-tab-button",
                  properties: [
                    { name: "slot", value: "tab-bar" },
                    { name: "tabLabel", value: "bananas" },
                    { name: "tab", value: "bananas" },
                    { name: "key", value: "bananas" },
                    { name: "icon", value: "gemini-tools/settings" }
                  ]
                },
                {
                  tag: "gxg-tab-button",
                  properties: [
                    { name: "slot", value: "tab-bar" },
                    { name: "tabLabel", value: "cherries" },
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
            value: fruitsTabModel
          }
        ],
        template: {
          tag: "ch-tab-render",
          class: "tab",
          properties: [
            { name: "tabListPosition", value: "inline-start" },
            { name: "selectedId", value: "apples" },
            { name: "model", value: "fruitsModel", state: true }
          ],
          children: [
            {
              tag: "p",
              properties: [
                { name: "slot", value: "apples" },
                { name: "class", value: "spacing-body body-regular-m" }
              ],
              children: "An apple is a sweet, edible fruit..."
            },
            {
              tag: "p",
              properties: [
                { name: "slot", value: "bananas" },
                { name: "class", value: "spacing-body body-regular-m" }
              ],
              children: "A banana is an elongated, edible fruit..."
            },
            {
              tag: "p",
              properties: [
                { name: "slot", value: "cherries" },
                { name: "class", value: "spacing-body body-regular-m" }
              ],
              children: "A cherry is the fruit of many plants..."
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
          class: "body-regular-m",
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
    },

    gxgTreeView: {
      linkId: "gxg-tree-view",
      title: "gxg-tree-view",
      before: {
        imports: [chameleonImportType("TreeViewModel")],
        states: [
          {
            name: "myTreeModel",
            type: "TreeViewModel",
            value: "..."
          }
        ],
        template: {
          tag: "gxg-tree-view",
          properties: [
            { name: "dragDisabled", value: true },
            { name: "dropDisabled", value: true },
            { name: "expanded", value: true },
            { name: "treeModel", value: "myTreeModel", state: true },
            { name: "showLines", value: "last" }
          ],
          children: []
        }
      },
      after: {
        imports: [
          chameleonImportType("TreeViewModel"),
          'import { getIconPath, getIconPathExpanded } from "@genexus/mercury/assets-manager.js";'
        ],
        states: [
          {
            name: "myTreeModel",
            type: "TreeViewModel",
            value: iconsModelForMetadata
          }
        ],
        template: {
          tag: "ch-tree-view-render",
          class: "tree-view",
          properties: [
            { name: "dragDisabled", value: true },
            { name: "dropDisabled", value: true },
            { name: "expanded", value: true },
            { name: "model", value: "myTreeModel", state: true },
            { name: "showLines", value: "last" }
          ],
          children: []
        }
      }
    }
  }
} as const satisfies ComponentMetadataBeforeAfter;
