import { CommonModule } from "@angular/common";
import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CopyCodeComponent } from "../copy-code/copy-code.component";

@Component({
  selector: "code-snippet",
  templateUrl: "./code-snippet.component.html",
  imports: [CommonModule, RouterLink, RouterModule, CopyCodeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: { ngSkipHydration: "true" },
  styleUrl: "./code-snippet.scss"
})
export class CodeSnippetComponent {
  codeSnippet = input.required<string>();

  headingLevel = input<2 | 3>(2);

  language = input<string>("html");

  linkId = input.required<string>();

  sectionTitle = input.required<string>();
}
