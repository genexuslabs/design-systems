import path from "path";
import {
  colorScheme,
  iconType,
  iconsColorsSchema,
  multiColorStatesArray,
} from "./partials-common/types.js";

export const pushSavedIcon = (
  savedIconsOnDisk: savedIcons,
  svgFilePath: string,
  type: iconType,
  category: string,
  colorScheme: colorScheme,
  colorStatesJson: iconsColorsSchema
) => {
  const filePathArray = svgFilePath.replace(/\//g, "\\").split(path.sep);
  const iconCategory = category || "uncategorized";
  const iconName = filePathArray[filePathArray.length - 1];
  let iconStates: string[] = [];

  // create category if inexistent
  if (!(iconCategory in savedIconsOnDisk[type])) {
    savedIconsOnDisk[type][iconCategory] = [];
  }

  // set icon states
  if (type === "monochrome") {
    const foundCategory = colorStatesJson.monochrome.icons.find(
      (icon) => icon.folder === category
    );
    if (foundCategory) {
      iconStates = Object.keys(foundCategory.states).filter(
        (state) => foundCategory.states[state]
      );
    }
  } else {
    // is multicolor
    iconStates = multiColorStatesArray;
  }

  // save
  savedIconsOnDisk[type][iconCategory].push({
    name: iconName,
    path: svgFilePath,
    type: type,
    colorScheme: colorScheme,
    states: iconStates,
  });
};

interface IconCategory {
  name: string;
  path: string;
  type: iconType;
  colorScheme: colorScheme;
  states: string[];
}
interface Categories {
  [key: string]: IconCategory[];
}
export interface savedIcons {
  multicolor: Categories;
  monochrome: Categories;
}
