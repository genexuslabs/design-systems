import { ComponentMetadata } from "../../../common/types";

const COMPONENT_CLASS = "label";

export const labelMetadata = {
  title: "Label",
  description:
    "A label element is a crucial component on a webpage, designed to provide descriptive text for form controls. It improves accessibility and usability by indicating the purpose of the associated input element, helping users understand what information is required.",
  codeSnippets: {
    default: {
      linkId: "default",
      title: "1. Default",
      template: [
        {
          tag: "label",
          class: COMPONENT_CLASS,
          properties: [{ name: "for", value: "element-1" }],
          children: [{ text: "The label caption", type: "text" }]
        }
      ]
    },

    disabled: {
      linkId: "disabled",
      title: "4. Disabled",
      template: [{ text: "TODO", type: "text" }]
    }
  }
} as const satisfies ComponentMetadata;
