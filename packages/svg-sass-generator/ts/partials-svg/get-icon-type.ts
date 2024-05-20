import { SVG_FIGURES } from "./utils.js";
import {
  iconsColorsSchema,
  iconType,
  iconTypeMap,
} from "../partials-common/types.js";

export function getIconType(
  iconCheerio: cheerio.Root,
  statesJson: iconsColorsSchema
): iconType | undefined {
  const strictChecking = false;
  // If strictChecking is true:
  // It will consider the icon is multicolor if every figure has a css class name where the prefix
  // is present/included. ie.: If the multicolor prefix is "mc-", then every figure should contain
  // a css class name like the following: "mc-****".

  // If strictChecking is false:
  // It will consider the icon is multicolor if at least one figure has a css class name where the
  // prefix is present/included.

  // note: strictChecking should be a parameter that the user can pass when using the processor.
  // At the time of writing it is a constant defined in this file.

  const multicolorCssPrefix = statesJson.multicolor.cssPrefix;
  let multiColorFigures = 0;

  const svgFigures = iconCheerio(SVG_FIGURES.join(",")).toArray();

  // count the figures that are multicolor (to be multicolor the figure css class name has to include the multicolor prefix)
  svgFigures.map((figure: any) => {
    const cssClass = figure.attribs.class;
    if (cssClass && cssClass.indexOf(multicolorCssPrefix) !== -1) {
      multiColorFigures++;
    }
  });

  if (
    (multiColorFigures === svgFigures.length && strictChecking) ||
    (multiColorFigures >= 1 && !strictChecking)
  ) {
    return iconTypeMap.multicolor;
  } else if (multiColorFigures >= 1 && strictChecking) {
    // Because strictChecking is on, and not every figure (but at least one) has a class name that includes the multicolor prefix,
    // this icon is not considered multicolor, nor monochrome, hence it is undefined.
    return undefined;
  } else {
    // Zero figures include the multicolor class prefix. This is considered a monochrome icon.
    return "monochrome";
  }
}
