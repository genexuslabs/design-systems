import { effect, inject, Injectable, PLATFORM_ID, signal } from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

import { CodeTemplateLanguages } from "./types";

const SELECTED_CODE_TEMPLATE_LANGUAGE_KEY = "selected-code-template-language";

@Injectable({ providedIn: "root" })
export class TemplateLanguageService {
  platform = inject(PLATFORM_ID);

  language = signal<CodeTemplateLanguages>("Angular");

  constructor() {
    // Browser
    if (isPlatformBrowser(this.platform)) {
      this.language.set(
        (localStorage.getItem(
          SELECTED_CODE_TEMPLATE_LANGUAGE_KEY
        ) as CodeTemplateLanguages) ?? "Angular"
      );

      // Track changes to the language in the localStorage
      effect(() =>
        localStorage.setItem(
          SELECTED_CODE_TEMPLATE_LANGUAGE_KEY,
          this.language()
        )
      );
    }
  }
}
