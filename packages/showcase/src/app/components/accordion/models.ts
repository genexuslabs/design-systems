import { AccordionModel } from "@genexus/chameleon-controls-library";
import { getIconPath } from "@genexus/mercury";

export const accordionModel: AccordionModel = [
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
    startImgSrc: "getIconPath({ category: 'objects', name: 'webpanel' })",
    expanded: true
  },
  {
    id: "domain",
    caption: "objects: domain",
    startImgSrc: "getIconPath({ category: 'objects', name: 'domain' })"
  },
  {
    id: "procedure",
    caption: "objects: procedure",
    startImgSrc: "getIconPath({ category: 'objects', name: 'procedure' })"
  },
  {
    id: "document",
    caption: "objects: document",
    startImgSrc: "getIconPath({ category: 'objects', name: 'document' })"
  }
];
