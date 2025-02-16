import { getIconPath } from "@genexus/mercury";

export const iconCommon = {
  category: "system",
  name: "add-circle",
  colorType: "on-primary",
  size: "icon-md"
};

export const buttonCommon = {
  caption: "Caption",
  iconSrc: getIconPath({
    category: iconCommon.category,
    name: iconCommon.name,
    colorType: iconCommon.colorType
  })
};
