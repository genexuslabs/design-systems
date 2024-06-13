// libraries
import { writeFileSync, mkdir } from "fs";
import path from "path";
import { iconsCatalog } from "./processor-sass";

export const createIconsObject = (iconsCatalog: iconsCatalog): IconsObject => {
  const icons: IconsObject = {};

  // monochrome
  // Iterate over light or dark, is the same.
  for (const category in iconsCatalog.monochrome) {
    icons[category] = {};
    iconsCatalog.monochrome[category].light.forEach((icon) => {
      const iconName = icon.fileName.split(".")[0];
      icons[category][iconName] = {};
      icon.states.forEach((state) => {
        const colorState = state.split("--")[0];
        const nativeState = state.split("--")[1];
        const cssProperty = `var(--icon__${category}_${iconName}_${state})`;
        if (!icons[category][iconName].hasOwnProperty(colorState)) {
          icons[category][iconName][colorState] = {};
        }
        icons[category][iconName][colorState][nativeState] = cssProperty;
      });
    });
  }

  // multicolor
  // Iterate over light or dark, is the same.
  for (const category in iconsCatalog.multicolor) {
    icons[category] = {};
    iconsCatalog.multicolor[category].light.forEach((icon) => {
      const iconName = icon.fileName.split(".")[0];
      icons[category][iconName] = {};
      icon.states.forEach((state) => {
        icons[category][iconName][state];
        const cssProperty = `var(--icon__${category}_${iconName}--${state})`;
        icons[category][iconName][state] = cssProperty;
      });
    });

    return icons;
  }
};

export interface IconsObject {
  [key: string]: {
    [key: string]: {
      [key: string]: any;
    };
  };
}
