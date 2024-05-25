export interface iconsColorsSchema extends multicolorSchema, monochromeSchema {}

/* - - - - - - - - - - - - - - - - - - 
              Multicolor
- - - - - - - - - - - - - - - - - - */
export interface multicolorSchema {
  multicolor: {
    cssPrefix: string;
    colors: {
      cssClass: string;
      states: {
        [state in ElementStates[number]]: {
          light: string;
          dark: string;
        };
      };
    }[];
  };
}

export interface multicolorFiguresResult {
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
export interface monochromeSchema {
  monochrome: {
    colors: monochromeColor[];
    iconsCategories: monochromeIconCategory[];
  };
}

export type monochromeColor = {
  name: string;
  states: {
    [state in ElementStates[number]]: {
      light: string;
      dark: string;
    };
  };
};

export type monochromeIconCategory = {
  folder: string;
  colors: monochromeIconCategoryColors;
};

export type monochromeIconCategoryColors = {
  [key: string]: string;
};

export interface monochromeIconResult {
  processed: boolean;
  svgString: string;
}

/* - - - - - - - - - - - - - - - - - - 
       Multicolor / Monochrome
- - - - - - - - - - - - - - - - - - */

export type iconType = "multicolor" | "monochrome";

export const elementStates = ["enabled", "hover", "active", "disabled"];

export type ElementStates = typeof elementStates;

export type colorScheme = "dark" | "light";

export const iconTypeMap: Record<iconType, iconType> = {
  multicolor: "multicolor",
  monochrome: "monochrome",
};

/* - - - - - - - - - - - - - - - - - - 
              Other
- - - - - - - - - - - - - - - - - - */

export type pathInfo = {
  categoryFolderName: string;
  fileName: string;
};

export type processedIconInfo = {
  iconPath: string;
  colorScheme: colorScheme;
  processed: boolean;
};

export type savedOnDisk = {
  saved: boolean;
  svgFilePath: string;
  category: string;
};

export type figureType = "path" | "stroke" | "both";

export type getStatesJsonReturn = {
  valid: boolean;
  info: string;
  statesObject: iconsColorsSchema | null;
};
