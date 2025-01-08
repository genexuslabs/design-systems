import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { elevationMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-elevation",
  templateUrl: "./elevation.component.html",
  styleUrl: "./elevation.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "main-content" },
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ElevationComponent {
  metadata = elevationMetadata;
  codeSnippets = elevationMetadata.codeSnippets;
}
