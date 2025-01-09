import { ComponentMetadataBeforeAfter } from "../../common/types";

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
          children: { text: "Caption", type: "text" }
        }
      },
      after: {
        template: {
          tag: "button",
          class: "button-primary",
          children: { text: "Caption", type: "text" }
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
          children: { text: "Caption", type: "text" }
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
          children: [
            {
              tag: "ch-image",
              class: "icon-sm",
              properties: [{ name: "src", value: "ICON", variable: true }]
            },
            { type: "text", text: "Caption" }
          ]
        }
      }
    }
  }
} as const satisfies ComponentMetadataBeforeAfter;
