import { ComponentMetadata } from "../../../common/types";
import { chameleonImportType } from "../../../services/template-language/create-template";
import { radioGroupModel } from "./models";

const COMPONENT_CLASS = "radio-group";

export const radioGroupMetadata = {
  title: "Radio Group",
  description:
    "A radio group is an essential UI component in HTML, designed to allow users to select one option from a set of choices. Each radio button within the group represents a distinct option, ensuring mutual exclusivity. This setup is commonly used in forms to facilitate decisions such as choosing a payment method, selecting a preferred contact time, or specifying a shipping option.",
  codeSnippets: {
    default: {
      linkId: "Horizontal",
      title: "1. Horizontal",
      states: [
        {
          name: "radioGroupModel",
          type: "RadioGroupModel",
          value: radioGroupModel
        }
      ],
      imports: [chameleonImportType("RadioGroupModel")],
      template: {
        tag: "ch-radio-group-render",
        class: COMPONENT_CLASS,
        properties: [
          {
            name: "model",
            value: "radioGroupModel",
            state: true
          }
        ]
      }
    },

    vertical: {
      linkId: "Vertical",
      title: "2. Vertical",
      template: {
        tag: "ch-radio-group-render",
        class: COMPONENT_CLASS,
        properties: [
          { name: "direction", value: "vertical" },
          { name: "model", value: "...", variable: true }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
