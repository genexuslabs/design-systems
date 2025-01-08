import { ComponentMetadata } from "../../../common/types";

export const radioGroupMetadata = {
  title: "Radio Group",
  description:
    "A radio group is an essential UI component in HTML, designed to allow users to select one option from a set of choices. Each radio button within the group represents a distinct option, ensuring mutual exclusivity. This setup is commonly used in forms to facilitate decisions such as choosing a payment method, selecting a preferred contact time, or specifying a shipping option.",
  codeSnippets: {
    default: [
      {
        tag: "ch-radio-group-render",
        properties: [{ name: "class", value: "radio-group" }]
      }
    ],

    vertical: [
      {
        tag: "ch-radio-group-render",
        properties: [
          { name: "class", value: "radio-group" },
          { name: "direction", value: "vertical" }
        ]
      }
    ]
  }
} as const satisfies ComponentMetadata;
