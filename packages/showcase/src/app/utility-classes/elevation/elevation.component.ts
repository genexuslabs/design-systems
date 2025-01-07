import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { createTemplateForAllLanguages } from "../../../services/template-language/create-template";
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
  elevation1 = createTemplateForAllLanguages([
    {
      tag: "div",
      properties: [{ name: "class", value: "elevation-1" }],
      children: [{ text: "<!-- Your content here -->", type: "text" }]
    }
  ]);

  elevation2 = createTemplateForAllLanguages([
    {
      tag: "div",
      properties: [{ name: "class", value: "elevation-2" }],
      children: [{ text: "<!-- Your content here -->", type: "text" }]
    }
  ]);

  elevation3 = createTemplateForAllLanguages([
    {
      tag: "div",
      properties: [{ name: "class", value: "elevation-3" }],
      children: [{ text: "<!-- Your content here -->", type: "text" }]
    }
  ]);
}
