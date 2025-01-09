import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import { getIconPath } from "@genexus/mercury";

import { inputMetadata } from "./metadata";
import { RouterCommonLinksService } from "../../../services/router-links.service";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-input",
  templateUrl: "./input.component.html",
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
export class InputComponent {
  commonLinks = inject(RouterCommonLinksService);

  USER_ICON = getIconPath({
    category: "system",
    name: "user",
    colorType: "on-surface"
  });

  metadata = inputMetadata;
  codeSnippets = inputMetadata.codeSnippets;
}
