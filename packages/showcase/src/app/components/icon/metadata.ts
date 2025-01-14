import { ComponentMetadata } from "../../../common/types";

export const iconMetadata = {
  title: "Icon",
  description:
    "Icons are essential in web development as they enhance user experience by providing visual cues, improving navigation, and making interfaces more intuitive. They help in quickly conveying actions or information, reducing the need for extensive text, and contributing to a clean, visually appealing design.",
  codeSnippets: {
    iconSource: {
      linkId: "icon-source",
      title: "1. Icon source",
      imports: [
        'import { getIconPath } from "@genexus/mercury/assets-manager.js";'
      ],
      variables: [
        {
          name: "ASSISTANT_ICON",
          value:
            'getIconPath({ category: "system", name: "assistant", colorType: "primary" })'
        }
      ],
      template: {
        tag: "ch-image",
        class: "icon-md",
        properties: [{ name: "src", value: "ASSISTANT_ICON", variable: true }]
      }
    },

    sizeSmall: {
      linkId: "size-small",
      title: "2. Size: small",
      template: {
        tag: "ch-image",
        class: "icon-sm",
        properties: [{ name: "src", value: "...", variable: true }]
      }
    },

    sizeMedium: {
      linkId: "size-medium",
      title: "3. Size: medium",
      template: {
        tag: "ch-image",
        class: "icon-md",
        properties: [{ name: "src", value: "...", variable: true }]
      }
    },

    mask: {
      linkId: "mask",
      title: "4. Mask",
      template: {
        tag: "ch-image",
        class: "icon-md",
        properties: [
          { name: "src", value: "...", variable: true },
          { name: "type", value: "mask" }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
