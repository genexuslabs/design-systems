import { ComponentMetadata } from "../../../common/types";
import { chameleonImportType } from "../../../services/template-language/create-template";
import { accordionSimpleModel, accordionWithIconsModel } from "./models";

const FILLED_CLASS = "accordion-filled";
const OUTLINED_CLASS = "accordion-outlined";

export const accordionMetadata = {
  title: "Accordion Filled",
  description:
    "A filled accordion is a UI component used to organize content into collapsible sections, offering a background color that helps visually separate it from surrounding elements. It enhances webpage navigation by keeping content compact and makes the accordion stand out, encouraging users to easily access or hide detailed information with a simple click.",
  codeSnippets: {
    filled: {
      linkId: "accordion-filled",
      title: "1.1. Accordion Filled",
      states: [
        {
          name: "accordionModel",
          type: "AccordionModel",
          value: accordionSimpleModel
        }
      ],
      template: {
        tag: "ch-accordion-render",
        class: "accordion-filled",
        properties: [
          { name: "model", value: "accordionSimpleModel", state: true }
        ],
        children: [
          {
            tag: "div",
            class: "text-body-regular-m spacing-body",
            properties: [{ name: "slot", value: "file" }],
            children: "The File object in GeneXus is designed to handle ..."
          },
          {
            tag: "div",
            class: "text-body-regular-m spacing-body",
            properties: [{ name: "slot", value: "domain" }],
            children: "The Domain object in GeneXus allows developers ..."
          },
          {
            tag: "div",
            class: "text-body-regular-m spacing-body",
            properties: [{ name: "slot", value: "procedure" }],
            children: "The Procedure object in GeneXus is used to define ..."
          },
          {
            tag: "div",
            class: "text-body-regular-m spacing-body",
            properties: [{ name: "slot", value: "document" }],
            children: "The Document object in GeneXus is designed to handle ..."
          }
        ]
      }
    }
  }
} as const satisfies ComponentMetadata;
