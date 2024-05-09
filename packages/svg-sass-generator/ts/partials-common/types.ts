export interface monochromeIconResult {
  processed: boolean;
  svgString: string;
}

export interface iconsColorsSchema extends multicolorSchema, monochromeSchema {}

export interface multicolorFiguresResult {
  processed: boolean;
  cheerioSvgFigures: cheerio.Cheerio;
  usedColors: string[];
  size: {
    width: string;
    height: string;
  };
}

export type processedIconInfo = {
  iconPath: string;
  colorScheme: colorScheme;
  processed: boolean;
};

export type colorScheme = "dark" | "light";

export type pathInfo = {
  categoryFolderName: string;
  fileName: string;
};

export type monochromeState = {
  [key in colorScheme]: string;
};

export interface monochromeStates {
  [key: string]: monochromeState;
}

export type monochromeIcons = {
  folder: string;
  states: monochromeStates;
}[];

export type iconType = "multicolor" | "monochrome";

export const iconTypeMap: Record<iconType, iconType> = {
  multicolor: "multicolor",
  monochrome: "monochrome",
};

export type figureType = "path" | "stroke" | "both";

export type getStatesJsonReturn = {
  valid: boolean;
  info: string;
  statesObject: iconsColorsSchema | null;
};

export interface multicolorSchema {
  multicolor: {
    cssPrefix: string;
    colors: {
      cssClass: string;
      states: {
        enabled: {
          light: string;
          dark: string;
        };
        hover: {
          light: string;
          dark: string;
        };
        active: {
          light: string;
          dark: string;
        };
        disabled: {
          light: string;
          dark: string;
        };
      };
    }[];
  };
}
export interface monochromeSchema {
  monochrome: {
    states: monochromeStates;
    icons: monochromeIcons;
  };
}
