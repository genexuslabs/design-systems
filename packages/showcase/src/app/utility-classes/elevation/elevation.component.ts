import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";

@Component({
  selector: "components-elevation",
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: "./elevation.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: "./elevation.scss"
})
export class ElevationComponent {
  elevation1 = `<div class="elevation-1">
  <!-- Your content here -->
</div>`;

  elevation2 = `<div class="elevation-2">
  <!-- Your content here -->
</div>`;

  elevation3 = `<div class="elevation-3">
  <!-- Your content here -->
</div>`;

  elevation4 = `<div class="elevation-4">
<  !-- Your content here -->
</div>`;
}
