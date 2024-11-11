import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RadioGroupModel } from "@genexus/chameleon-controls-library";

@Component({
  selector: "components-radio-group",
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: "./radio-group.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RadioGroupComponent {
  default = `<ch-radio-group-render class="radio-group"></ch-radio-group-render>`;
  vertical = `<ch-radio-group-render
  class="radio-group"
  direction="vertical"
></ch-radio-group-render>`;

  radioGroupModel = signal<RadioGroupModel>([
    { value: "Value 1", caption: "Label for the value 1" },
    { value: "Value 2", caption: "Label for the value 2" },
    { value: "Value 3", caption: "Label for the value 3", disabled: true },
    { value: "Value 4", caption: "Label for the value 4" },
    { value: "Value 5", caption: "Label for the value 5", disabled: true },
    { value: "Value 6", caption: "Label for the value 6" }
  ]);
}
