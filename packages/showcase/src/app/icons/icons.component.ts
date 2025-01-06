import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  inject,
  input,
  signal,
  ViewEncapsulation
} from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { MERCURY_ASSETS } from "@genexus/mercury/MERCURY_ASSETS.js";

import { mercuryCategoryExplanation } from "./category-explanation";
import { RuntimeBundlesComponent } from "../../user-controls/runtime-bundles/runtime-bundles.component";
import { ChCheckboxCustomEvent } from "@genexus/chameleon-controls-library";

type ColorType = {
  colorType?: ColorTypeWithStates;
  states?: OnlyStates;
};

type ColorTypeWithStates = {
  type: string;
  states: { state: string; img: string }[];
}[];

type OnlyStates = { state: string; img: string }[];

export type MercuryCategory = keyof (typeof MERCURY_ASSETS)["icons"];

@Component({
  selector: "icons",
  imports: [RouterLink, RouterModule, RuntimeBundlesComponent],
  templateUrl: "./icons.component.html",
  host: { class: "main-content" },
  styleUrl: "./icons.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  // This reduced the document size by 300KB
  encapsulation: ViewEncapsulation.None
})
export class IconsComponent {
  router = inject(Router);

  assets = signal<
    {
      categoryName: MercuryCategory;
      icons: {
        iconName: string;
        colorType: ColorType;
      }[];
    }[]
  >([]);

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * category must be rendered.
   */
  categoriesToRender = signal(new Map<string, boolean>());

  // Comes from the router
  filter = input<string>("");
  hiddenCategories = input<string>("");

  filteredAssets = computed(() => {
    if (!this.filter()) {
      return this.assets();
    }

    const filteredAssets = [];
    const filter = this.filter();

    // For let i = ... is the fastest loop
    for (
      let categoryIndex = 0;
      categoryIndex < this.assets().length;
      categoryIndex++
    ) {
      const category = this.assets()[categoryIndex];
      const filteredCategory: typeof category = {
        categoryName: category.categoryName,
        icons: []
      };
      let shouldAddCategory = false;

      for (
        let iconsIndex = 0;
        iconsIndex < category.icons.length;
        iconsIndex++
      ) {
        const icon = category.icons[iconsIndex];

        if (icon.iconName.includes(filter)) {
          shouldAddCategory = true;
          filteredCategory.icons.push(icon);
        }
      }

      if (shouldAddCategory) {
        filteredAssets.push(filteredCategory);
      }
    }

    return filteredAssets;
  });

  categoryExplanation = signal(mercuryCategoryExplanation);

  constructor() {
    const newAssets = [];
    const getStates = (statesToParse: {
      [key: string]: { name: string };
    }): { state: string; img: string }[] =>
      Object.entries(statesToParse).map(entry => ({
        state: entry[0],
        img: `var(--icon__${entry[1].name})`
      }));

    const categories = Object.entries(MERCURY_ASSETS.icons);

    // For let i = ... is the fastest loop
    for (let index = 0; index < categories.length; index++) {
      const category = categories[index];
      const categoryName = category[0] as MercuryCategory;
      const icons: {
        iconName: string;
        colorType: ColorType;
      }[] = [];
      const assetEntry = { categoryName, icons };

      const iconsWithColorType = Object.entries(category[1]);

      for (
        let iconsIndex = 0;
        iconsIndex < iconsWithColorType.length;
        iconsIndex++
      ) {
        const iconWithColorType = iconsWithColorType[iconsIndex];
        const colorTypeToParse = iconWithColorType[1];
        const colorTypesWithState: {
          type: string;
          states: { state: string; img: string }[];
        }[] = [];
        let onlyStates: { state: string; img: string }[] = [];
        const hasColorType = !colorTypeToParse.enabled;

        if (hasColorType) {
          Object.entries(colorTypeToParse).forEach(colorType => {
            colorTypesWithState.push({
              type: colorType[0],
              states: getStates(
                colorType[1] as { [key: string]: { name: string } }
              )
            });
          });
        } else {
          onlyStates = getStates(
            colorTypeToParse as { [key: string]: { name: string } }
          );
        }

        icons.push({
          iconName: iconWithColorType[0],
          colorType: hasColorType
            ? { colorType: colorTypesWithState }
            : { states: onlyStates }
        });
      }

      // Sort icons
      icons.sort((iconA, iconB) => (iconA.iconName <= iconB.iconName ? -1 : 0));
      newAssets.push(assetEntry);
    }

    newAssets.sort((entryA, entryB) =>
      entryA.categoryName <= entryB.categoryName ? -1 : 0
    );

    this.assets.set(newAssets);

    // Set all categories after the array is sorted
    newAssets.forEach(assetEntry =>
      this.categoriesToRender().set(assetEntry.categoryName, true)
    );

    // Update the rendered categories by watching changes for the
    // hiddenCategories query parameter
    effect(() => {
      const hiddenCategoriesArray = this.hiddenCategories()
        ? this.hiddenCategories().split(",")
        : [];

      // Display all categories
      this.categoriesToRender().forEach((_, categoryName) =>
        this.categoriesToRender().set(categoryName, true)
      );

      // Remove those categories that must be hidden
      hiddenCategoriesArray.forEach(hiddenCategoryName =>
        this.categoriesToRender().set(hiddenCategoryName, false)
      );

      // Notify dependencies that the Map has changed
      this.categoriesToRender.update(value => value);
    });
  }

  updateRenderedCategory =
    (categoryName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.categoriesToRender().set(categoryName, event.detail === "true");

      // Notify dependencies that the Map has changed
      this.categoriesToRender.update(value => value);

      let hiddenCategoriesQueryParm = "";

      this.categoriesToRender().forEach((renderCategory, categoryName) => {
        if (!renderCategory) {
          hiddenCategoriesQueryParm +=
            hiddenCategoriesQueryParm === ""
              ? categoryName
              : "," + categoryName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenCategories: hiddenCategoriesQueryParm },
        queryParamsHandling: "merge" // Conserve other query parameters
      });
    };
}
