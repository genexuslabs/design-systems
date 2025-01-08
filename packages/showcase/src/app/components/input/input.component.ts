import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { getIconPath } from "@genexus/mercury";

import { inputMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-input",
  imports: [
    CommonModule,
    CodeSnippetComponent,
    RuntimeBundlesComponent,
    RouterLink
  ],
  templateUrl: "./input.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputComponent {
  USER_ICON = getIconPath({
    category: "system",
    name: "user",
    colorType: "on-surface"
  });

  metadata = inputMetadata;
  codeSnippets = inputMetadata.codeSnippets;
}
