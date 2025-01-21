import { ComponentMetadata } from "../../../common/types";

export const iconMetadata = {
  title: "Dialog",
  description:
    "A dialog component, similar to a modal, is an overlay element designed to capture user attention for tasks like confirmations, prompts, or additional information. It appears on top of the main content, requiring user interaction to proceed.",
  codeSnippets: {
    default: {
      linkId: "default",
      title: "1. Default",
      states: [
        {
          name: "showDialog",
          type: "boolean",
          value: false,
          stateStencil: true
        }
      ],
      template: {
        // TODO: Add support for events
        tag: "ch-dialog",
        class: "dialog",
        properties: [
          { name: "show", value: "showDialog", state: true, stateStencil: true }
        ],
        children: {
          tag: "div",
          children: "Any content"
        }
      }
    },

    withHeader: {
      linkId: "with-header",
      title: "2. With Header",
      states: [
        {
          name: "showDialog",
          type: "boolean",
          value: false,
          stateStencil: true
        }
      ],
      template: {
        // TODO: Add support for events
        tag: "ch-dialog",
        class: "dialog",
        properties: [
          { name: "caption", value: "Title" },
          { name: "closeButtonAccessibleName", value: "Close dialog" },
          {
            name: "show",
            value: "showDialog",
            state: true,
            stateStencil: true
          },
          { name: "showHeader", value: true }
        ],
        children: {
          tag: "div",
          children: "Any content"
        }
      }
    },

    withFooter: {
      linkId: "with-footer",
      title: "3. With Footer",
      states: [
        {
          name: "showDialog",
          type: "boolean",
          value: false,
          stateStencil: true
        }
      ],
      template: {
        // TODO: Add support for events
        tag: "ch-dialog",
        class: "dialog",
        properties: [
          {
            name: "show",
            value: "showDialog",
            state: true,
            stateStencil: true
          },
          { name: "showFooter", value: true }
        ],
        children: [
          {
            tag: "div",
            children: "Any content"
          },
          {
            tag: "div",
            properties: [{ name: "slot", value: "footer" }],
            children: [
              {
                tag: "button",
                class: "button-secondary",
                properties: [{ name: "type", value: "button" }],
                children: "Cancel"
              },
              {
                tag: "button",
                class: "button-primary",
                properties: [{ name: "type", value: "button" }],
                children: "Confirm"
              }
            ]
          }
        ]
      }
    },

    resizable: {
      linkId: "resizable",
      title: "4. Resizable",
      states: [
        {
          name: "showDialog",
          type: "boolean",
          value: false,
          stateStencil: true
        }
      ],
      template: {
        // TODO: Add support for events
        tag: "ch-dialog",
        class: "dialog",
        properties: [
          {
            name: "show",
            value: "showDialog",
            state: true,
            stateStencil: true
          },
          {
            name: "resizable",
            value: true,
            variable: true
          }
        ],
        children: {
          tag: "div",
          children: "Any content"
        }
      }
    },

    adjustPosition: {
      linkId: "adjust-position",
      title: "5. Adjust Position",
      states: [
        {
          name: "showDialog",
          type: "boolean",
          value: false,
          stateStencil: true
        }
      ],
      template: {
        // TODO: Add support for events
        tag: "ch-dialog",
        class: "dialog",
        properties: [
          {
            name: "show",
            value: "showDialog",
            state: true,
            stateStencil: true
          },
          {
            name: "resizable",
            value: true,
            variable: true
          },
          {
            name: "adjustPositionAfterResize",
            value: true,
            variable: true
          }
        ],
        children: {
          tag: "div",
          children: "Any content"
        }
      }
    },

    nonModal: {
      linkId: "non-modal",
      title: "6. Non Modal",
      states: [
        {
          name: "showDialog",
          type: "boolean",
          value: false,
          stateStencil: true
        }
      ],
      template: {
        // TODO: Add support for events
        tag: "ch-dialog",
        class: "dialog",
        properties: [
          {
            name: "show",
            value: "showDialog",
            state: true,
            stateStencil: true
          },
          {
            name: "modal",
            value: false,
            variable: true
          }
        ],
        children: {
          tag: "div",
          children: "Any content"
        }
      }
    },

    allowDrag: {
      linkId: "allow-drag",
      title: "7. Allow Drag",
      states: [
        {
          name: "showDialog",
          type: "boolean",
          value: false,
          stateStencil: true
        }
      ],
      template: {
        // TODO: Add support for events
        tag: "ch-dialog",
        class: "dialog",
        properties: [
          {
            name: "show",
            value: "showDialog",
            state: true,
            stateStencil: true
          },
          {
            name: "allowDrag",
            value: "box"
          }
        ],
        children: {
          tag: "div",
          children: "Any content"
        }
      }
    }
  }
} as const satisfies ComponentMetadata;
