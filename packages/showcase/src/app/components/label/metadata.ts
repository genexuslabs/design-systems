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
      template: {
        tag: "label",
        class: COMPONENT_CLASS,
        properties: [{ name: "for", value: "element-1" }],
        children: "The label caption"
      }
    },

    blockStart: {
      linkId: "block-start",
      title: "2. Block Start",
      template: {
        tag: "div",
        class: "field field-block",
        children: [
          {
            tag: "label",
            class: "label",
            properties: [{ name: "for", value: "element-2" }],
            children: "The label caption"
          },
          '<!-- You "element-2" component here -->'
        ]
      }
    },

    inlineStart: {
      linkId: "inline-start",
      title: "3. Inline Start",
      template: {
        tag: "div",
        class: "field field-inline",
        children: [
          {
            tag: "label",
            class: "label",
            properties: [{ name: "for", value: "element-3" }],
            children: "The label caption"
          },
          '<!-- You "element-3" component here -->'
        ]
      }
    },

    disabled: {
      linkId: "disabled",
      title: "4. Disabled",
      template: "TODO"
    }
  }
} as const satisfies ComponentMetadata;
