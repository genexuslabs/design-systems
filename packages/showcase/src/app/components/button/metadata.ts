import { ComponentMetadata } from "../../../common/types";
import { ComponentTemplateItemText } from "../../../services/template-language/types";

const CAPTION: ComponentTemplateItemText = "Caption";

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
        children: CAPTION
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
        children: CAPTION
      }
    },

    buttonPrimaryTextOnlyDestructive: {
      linkId: "button-primary-text-only-destructive",
      title: "1.3. Text Only: Destructive",
      template: {
        tag: "button",
        class: "button-primary-destructive",
        properties: [{ name: "type", value: "button" }],
        children: CAPTION
      }
    },

    buttonPrimaryIconAndText: {
      linkId: "button-primary-icon-and-text",
      title: "1.4. Icon and Text",
      language: "ts",
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
        class: "button-primary button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-sm",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          CAPTION
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
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
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
            class: "icon-sm",
            properties: [
              { name: "src", value: "ICON" },
              { name: "type", value: "mask" }
            ]
          },
          CAPTION
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
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
        }
      ],
      template: {
        tag: "button",
        class: "button-primary-destructive button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-sm",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          CAPTION
        ]
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
        children: CAPTION
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
        children: CAPTION
      }
    },

    buttonSecondaryTextOnlyDestructive: {
      linkId: "button-secondary-text-only-destructive",
      title: "2.3. Text Only: Destructive",
      template: {
        tag: "button",
        class: "button-secondary-destructive",
        properties: [{ name: "type", value: "button" }],
        children: CAPTION
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
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
        }
      ],
      template: {
        tag: "button",
        class: "button-secondary button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-sm",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          CAPTION
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
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
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
            class: "icon-sm",
            properties: [
              { name: "src", value: "ICON" },
              { name: "type", value: "mask" }
            ]
          },
          CAPTION
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
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
        }
      ],
      template: {
        tag: "button",
        class: "button-secondary-destructive button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-sm",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          CAPTION
        ]
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
        children: CAPTION
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
        children: CAPTION
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
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
        }
      ],
      template: {
        tag: "button",
        class: "button-tertiary button-icon-and-text",
        properties: [{ name: "type", value: "button" }],
        children: [
          {
            tag: "ch-image",
            class: "icon-sm",
            properties: [
              { name: "src", value: "ICON", variable: true },
              { name: "type", value: "mask" }
            ]
          },
          CAPTION
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
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
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
            class: "icon-sm",
            properties: [
              { name: "src", value: "ICON" },
              { name: "type", value: "mask" }
            ]
          },
          CAPTION
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
            class: "icon-sm",
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
          value:
            'getIconPath({ category: "system", name: "add-circle", colorType: "on-elevation" })'
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
            class: "icon-sm",
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
