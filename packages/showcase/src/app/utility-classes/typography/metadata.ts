import { ComponentMetadata } from "../../../common/types";
import { ComponentTemplateModel } from "../../../services/template-language/types";

const HEADING_CONTENT: ComponentTemplateModel = `heading`;
const SUBTITLE_CONTENT: ComponentTemplateModel = `subtitle`;
const BODY_CONTENT: ComponentTemplateModel = `body`;
const BODY_TINY_CONTENT: ComponentTemplateModel = `tiny`;

export const typographyMetadata = {
  title: "Typography",
  description: "",

  codeSnippets: {
    //  Headings

    heading1: {
      avoidTemplateRender: true,
      linkId: "heading-1",
      title: "1.1. Heading 1",
      template: { tag: "h1", class: "heading-1", children: HEADING_CONTENT }
    },

    heading2: {
      avoidTemplateRender: true,
      linkId: "heading-2",
      title: "1.2. Heading 2",
      template: { tag: "h2", class: "heading-2", children: HEADING_CONTENT }
    },

    heading3: {
      avoidTemplateRender: true,
      linkId: "heading-3",
      title: "1.3. Heading 3",
      template: { tag: "h3", class: "heading-3", children: HEADING_CONTENT }
    },

    heading4: {
      avoidTemplateRender: true,
      linkId: "heading-4",
      title: "1.4. Heading 4",
      template: { tag: "h4", class: "heading-4", children: HEADING_CONTENT }
    },

    heading5: {
      avoidTemplateRender: true,
      linkId: "heading-5",
      title: "1.5. Heading 5",
      template: { tag: "h5", class: "heading-5", children: HEADING_CONTENT }
    },

    heading6: {
      avoidTemplateRender: true,
      linkId: "heading-6",
      title: "1.6. Heading 6",
      template: { tag: "h6", class: "heading-6", children: HEADING_CONTENT }
    },

    // Subtitles Regular

    subtitleRegularL: {
      linkId: "subtitle-regular-l",
      title: "2.1. Subtitle: Large",
      template: {
        tag: "p",
        class: "subtitle-regular-l",
        children: SUBTITLE_CONTENT
      }
    },

    subtitleRegularM: {
      linkId: "subtitle-regular-m",
      title: "2.2. Subtitle: Medium",
      template: {
        tag: "p",
        class: "subtitle-regular-m",
        children: SUBTITLE_CONTENT
      }
    },

    subtitleRegularS: {
      linkId: "subtitle-regular-s",
      title: "2.3. Subtitle: Small",
      template: {
        tag: "p",
        class: "subtitle-regular-s",
        children: SUBTITLE_CONTENT
      }
    },

    subtitleRegularXS: {
      linkId: "subtitle-regular-xs",
      title: "2.4. Subtitle: Extra Small",
      template: {
        tag: "p",
        class: "subtitle-regular-xs",
        children: SUBTITLE_CONTENT
      }
    },

    // Subtitles SemiBold

    subtitleSemiBoldL: {
      linkId: "subtitle-regular-l",
      title: "3.1. Subtitle: Large",
      template: {
        tag: "p",
        class: "subtitle-semi-bold-l",
        children: SUBTITLE_CONTENT
      }
    },

    subtitleSemiBoldM: {
      linkId: "subtitle-regular-m",
      title: "3.2. Subtitle: Medium",
      template: {
        tag: "p",
        class: "subtitle-semi-bold-m",
        children: SUBTITLE_CONTENT
      }
    },

    subtitleSemiBoldS: {
      linkId: "subtitle-regular-s",
      title: "3.3. Subtitle: Small",
      template: {
        tag: "p",
        class: "subtitle-semi-bold-s",
        children: SUBTITLE_CONTENT
      }
    },

    subtitleSemiBoldXS: {
      linkId: "subtitle-regular-xs",
      title: "3.4. Subtitle: Extra Small",
      template: {
        tag: "p",
        class: "subtitle-semi-bold-xs",
        children: SUBTITLE_CONTENT
      }
    },

    // Body Regular

    bodyRegularXL: {
      linkId: "body-regular-xl",
      title: "4.1. Body: Extra Large",
      template: { tag: "p", class: "body-regular-xl", children: BODY_CONTENT }
    },

    bodyRegularL: {
      linkId: "body-regular-l",
      title: "4.2. Body: Regular Large",
      template: { tag: "p", class: "body-regular-l", children: BODY_CONTENT }
    },

    bodyRegularM: {
      linkId: "body-regular-m",
      title: "4.3. Body: Medium",
      template: { tag: "p", class: "body-regular-m", children: BODY_CONTENT }
    },

    bodyRegularS: {
      linkId: "body-regular-s",
      title: "4.4. Body: Small",
      template: { tag: "p", class: "body-regular-s", children: BODY_CONTENT }
    },

    bodyRegularXS: {
      linkId: "body-regular-xs",
      title: "4.5. Body: Extra Small",
      template: { tag: "p", class: "body-regular-xs", children: BODY_CONTENT }
    },

    // Body SemiBold

    bodySemiBoldXL: {
      linkId: "body-semi-bold-xl",
      title: "5.1. Body: Extra Large",
      template: { tag: "p", class: "body-semi-bold-xl", children: BODY_CONTENT }
    },

    bodySemiBoldL: {
      linkId: "body-semi-bold-l",
      title: "5.2. Body: Large",
      template: { tag: "p", class: "body-semi-bold-l", children: BODY_CONTENT }
    },

    bodySemiBoldM: {
      linkId: "body-semi-bold-m",
      title: "5.3. Body: Medium",
      template: { tag: "p", class: "body-semi-bold-m", children: BODY_CONTENT }
    },

    bodySemiBoldS: {
      linkId: "body-semi-bold-s",
      title: "5.4. Body: Small",
      template: { tag: "p", class: "body-semi-bold-s", children: BODY_CONTENT }
    },

    bodySemiBoldXS: {
      linkId: "body-semi-bold-xs",
      title: "5.5. Body: Extra Small",
      template: { tag: "p", class: "body-semi-bold-xs", children: BODY_CONTENT }
    },

    // Body Italic

    bodyItalicXL: {
      linkId: "body-italic-xl",
      title: "6.1. Body: Italic XLarge",
      template: { tag: "p", class: "body-italic-xl", children: BODY_CONTENT }
    },

    bodyItalicL: {
      linkId: "body-italic-l",
      title: "6.2. Body: Italic Large",
      template: { tag: "p", class: "body-italic-l", children: BODY_CONTENT }
    },

    bodyItalicM: {
      linkId: "body-italic-m",
      title: "6.3. Body: Italic Medium",
      template: { tag: "p", class: "body-italic-m", children: BODY_CONTENT }
    },

    bodyItalicS: {
      linkId: "body-italic-s",
      title: "6.4. Body: Italic Small",
      template: { tag: "p", class: "body-italic-s", children: BODY_CONTENT }
    },

    bodyItalicXS: {
      linkId: "body-italic-xs",
      title: "6.5. Body: Italic Extra Small",
      template: { tag: "p", class: "body-italic-xs", children: BODY_CONTENT }
    },

    // Tiny Regular

    bodyTinyRegularL: {
      linkId: "tiny-regular-l",
      title: "7.1. Tiny: Large",
      template: {
        tag: "p",
        class: "tiny-regular-l",
        children: BODY_TINY_CONTENT
      }
    },

    bodyTinyRegularM: {
      linkId: "tiny-regular-m",
      title: "7.2. Tiny: Medium",
      template: {
        tag: "p",
        class: "tiny-regular-m",
        children: BODY_TINY_CONTENT
      }
    },

    bodyTinyRegularS: {
      linkId: "tiny-regular-s",
      title: "7.3. Tiny: Small",
      template: {
        tag: "p",
        class: "tiny-regular-s",
        children: BODY_TINY_CONTENT
      }
    },

    bodyTinyRegularXS: {
      linkId: "tiny-regular-xs",
      title: "7.4. Tiny: Extra Small",
      template: {
        tag: "p",
        class: "tiny-regular-xs",
        children: BODY_TINY_CONTENT
      }
    },

    // Tiny SemiBold

    bodyTinySemiBoldL: {
      linkId: "tiny-semi-bold-l",
      title: "8.1. Tiny: Large",
      template: {
        tag: "p",
        class: "tiny-semi-bold-l",
        children: BODY_TINY_CONTENT
      }
    },

    bodyTinySemiBoldM: {
      linkId: "tiny-semi-bold-m",
      title: "8.2. Tiny: SemiBold Medium",
      template: {
        tag: "p",
        class: "tiny-semi-bold-m",
        children: BODY_TINY_CONTENT
      }
    },

    bodyTinySemiBoldS: {
      linkId: "tiny-semi-bold-s",
      title: "8.3. Tiny: SemiBold Small",
      template: {
        tag: "p",
        class: "tiny-semi-bold-s",
        children: BODY_TINY_CONTENT
      }
    },

    bodyTinySemiBoldXS: {
      linkId: "tiny-semi-bold-xs",
      title: "8.4. Tiny: SemiBold Extra Small",
      template: {
        tag: "p",
        class: "tiny-semi-bold-xs",
        children: BODY_TINY_CONTENT
      }
    }
  }
} as const satisfies ComponentMetadata;
