import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { buttonMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";

@Component({
  selector: "components-button",
  templateUrl: "./button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterModule, CodeSnippetComponent],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  metadata = buttonMetadata;
  codeSnippets = buttonMetadata.codeSnippets;
}
