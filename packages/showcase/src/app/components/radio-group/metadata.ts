import { ComponentMetadata } from "../../../common/types";

const COMPONENT_CLASS = "radio-group";

export const radioGroupMetadata = {
  title: "Radio Group",
  description:
    "A radio group is an essential UI component in HTML, designed to allow users to select one option from a set of choices. Each radio button within the group represents a distinct option, ensuring mutual exclusivity. This setup is commonly used in forms to facilitate decisions such as choosing a payment method, selecting a preferred contact time, or specifying a shipping option.",
  codeSnippets: {
    default: {
      linkId: "Horizontal",
      title: "1. Horizontal",
      template: [
        {
          tag: "ch-radio-group-render",
          class: COMPONENT_CLASS
        }
      ]
    },

    vertical: {
      linkId: "Vertical",
      title: "2. Vertical",
      template: [
        {
          tag: "ch-radio-group-render",
          class: COMPONENT_CLASS,
          properties: [{ name: "direction", value: "vertical" }]
        }
      ]
    }
  }
} as const satisfies ComponentMetadata;
