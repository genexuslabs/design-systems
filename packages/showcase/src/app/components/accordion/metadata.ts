import { ComponentMetadata } from "../../../common/types";
import { chameleonImportType } from "../../../services/template-language/create-template";
import {
  accordionSimpleModel,
  accordionWithIconsModel,
  accordionWithIconsModelForMetadata
} from "./models";

const FILLED_CLASS = "accordion-filled";
const OUTLINED_CLASS = "accordion-outlined";

export const accordionMetadata = {
  title: "Accordion Filled",
  description:
    "A filled accordion is a UI component used to organize content into collapsible sections, offering a background color that helps visually separate it from surrounding elements. It enhances webpage navigation by keeping content compact and makes the accordion stand out, encouraging users to easily access or hide detailed information with a simple click.",
  codeSnippets: {
    // filled

    filled: {
      linkId: "accordion-filled",
      title: "1.1. Filled",
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
    },

    filledDisabled: {
      linkId: "accordion-filled-disbled",
      title: "1.2. Filled : Disabled",
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
          {
            name: "model",
            value: "accordionSimpleModel",
            state: true
          },
          { name: "disabled", value: true }
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
    },

    filledWithIcons: {
      linkId: "accordion-filled-with-icons",
      title: "1.3. Filled : With Icons",
      states: [
        {
          name: "accordionModel",
          type: "AccordionModel",
          value: accordionWithIconsModelForMetadata
        }
      ],
      template: {
        tag: "ch-accordion-render",
        class: "accordion-filled",
        properties: [
          {
            name: "model",
            value: "accordionWithIconsModel",
            state: true
          }
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
    },

    filledDisabledWithIcons: {
      linkId: "accordion-filled-disabled-with-icons",
      title: "1.4. Filled : Disabled With Icons",
      states: [
        {
          name: "accordionModel",
          type: "AccordionModel",
          value: accordionWithIconsModelForMetadata
        }
      ],
      template: {
        tag: "ch-accordion-render",
        class: "accordion-filled",
        properties: [
          {
            name: "model",
            value: "accordionWithIconsModel",
            state: true
          },
          { name: "disabled", value: true }
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
    },

    // outlined

    outlined: {
      linkId: "accordion-outlined",
      title: "2.1. Outlined",
      states: [
        {
          name: "accordionModel",
          type: "AccordionModel",
          value: accordionSimpleModel
        }
      ],
      template: {
        tag: "ch-accordion-render",
        class: "accordion-outlined",
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
    },

    outlinedDisabled: {
      linkId: "accordion-outlined-disbled",
      title: "2.2. Outlined : Disabled",
      states: [
        {
          name: "accordionModel",
          type: "AccordionModel",
          value: accordionSimpleModel
        }
      ],
      template: {
        tag: "ch-accordion-render",
        class: "accordion-outlined",
        properties: [
          {
            name: "model",
            value: "accordionSimpleModel",
            state: true
          },
          { name: "disabled", value: true }
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
    },

    outlinedWithIcons: {
      linkId: "accordion-outlined-with-icons",
      title: "2.3. Outlined : With Icons",
      states: [
        {
          name: "accordionModel",
          type: "AccordionModel",
          value: accordionWithIconsModelForMetadata
        }
      ],
      template: {
        tag: "ch-accordion-render",
        class: "accordion-outlined",
        properties: [
          {
            name: "model",
            value: "accordionWithIconsModel",
            state: true
          }
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
    },

    outlinedDisabledWithIcons: {
      linkId: "accordion-outlined-disabled-with-icons",
      title: "2.4. Outlined : Disabled With Icons",
      states: [
        {
          name: "accordionModel",
          type: "AccordionModel",
          value: accordionWithIconsModelForMetadata
        }
      ],
      template: {
        tag: "ch-accordion-render",
        class: "accordion-outlined",
        properties: [
          {
            name: "model",
            value: "accordionWithIconsModel",
            state: true
          },
          { name: "disabled", value: true }
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
