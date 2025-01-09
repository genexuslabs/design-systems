import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  inject,
  input,
  signal
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, RouterLink } from "@angular/router";
import type { ChCheckboxCustomEvent } from "@genexus/chameleon-controls-library";

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

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * migration section must be rendered.
   */
  migrations = signal(
    new Map<string, boolean>([
      ["gxg-button: text only", true],
      ["gxg-button: text with icon", true],
      ["gxg-combo-box", true],
      ["gxg-form-checkbox", true]
    ])
  );
  showGxgButtonTextOnly = computed(() =>
    this.migrations().get("gxg-button: text only")
  );
  showGxgButtonTextWithIcon = computed(() =>
    this.migrations().get("gxg-button: text with icon")
  );
  showGxgComboBox = computed(() => this.migrations().get("gxg-combo-box"));
  showGxgFormCheckbox = computed(() => this.migrations().get("gxg-combo-box"));

  hiddenMigrations = input<string>("");

  constructor() {
    // Update the rendered migrations by watching changes for the
    // hiddenMigrations query parameter
    effect(() => {
      const hiddenMigrationsArray = this.hiddenMigrations()
        ? this.hiddenMigrations().split(",")
        : [];

      // Display all typographies
      this.migrations().forEach((_, typographyName) =>
        this.migrations().set(typographyName, true)
      );

      // Remove those typographies that must be hidden
      hiddenMigrationsArray.forEach(hiddenMigrationName =>
        this.migrations().set(hiddenMigrationName, false)
      );

      // Notify dependencies that the Map has changed
      this.migrations.update(value => value);
    });
  }

  updateRenderedMigration =
    (typographyName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.migrations().set(typographyName, event.detail === "true");

      // Notify dependencies that the Map has changed
      this.migrations.update(value => new Map(value));

      let hiddenMigrationsQueryParm = "";

      this.migrations().forEach((renderTypography, typographyName) => {
        if (!renderTypography) {
          hiddenMigrationsQueryParm +=
            hiddenMigrationsQueryParm === ""
              ? typographyName
              : "," + typographyName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenMigrations: hiddenMigrationsQueryParm },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
