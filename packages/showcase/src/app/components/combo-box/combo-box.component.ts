import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject
} from "@angular/core";
import { RouterLink } from "@angular/router";
import { CommonModule } from "@angular/common";
import type { ComboBoxModel } from "@genexus/chameleon-controls-library";

import { comboBoxMetadata } from "./metadata";
import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { RouterCommonLinksService } from "../../../services/router-links.service";
import { getComboBoxImagePathCallback } from "@genexus/mercury/assets-manager.js";

@Component({
  selector: "components-combo-box",
  templateUrl: "./combo-box.component.html",
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
export class ComboBoxComponent {
  commonLinks = inject(RouterCommonLinksService);

  metadata = comboBoxMetadata;
  codeSnippets = comboBoxMetadata.codeSnippets;

  // TODO: This is a WA, since the Chameleon's register does not for some reason
  getImagePathCallback = getComboBoxImagePathCallback;

  comboBoxModel: ComboBoxModel = [
    { value: "Value 1", caption: "Label for the value 1" },
    {
      value: "Value 2",
      caption: "Label for the value 222 (not expandable)",
      items: [
        { value: "Value 2.1", caption: "Label for the value 2.1" },
        { value: "Value 2.2", caption: "Label for the value 2.2" }
      ]
    },
    {
      value: "Value 3",
      caption: "Label for the value 3",
      disabled: true
    },
    { value: "Value 4", caption: "Label for the value 4" },
    {
      value: "Value 5",
      caption: "Label for the value 5",
      disabled: true,
      expandable: true,
      expanded: true,
      items: [
        { value: "Value 5.1", caption: "Label for the value 5.1" },
        { value: "Value 5.2", caption: "Label for the value 5.2" },
        {
          value: "Value 5.3",
          caption: "Label for the value 5.3",
          disabled: false
        },
        { value: "Value 5.4", caption: "Label for the value 5.4" }
      ]
    },
    {
      value: "Value 6",
      caption: "Label for the value 6",
      expandable: true,
      expanded: true,
      items: [
        {
          value: "Value 6.1",
          caption: "Label for the value 6.1",
          disabled: true
        },
        {
          value: "Value 6.2",
          caption: "Label for the value 6.2",
          disabled: true
        },
        {
          value: "Value 6.3",
          caption: "Label for the value 6.3",
          disabled: false
        },
        { value: "Value 6.4", caption: "Label for the value 6.4" }
      ]
    },
    {
      value: "Value 7",
      caption: "Label for the value 7",
      disabled: true
    },
    { value: "Value 8", caption: "Label for the value 8" },
    {
      value: "Value 9",
      caption: "Label for the value 9",
      expandable: true,
      items: [
        { value: "Value 9.1", caption: "Label for the value 9.1" },
        { value: "Value 9.2", caption: "Label for the value 9.2" },
        {
          value: "Value 9.3",
          caption: "Label for the value 9.3",
          disabled: false
        },
        { value: "Value 9.4", caption: "Label for the value 9.4" }
      ]
    },
    { value: "Value 10", caption: "Label for the value 10" },
    {
      value: "Value 11",
      caption: "Label for the value 11",
      expandable: true,
      expanded: true,
      disabled: true,
      items: [
        { value: "Value 11.1", caption: "Label for the value 11.1" },
        { value: "Value 11.2", caption: "Label for the value 11.2" },
        {
          value: "Value 11.3",
          caption: "Label for the value 11.3",
          disabled: false
        },
        { value: "Value 11.4", caption: "Label for the value 11.4" }
      ]
    },
    { value: "Value 12", caption: "Label for the value 12" }
  ];

  comboBoxIconsModel: ComboBoxModel = [
    {
      value: "patterns",
      caption: "Patterns",
      startImgSrc: "mer/objects/patterns"
    },
    {
      value: "procedure",
      caption: "Procedure",
      startImgSrc: "objects/procedure"
    },
    {
      value: "query",
      caption: "Query",
      startImgSrc: "objects/query"
    },
    {
      value: "references",
      caption: "References",
      startImgSrc: "objects/references"
    },
    {
      value: "report",
      caption: "Report",
      startImgSrc: "objects/report"
    },
    {
      value: "roles",
      caption: "Roles",
      startImgSrc: "objects/roles"
    },
    {
      value: "stencil",
      caption: "Stencil",
      startImgSrc: "objects/stencil"
    },
    {
      value: "structured-data-type",
      caption: "Structured Data Type",
      startImgSrc: "objects/structured-data-type"
    },
    {
      value: "subtype-group",
      caption: "Subtype Group",
      startImgSrc: "objects/subtype-group"
    },
    {
      value: "super-app",
      caption: "Super App",
      startImgSrc: "objects/super-app"
    },
    {
      value: "table",
      caption: "Table",
      startImgSrc: "objects/table"
    },
    {
      value: "theme",
      caption: "Theme",
      startImgSrc: "objects/theme"
    },
    {
      value: "theme-for-sd",
      caption: "Theme For Sd",
      startImgSrc: "objects/theme-for-sd"
    },
    {
      value: "theme-web",
      caption: "Theme Web",
      startImgSrc: "objects/theme-web"
    },
    {
      value: "to-be-defined",
      caption: "To Be Defined",
      startImgSrc: "objects/to-be-defined"
    },
    {
      value: "transaction",
      caption: "Transaction",
      startImgSrc: "objects/transaction"
    },
    {
      value: "url-rewrite",
      caption: "Url Rewrite",
      startImgSrc: "objects/url-rewrite"
    },
    {
      value: "version",
      caption: "Version",
      startImgSrc: "objects/version"
    },
    {
      value: "web-component",
      caption: "Web Component",
      startImgSrc: "objects/web-component"
    },
    {
      value: "webpanel",
      caption: "Webpanel",
      startImgSrc: "objects/webpanel"
    },
    {
      value: "work-panel",
      caption: "Work Panel",
      startImgSrc: "objects/work-panel"
    },
    {
      value: "workflow",
      caption: "Workflow",
      startImgSrc: "objects/workflow"
    }
  ];
}
