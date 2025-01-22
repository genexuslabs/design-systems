import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input
} from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import type { ChCheckboxCustomEvent } from "@genexus/chameleon-controls-library";
import {
  getIconPath,
  getImagePathCallback
} from "@genexus/mercury/assets-manager.js";

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
  router = inject(Router);

  USER_ICON = getIconPath({
    category: "system",
    name: "user",
    colorType: "on-surface"
  });

  // TODO: This is a WA, since the Chameleon's register does not for some reason
  getImagePathCallback = getImagePathCallback;

  metadata = inputMetadata;
  codeSnippets = inputMetadata.codeSnippets;

  hiddenInputs = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether an
   * example of the input component must be rendered.
   */
  inputs = computed(() => {
    const newExamples = new Map<string, boolean>([
      ["Default", true],
      ["No Label", true],
      ["With Value", true],
      ["With Placeholder", true],
      ["Disabled", true],
      ["With Icon", true]
    ]);

    // Update the rendered examples by watching changes for the
    // hiddenInputs query parameter
    const hiddenInputsArray = this.hiddenInputs()
      ? this.hiddenInputs().split(",")
      : [];

    // Display all examples
    newExamples.forEach((_, exampleName) => newExamples.set(exampleName, true));

    // Remove those examples that must be hidden
    hiddenInputsArray.forEach(hiddenExampleName =>
      newExamples.set(hiddenExampleName, false)
    );

    return newExamples;
  });

  showDefault = computed(() => this.inputs().get("Default"));
  showNoLabel = computed(() => this.inputs().get("No Label"));
  showWithValue = computed(() => this.inputs().get("With Value"));
  showWithPlaceholder = computed(() => this.inputs().get("With Placeholder"));
  showDisabled = computed(() => this.inputs().get("Disabled"));
  showWithIcon = computed(() => this.inputs().get("With Icon"));

  updateRenderedInput =
    (inputName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.inputs().set(inputName, event.detail === "true");

      let hiddenInputsQueryParam = "";

      this.inputs().forEach((renderInput, inputName) => {
        if (!renderInput) {
          hiddenInputsQueryParam +=
            hiddenInputsQueryParam === "" ? inputName : "," + inputName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenInputs: hiddenInputsQueryParam },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
