import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RadioGroupModel } from "@genexus/chameleon-controls-library";

import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { createTemplateForAllLanguages } from "../../../services/template-language/create-template";

@Component({
  selector: "components-radio-group",
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  templateUrl: "./radio-group.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioGroupComponent {
  default = createTemplateForAllLanguages([
    {
      tag: "ch-radio-group-render",
      properties: [{ name: "class", value: "radio-group" }]
    }
  ]);

  vertical = createTemplateForAllLanguages([
    {
      tag: "ch-radio-group-render",
      properties: [
        { name: "class", value: "radio-group" },
        { name: "direction", value: "vertical" }
      ]
    }
  ]);

  radioGroupModel = signal<RadioGroupModel>([
    { value: "Value 1", caption: "Label for the value 1" },
    { value: "Value 2", caption: "Label for the value 2" },
    { value: "Value 3", caption: "Label for the value 3", disabled: true },
    { value: "Value 4", caption: "Label for the value 4" },
    { value: "Value 5", caption: "Label for the value 5", disabled: true },
    { value: "Value 6", caption: "Label for the value 6" }
  ]);
}
