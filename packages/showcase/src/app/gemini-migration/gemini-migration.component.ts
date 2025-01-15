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
import { Router, RouterLink } from "@angular/router";

import {
  getIconPath,
  getImagePathCallback
} from "@genexus/mercury/assets-manager.js";
import type {
  ChCheckboxCustomEvent,
  ComboBoxModel,
  RadioGroupModel,
  ActionListItemModel,
  TabModel,
  TreeViewModel
} from "@genexus/chameleon-controls-library";

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

  ICON = getIconPath({
    category: "gemini-tools",
    name: "add-circle",
    colorType: "on-primary"
  });
  ICON_PRIMARY = getIconPath({
    category: "gemini-tools",
    name: "add-circle",
    colorType: "primary"
  });

  favoriteColorsComboBoxModel = signal<ComboBoxModel>([
    {
      value: "red",
      caption: "Red"
    },
    {
      value: "blue",
      caption: "Blue"
    },
    {
      value: "green",
      caption: "Green"
    },
    {
      value: "yellow",
      caption: "Yellow"
    },
    {
      value: "purple",
      caption: "Purple"
    }
  ]);

  favoriteColorsSuggestModel = signal<ComboBoxModel>([
    {
      value: "red",
      caption: "Red"
    },
    {
      value: "blue",
      caption: "Blue"
    },
    {
      value: "green",
      caption: "Green"
    },
    {
      value: "yellow",
      caption: "Yellow"
    },
    {
      value: "purple",
      caption: "Purple"
    }
  ]);
  suggestOptions = signal({
    alreadyProcessed: false,
    autoExpand: true,
    hideMatchesAndShowNonMatches: false,
    highlightMatchedItems: false,
    matchCase: false,
    regularExpression: false,
    strict: false
  });

  favoriteColorsRadioGroupModel = signal<RadioGroupModel>([
    {
      value: "red",
      caption: "Red"
    },
    {
      value: "blue",
      caption: "Blue"
    },
    {
      value: "green",
      caption: "Green"
    },
    {
      value: "yellow",
      caption: "Yellow"
    },
    {
      value: "purple",
      caption: "Purple"
    }
  ]);

  favoriteColorsActionListModel = signal<ActionListItemModel[]>([
    {
      id: "red",
      type: "actionable",
      caption: "Red"
    },
    {
      id: "blue",
      type: "actionable",
      caption: "Blue"
    },
    {
      id: "green",
      type: "actionable",
      caption: "Green"
    },
    {
      id: "yellow",
      type: "actionable",
      caption: "Yellow"
    },
    {
      id: "purple",
      type: "actionable",
      caption: "Purple"
    }
  ]);

  fruitsTabModel = signal<TabModel>([
    { id: "apples", name: "Apples" },
    { id: "bananas", name: "Bananas" },
    { id: "cherries", name: "Cherries" }
  ]);

  objectsTreeViewModel = signal<TreeViewModel>([
    {
      id: "root",
      caption: "GeneXusNext Develop",
      startImgSrc: "objects/version",
      expanded: true,
      leaf: false,
      items: [
        {
          id: "Main_Programs",
          caption: "Main Programs",
          startImgSrc: "objects/category",
          expanded: true,
          items: [
            {
              id: "Main_Programs.Prompt",
              caption: "Prompt",
              startImgSrc: "objects/panel-for-sd",
              leaf: true,
              metadata: "Panel"
            },
            {
              id: "Main_Programs.ApiHealthCheck",
              caption: "ApiHealthCheck",
              startImgSrc: "objects/api",
              leaf: true
            },
            {
              id: "Main_Programs.BackHome",
              caption: "BackHome",
              startImgSrc: "objects/web-panel",
              leaf: true
            },
            {
              id: "Main_Programs.Login",
              caption: "Login",
              startImgSrc: "objects/web-panel",
              leaf: true
            },
            {
              id: "Main_Programs.ProvisioningServices",
              caption: "ProvisioningServices",
              startImgSrc: "objects/api",
              leaf: true
            },
            {
              id: "Main_Programs.VersionCheck",
              caption: "VersionCheck",
              startImgSrc: "objects/procedure",
              leaf: true
            }
          ]
        },
        {
          id: "Root_Module",
          caption: "Root Module",
          startImgSrc: getIconPath({
            category: "objects",
            name: "module"
          }),
          expanded: false,
          items: [
            {
              id: "Root_Module.Images",
              caption: "Images",
              startImgSrc: "objects/image",
              leaf: true
            },
            {
              id: "Root_Module.GXNext",
              caption: "GXNext",
              startImgSrc: "objects/dso",
              leaf: true
            },
            {
              id: "Root_Module.GeneXusNext",
              caption: "GeneXusNext",
              startImgSrc: "objects/dso",
              leaf: true
            },
            {
              id: "Root_Module.Files",
              caption: "Files",
              startImgSrc: "objects/file",
              leaf: true
            },
            {
              id: "Root_Module.Domain",
              caption: "Domain ",
              startImgSrc: "objects/file",
              leaf: true
            }
          ]
        },
        {
          id: "References",
          caption: "References",
          startImgSrc: "objects/references",
          leaf: true
        },
        {
          id: "Customization",
          caption: "Customization",
          startImgSrc: "objects/customization",
          expanded: true,
          items: [
            {
              id: "Customization.Files",
              caption: "Files",
              startImgSrc: "objects/file",
              leaf: true
            },
            {
              id: "Customization.Images",
              caption: "Images",
              startImgSrc: "objects/image",
              leaf: true
            }
          ]
        },
        {
          id: "Documentation",
          caption: "Documentation",
          startImgSrc: "objects/document",
          leaf: true
        }
      ]
    }
  ]);

  pillsModel = signal<ComboBoxModel>([
    {
      value: "enabled",
      caption: "Enabled"
    },
    {
      value: "processing",
      caption: "Processing"
    },
    {
      value: "success",
      caption: "Success"
    },
    {
      value: "error",
      caption: "Error"
    },
    {
      value: "warning",
      caption: "Warning"
    }
  ]);

  // TODO: This is a WA, since the Chameleon's register does not for some reason
  getImagePathCallback = getImagePathCallback;
  hiddenMigrations = input<string>("");

  /**
   * This map is useful for rendering checkboxes to determine whether a
   * migration section must be rendered.
   */
  migrations = computed(() => {
    const newMigrations = new Map<string, boolean>([
      ["gxg-button: text only", true],
      ["gxg-button: text with icon", true],
      ["gxg-combo-box", true],
      ["gxg-form-checkbox", true],
      ["gxg-form-radio-group", true],
      ["gxg-form-text", true],
      ["gxg-form-textarea", true],
      ["gxg-grid", true],
      ["gxg-icon", true],
      ["gxg-label", true],
      ["gxg-list-box", true],
      ["gxg-suggest", true],
      ["gxg-tabs", true],
      ["gxg-text", true],
      ["gxg-title", true],
      ["gxg-tree-view", true],
      ["gxg-pills", true]
    ]);

    // Update the rendered migrations by watching changes for the
    // hiddenMigrations query parameter
    const hiddenMigrationsArray = this.hiddenMigrations()
      ? this.hiddenMigrations().split(",")
      : [];

    // Display all typographies
    newMigrations.forEach((_, migrationName) =>
      newMigrations.set(migrationName, true)
    );

    // Remove those typographies that must be hidden
    hiddenMigrationsArray.forEach(hiddenMigrationName =>
      newMigrations.set(hiddenMigrationName, false)
    );

    return newMigrations;
  });

  showGxgButtonTextOnly = computed(() =>
    this.migrations().get("gxg-button: text only")
  );
  showGxgButtonTextWithIcon = computed(() =>
    this.migrations().get("gxg-button: text with icon")
  );
  showGxgComboBox = computed(() => this.migrations().get("gxg-combo-box"));
  showGxgFormCheckbox = computed(() =>
    this.migrations().get("gxg-form-checkbox")
  );
  showGxgFormRadioGroup = computed(() =>
    this.migrations().get("gxg-form-radio-group")
  );
  showGxgFormText = computed(() => this.migrations().get("gxg-form-text"));
  showGxgFormTextarea = computed(() =>
    this.migrations().get("gxg-form-textarea")
  );
  showGxgGrid = computed(() => this.migrations().get("gxg-grid"));
  showGxgIcon = computed(() => this.migrations().get("gxg-icon"));
  showGxgLabel = computed(() => this.migrations().get("gxg-label"));
  showGxgListBox = computed(() => this.migrations().get("gxg-list-box"));
  showGxgSuggest = computed(() => this.migrations().get("gxg-suggest"));
  showGxgTabs = computed(() => this.migrations().get("gxg-tabs"));
  showGxgText = computed(() => this.migrations().get("gxg-text"));
  showGxgTitle = computed(() => this.migrations().get("gxg-title"));
  showGxgTree = computed(() => this.migrations().get("gxg-tree-view"));
  showGxgPills = computed(() => this.migrations().get("gxg-pills"));

  updateRenderedMigration =
    (typographyName: string) => (event: ChCheckboxCustomEvent<string>) => {
      this.migrations().set(typographyName, event.detail === "true");

      let hiddenMigrationsQueryParm = "";

      this.migrations().forEach((renderMigration, migrationName) => {
        if (!renderMigration) {
          hiddenMigrationsQueryParm +=
            hiddenMigrationsQueryParm === ""
              ? migrationName
              : "," + migrationName;
        }
      });

      this.router.navigate([], {
        queryParams: { hiddenMigrations: hiddenMigrationsQueryParm },
        queryParamsHandling: "merge"
      });
    };
}
