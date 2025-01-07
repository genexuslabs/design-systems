import { CommonModule } from "@angular/common";
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  ViewEncapsulation
} from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CopyCodeComponent } from "../copy-code/copy-code.component";
import { CodeTemplatesByLanguage } from "../../services/template-language/types";

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
  codeSnippet = input.required<CodeTemplatesByLanguage>();

  headingLevel = input<2 | 3>(2);

  language = input<string>("html");

  linkId = input.required<string>();

  sectionTitle = input.required<string>();
}
