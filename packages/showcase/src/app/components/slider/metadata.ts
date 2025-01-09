import { ComponentMetadata } from "../../../common/types";

const COMPONENT_CLASS = "slider";

export const sliderMetadata = {
  title: "Slider",
  description:
    "A primary HTML slider is a versatile component used to allow users to select a value or range within a predefined spectrum. It is designed to be visually prominent and intuitive, often serving as a control for adjusting settings like volume, brightness, or other continuous data points.",
  codeSnippets: {
    default: {
      linkId: "default",
      title: "1. Default",
      template: { tag: "ch-slider", class: COMPONENT_CLASS }
    },

    disabled: {
      linkId: "disabled",
      title: "2. Disabled",
      template: {
        tag: "ch-slider",
        class: COMPONENT_CLASS,
        properties: [{ name: "disabled", value: true }]
      }
    },

    customRange: {
      linkId: "custom-range",
      title: "3. Custom range",
      template: {
        tag: "ch-slider",
        class: COMPONENT_CLASS,
        properties: [
          { name: "minValue", value: 1 },
          { name: "maxValue", value: 100 },
          { name: "value", value: 20 }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
