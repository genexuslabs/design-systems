import { ComponentMetadata } from "../../../common/types";

export const listboxMetadata = {
  title: "Listbox",
  description:
    "A list-box component is a versatile UI element used to present a selectable list of items, offering users a straightforward way to make choices or navigate through options. It's commonly employed in forms, dropdown menus, and selection interfaces where space is limited. The list-box displays a series of options, allowing users to select one or multiple items from the list, depending on its configuration.",
  codeSnippets: {
    base: {
      linkId: "base",
      title: "1. Base",
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

    withIcons: {
      linkId: "with-icons",
      title: "2. With Icons",
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
    }
  }
} as const satisfies ComponentMetadata;
