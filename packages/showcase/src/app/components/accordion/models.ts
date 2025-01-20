import { AccordionModel } from "@genexus/chameleon-controls-library";
import { getIconPath, getIconPathExpanded } from "@genexus/mercury";

export const accordionSimpleModel: AccordionModel = [
  {
    id: "file",
    caption: "objects: file",
    expanded: true
  },
  {
    id: "domain",
    caption: "objects: domain"
  },
  {
    id: "procedure",
    caption: "objects: procedure"
  },
  {
    id: "document",
    caption: "objects: document"
  }
];

export const accordionWithIconsModel: AccordionModel = [
  {
    id: "file",
    caption: "objects: file",
    // startImgSrc: "objects/file",
    startImgSrc: getIconPath({ category: "objects", name: "file" }),
    expanded: true
  },
  {
    id: "domain",
    caption: "objects: domain",
    startImgSrc: getIconPath({ category: "objects", name: "domain" })
  },
  {
    id: "procedure",
    caption: "objects: procedure",
    startImgSrc: getIconPath({ category: "objects", name: "procedure" })
  },
  {
    id: "document",
    caption: "objects: document",
    startImgSrc: getIconPath({ category: "objects", name: "document" })
  }
];
