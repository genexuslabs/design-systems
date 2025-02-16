import { ComponentMetadata } from "../../../common/types";
import { ComponentTemplateItemText } from "../../../services/template-language/types";
import { buttonCommon, iconCommon } from "./common";

const ICON_SRC = `getIconPath({ category: "${iconCommon.category}", name: "${iconCommon.name}", colorType: "${iconCommon.colorType}" })`;

export const buttonMetadata = {
  title: "Button",
  description:
    "The button element is an interactive component used to trigger actions or events. It supports various states (hover, active, disabled) and styles (primary, secondary, destructive) for customization and accessibility.",
  codeSnippets: {
    buttonPrimaryTextOnly: {
      linkId: "button-primary-text-only",
      title: "1.1. Text Only",
      template: {
        tag: "button",
        class: "button-primary",
        properties: [{ name: "type", value: "button" }],
        children: buttonCommon.caption
      }
    },

    buttonPrimaryTextOnlyDisabled: {
      linkId: "button-primary-text-only-disabled",
      title: "1.2. Text Only: Disabled",
      template: {
        tag: "button",
        class: "button-primary",
        properties: [
          { name: "disabled", value: true },
          { name: "type", value: "button" }
        ],
        children: buttonCommon.caption
      }
    },

    buttonPrimaryTextOnlyDestructive: {
      linkId: "button-primary-text-only-destructive",
      title: "1.3. Text Only: Destructive",
      template: {
        tag: "button",
        class: "button-primary-destructive",
        properties: [{ name: "type", value: "button" }],
        children: buttonCommon.caption
      }
    },

    buttonPrimaryIconAndText: {
      linkId: "button-primary-icon-and-text",
      title: "1.4. Icon and Text",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-primary button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          buttonCommon.caption
        ]
      }
    },

    buttonPrimaryIconAndTextDisabled: {
      linkId: "button-primary-icon-and-text-disabled",
      title: "1.5. Icon and Text: Disabled",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-primary button-icon-and-text",
        properties: [
          { name: "type", value: "button" },
          { name: "disabled", value: true }
        ],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON" },
              { name: "type", value: "mask" }
            ]
          },
          buttonCommon.caption
        ]
      }
    },

    buttonPrimaryIconAndTextDestructive: {
      linkId: "button-primary-icon-and-text-destructive",
      title: "1.6. Icon and Text: Destructive",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-primary-destructive button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          buttonCommon.caption
        ]
      }
    },

    buttonPrimaryWithLoader: {
      linkId: "button-primary-with-loader",
      title: "1.7. Primary with Loader",
      template: {
        tag: "button",
        class: "button-primary-with-loader",
        children: ["Caption"]
      }
    },

    buttonPrimaryLoaderOnly: {
      linkId: "button-primary-loader-only",
      title: "1.8. Primary Loader Only",
      template: {
        tag: "button",
        class: "button-primary-loader-only"
      }
    },

    // secondary

    buttonSecondaryTextOnly: {
      linkId: "button-secondary-text-only",
      title: "2.1. Text Only",
      template: {
        tag: "button",
        class: "button-secondary",
        properties: [{ name: "type", value: "button" }],
        children: buttonCommon.caption
      }
    },

    buttonSecondaryTextOnlyDisabled: {
      linkId: "button-secondary-text-only-disabled",
      title: "2.2. Text Only: Disabled",
      template: {
        tag: "button",
        class: "button-secondary",
        properties: [
          { name: "disabled", value: true },
          { name: "type", value: "button" }
        ],
        children: buttonCommon.caption
      }
    },

    buttonSecondaryTextOnlyDestructive: {
      linkId: "button-secondary-text-only-destructive",
      title: "2.3. Text Only: Destructive",
      template: {
        tag: "button",
        class: "button-secondary-destructive",
        properties: [{ name: "type", value: "button" }],
        children: buttonCommon.caption
      }
    },

    buttonSecondaryIconAndText: {
      linkId: "button-secondary-icon-and-text",
      title: "2.4. Icon and Text",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-secondary button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          buttonCommon.caption
        ]
      }
    },

    buttonSecondaryIconAndTextDisabled: {
      linkId: "button-secondary-icon-and-text-disabled",
      title: "2.5. Icon and Text: Disabled",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-secondary button-icon-and-text",
        properties: [
          { name: "type", value: "button" },
          { name: "disabled", value: true }
        ],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON" },
              { name: "type", value: "mask" }
            ]
          },
          buttonCommon.caption
        ]
      }
    },

    buttonSecondaryIconAndTextDestructive: {
      linkId: "button-secondary-icon-and-text-destructive",
      title: "2.6. Icon and Text: Destructive",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-secondary-destructive button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          buttonCommon.caption
        ]
      }
    },

    buttonSecondaryWithLoader: {
      linkId: "button-secondary-with-loader",
      title: "1.7. Secondary with Loader",
      template: {
        tag: "button",
        class: "button-secondary-with-loader",
        children: ["Caption"]
      }
    },

    buttonSecondaryLoaderOnly: {
      linkId: "button-secondary-loader-only",
      title: "1.8. Secondary Loader Only",
      template: {
        tag: "button",
        class: "button-secondary-loader-only"
      }
    },

    // tertiary

    buttonTertiaryTextOnly: {
      linkId: "button-tertiary-text-only",
      title: "3.1. Text Only",
      template: {
        tag: "button",
        class: "button-tertiary",
        properties: [{ name: "type", value: "button" }],
        children: buttonCommon.caption
      }
    },

    buttonTertiaryTextOnlyDisabled: {
      linkId: "button-tertiary-text-only-disabled",
      title: "3.2. Text Only: Disabled",
      template: {
        tag: "button",
        class: "button-tertiary",
        properties: [
          { name: "disabled", value: true },
          { name: "type", value: "button" }
        ],
        children: buttonCommon.caption
      }
    },

    buttonTertiaryIconAndText: {
      linkId: "button-tertiary-icon-and-text",
      title: "3.4. Icon and Text",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-tertiary button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          buttonCommon.caption
        ]
      }
    },

    buttonTertiaryIconAndTextDisabled: {
      linkId: "button-tertiary-icon-and-text-disabled",
      title: "3.5. Icon and Text: Disabled",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-tertiary button-icon-and-text",
        properties: [
          { name: "type", value: "button" },
          { name: "disabled", value: true }
        ],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON" },
              { name: "type", value: "mask" }
            ]
          },
          buttonCommon.caption
        ]
      }
    },

    buttonTertiaryIconOnly: {
      linkId: "button-tertiary-icon-only",
      title: "3.6. Icon Only",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
        }
      ],
      template: {
        tag: "button",
        class: "button-tertiary button-icon-only",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON" },
              { name: "type", value: "mask" }
            ]
          }
        ]
      }
    },

    buttonTertiaryIconOnlyDisabled: {
      linkId: "button-tertiary-icon-only-disabled",
      title: "3.6. Icon Only Disablewd",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ICON",
          value: ICON_SRC
        }
      ],
      template: {
        tag: "button",
        class: "button-tertiary button-icon-only",
        properties: [
          { name: "type", value: "button" },
          { name: "disabled", value: true }
        ],
        children: [
          {
            tag: "ch-image",
            class: "icon-md",
            properties: [
              { name: "src", value: "ICON" },
              { name: "type", value: "mask" }
            ]
          }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
