import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { ColorScheme } from "../common/types";

const COLOR_SCHEME_KEY = "color-scheme";

@Injectable({ providedIn: "root" })
export class ColorSchemeService {
  platform = inject(PLATFORM_ID);

  setColorScheme(colorScheme: ColorScheme) {
    const classList = document.documentElement.classList;
    localStorage.setItem(COLOR_SCHEME_KEY, colorScheme);

    if (colorScheme === "dark") {
      classList.add("dark");
      classList.remove("light");
    } else {
      classList.add("light");
      classList.remove("dark");
    }
  }

  getColorScheme(): ColorScheme {
    const colorSchemeInLocalStorage = localStorage.getItem(COLOR_SCHEME_KEY);

    const colorScheme =
      colorSchemeInLocalStorage ??
      (window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches
        ? "dark"
        : "light");

    // Initialize the local storage with the user preferences
    if (!colorSchemeInLocalStorage) {
      localStorage.setItem(COLOR_SCHEME_KEY, colorScheme);
    }
    return colorScheme as ColorScheme;
  }
}
