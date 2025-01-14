import { ComponentMetadata } from "../../../common/types";
import { ComponentTemplateItemText } from "../../../services/template-language/types";

const CAPTION: ComponentTemplateItemText = "Caption";

export const buttonMetadata = {
  title: "Button",
  description: "TODO..................",
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
        class: "button-primary button-primary-destructive",
        properties: [{ name: "type", value: "button" }],
        children: CAPTION
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
    }
  }
} as const satisfies ComponentMetadata;
