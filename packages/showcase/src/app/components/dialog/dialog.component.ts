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

import { iconMetadata } from "./metadata";
import { RouterCommonLinksService } from "../../../services/router-links.service";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { Router } from "@angular/router";

@Component({
  selector: "components-dialog",
  templateUrl: "./dialog.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogComponent {
  commonLinks = inject(RouterCommonLinksService);
  router = inject(Router);

  metadata = iconMetadata;
  codeSnippets = iconMetadata.codeSnippets;

  dialogDefaultDisplayed = signal(false);
  dialogHeaderDisplayed = signal(false);
  dialogFooterDisplayed = signal(false);

  showDialogDefault = () => this.dialogDefaultDisplayed.set(true);
  hideDialogDefault = () => this.dialogDefaultDisplayed.set(false);

  showDialogHeader = () => this.dialogHeaderDisplayed.set(true);
  hideDialogHeader = () => this.dialogHeaderDisplayed.set(false);

  showDialogFooter = () => this.dialogFooterDisplayed.set(true);
  hideDialogFooter = () => this.dialogFooterDisplayed.set(false);

  hiddenDialogs = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * migration section must be rendered.
   */
  dialogs = computed(() => {
    const newMigrations = new Map<string, boolean>([
      ["Default", true],
      ["Header", true],
      ["Footer", true],
      ["Resizable", true]
    ]);

    // Update the rendered migrations by watching changes for the
    // hiddenDialogs query parameter
    const hiddenDialogsArray = this.hiddenDialogs()
      ? this.hiddenDialogs().split(",")
      : [];

    // Display all typographies
    newMigrations.forEach((_, migrationName) =>
      newMigrations.set(migrationName, true)
    );

    // Remove those typographies that must be hidden
    hiddenDialogsArray.forEach(hiddenMigrationName =>
      newMigrations.set(hiddenMigrationName, false)
    );

    return newMigrations;
  });

  showDefault = computed(() => this.dialogs().get("Default"));
  showHeader = computed(() => this.dialogs().get("Header"));
  showFooter = computed(() => this.dialogs().get("Footer"));
  showResizable = computed(() => this.dialogs().get("Resizable"));

  updateRenderedDialog =
    (dialogName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.dialogs().set(dialogName, event.detail === "true");

      let hiddenDialogsQueryParm = "";

      this.dialogs().forEach((renderDialog, dialogName) => {
        if (!renderDialog) {
          hiddenDialogsQueryParm +=
            hiddenDialogsQueryParm === "" ? dialogName : "," + dialogName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenDialogs: hiddenDialogsQueryParm },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
