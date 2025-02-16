import { ComponentMetadata } from "../../../common/types";
import { chameleonImportType } from "../../../services/template-language/create-template";

import { accordionCommonChildren } from "./common";
import { accordionModel, accordionWithIconsModel } from "./models";

const CH_TAG = "ch-accordion-render";
const FILLED_CLASS = "asccordion-filled";
const OUTLINED_CLASS = "accordion-outlined";
const ELEVATION_CLASS = "elevation-1";

export const accordionMetadata = {
  title: "Accordion",
  description:
    "An accordion is a UI component that organizes content into collapsible sections, allowing users to expand or collapse panels as needed. It helps keep interfaces clean by displaying only relevant information while providing quick access to additional details.",

  codeSnippets: {
    // filled cases
    filled: {
      linkId: "accordion-filled",
      title: "Filled",
      states: [
        {
          name: "genexusObjects",
          type: "AccordionModel",
          value: accordionModel
        }
      ],
      imports: [chameleonImportType("AccordionModel")],
      template: {
        tag: CH_TAG,
        class: `${FILLED_CLASS} ${ELEVATION_CLASS}`,
        properties: [{ name: "model", value: "genexusObjects", state: true }],
        children: accordionCommonChildren
      }
    },

    filledDisabled: {
      linkId: "accordion-filled-disabled",
      title: "Filled: Disabled",
      states: [
        {
          name: "genexusObjects",
          type: "AccordionModel",
          value: accordionModel
        }
      ],
      imports: [chameleonImportType("AccordionModel")],
      template: {
        tag: CH_TAG,
        class: `${FILLED_CLASS} ${ELEVATION_CLASS}`,
        properties: [
          { name: "model", value: "genexusObjects", state: true },
          { name: "disabled", value: true }
        ],
        children: accordionCommonChildren
      }
    },

    filledWithIcons: {
      linkId: "accordion-filled-with-icons",
      title: "Filled With Icons",
      states: [
        {
          name: "genexusObjects",
          type: "AccordionModel",
          value: accordionWithIconsModel
        }
      ],
      imports: [
        chameleonImportType("AccordionModel"),
        'import { getIconPath, getIconPathExpanded } from "@genexus/mercury/assets-manager.js";'
      ],
      template: {
        tag: CH_TAG,
        class: `${FILLED_CLASS} ${ELEVATION_CLASS}`,
        properties: [{ name: "model", value: "genexusObjects", state: true }],
        children: accordionCommonChildren
      }
    },

    filledWithIconsDisabled: {
      linkId: "accordion-filled-with-icons-disabled",
      title: "Filled With Icons: Disabled",
      states: [
        {
          name: "genexusObjects",
          type: "AccordionModel",
          value: accordionWithIconsModel
        }
      ],
      imports: [
        chameleonImportType("AccordionModel"),
        'import { getIconPath, getIconPathExpanded } from "@genexus/mercury/assets-manager.js";'
      ],
      template: {
        tag: CH_TAG,
        class: `${FILLED_CLASS} ${ELEVATION_CLASS}`,
        properties: [
          { name: "model", value: "genexusObjects", state: true },
          { name: "disabled", value: true }
        ],
        children: accordionCommonChildren
      }
    },

    // outlined cases

    outlined: {
      linkId: "accordion-outlined",
      title: "Outlined",
      states: [
        {
          name: "genexusObjects",
          type: "AccordionModel",
          value: accordionModel
        }
      ],
      imports: [chameleonImportType("AccordionModel")],
      template: {
        tag: CH_TAG,
        class: `${OUTLINED_CLASS} ${ELEVATION_CLASS}`,
        properties: [{ name: "model", value: "genexusObjects", state: true }],
        children: accordionCommonChildren
      }
    },

    outlinedDisabled: {
      linkId: "accordion-outlined-disabled",
      title: "Outlined: Disabled",
      states: [
        {
          name: "genexusObjects",
          type: "AccordionModel",
          value: accordionModel
        }
      ],
      imports: [chameleonImportType("AccordionModel")],
      template: {
        tag: CH_TAG,
        class: `${OUTLINED_CLASS} ${ELEVATION_CLASS}`,
        properties: [
          { name: "model", value: "genexusObjects", state: true },
          { name: "disabled", value: true }
        ],
        children: accordionCommonChildren
      }
    },

    outlinedWithIcons: {
      linkId: "accordion-outlined-with-icons",
      title: "Outlined With Icons",
      states: [
        {
          name: "genexusObjects",
          type: "AccordionModel",
          value: accordionWithIconsModel
        }
      ],
      imports: [
        chameleonImportType("AccordionModel"),
        'import { getIconPath, getIconPathExpanded } from "@genexus/mercury/assets-manager.js";'
      ],
      template: {
        tag: CH_TAG,
        class: `${OUTLINED_CLASS} ${ELEVATION_CLASS}`,
        properties: [{ name: "model", value: "genexusObjects", state: true }],
        children: accordionCommonChildren
      }
    },

    outlinedWithIconsDisabled: {
      linkId: "accordion-outlined-with-icons-disabled",
      title: "Outlined With Icons: Disabled",
      states: [
        {
          name: "genexusObjects",
          type: "AccordionModel",
          value: accordionWithIconsModel
        }
      ],
      imports: [
        chameleonImportType("AccordionModel"),
        'import { getIconPath, getIconPathExpanded } from "@genexus/mercury/assets-manager.js";'
      ],
      template: {
        tag: CH_TAG,
        class: `${OUTLINED_CLASS} ${ELEVATION_CLASS}`,
        properties: [
          { name: "model", value: "genexusObjects", state: true },
          { name: "disabled", value: true }
        ],
        children: accordionCommonChildren
      }
    }

    // TODO: A section for "elevation"
    // - A case without elevation class
    // - filled cases with "elevation-2" and "elevation-3"
    // - outlined cases with "elevation-2" and "elevation-3"
  }
} as const satisfies ComponentMetadata;
