import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { getIconPath } from "@genexus/mercury";

@Component({
  selector: "components-checkbox",
  imports: [CommonModule, CodeSnippetComponent],
  templateUrl: "./checkbox.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CheckboxComponent {
  ADD_CIRCLE_ICON = getIconPath({
    category: "gemini-tools",
    name: "add-circle",
    colorType: "on-elevation"
  });

  default = `<ch-checkbox class="checkbox" caption="The caption"></ch-checkbox>`;

  indeterminate = `<ch-checkbox
  class="checkbox"
  caption="The caption"
  indeterminate
></ch-checkbox>`;

  disabled = `<ch-checkbox
  class="checkbox"
  caption="The caption"
  disabled
></ch-checkbox>`;

  withIcon = `const ADD_CIRCLE_ICON = getIconPath({
  category: "gemini-tools",
  name: "add-circle",
  colorType: "on-elevation"
});
<ch-checkbox
  class="checkbox"
  caption="The caption"
  startImgSrc={ADD_CIRCLE_ICON}
></ch-checkbox>`;

  groupingCheckboxesBlock = `<div class="field-group">
  <ch-checkbox class="checkbox" caption="The caption 1"></ch-checkbox>
  <ch-checkbox class="checkbox" caption="The caption 2"></ch-checkbox>
  <ch-checkbox class="checkbox" caption="The caption 3"></ch-checkbox>
</div>`;

  groupingCheckboxesInline = `<div class="field-group-inline">
  <ch-checkbox class="checkbox" caption="The caption 1"></ch-checkbox>
  <ch-checkbox class="checkbox" caption="The caption 2"></ch-checkbox>
  <ch-checkbox class="checkbox" caption="The caption 3"></ch-checkbox>
</div>`;
}
