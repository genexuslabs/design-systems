import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import type {
  ChCheckboxCustomEvent,
  TreeViewModel
} from "@genexus/chameleon-controls-library";
import { getIconPath } from "@genexus/mercury/assets-manager.js";

import { treeViewMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { iconsModel, noIconsModel } from "./models";

@Component({
  selector: "components-tree-view",
  templateUrl: "./tree-view.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content", ngSkipHydration: "true" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeViewComponent {
  router = inject(Router);

  ADD_CIRCLE_ICON = getIconPath({
    category: "gemini-tools",
    name: "add-circle",
    colorType: "on-elevation"
  });

  hiddenTreeViews = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * migration section must be rendered.
   */
  treeViews = computed(() => {
    const newTreeViews = new Map<string, boolean>([
      ["Default", true],
      ["Show Lines: Last", true],
      ["Show Lines: All", true],
      ["With icons", true],
      ["Checkboxes", true]
    ]);

    // Update the rendered tree views by watching changes for the
    // hiddenTreeViews query parameter
    const hiddenTreeViewsArray = this.hiddenTreeViews()
      ? this.hiddenTreeViews().split(",")
      : [];

    // Display all typographies
    newTreeViews.forEach((_, treeViewName) =>
      newTreeViews.set(treeViewName, true)
    );

    // Remove those typographies that must be hidden
    hiddenTreeViewsArray.forEach(hiddenTreeViewName =>
      newTreeViews.set(hiddenTreeViewName, false)
    );

    return newTreeViews;
  });

  showDefault = computed(() => this.treeViews().get("Default"));
  showShowLinesLast = computed(() => this.treeViews().get("Show Lines: Last"));
  showShowLinesAll = computed(() => this.treeViews().get("Show Lines: All"));
  showWithIcons = computed(() => this.treeViews().get("With icons"));
  showCheckboxes = computed(() => this.treeViews().get("Checkboxes"));

  metadata = treeViewMetadata;
  codeSnippets = treeViewMetadata.codeSnippets;

  noIconsModel = structuredClone(noIconsModel);

  withIconsModel: TreeViewModel = structuredClone(iconsModel);

  updateRenderedTreeView =
    (typographyName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.treeViews().set(typographyName, event.detail === "true");

      let hiddenTreeViewsQueryParm = "";

      this.treeViews().forEach((renderTreeView, treeViewName) => {
        if (!renderTreeView) {
          hiddenTreeViewsQueryParm +=
            hiddenTreeViewsQueryParm === "" ? treeViewName : "," + treeViewName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenTreeViews: hiddenTreeViewsQueryParm },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
