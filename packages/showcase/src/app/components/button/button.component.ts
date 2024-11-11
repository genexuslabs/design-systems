import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";

@Component({
  selector: "components-button",
  imports: [CommonModule, RouterLink, RouterModule, CodeSnippetComponent],
  templateUrl: "./button.component.html",
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ButtonComponent {
  buttonPrimaryTextOnly = `<button class="button-primary">Caption</button>`;
  buttonPrimaryTextOnlyDisabled = `<button class="button-primary" disabled>Caption</button>`;
  buttonPrimaryTextOnlyDestructive = `<button class="button-primary button-primary-destructive">Caption</button>`;
  buttonPrimaryIconAndText = `<button class="button-primary button-icon-and-text">
  <ch-image class="icon-sm"></ch-image>
  Caption
</button>`;
}
