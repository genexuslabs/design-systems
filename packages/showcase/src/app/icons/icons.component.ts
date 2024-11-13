import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  signal,
  ViewEncapsulation
} from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { MERCURY_ASSETS } from "@genexus/mercury/dist/assets/MERCURY_ASSETS";

type ColorType = {
  colorType?: ColorTypeWithStates;
  states?: OnlyStates;
};

type ColorTypeWithStates = {
  type: string;
  states: { state: string; img: string }[];
}[];

type OnlyStates = { state: string; img: string }[];

@Component({
  selector: "icons",
  imports: [RouterLink, RouterModule],
  templateUrl: "./icons.component.html",
  host: { class: "main-content", ngSkipHydration: "true" },
  styleUrl: "./icons.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  // This reduced the document size by 300KB
  encapsulation: ViewEncapsulation.None
})
export class IconsComponent {
  assets = signal<
    {
      categoryName: keyof (typeof MERCURY_ASSETS)["icons"];
      icons: {
        iconName: string;
        colorType: ColorType;
      }[];
    }[]
  >([]);

  filter = input<string>("");

  filteredAssets = computed(() => {
    if (!this.filter()) {
      return this.assets();
    }

    const filteredAssets = [];
    const filter = this.filter();

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

  categoryExplanation = signal({
    bpm: "The bpm category features icons related to Business Process Management (BPM) within GeneXus. BPM tools help in designing, automating, and optimizing business processes, and these icons represent the various elements and actions involved in managing and executing workflows.",
    controls:
      "Icons under the controls category represent various UI controls that can be implemented in GeneXus applications. These controls include buttons, input fields, dropdowns, and other interactive elements that are essential for building user interfaces.",
    "editing-structures":
      "The editing-structures category includes icons related to the creation and modification of data structures within GeneXus. These icons assist developers in defining and managing the underlying data models that power their applications, ensuring that data is organized and accessible.",
    "gemini-tools":
      "Icons in the gemini-tools category are linked to tools that are part of the Gemini framework within GeneXus. These tools provide specialized functionalities for specific tasks, aiding developers in extending the capabilities of their applications and enhancing their workflows.",
    general:
      "This category covers a broad range of icons that don't fit into specific categories but are essential for various general tasks and functionalities within GeneXus. These icons provide visual cues for a wide array of operations and actions in the development environment.",
    "gx-server":
      "The gx-server category includes icons associated with GeneXus Server, a tool that facilitates collaboration and version control in GeneXus projects. These icons help represent different server-related actions, such as committing changes, updating versions, and managing project repositories.",
    "gx-test":
      "Icons in the gx-test category are related to testing tools and features within GeneXus. Testing is a critical phase in the development process, and these icons represent the various tools and functionalities that help ensure the quality and reliability of applications developed with GeneXus.",
    menus:
      "This category is dedicated to icons representing menus within applications. Menus are crucial for organizing and presenting options to users, and these icons help in designing intuitive and accessible menus that enhance the overall user experience.",
    navigation:
      "The navigation category features icons related to the navigation of applications and the GeneXus development environment. These icons help developers design and implement user-friendly navigation flows, ensuring that users can move seamlessly through different sections of an application.",
    objects:
      "Icons under the objects category represent the core elements that make up GeneXus applications. Objects are essential units of functionality, including data structures, user interfaces, and business logic, which together define the behavior and appearance of an application.",
    "objects-parts": "TODO :P",
    patterns:
      "The patterns category encompasses a range of design patterns that can be applied to GeneXus projects. These patterns help standardize development practices, ensuring consistency and efficiency when creating applications. They cover common scenarios and workflows, offering reusable solutions to common problems.",
    "patterns-default-associated":
      "Icons in this category represent default patterns that are automatically associated with certain functionalities within GeneXus. These patterns simplify the development process by providing pre-defined structures and behaviors that can be easily implemented across various parts of an application.",
    states: "TODO :P",
    system: "TODO :P",
    "window-tools":
      "This category includes icons related to various tools and utilities used within the GeneXus development environment. These tools assist developers in managing and configuring different aspects of their projects, enhancing productivity and streamlining workflow within the GeneXus platform."
  } satisfies {
    [key in keyof (typeof MERCURY_ASSETS)["icons"]]: string;
  });

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

    for (let index = 0; index < categories.length; index++) {
      const category = categories[index];
      const icons: {
        iconName: string;
        colorType: ColorType;
      }[] = [];
      const assetEntry = {
        categoryName: category[0] as keyof (typeof MERCURY_ASSETS)["icons"],
        icons: icons
      };

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
  }
}
