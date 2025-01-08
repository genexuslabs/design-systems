import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";

import { elevationMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-elevation",
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  templateUrl: "./elevation.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: "./elevation.scss"
})
export class ElevationComponent {
  metadata = elevationMetadata;
  codeSnippets = elevationMetadata.codeSnippets;
}
