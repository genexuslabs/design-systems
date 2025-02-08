import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { searchMetadata } from "./metadata";
import { RouterCommonLinksService } from "../../../services/router-links.service";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.ng";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.ng";

@Component({
  selector: "components-search",
  templateUrl: "./search.ng.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SearchComponent {
  commonLinks = inject(RouterCommonLinksService);

  metadata = searchMetadata;
  codeSnippets = searchMetadata.codeSnippets;
}
