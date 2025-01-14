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
import { Router, RouterLink } from "@angular/router";

import {
  getIconPath,
  getImagePathCallback
} from "@genexus/mercury/assets-manager.js";
import type {
  ChCheckboxCustomEvent,
  ComboBoxModel,
  RadioGroupModel
} from "@genexus/chameleon-controls-library";

import { geminiMigrationMetadata } from "./metadata";
import { RouterCommonLinksService } from "../../services/router-links.service";
import { CodeSnippetComponent } from "../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../user-controls/runtime-bundles/runtime-bundles.component";

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

  favoriteColorsComboBoxModel = signal<ComboBoxModel>([
    {
      value: "red",
      caption: "Red"
    },
    {
      value: "blue",
      caption: "Blue"
    },
    {
      value: "green",
      caption: "Green"
    },
    {
      value: "yellow",
      caption: "Yellow"
    },
    {
      value: "purple",
      caption: "Purple"
    }
  ]);

  favoriteColorsRadioGroupModel = signal<RadioGroupModel>([
    {
      value: "red",
      caption: "Red"
    },
    {
      value: "blue",
      caption: "Blue"
    },
    {
      value: "green",
      caption: "Green"
    },
    {
      value: "yellow",
      caption: "Yellow"
    },
    {
      value: "purple",
      caption: "Purple"
    }
  ]);

  // TODO: This is a WA, since the Chameleon's register does not for some reason
  getImagePathCallback = getImagePathCallback;
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
      ["gxg-form-radio-group", true]
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
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
