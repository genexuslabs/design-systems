// libraries
import cheerio from "cheerio";
import { optimize } from "svgo";
// partials common
import {
  ColorScheme,
  IconsColorsSchema,
  MulticolorFiguresResult,
  IconTypeMap,
} from "../partials-common/types.js";

export const createMulticolorSvg = (
  svgFiguresResult: MulticolorFiguresResult,
  statesJson: IconsColorsSchema,
  colorScheme: ColorScheme
): string => {
  const groupId = "icon-def";
  const viewsAndUses = createViewsUses(
    statesJson,
    svgFiguresResult,
    colorScheme,
    groupId
  );

  if (!viewsAndUses) return undefined;

  const figuresString = cheerio.html(svgFiguresResult.cheerioSvgFigures);

  if (!figuresString) return undefined;

  const createdSvg = `
  <svg viewBox="0 0 $width$ $height$" xmlns="http://www.w3.org/2000/svg" data-scheme="${IconTypeMap.multicolor}">
    <defs>
      <g id="${groupId}">
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
              preserve: ["enabled", "hover", "active", "disabled", "icon-def"],
            },
          },
        },
      },
    ],
  }).data;

  return optimizedSvg;
};

const createViewsUses = (
  statesJson: IconsColorsSchema,
  svgFiguresResult: MulticolorFiguresResult,
  colorScheme: ColorScheme,
  groupId: string
): string => {
  const usedColors = svgFiguresResult.usedColors;
  const width = parseInt(svgFiguresResult.size.width);
  const height = parseInt(svgFiguresResult.size.height);

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
      return `--${color}:${colorValue};`;
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
      return `--${color}:${colorValue};`;
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
      return `--${color}:${colorValue};`;
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
      return `--${color}:${colorValue};`;
    })
    .join("");

  return `
    <view id="enabled" viewBox="0 0 ${width} ${height}"/>
    <use href="#${groupId}" x="0" style="${enabledStyle}"/>

    <view id="hover" viewBox="${width} 0 ${width} ${height}"/>
    <use x="16" href="#${groupId}" x="${width}" style="${hoverStyle}"/>

    <view id="active" viewBox="${width * 2} 0 ${width} ${height}"/>
    <use x="32" href="#${groupId}" x="${width * 2}" style="${activeStyle}"/>

    <view id="disabled" viewBox="${width * 3} 0 ${width} ${height}"/>
    <use x="48" href="#${groupId}" x="${width * 3}" style="${disabledStyle}"/>
    `;
};
