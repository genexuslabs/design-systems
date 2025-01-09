import { ComponentMetadata } from "../../../common/types";

export const buttonMetadata = {
  title: "Button",
  description:
    "A primary HTML button is a key element on a webpage, designed to stand out and encourage user interaction. It typically represents the main action a user should take, such as submitting a form or saving changes.",
  codeSnippets: {
    buttonPrimaryTextOnly: {
      linkId: "button-primary-text-only",
      title: "1.1. Text Only",
      template: {
        tag: "button",
        class: "button-primary",
        children: { type: "text", text: "Caption" }
      }
    },

    buttonPrimaryTextOnlyDisabled: {
      linkId: "button-primary-text-only-disabled",
      title: "1.2. Text Only: Disabled",
      template: {
        tag: "button",
        class: "button-primary",
        properties: [{ name: "disabled", value: true }],
        children: { type: "text", text: "Caption" }
      }
    },

    buttonPrimaryTextOnlyDestructive: {
      linkId: "button-primary-text-only-destructive",
      title: "1.3. Text Only: Destructive",
      template: {
        tag: "button",
        class: "button-primary button-primary-destructive",
        children: { type: "text", text: "Caption" }
      }
    },

    buttonPrimaryIconAndText: {
      linkId: "button-primary-icon-and-text",
      title: "1.4. Icon and Text",
      template: {
        tag: "button",
        class: "button-primary button-icon-and-text",
        children: [
          { tag: "ch-image", class: "icon-sm" },
          { type: "text", text: "Caption" }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
