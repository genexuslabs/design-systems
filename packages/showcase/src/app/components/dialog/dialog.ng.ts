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
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.ng";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.ng";
import { Router } from "@angular/router";
import { CommonSnippetsComponent } from "../../../user-controls/common-snippets/common-snippets.ng";
@Component({
  selector: "components-dialog",
  templateUrl: "./dialog.ng.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    RuntimeBundlesComponent,
    CommonSnippetsComponent
  ],
  host: { class: "main-content" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogComponent {
  commonLinks = inject(RouterCommonLinksService);
  router = inject(Router);

  customDialogProperties = {
    "--ch-dialog-max-block-size": "600px",
    "--ch-dialog-max-inline-size": "800px",
    "--ch-dialog-min-block-size": "200px",
    "--ch-dialog-min-inline-size": "400px"
  };
  metadata = iconMetadata;
  codeSnippets = iconMetadata.codeSnippets;

  dialogDefaultDisplayed = signal(false);
  dialogWithoutPaddingDisplayed = signal(false);
  dialogWithHeaderDisplayed = signal(false);
  dialogWithFooterDisplayed = signal(false);
  dialogResizableDisplayed = signal(false);
  dialogAdjustPositionDisplayed = signal(false);
  dialogNonModalDisplayed = signal(false);
  dialogAllowDragDisplayed = signal(false);

  showDialogDefault = () => this.dialogDefaultDisplayed.set(true);
  hideDialogDefault = () => this.dialogDefaultDisplayed.set(false);

  showDialogWithoutPadding = () => this.dialogWithoutPaddingDisplayed.set(true);
  hideDialogWithoutPadding = () =>
    this.dialogWithoutPaddingDisplayed.set(false);

  showDialogWithHeader = () => this.dialogWithHeaderDisplayed.set(true);
  hideDialogWithHeader = () => this.dialogWithHeaderDisplayed.set(false);

  showDialogWithFooter = () => this.dialogWithFooterDisplayed.set(true);
  hideDialogWithFooter = () => this.dialogWithFooterDisplayed.set(false);

  showDialogResizable = () => this.dialogResizableDisplayed.set(true);
  hideDialogResizable = () => this.dialogResizableDisplayed.set(false);

  showDialogAdjustPosition = () => this.dialogAdjustPositionDisplayed.set(true);
  hideDialogAdjustPosition = () =>
    this.dialogAdjustPositionDisplayed.set(false);

  showDialogNonModal = () => this.dialogNonModalDisplayed.set(true);
  hideDialogNonModal = () => this.dialogNonModalDisplayed.set(false);

  showDialogAllowDrag = () => this.dialogAllowDragDisplayed.set(true);
  hideDialogAllowDrag = () => this.dialogAllowDragDisplayed.set(false);

  hiddenDialogs = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * migration section must be rendered.
   */
  dialogs = computed(() => {
    const newMigrations = new Map<string, boolean>([
      ["Default", true],
      ["Without Padding", true],
      ["With Header", true],
      ["With Footer", true],
      ["Resizable", true],
      ["Adjust Position", true],
      ["Non Modal", true],
      ["Allow Drag", true]
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
  showWithoutPadding = computed(() => this.dialogs().get("Without Padding"));
  showWithHeader = computed(() => this.dialogs().get("With Header"));
  showWithFooter = computed(() => this.dialogs().get("With Footer"));
  showResizable = computed(() => this.dialogs().get("Resizable"));
  showAdjustPosition = computed(() => this.dialogs().get("Adjust Position"));
  showNonModal = computed(() => this.dialogs().get("Non Modal"));
  showAllowDrag = computed(() => this.dialogs().get("Allow Drag"));

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
