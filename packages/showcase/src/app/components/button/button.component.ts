import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { createTemplateForAllLanguages } from "../../../services/template-language/create-template";

@Component({
  selector: "components-button",
  imports: [CommonModule, RouterLink, RouterModule, CodeSnippetComponent],
  templateUrl: "./button.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  buttonPrimaryTextOnly = createTemplateForAllLanguages([
    {
      tag: "button",
      properties: [{ name: "class", value: "button-primary" }],
      children: [{ type: "text", text: "Caption" }]
    }
  ]);

  buttonPrimaryTextOnlyDisabled = createTemplateForAllLanguages([
    {
      tag: "button",
      properties: [
        { name: "class", value: "button-primary" },
        { name: "disabled", value: true }
      ],
      children: [{ type: "text", text: "Caption" }]
    }
  ]);

  buttonPrimaryTextOnlyDestructive = createTemplateForAllLanguages([
    {
      tag: "button",
      properties: [
        { name: "class", value: "button-primary button-primary-destructive" }
      ],
      children: [{ type: "text", text: "Caption" }]
    }
  ]);

  buttonPrimaryIconAndText = createTemplateForAllLanguages([
    {
      tag: "button",
      properties: [
        { name: "class", value: "button-primary button-icon-and-text" }
      ],
      children: [
        { tag: "ch-image", properties: [{ name: "class", value: "icon-sm" }] },
        { type: "text", text: "Caption" }
      ]
    }
  ]);
}
