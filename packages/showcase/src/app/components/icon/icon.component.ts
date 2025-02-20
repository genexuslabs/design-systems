import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { getIconPath } from "@genexus/mercury/assets-manager.js";

import { iconMetadata } from "./metadata";
import { RouterCommonLinksService } from "../../../services/router-links.service";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-icon",
  templateUrl: "./icon.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    RuntimeBundlesComponent,
    RouterLink
  ],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IconComponent {
  commonLinks = inject(RouterCommonLinksService);

  ASSISTANT_ICON = getIconPath({
    category: "system",
    name: "assistant",
    colorType: "primary"
  });

  metadata = iconMetadata;
  codeSnippets = iconMetadata.codeSnippets;
}
