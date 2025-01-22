import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { CommonModule } from "@angular/common";

import { elevationMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";

@Component({
  selector: "utility-classes-elevation",
  templateUrl: "./elevation.component.html",
  styleUrl: "./elevation.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "main-content" },
  imports: [CommonModule, CodeSnippetComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ElevationComponent {
  metadata = elevationMetadata;
  codeSnippets = elevationMetadata.codeSnippets;
}
