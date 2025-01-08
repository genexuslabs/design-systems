import { ComponentMetadata } from "../../../common/types";

export const buttonMetadata = {
  title: "Button",
  description:
    "A primary HTML button is a key element on a webpage, designed to stand out and encourage user interaction. It typically represents the main action a user should take, such as submitting a form or saving changes.",
  codeSnippets: {
    buttonPrimaryTextOnly: [
      {
        tag: "button",
        properties: [{ name: "class", value: "button-primary" }],
        children: [{ type: "text", text: "Caption" }]
      }
    ],

    buttonPrimaryTextOnlyDisabled: [
      {
        tag: "button",
        properties: [
          { name: "class", value: "button-primary" },
          { name: "disabled", value: true }
        ],
        children: [{ type: "text", text: "Caption" }]
      }
    ],

    buttonPrimaryTextOnlyDestructive: [
      {
        tag: "button",
        properties: [
          { name: "class", value: "button-primary button-primary-destructive" }
        ],
        children: [{ type: "text", text: "Caption" }]
      }
    ],

    buttonPrimaryIconAndText: [
      {
        tag: "button",
        properties: [
          { name: "class", value: "button-primary button-icon-and-text" }
        ],
        children: [
          {
            tag: "ch-image",
            properties: [{ name: "class", value: "icon-sm" }]
          },
          { type: "text", text: "Caption" }
        ]
      }
    ]
  }
} as const satisfies ComponentMetadata;
