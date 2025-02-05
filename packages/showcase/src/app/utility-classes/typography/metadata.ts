import { ComponentMetadata } from "../../../common/types";
import { ComponentTemplateModel } from "../../../services/template-language/types";

const HEADING_CONTENT: ComponentTemplateModel = `heading`;
const SUBTITLE_CONTENT: ComponentTemplateModel = `subtitle`;
const BODY_CONTENT: ComponentTemplateModel = `body`;
const BODY_TINY_CONTENT: ComponentTemplateModel = `body-tiny`;

export const typographyMetadata = {
  title: "Typography",
  description: "",

  codeSnippets: {
    //  Headings

    heading1: {
      linkId: "heading-1",
      title: "1.1. Heading 1",
      template: [{ tag: "h1", class: "heading-1", children: HEADING_CONTENT }]
    },

    heading2: {
      linkId: "heading-2",
      title: "1.2. Heading 2",
      template: [{ tag: "h2", class: "heading-2", children: HEADING_CONTENT }]
    },

    heading3: {
      linkId: "heading-3",
      title: "1.3. Heading 3",
      template: [{ tag: "h3", class: "heading-3", children: HEADING_CONTENT }]
    },

    heading4: {
      linkId: "heading-4",
      title: "1.4. Heading 4",
      template: [{ tag: "h4", class: "heading-4", children: HEADING_CONTENT }]
    },

    heading5: {
      linkId: "heading-5",
      title: "1.5. Heading 5",
      template: [{ tag: "h5", class: "heading-5", children: HEADING_CONTENT }]
    },

    heading6: {
      linkId: "heading-6",
      title: "1.6. Heading 6",
      template: [{ tag: "h6", class: "heading-6", children: HEADING_CONTENT }]
    },

    // Subtitles Regular

    subtitleRegularL: {
      linkId: "subtitle-regular-l",
      title: "2.1. Subtitle Regular L",
      template: [
        { tag: "p", class: "subtitle-regular-l", children: HEADING_CONTENT }
      ]
    },

    subtitleRegularM: {
      linkId: "subtitle-regular-m",
      title: "2.2. Subtitle Regular M",
      template: [
        { tag: "p", class: "subtitle-regular-m", children: HEADING_CONTENT }
      ]
    },

    subtitleRegularS: {
      linkId: "subtitle-regular-s",
      title: "2.3. Subtitle Regular S",
      template: [
        { tag: "p", class: "subtitle-regular-s", children: HEADING_CONTENT }
      ]
    },

    subtitleRegularXS: {
      linkId: "subtitle-regular-xs",
      title: "2.4. Subtitle Regular XS",
      template: [
        { tag: "p", class: "subtitle-regular-xs", children: HEADING_CONTENT }
      ]
    }
  }
} as const satisfies ComponentMetadata;
