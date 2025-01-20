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
  AccordionModel,
  ChCheckboxCustomEvent
} from "@genexus/chameleon-controls-library";
import { getImagePathCallback } from "@genexus/mercury/assets-manager.js";

import { accordionMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { accordionSimpleModel, accordionWithIconsModel } from "./models";

@Component({
  selector: "components-accordion",
  templateUrl: "./accordion.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  host: { class: "main-content", ngSkipHydration: "true" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AccordionComponent {
  router = inject(Router);

  hiddenAccordions = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * migration section must be rendered.
   */
  accordions = computed(() => {
    const newAccordions = new Map<string, boolean>([["Filled", true]]);

    // Update the rendered accordions by watching changes for the
    // hiddenAccordions query parameter
    const hiddenAccordionswsArray = this.hiddenAccordions()
      ? this.hiddenAccordions().split(",")
      : [];

    // Display all typographies
    newAccordions.forEach((_, accordionName) =>
      newAccordions.set(accordionName, true)
    );

    // Remove those typographies that must be hidden
    hiddenAccordionswsArray.forEach(hiddenAccordionName =>
      newAccordions.set(hiddenAccordionName, false)
    );

    return newAccordions;
  });

  showFilled = computed(() => this.accordions().get("Filled"));

  // TODO: This is a WA, since the Chameleon's register does not for some reason
  getImagePathCallback = getImagePathCallback;

  metadata = accordionMetadata;
  codeSnippets = accordionMetadata.codeSnippets;

  accordionSimpleModel: AccordionModel = structuredClone(accordionSimpleModel);

  accordionWithIconsModel: AccordionModel = structuredClone(
    accordionWithIconsModel
  );

  updateRenderedAccordion =
    (typographyName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.accordions().set(typographyName, event.detail === "true");

      let hiddenAccordionsQueryParm = "";

      this.accordions().forEach((renderAccordion, accordionName) => {
        if (!renderAccordion) {
          hiddenAccordionsQueryParm +=
            hiddenAccordionsQueryParm === ""
              ? accordionName
              : "," + accordionName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenAccordions: hiddenAccordionsQueryParm },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
