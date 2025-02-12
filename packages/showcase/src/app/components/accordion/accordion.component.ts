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
  AccordionModel
} from "@genexus/chameleon-controls-library";

import { accordionMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { accordionModel, accordionWithIconsModel } from "./models";
import { SPACING_BODY_CLASS } from "../../../common/html";

@Component({
  selector: "components-accordion",
  templateUrl: "./accordion.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    CodeSnippetComponent,
    RuntimeBundlesComponent,
    RuntimeBundlesComponent
  ],
  host: { class: "main-content" },
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
    const newAccordions = new Map<string, boolean>([
      ["Filled", true],
      ["Filled: Disabled", true],
      ["Filled With Icons", true],
      ["Filled With Icons: Disabled", true],
      ["Outlined", true],
      ["Outlined: Disabled", true],
      ["Outlined With Icons", true],
      ["Outlined With Icons: Disabled", true]
    ]);

    // Update the rendered accordions by watching changes for the
    // hiddenAccordions query parameter
    const hiddenAccordions = this.hiddenAccordions()
      ? this.hiddenAccordions().split(",")
      : [];

    // Display all accordions
    newAccordions.forEach((_, accordionName) =>
      newAccordions.set(accordionName, true)
    );

    // Remove those accordions that must be hidden
    hiddenAccordions.forEach(hiddenAccordionName =>
      newAccordions.set(hiddenAccordionName, false)
    );

    return newAccordions;
  });

  showFilled = computed(() => this.accordions().get("Filled"));
  showFilledDisabled = computed(() =>
    this.accordions().get("Filled: Disabled")
  );
  showFilledWithIcons = computed(() =>
    this.accordions().get("Filled With Icons")
  );
  showFilledWithIconsDisabled = computed(() =>
    this.accordions().get("Filled With Icons: Disabled")
  );
  showOutlined = computed(() => this.accordions().get("Outlined"));
  showOutlinedDisabled = computed(() =>
    this.accordions().get("Outlined: Disabled")
  );
  showOutlinedWithIcons = computed(() =>
    this.accordions().get("Outlined With Icons")
  );
  showOutlinedWithIconsDisabled = computed(() =>
    this.accordions().get("Outlined With Icons: Disabled")
  );

  metadata = accordionMetadata;
  codeSnippets = accordionMetadata.codeSnippets;

  accordionModel: AccordionModel = structuredClone(accordionModel);
  accordionWithIconsModel: AccordionModel = structuredClone(
    accordionWithIconsModel
  );

  SPACING_BODY_CLASS = SPACING_BODY_CLASS;

  updateRenderedAccordion =
    (accordionName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.accordions().set(accordionName, event.detail === "true");

      let hiddenAccordionsQueryParam = Array.from(this.accordions())
        .filter(([_, renderAccordion]) => !renderAccordion)
        .map(([name]) => name)
        .join(",");

      this.router.navigate([], {
        queryParams: { hiddenAccordions: hiddenAccordionsQueryParam },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
