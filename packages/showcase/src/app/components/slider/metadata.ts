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
      additionalInfoTemplate: {
        metadata: "a slider",
        type: "label-and-for"
      },
      template: {
        tag: "div",
        class: "field field-block",
        children: [
          {
            tag: "label",
            class: "label",
            properties: [{ name: "for", value: "temperature" }],
            children: "Temperature"
          },
          {
            tag: "ch-slider",
            class: COMPONENT_CLASS,
            properties: [{ name: "id", value: "temperature" }]
          }
        ]
      }
    },

    noLabel: {
      linkId: "no-label",
      title: "2. No Label",
      template: {
        tag: "ch-slider",
        class: COMPONENT_CLASS,
        properties: [{ name: "accessibleName", value: "Temperature" }]
      }
    },

    disabled: {
      linkId: "disabled",
      title: "3. Disabled",
      template: {
        tag: "ch-slider",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Temperature" },
          { name: "disabled", value: true }
        ]
      }
    },

    customRange: {
      linkId: "custom-range",
      title: "4. Custom range",
      template: {
        tag: "ch-slider",
        class: COMPONENT_CLASS,
        properties: [
          { name: "accessibleName", value: "Temperature" },
          { name: "minValue", value: 1 },
          { name: "maxValue", value: 100 },
          { name: "value", value: 20 }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
