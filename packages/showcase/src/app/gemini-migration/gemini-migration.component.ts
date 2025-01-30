import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import {
  carsComboBoxModel,
  favoriteColorsActionListModel,
  favoriteColorsComboBoxModel,
  favoriteColorsRadioGroupModel,
  favoriteColorsSuggestModel,
  fruitsTabModel,
  pillsModel
} from "./models";

import { getIconPath } from "@genexus/mercury/assets-manager.js";
import type {
  ChCheckboxCustomEvent,
  TreeViewModel
} from "@genexus/chameleon-controls-library";

import { geminiMigrationMetadata, SCROLLABLE_CLASS } from "./metadata";
import { RouterCommonLinksService } from "../../services/router-links.service";
import { CodeSnippetComponent } from "../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../user-controls/runtime-bundles/runtime-bundles.component";
import { iconsModel } from "../components/tree-view/models";

@Component({
  selector: "components-gemini-migration",
  templateUrl: "./gemini-migration.component.html",
  styleUrl: "./gemini-migration.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "main-content" },
  imports: [
    CommonModule,
    CodeSnippetComponent,
    RouterLink,
    RuntimeBundlesComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GeminiMigrationComponent {
  commonLinks = inject(RouterCommonLinksService);
  router = inject(Router);

  metadata = geminiMigrationMetadata;
  codeSnippets = geminiMigrationMetadata.codeSnippets;

  ICON = getIconPath({
    category: "gemini-tools",
    name: "add-circle",
    colorType: "on-primary"
  });
  ICON_PRIMARY = getIconPath({
    category: "gemini-tools",
    name: "add-circle",
    colorType: "primary"
  });

  carsComboBoxModel = carsComboBoxModel;
  favoriteColorsActionListModel = favoriteColorsActionListModel;
  favoriteColorsComboBoxModel = favoriteColorsComboBoxModel;
  favoriteColorsRadioGroupModel = favoriteColorsRadioGroupModel;
  favoriteColorsSuggestModel = favoriteColorsSuggestModel;
  fruitsTabModel = fruitsTabModel;
  objectsTreeViewModel: TreeViewModel = structuredClone(iconsModel);
  pillsModel = pillsModel;

  SCROLLABLE_CLASS = SCROLLABLE_CLASS;
  CHAMELEON_COMPONENTS_PATH =
    "https://github.com/genexuslabs/chameleon-controls-library/tree/main/src/components/";
  // suggestOptions = suggestOptions;

  hiddenMigrations = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * migration section must be rendered.
   */
  migrations = computed(() => {
    const newMigrations = new Map<string, boolean>([
      ["gxg-button: text only", true],
      ["gxg-button: text with icon", true],
      ["gxg-combo-box", true],
      ["gxg-form-checkbox", true],
      ["gxg-form-radio-group", true],
      ["gxg-form-text", true],
      ["gxg-form-textarea", true],
      ["gxg-grid", true],
      ["gxg-icon", true],
      ["gxg-label", true],
      ["gxg-list-box", true],
      ["gxg-pills", true],
      ["gxg-select", true],
      ["gxg-suggest", true],
      ["gxg-tabs", true],
      ["gxg-text", true],
      ["gxg-title", true],
      ["gxg-tree-view", true]
    ]);

    // Update the rendered migrations by watching changes for the
    // hiddenMigrations query parameter
    const hiddenMigrationsArray = this.hiddenMigrations()
      ? this.hiddenMigrations().split(",")
      : [];

    // Display all typographies
    newMigrations.forEach((_, migrationName) =>
      newMigrations.set(migrationName, true)
    );

    // Remove those typographies that must be hidden
    hiddenMigrationsArray.forEach(hiddenMigrationName =>
      newMigrations.set(hiddenMigrationName, false)
    );

    return newMigrations;
  });

  showGxgButtonTextOnly = computed(() =>
    this.migrations().get("gxg-button: text only")
  );
  showGxgButtonTextWithIcon = computed(() =>
    this.migrations().get("gxg-button: text with icon")
  );
  showGxgComboBox = computed(() => this.migrations().get("gxg-combo-box"));
  showGxgFormCheckbox = computed(() =>
    this.migrations().get("gxg-form-checkbox")
  );
  showGxgFormRadioGroup = computed(() =>
    this.migrations().get("gxg-form-radio-group")
  );
  showGxgFormText = computed(() => this.migrations().get("gxg-form-text"));
  showGxgFormTextarea = computed(() =>
    this.migrations().get("gxg-form-textarea")
  );
  showGxgGrid = computed(() => this.migrations().get("gxg-grid"));
  showGxgIcon = computed(() => this.migrations().get("gxg-icon"));
  showGxgLabel = computed(() => this.migrations().get("gxg-label"));
  showGxgListBox = computed(() => this.migrations().get("gxg-list-box"));
  showGxgSelect = computed(() => this.migrations().get("gxg-select"));
  showGxgSuggest = computed(() => this.migrations().get("gxg-suggest"));
  showGxgTabs = computed(() => this.migrations().get("gxg-tabs"));
  showGxgText = computed(() => this.migrations().get("gxg-text"));
  showGxgTitle = computed(() => this.migrations().get("gxg-title"));
  showGxgTree = computed(() => this.migrations().get("gxg-tree-view"));
  showGxgPills = computed(() => this.migrations().get("gxg-pills"));

  updateRenderedMigration =
    (typographyName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.migrations().set(typographyName, event.detail === "true");

      let hiddenMigrationsQueryParm = "";

      this.migrations().forEach((renderMigration, migrationName) => {
        if (!renderMigration) {
          hiddenMigrationsQueryParm +=
            hiddenMigrationsQueryParm === ""
              ? migrationName
              : "," + migrationName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenMigrations: hiddenMigrationsQueryParm },
        queryParamsHandling: "merge"
      });
    };
}
