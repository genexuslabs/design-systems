// libraries
import cheerio from "cheerio";
import { optimize } from "svgo";
// partials common
import {
  colorScheme,
  iconsColorsSchema,
  multicolorFiguresResult,
  iconTypeMap,
} from "../partials-common/types.js";

export const createMulticolorSvg = (
  svgFiguresResult: multicolorFiguresResult,
  statesJson: iconsColorsSchema,
  colorScheme: colorScheme
): string => {
  const id = "a";
  const viewsAndUses = createViewsUses(
    statesJson,
    svgFiguresResult,
    colorScheme,
    id
  );

  if (!viewsAndUses) return undefined;

  const figuresString = cheerio.html(svgFiguresResult.cheerioSvgFigures);

  if (!figuresString) return undefined;

  const createdSvg = `
  <svg viewBox="0 0 $width$ $height$" xmlns="http://www.w3.org/2000/svg" data-scheme="${iconTypeMap.multicolor}">
    <defs>
      <g id="icon-def">
          ${figuresString}
      </g>
    </defs>
    ${viewsAndUses}
  </svg>
  `;

  const optimizedSvg = optimize(createdSvg, {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupIds: {
              preserve: ["enabled", "hover", "active", "disabled"],
            },
          },
        },
      },
    ],
  }).data;

  return optimizedSvg;
};

const createViewsUses = (
  statesJson: iconsColorsSchema,
  svgFiguresResult: multicolorFiguresResult,
  colorScheme: colorScheme,
  id: string
): string => {
  const usedColors = svgFiguresResult.usedColors;
  const width = parseInt(svgFiguresResult.size.width);
  const height = parseInt(svgFiguresResult.size.height);
  const prefix = statesJson.multicolor.cssPrefix;

  //enabled
  let enabledStyle;
  enabledStyle = usedColors
    .map((color) => {
      const colorItem = statesJson.multicolor.colors.find((item) => {
        return item.cssClass === color;
      });
      let colorValue =
        colorScheme === "light"
          ? colorItem.states.enabled.light
          : colorItem.states.enabled.dark;
      return `--${prefix}${color}:${colorValue};`;
    })
    .join("");

  //hover
  let hoverStyle;
  hoverStyle = usedColors
    .map((color) => {
      const colorItem = statesJson.multicolor.colors.find((item) => {
        return item.cssClass === color;
      });
      let colorValue =
        colorScheme === "light"
          ? colorItem.states.hover.light
          : colorItem.states.hover.dark;
      return `--${prefix}${color}:${colorValue};`;
    })
    .join("");

  //active
  let activeStyle;
  activeStyle = usedColors
    .map((color) => {
      const colorItem = statesJson.multicolor.colors.find((item) => {
        return item.cssClass === color;
      });
      let colorValue =
        colorScheme === "light"
          ? colorItem.states.active.light
          : colorItem.states.active.dark;
      return `--${prefix}${color}:${colorValue};`;
    })
    .join("");

  //disabled
  let disabledStyle;
  disabledStyle = usedColors
    .map((color) => {
      const colorItem = statesJson.multicolor.colors.find((item) => {
        return item.cssClass === color;
      });
      let colorValue =
        colorScheme === "light"
          ? colorItem.states.disabled.light
          : colorItem.states.disabled.dark;
      return `--${prefix}${color}:${colorValue};`;
    })
    .join("");

  return `
    <view id="enabled" viewBox="0 0 ${width} ${height}"/>
    <use href="#${id}" style="${enabledStyle}"/>

    <view id="hover" viewBox="${width} 0 ${width} ${height}"/>
    <use x="16" href="#${id}" style="${hoverStyle}"/>

    <view id="active" viewBox="${width * 2} 0 ${width} ${height}"/>
    <use x="32" href="#${id}" style="${activeStyle}"/>

    <view id="disabled" viewBox="${width * 3} 0 ${width} ${height}"/>
    <use x="48" href="#${id}" style="${disabledStyle}"/>
    `;
};
