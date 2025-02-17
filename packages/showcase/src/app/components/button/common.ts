import { getIconPath } from "@genexus/mercury";

export const iconCommonPrimary = {
  category: "system",
  name: "add-circle",
  colorType: "on-primary"
};
export const iconCommonSecondary = {
  category: "system",
  name: "add-circle",
  colorType: "neutral"
};
export const iconCommonTertiary = {
  category: "system",
  name: "add-circle",
  colorType: "primary"
};

export const buttonCommon = {
  caption: "Caption",
  primaryIconSrc: getIconPath({
    category: iconCommonPrimary.category,
    name: iconCommonPrimary.name,
    colorType: iconCommonPrimary.colorType
  }),
  secondaryIconSrc: getIconPath({
    category: iconCommonSecondary.category,
    name: iconCommonSecondary.name,
    colorType: iconCommonSecondary.colorType
  }),
  tertiaryIconSrc: getIconPath({
    category: iconCommonTertiary.category,
    name: iconCommonTertiary.name,
    colorType: iconCommonTertiary.colorType
  }),
  iconSize: "icon-md"
};
