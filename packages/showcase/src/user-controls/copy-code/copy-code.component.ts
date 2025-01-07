import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  signal,
  ViewEncapsulation
} from "@angular/core";
import {
  ChTabRenderCustomEvent,
  TabModel,
  TabSelectedItemInfo
} from "@genexus/chameleon-controls-library";
import { getImagePathCallback } from "@genexus/mercury";
import { RuntimeBundlesComponent } from "../runtime-bundles/runtime-bundles.component";
import { TemplateLanguageService } from "../../services/template-language/template-language.service";
import {
  CodeTemplateLanguages,
  CodeTemplatesByLanguage
} from "../../services/template-language/types";

@Component({
  selector: "copy-code",
  templateUrl: "./copy-code.component.html",
  imports: [RuntimeBundlesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: "./copy-code.scss",
  encapsulation: ViewEncapsulation.None
})
export class CopyCodeComponent {
  templateLanguageService = inject(TemplateLanguageService);

  value = input.required<CodeTemplatesByLanguage>();
  language = input<string>("ts");

  getImagePathCallback = signal(getImagePathCallback);

  languagesModel: TabModel = [
    { id: "Angular" satisfies CodeTemplateLanguages, name: "Angular" },
    { id: "React" satisfies CodeTemplateLanguages, name: "React" },
    { id: "StencilJS" satisfies CodeTemplateLanguages, name: "StencilJS" }
  ];

  handleCopyMarkup = () =>
    navigator.clipboard.writeText(
      this.value()[this.templateLanguageService.language()]
    );

  selectedNewLanguage = (
    event: ChTabRenderCustomEvent<TabSelectedItemInfo>
  ) => {
    this.templateLanguageService.language.set(
      event.detail.newSelectedId as CodeTemplateLanguages
    );
  };
}
