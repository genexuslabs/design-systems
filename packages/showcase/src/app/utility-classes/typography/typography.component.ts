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
import { Router } from "@angular/router";
import type { ChCheckboxCustomEvent } from "@genexus/chameleon-controls-library";

import { typographyMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-typography",
  templateUrl: "./typography.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "main-content" },
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TypographyComponent {
  router = inject(Router);

  metadata = typographyMetadata;
  codeSnippets = typographyMetadata.codeSnippets;

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * typography section must be rendered.
   */
  typographies = signal(
    new Map<string, boolean>([
      ["Headings", true],
      ["Text Body Regular", true],
      ["Text Body Highlighted", true],
      ["Text Body Italic", true]
    ])
  );
  showTextBodyRegular = computed(() =>
    this.typographies().get("Text Body Regular")
  );
  showTextBodyHighlighted = computed(() =>
    this.typographies().get("Text Body Highlighted")
  );
  showTextBodyItalic = computed(() =>
    this.typographies().get("Text Body Italic")
  );
  showTextBody = computed(
    () =>
      this.showTextBodyRegular() ||
      this.showTextBodyHighlighted() ||
      this.showTextBodyItalic()
  );

  hiddenTypographies = input<string>("");

  constructor() {
    // Update the rendered typographies by watching changes for the
    // hiddenTypographies query parameter
    effect(() => {
      const hiddenTypographiesArray = this.hiddenTypographies()
        ? this.hiddenTypographies().split(",")
        : [];

      // Display all typographies
      this.typographies().forEach((_, typographyName) =>
        this.typographies().set(typographyName, true)
      );

      // Remove those typographies that must be hidden
      hiddenTypographiesArray.forEach(hiddentypographyName =>
        this.typographies().set(hiddentypographyName, false)
      );

      // Notify dependencies that the Map has changed
      this.typographies.update(value => value);
    });
  }

  updateRenderedTypography =
    (typographyName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.typographies().set(typographyName, event.detail === "true");

      // Notify dependencies that the Map has changed
      this.typographies.update(value => new Map(value));

      let hiddenTypographiesQueryParm = "";

      this.typographies().forEach((renderTypography, typographyName) => {
        if (!renderTypography) {
          hiddenTypographiesQueryParm +=
            hiddenTypographiesQueryParm === ""
              ? typographyName
              : "," + typographyName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenTypographies: hiddenTypographiesQueryParm },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
