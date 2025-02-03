import { ComponentMetadata } from "../../../common/types";
import { ComponentTemplateModel } from "../../../services/template-language/types";

const CONTENT_HERE: ComponentTemplateModel = "<!-- Your content here -->";

export const typographyMetadata = {
  title: "Typography",
  description: "",
  codeSnippets: {
    heading1: {
      avoidTemplateRender: true,
      linkId: "heading-1",
      title: "1.1. Heading 1",
      template: { tag: "h1", class: "heading-1", children: CONTENT_HERE }
    },

    heading2: {
      avoidTemplateRender: true,
      linkId: "heading-2",
      title: "1.2. Heading 2",
      template: { tag: "h2", class: "heading-2", children: CONTENT_HERE }
    },

    heading3: {
      avoidTemplateRender: true,
      linkId: "heading-3",
      title: "1.3. Heading 3",
      template: { tag: "h3", class: "heading-3", children: CONTENT_HERE }
    },

    heading4: {
      avoidTemplateRender: true,
      linkId: "heading-4",
      title: "1.4. Heading 4",
      template: { tag: "h4", class: "heading-4", children: CONTENT_HERE }
    },

    heading5: {
      avoidTemplateRender: true,
      linkId: "heading-5",
      title: "1.5. Heading 5",
      template: { tag: "h5", class: "heading-5", children: CONTENT_HERE }
    },

    heading6: {
      avoidTemplateRender: true,
      linkId: "heading-6",
      title: "1.6. Heading 6",
      template: { tag: "h6", class: "heading-6", children: CONTENT_HERE }
    },

    textBodyRegularLarge: {
      avoidTemplateRender: true,
      linkId: "text-body-regular-large",
      title: "3.1. Regular large",
      template: {
        tag: "p",
        class: "text-body-regular-l",
        children: CONTENT_HERE
      }
    },

    textBodyRegularMedium: {
      avoidTemplateRender: true,
      linkId: "text-body-regular-medium",
      title: "3.2. Regular medium",
      template: {
        tag: "p",
        class: "text-body-regular-m",
        children: CONTENT_HERE
      }
    },

    textBodyRegularSmall: {
      avoidTemplateRender: true,
      linkId: "text-body-regular-small",
      title: "3.3. Regular small",
      template: {
        tag: "p",
        class: "text-body-regular-s",
        children: CONTENT_HERE
      }
    },

    textBodyRegularExtraSmall: {
      avoidTemplateRender: true,
      linkId: "text-body-regular-extra-small",
      title: "3.4. Highlighted extra small",
      template: {
        tag: "p",
        class: "text-body-highlighted-xs",
        children: CONTENT_HERE
      }
    },

    textBodyHighlightedLarge: {
      avoidTemplateRender: true,
      linkId: "text-body-highlighted-large",
      title: "3.5. Highlighted large",
      template: {
        tag: "p",
        class: "text-body-highlighted-l",
        children: CONTENT_HERE
      }
    },

    textBodyHighlightedMedium: {
      avoidTemplateRender: true,
      linkId: "text-body-highlighted-medium",
      title: "3.6. Highlighted medium",
      template: {
        tag: "p",
        class: "text-body-highlighted-m",
        children: CONTENT_HERE
      }
    },

    textBodyHighlightedSmall: {
      avoidTemplateRender: true,
      linkId: "text-body-highlighted-small",
      title: "3.7. Highlighted small",
      template: {
        tag: "p",
        class: "text-body-highlighted-s",
        children: CONTENT_HERE
      }
    },

    textBodyHighlightedExtraSmall: {
      avoidTemplateRender: true,
      linkId: "text-body-highlighted-extra-small",
      title: "3.8. Highlighted extra small",
      template: {
        tag: "p",
        class: "text-body-highlighted-xs",
        children: CONTENT_HERE
      }
    },

    textBodyItalicLarge: {
      avoidTemplateRender: true,
      linkId: "text-body-italic-large",
      title: "3.9. Italic large",
      template: {
        tag: "p",
        class: "text-body-italic-l",
        children: CONTENT_HERE
      }
    },

    textBodyItalicMedium: {
      avoidTemplateRender: true,
      linkId: "text-body-italic-medium",
      title: "3.10. Italic medium",
      template: {
        tag: "p",
        class: "text-body-italic-m",
        children: CONTENT_HERE
      }
    },

    textBodyItalicSmall: {
      avoidTemplateRender: true,
      linkId: "text-body-italic-small",
      title: "3.11. Italic small",
      template: {
        tag: "p",
        class: "text-body-italic-s",
        children: CONTENT_HERE
      }
    },

    textBodyItalicExtraSmall: {
      avoidTemplateRender: true,
      linkId: "text-body-italic-extra-small",
      title: "3.12. Italic extra small",
      template: {
        tag: "p",
        class: "text-body-italic-xs",
        children: CONTENT_HERE
      }
    }
  }
} as const satisfies ComponentMetadata;
