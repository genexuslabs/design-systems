import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { getIconPath } from "@genexus/mercury";

import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-input",
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  templateUrl: "./input.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InputComponent {
  USER_ICON = getIconPath({
    category: "system",
    name: "user",
    colorType: "on-surface"
  });

  default = `<ch-edit accessibleName="Name" class="input"></ch-edit>`;
  value = `<ch-edit accessibleName="Name" class="input" value="Pat Taylor"></ch-edit>`;
  placeholder = `<ch-edit
  accessibleName="Name"
  class="input"
  placeholder="e.g. Mike Shinoda"
></ch-edit>`;
  disabled = `<ch-edit
  accessibleName="Name"
  class="input"
  disabled
  value="Pat Taylor"
></ch-edit>`;
  withIcon = `<ch-edit
  accessibleName="Name"
  class="input"
  startImgSrc="{USER_ICON}"
></ch-edit>`;
}
