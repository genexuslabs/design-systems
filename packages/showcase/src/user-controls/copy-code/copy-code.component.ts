import {
  ChangeDetectionStrategy,
  Component,
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

const codeLanguagesModel: TabModel = [
  {
    id: "Angular" satisfies CodeTemplateLanguages,
    name: "Angular",
    startImgSrc: "/angular.svg"
  },
  {
    id: "React" satisfies CodeTemplateLanguages,
    name: "React",
    startImgSrc: "/react.svg"
  },
  {
    id: "StencilJS" satisfies CodeTemplateLanguages,
    name: "StencilJS",
    startImgSrc: "/stencil-js.svg"
  }
];

@Component({
  selector: "copy-code",
  templateUrl: "./copy-code.component.html",
  styleUrl: "./copy-code.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuntimeBundlesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class CopyCodeComponent {
  templateLanguageService = inject(TemplateLanguageService);

  copyButton = input(true);
  label = input<string | undefined>();
  value = input.required<CodeTemplatesByLanguage>();
  language = input<string>("html");

  getImagePathCallback = signal(getImagePathCallback);

  // Share the model reference across al ch-tab-render instances
  languagesModel = codeLanguagesModel;

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
