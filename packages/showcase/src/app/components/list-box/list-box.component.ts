import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  signal
} from "@angular/core";
import { CommonModule } from "@angular/common";
import type { ChCheckboxCustomEvent } from "@genexus/chameleon-controls-library";

import { listboxMetadata } from "./metadata";
import { RouterCommonLinksService } from "../../../services/router-links.service";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { Router } from "@angular/router";
import { plainModel } from "./models";

@Component({
  selector: "components-list-box",
  templateUrl: "./list-box.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ListBoxComponent {
  commonLinks = inject(RouterCommonLinksService);
  router = inject(Router);

  metadata = listboxMetadata;
  codeSnippets = listboxMetadata.codeSnippets;

  hiddenListBoxes = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * case/example must be rendered.
   */
  listBoxes = computed(() => {
    const newCases = new Map<string, boolean>([
      ["Base", true]
      // ["With Icons", true]
    ]);

    // Update the rendered cases by watching changes for the
    // hiddenListBoxes query parameter
    const hiddenListBoxesArray = this.hiddenListBoxes()
      ? this.hiddenListBoxes().split(",")
      : [];

    // Display all cases
    newCases.forEach((_, caseName) => newCases.set(caseName, true));

    // Remove those cases that must be hidden
    hiddenListBoxesArray.forEach(hiddenCaseName =>
      newCases.set(hiddenCaseName, false)
    );

    return newCases;
  });

  showBase = computed(() => this.listBoxes().get("Base"));
  showWithIcons = computed(() => this.listBoxes().get("With Icons"));

  // models
  plainModel = plainModel;

  updateRenderedListBox =
    (listBoxName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.listBoxes().set(listBoxName, event.detail === "true");

      let hiddenListBoxesQueryParm = "";

      this.listBoxes().forEach((renderListBox, listBoxName) => {
        if (!renderListBox) {
          hiddenListBoxesQueryParm +=
            hiddenListBoxesQueryParm === "" ? listBoxName : "," + listBoxName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenListBoxes: hiddenListBoxesQueryParm },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
