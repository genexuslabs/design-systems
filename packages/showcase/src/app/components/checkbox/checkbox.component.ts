import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { getIconPath } from "@genexus/mercury";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { createTemplateForAllLanguages } from "../../../services/template-language/create-template";
@Component({
  selector: "components-checkbox",
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
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

  default = createTemplateForAllLanguages([
    {
      tag: "ch-checkbox",
      properties: [
        { name: "class", value: "checkbox" },
        { name: "caption", value: "The caption" }
      ]
    }
  ]);

  indeterminate = createTemplateForAllLanguages([
    {
      tag: "ch-checkbox",
      properties: [
        { name: "class", value: "checkbox" },
        { name: "caption", value: "The caption" },
        { name: "indeterminate", value: true }
      ]
    }
  ]);

  disabled = createTemplateForAllLanguages([
    {
      tag: "ch-checkbox",
      properties: [
        { name: "class", value: "checkbox" },
        { name: "caption", value: "The caption" },
        { name: "disabled", value: true }
      ]
    }
  ]);

  // `const ADD_CIRCLE_ICON = getIconPath({
  //   category: "gemini-tools",
  //   name: "add-circle",
  //   colorType: "on-elevation"
  // });
  // `

  withIcon = createTemplateForAllLanguages([
    {
      tag: "ch-checkbox",
      properties: [
        { name: "class", value: "checkbox" },
        { name: "caption", value: "The caption" },
        { name: "startImgSrc", value: "ADD_CIRCLE_ICON", variable: true }
      ]
    }
  ]);

  groupingCheckboxesBlock = createTemplateForAllLanguages([
    {
      tag: "div",
      properties: [{ name: "class", value: "field-group" }],
      children: [
        {
          tag: "ch-checkbox",
          properties: [
            { name: "class", value: "checkbox" },
            { name: "caption", value: "The caption 1" }
          ]
        },
        {
          tag: "ch-checkbox",
          properties: [
            { name: "class", value: "checkbox" },
            { name: "caption", value: "The caption 2" }
          ]
        },
        {
          tag: "ch-checkbox",
          properties: [
            { name: "class", value: "checkbox" },
            { name: "caption", value: "The caption 3" }
          ]
        }
      ]
    }
  ]);

  groupingCheckboxesInline = createTemplateForAllLanguages([
    {
      tag: "div",
      properties: [{ name: "class", value: "field-group-inline" }],
      children: [
        {
          tag: "ch-checkbox",
          properties: [
            { name: "class", value: "checkbox" },
            { name: "caption", value: "The caption 1" }
          ]
        },
        {
          tag: "ch-checkbox",
          properties: [
            { name: "class", value: "checkbox" },
            { name: "caption", value: "The caption 2" }
          ]
        },
        {
          tag: "ch-checkbox",
          properties: [
            { name: "class", value: "checkbox" },
            { name: "caption", value: "The caption 3" }
          ]
        }
      ]
    }
  ]);
}
