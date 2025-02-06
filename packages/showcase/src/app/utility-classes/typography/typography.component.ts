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
  selector: "utility-classes-typography",
  templateUrl: "./typography.component.html",
  styleUrl: "./typography.scss",
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
  typographies = computed(() => {
    const newTypographies = new Map<string, boolean>([
      ["Headings", true],
      ["Subtitles Regular", true],
      ["Subtitles SemiBold", true],
      ["Body Regular", true],
      ["Body SemiBold", true],
      ["Body Italic", true],
      ["Tiny Regular", true],
      ["Tiny SemiBold", true]
    ]);

    // Update the rendered typographies by watching changes for the
    // hiddenTypographies query parameter
    const hiddenTypographiesArray = this.hiddenTypographies()
      ? this.hiddenTypographies().split(",")
      : [];

    // Display all typographies
    newTypographies.forEach((_, typographyName) =>
      newTypographies.set(typographyName, true)
    );

    // Remove those typographies that must be hidden
    hiddenTypographiesArray.forEach(hiddenTypographyName =>
      newTypographies.set(hiddenTypographyName, false)
    );

    return newTypographies;
  });
  showHeadings = computed(() => this.typographies().get("Headings"));
  showSubtitlesRegular = computed(() =>
    this.typographies().get("Subtitles Regular")
  );
  showSubtitlesSemiBold = computed(() =>
    this.typographies().get("Subtitles SemiBold")
  );
  showBodyRegular = computed(() => this.typographies().get("Body Regular"));
  showBodySemiBold = computed(() => this.typographies().get("Body Bold"));
  showBodyItalic = computed(() => this.typographies().get("Body Italic"));
  showTinyRegular = computed(() => this.typographies().get("Tiny Regular"));
  showTinyBold = computed(() => this.typographies().get("Tiny SemiBold"));

  hiddenTypographies = input<string>("");

  updateRenderedTypography =
    (typographyName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.typographies().set(typographyName, event.detail === "true");

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
