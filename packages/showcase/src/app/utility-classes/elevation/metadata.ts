import { ComponentMetadata } from "../../../common/types";

export const elevationMetadata = {
  title: "Elevation",
  description:
    "CSS utility classes for background colors offer a fast, consistent way to apply styles, reducing repetitive code. They speed up development and simplify maintenance by centralizing color updates, ensuring uniformity across the project.",
  codeSnippets: {
    elevation1: {
      linkId: "elevation-1",
      title: "1. Elevation 1",
      template: [
        {
          tag: "div",
          properties: [{ name: "class", value: "elevation-1" }],
          children: [{ text: "<!-- Your content here -->", type: "text" }]
        }
      ]
    },

    elevation2: {
      linkId: "elevation-2",
      title: "2. Elevation 2",
      template: [
        {
          tag: "div",
          properties: [{ name: "class", value: "elevation-2" }],
          children: [{ text: "<!-- Your content here -->", type: "text" }]
        }
      ]
    },

    elevation3: {
      linkId: "elevation-3",
      title: "3. Elevation 3",
      template: [
        {
          tag: "div",
          properties: [{ name: "class", value: "elevation-3" }],
          children: [{ text: "<!-- Your content here -->", type: "text" }]
        }
      ]
    }
  }
} as const satisfies ComponentMetadata;
