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
import type { ChCheckboxCustomEvent } from "@genexus/chameleon-controls-library";
import {
  getIconPath,
  getImagePathCallback
} from "@genexus/mercury/assets-manager.js";

import { tabularGridMetadata, tabularGridHelpersMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { paragraphClass } from "../../../common/html";

import { CSS_SELECTORS } from "./classes";

@Component({
  selector: "components-tabular-grid",
  templateUrl: "./tabular-grid.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content", ngSkipHydration: "true" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ["./tabular-grid.component.scss"]
})
export class TabularGridComponent {
  router = inject(Router);

  hiddenGrids = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * tabular grid section must be rendered.
   */
  tabularGrids = computed(() => {
    const newTabularGrids = new Map<string, boolean>([
      // ["Selection: none + keyboard focus", true],
      ["With Row Set", true]
      // ["Selection: single + keyboard: focus", true],
      // ["Selection: single + keyboard: select", true],
      // ["Selection: multiple + keyboard: focus", true],
      // ["Selection: multiple + keyboard: select", true],
      // ["Row mark + keyboard: select", true],
      // ["Row mark + keyboard: focus", true],
      // ["Row reorder (dragging)", true],
      // ["Row action", true],
      // ["Tree grid", true],
      // ["Align cells: block start", true],
      // ["Align cells: block center", true],
      // ["Align cells: block end", true],
      // ["Align cells: inline start", true],
      // ["Align cells: inline center", true],
      // ["Align cells: inline end", true]
    ]);

    // Update the rendered tabular grids by watching changes for the
    // hiddenGrids query parameter
    const hiddenGridsArray = this.hiddenGrids()
      ? this.hiddenGrids().split(",")
      : [];

    // Display all tabular grids
    newTabularGrids.forEach((_, gridName) =>
      newTabularGrids.set(gridName, true)
    );

    // Remove those tabular grids that must be hidden
    hiddenGridsArray.forEach(hiddenGridName =>
      newTabularGrids.set(hiddenGridName, false)
    );

    return newTabularGrids;
  });

  // Tabular Grid
  showSelectionNoneKeyboardFocus = computed(() =>
    this.tabularGrids().get("Selection: none + keyboard focus")
  );
  showRowSet = computed(() => this.tabularGrids().get("With Row Set"));
  showSelectionSingleKeyboardFocus = computed(() =>
    this.tabularGrids().get("Selection: single + keyboard: focus")
  );
  showSelectionSingleKeyboardSelect = computed(() =>
    this.tabularGrids().get("Selection: single + keyboard: select")
  );
  showSelectionMultipleKeyboardFocus = computed(() =>
    this.tabularGrids().get("Selection: multiple + keyboard: focus")
  );
  showSelectionMultipleKeyboardSelect = computed(() =>
    this.tabularGrids().get("Selection: multiple + keyboard: select")
  );
  showRowMarkKeyboardSelect = computed(() =>
    this.tabularGrids().get("Row mark + keyboard: select")
  );
  showRowMarkKeyboardFocus = computed(() =>
    this.tabularGrids().get("Row mark + keyboard: focus")
  );
  showRowReorderDragging = computed(() =>
    this.tabularGrids().get("Row reorder (dragging)")
  );
  showRowAction = computed(() => this.tabularGrids().get("Row action"));
  showTreeGrid = computed(() => this.tabularGrids().get("Tree grid"));

  // Tabular Grid: Helpers
  showAlignCellsBlockStart = computed(() =>
    this.tabularGrids().get("Align cells: block start")
  );
  showAlignCellsBlockCenter = computed(() =>
    this.tabularGrids().get("Align cells: block center")
  );
  showAlignCellsBlockEnd = computed(() =>
    this.tabularGrids().get("Align cells: block end")
  );
  showAlignCellsInlineStart = computed(() =>
    this.tabularGrids().get("Align cells: inline start")
  );
  showAlignCellsInlineCenter = computed(() =>
    this.tabularGrids().get("Align cells: inline center")
  );
  showAlignCellsInlineEnd = computed(() =>
    this.tabularGrids().get("Align cells: inline end")
  );

  // TODO: This is a WA, since the Chameleon's register does not for some reason
  getImagePathCallback = getImagePathCallback;

  metadata = tabularGridMetadata;
  codeSnippets = tabularGridMetadata.codeSnippets;

  helpersMetadata = tabularGridHelpersMetadata;
  helpersCodeSnippets = tabularGridHelpersMetadata.codeSnippets;

  updateRenderedTabularGrid =
    (gridName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.tabularGrids().set(gridName, event.detail === "true");

      let hiddenGridsQueryParam = "";

      this.tabularGrids().forEach((renderGrid, gridName) => {
        if (!renderGrid) {
          hiddenGridsQueryParam +=
            hiddenGridsQueryParam === "" ? gridName : "," + gridName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenGrids: hiddenGridsQueryParam },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };

  paragraphClass = paragraphClass;

  // Defining the class properties
  TABULAR_GRID_CLASS = CSS_SELECTORS.TABULAR_GRID_CLASS;
  TABULAR_GRID_COLUMN_SET_CLASS = CSS_SELECTORS.TABULAR_GRID_COLUMN_SET_CLASS;
  TABULAR_GRID_COLUMN_CLASS = CSS_SELECTORS.TABULAR_GRID_COLUMN_CLASS;
  TABULAR_GRID_ROW_CLASS = CSS_SELECTORS.TABULAR_GRID_ROW_CLASS;
  TABULAR_GRID_ROW_ACTIONS_CLASS = CSS_SELECTORS.TABULAR_GRID_ROW_ACTIONS_CLASS;
  TABULAR_GRID_CELL_CLASS = CSS_SELECTORS.TABULAR_GRID_CELL_CLASS;
  TABULAR_GRID_ROWSET_CLASS = CSS_SELECTORS.TABULAR_GRID_ROWSET_CLASS;
  TABULAR_GRID_ROWSET_LEGEND_CLASS =
    CSS_SELECTORS.TABULAR_GRID_ROWSET_LEGEND_CLASS;
  TABULAR_GRID_SHOW_NODE_ICONS_CLASS =
    CSS_SELECTORS.TABULAR_GRID_SHOW_NODE_ICONS_CLASS;

  // Align classes
  TABULAR_GRID_ALIGN_CELLS_BLOCK_START_CLASS =
    CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_BLOCK_START_CLASS;
  TABULAR_GRID_ALIGN_CELLS_BLOCK_CENTER_CLASS =
    CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_BLOCK_CENTER_CLASS;
  TABULAR_GRID_ALIGN_CELLS_BLOCK_END_CLASS =
    CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_BLOCK_END_CLASS;
  TABULAR_GRID_ALIGN_CELLS_INLINE_START_CLASS =
    CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_INLINE_START_CLASS;
  TABULAR_GRID_ALIGN_CELLS_INLINE_CENTER_CLASS =
    CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_INLINE_CENTER_CLASS;
  TABULAR_GRID_ALIGN_CELLS_INLINE_END_CLASS =
    CSS_SELECTORS.TABULAR_GRID_ALIGN_CELLS_INLINE_END_CLASS;
}
