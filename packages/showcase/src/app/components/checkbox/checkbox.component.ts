import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { getIconPath } from "@genexus/mercury/assets-manager.js";

import { checkboxMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-checkbox",
  templateUrl: "./checkbox.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent {
  ICON = getIconPath({
    category: "objects",
    name: "stencil"
  });

  metadata = checkboxMetadata;
  codeSnippets = checkboxMetadata.codeSnippets;
}
