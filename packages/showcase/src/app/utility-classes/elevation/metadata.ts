import { ComponentMetadata } from "../../../common/types";

export const elevationMetadata = {
  title: "Elevation",
  description:
    "CSS utility classes for background colors offer a fast, consistent way to apply styles, reducing repetitive code. They speed up development and simplify maintenance by centralizing color updates, ensuring uniformity across the project.",
  codeSnippets: {
    elevation1: [
      {
        tag: "div",
        properties: [{ name: "class", value: "elevation-1" }],
        children: [{ text: "<!-- Your content here -->", type: "text" }]
      }
    ],

    elevation2: [
      {
        tag: "div",
        properties: [{ name: "class", value: "elevation-2" }],
        children: [{ text: "<!-- Your content here -->", type: "text" }]
      }
    ],

    elevation3: [
      {
        tag: "div",
        properties: [{ name: "class", value: "elevation-3" }],
        children: [{ text: "<!-- Your content here -->", type: "text" }]
      }
    ]
  }
} as const satisfies ComponentMetadata;
