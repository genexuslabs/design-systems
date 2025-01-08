import { CommonModule } from "@angular/common";
import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  ViewEncapsulation
} from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CopyCodeComponent } from "../copy-code/copy-code.component";
import { ComponentTemplateModel } from "../../services/template-language/types";
import { createTemplateForAllLanguages } from "../../services/template-language/create-template";
import { ComponentMetadataCodeSnippet } from "../../common/types";

@Component({
  selector: "code-snippet",
  templateUrl: "./code-snippet.component.html",
  imports: [CommonModule, RouterLink, RouterModule, CopyCodeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: { ngSkipHydration: "true" },
  styleUrl: "./code-snippet.scss",
  // Lighter HTML by not adding any extra attribute to emulate the encapsulation
  encapsulation: ViewEncapsulation.None
})
export class CodeSnippetComponent {
  codeSnippet = input.required<ComponentMetadataCodeSnippet>();
  codeTemplate = computed(() =>
    createTemplateForAllLanguages(this.codeSnippet().template)
  );

  headingLevel = input<2 | 3>(2);

  language = input<string>("html");

  linkId = computed(() => this.codeSnippet().linkId);
  title = computed(() => this.codeSnippet().title);
}
