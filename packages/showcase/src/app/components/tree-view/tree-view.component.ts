import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { getIconPath } from "@genexus/mercury";
import { TreeViewModel } from "@genexus/chameleon-controls-library";

import { CodeSnippetComponent } from "../../../user-controls/code-snippet/code-snippet.component";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";
import { createTemplateForAllLanguages } from "../../../services/template-language/create-template";

@Component({
  selector: "components-tree-view",
  imports: [CommonModule, CodeSnippetComponent, RuntimeBundlesComponent],
  templateUrl: "./tree-view.component.html",
  host: { class: "main-content", ngSkipHydration: "true" },
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TreeViewComponent {
  ADD_CIRCLE_ICON = getIconPath({
    category: "gemini-tools",
    name: "add-circle",
    colorType: "on-elevation"
  });

  noIconsModel: TreeViewModel = [
    {
      id: "root",
      caption: "GeneXusNext Develop",
      editable: false,
      expanded: true,
      leaf: false,
      items: [
        {
          id: "Customization",
          caption: "Customization",
          expanded: true,
          items: [
            {
              id: "Customization.Files",
              caption: "Files",
              leaf: true
            },
            {
              id: "Customization.Images",
              caption: "Images",
              leaf: true
            }
          ]
        },
        {
          id: "Documentation",
          caption: "Documentation",
          editable: false,
          leaf: true
        },
        {
          id: "Main_Programs",
          caption: "Main Programs",
          editable: false,
          expanded: true,
          items: [
            {
              id: "Main_Programs.ApiHealthCheck",
              caption: "ApiHealthCheck",
              leaf: true
            },
            {
              id: "Main_Programs.BackHome",
              caption: "BackHome",
              leaf: true
            },
            {
              id: "Main_Programs.Login",
              caption: "Login",
              leaf: true
            },
            {
              id: "Main_Programs.Prompt",
              caption: "Prompt",
              leaf: true,
              metadata: "Panel"
            },
            {
              id: "Main_Programs.ProvisioningServices",
              caption: "ProvisioningServices",
              leaf: true
            },
            {
              id: "Main_Programs.VersionCheck",
              caption: "VersionCheck",
              leaf: true
            }
          ]
        },
        {
          id: "Root_Module",
          caption: "Root Module",
          expanded: true,
          items: [
            {
              id: "Root_Module.Domain",
              caption: "Domain",
              editable: false,
              leaf: true
            },
            {
              id: "Root_Module.Files",
              caption: "Files",
              editable: false,
              leaf: true
            },
            {
              id: "Root_Module.GXNext",
              caption: "GXNext",
              leaf: true
            },
            {
              id: "Root_Module.GeneXusNext",
              caption: "GeneXusNext",
              leaf: true
            },
            {
              id: "Root_Module.Images",
              caption: "Images",
              leaf: true
            }
          ]
        }
      ]
    }
  ];

  withIconsModel: TreeViewModel = [
    {
      id: "root",
      caption: "GeneXusNext Develop",
      startImgSrc: "objects/version",
      expanded: true,
      leaf: false,
      items: [
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
        },
        {
          id: "Main_Programs",
          caption: "Main Programs",
          startImgSrc: "objects/category",
          expanded: true,
          items: [
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
              id: "Main_Programs.Prompt",
              caption: "Prompt",
              startImgSrc: "objects/panel-for-sd",
              leaf: true,
              metadata: "Panel"
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
          id: "References",
          caption: "References",
          startImgSrc: "objects/references",
          leaf: true
        },
        {
          id: "Root_Module",
          caption: "Root Module",
          startImgSrc: "objects/module",
          expanded: true,
          items: [
            {
              id: "Root_Module.Domain",
              caption: "Domain",
              startImgSrc: "objects/domain",
              leaf: true
            },
            {
              id: "Root_Module.Files",
              caption: "Files",
              startImgSrc: "objects/file",
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
              id: "Root_Module.Images",
              caption: "Images",
              startImgSrc: "objects/image",
              leaf: true
            }
          ]
        }
      ]
    }
  ];

  noIcons = createTemplateForAllLanguages([
    {
      tag: "ch-tree-view-render",
      properties: [
        { name: "class", value: "tree-view" },
        { name: "showLines", value: "last" }
      ]
    }
  ]);

  withCheckboxes = createTemplateForAllLanguages([
    {
      tag: "ch-tree-view-render",
      properties: [
        { name: "class", value: "tree-view" },
        { name: "checkbox", value: true },
        { name: "showLines", value: "all" }
      ]
    }
  ]);

  showLinesLast = createTemplateForAllLanguages([
    {
      tag: "ch-tree-view-render",
      properties: [
        { name: "class", value: "tree-view" },
        { name: "showLines", value: "last" }
      ]
    }
  ]);

  showLinesNone = createTemplateForAllLanguages([
    {
      tag: "ch-tree-view-render",
      properties: [{ name: "class", value: "tree-view" }]
    }
  ]);
}
