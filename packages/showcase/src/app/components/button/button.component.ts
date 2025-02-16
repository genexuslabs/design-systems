import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { buttonMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { getIconPath } from "@genexus/mercury/assets-manager.js";
import { buttonCommon, iconCommon } from "./common";

@Component({
  selector: "components-button",
  templateUrl: "./button.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    CodeSnippetComponent,
    RuntimeBundlesComponent
  ],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  metadata = buttonMetadata;
  codeSnippets = buttonMetadata.codeSnippets;

  icon = getIconPath({
    category: "system",
    name: "add-circle",
    colorType: "on-elevation"
  });

  buttonCommon = buttonCommon;
  iconCommon = iconCommon;
}
