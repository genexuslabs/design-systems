export const initialIndentation = {
  Angular: 4,
  React: 6,
  StencilJS: 8
} as const;

export const INDENTATION_SIZE = 2; // 2 spaces
export const MAX_LINE_WIDTH_FOR_PRETTIER = 80; // 80 characters

export const REMOVE_STRING_IN_GET_ICON_PATH_TO_FUNCTION =
  /"startImgSrc":\s*"((getIconPath|getIconPathExpanded)\(([^)]*)\))"/g;
