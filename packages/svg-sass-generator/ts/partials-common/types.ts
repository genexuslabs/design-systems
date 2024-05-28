/* - - - - - - - - - - - - - - - - - - 
              Multicolor
- - - - - - - - - - - - - - - - - - */
export interface MulticolorSchema {
  cssPrefix: string;
  colors: {
    cssClass: string;
    states: ElementStates;
  }[];
}

export interface MulticolorFiguresResult {
  processed: boolean;
  cheerioSvgFigures: cheerio.Cheerio;
  usedColors: string[];
  size: {
    width: string;
    height: string;
  };
}

/* - - - - - - - - - - - - - - - - - - 
              Monochrome
- - - - - - - - - - - - - - - - - - */
export interface MonochromeSchema {
  colors: MonochromeColor[];
  iconsCategories: MonochromeIconCategory[];
}

export type MonochromeColor = {
  name: string;
  states: ElementStates;
};

export type MonochromeIconCategory = {
  folder: string;
  colors: MonochromeIconCategoryColors;
};

export type MonochromeIconCategoryColors = {
  [key: string]: string;
};

export interface MonochromeIconResult {
  processed: boolean;
  svgString: string;
}
// Used to access monochrome.colors more quickly, on '/partials-svg/create-monochrome.svg'
export type MonochromeColorsMap = Map<string, number>;
export type MonochromeCategoriesMap = Map<string, number>;
/* - - - - - - - - - - - - - - - - - - 
       Multicolor / Monochrome
- - - - - - - - - - - - - - - - - - */

export type IconType = "multicolor" | "monochrome";

export type ElementState = "enabled" | "hover" | "active" | "disabled";

export type ColorScheme = "dark" | "light";

export const IconTypeMap: Record<IconType, IconType> = {
  multicolor: "multicolor",
  monochrome: "monochrome",
};

export type ThemeColors = {
  [key in ColorScheme]: string;
};

export type ElementStates = {
  [key in ElementState]: ThemeColors;
};

export type IconsColorsSchema = {
  multicolor: MulticolorSchema;
  monochrome: MonochromeSchema;
};

/* - - - - - - - - - - - - - - - - - - 
                Other
- - - - - - - - - - - - - - - - - - */

export type PathInfo = {
  categoryFolderName: string;
  fileName: string;
};

export type ProcessedIconInfo = {
  iconPath: string;
  ColorScheme: ColorScheme;
  processed: boolean;
};

export type SavedOnDisk = {
  saved: boolean;
  svgFilePath: string;
  category: string;
};

export type FigureType = "path" | "stroke" | "both";

export type GetStatesJsonReturn = {
  valid: boolean;
  info: string;
  statesObject: IconsColorsSchema | null;
};
