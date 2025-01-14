import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  signal
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { radioGroupMetadata } from "./metadata";
import { radioGroupModel } from "./models";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-radio-group",
  templateUrl: "./radio-group.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioGroupComponent {
  metadata = radioGroupMetadata;
  codeSnippets = radioGroupMetadata.codeSnippets;

  radioGroupModel = structuredClone(radioGroupModel);
}
