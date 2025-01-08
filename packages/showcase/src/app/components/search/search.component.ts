import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { searchMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-search",
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  templateUrl: "./search.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchComponent {
  metadata = searchMetadata;
  codeSnippets = searchMetadata.codeSnippets;
}
