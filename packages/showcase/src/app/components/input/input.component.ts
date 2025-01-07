import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { getIconPath } from "@genexus/mercury";

import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { createTemplateForAllLanguages } from "../../../services/template-language/create-template";

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

  default = createTemplateForAllLanguages([
    {
      tag: "ch-edit",
      properties: [
        { name: "accessibleName", value: "Name" },
        { name: "class", value: "input" }
      ]
    }
  ]);

  value = createTemplateForAllLanguages([
    {
      tag: "ch-edit",
      properties: [
        { name: "accessibleName", value: "Name" },
        { name: "class", value: "input" },
        { name: "value", value: "Pat Taylor" }
      ]
    }
  ]);

  placeholder = createTemplateForAllLanguages([
    {
      tag: "ch-edit",
      properties: [
        { name: "accessibleName", value: "Name" },
        { name: "class", value: "input" },
        { name: "placeholder", value: "e.g. Mike Shinoda" }
      ]
    }
  ]);

  disabled = createTemplateForAllLanguages([
    {
      tag: "ch-edit",
      properties: [
        { name: "accessibleName", value: "Name" },
        { name: "class", value: "input" },
        { name: "disabled", value: true },
        { name: "value", value: "Pat Taylor" }
      ]
    }
  ]);

  withIcon = createTemplateForAllLanguages([
    {
      tag: "ch-edit",
      properties: [
        { name: "accessibleName", value: "Name" },
        { name: "class", value: "input" },
        { name: "startImgSrc", value: "USER_ICON", variable: true }
      ]
    }
  ]);
}
