import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { labelMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.ng";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.ng";

@Component({
  selector: "components-label",
  templateUrl: "./label.ng.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LabelComponent {
  metadata = labelMetadata;
  codeSnippets = labelMetadata.codeSnippets;
}
