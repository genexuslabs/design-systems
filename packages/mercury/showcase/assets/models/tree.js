/*
Index:
noIconsModel          -> A model that has no icons
iconsModel            -> A model where all items have icons
checkboxesNoIcons     -> A model with checkboxes but no icons
checkboxesWithIcons   -> A model with checkboxes and with icons
allObjectsIcons       -> A model which only purpose is to show all available icons
*/

/* - - - - - - - - - - - - 
noIconsModel
- - - - - - - - - - - -  */
export const noIconsModel = [
  {
    id: "root",
    caption: "GeneXusNext Develop",
    editable: false,
    expanded: true,
    leaf: false,
    items: [
      {
        id: "Main_Programs",
        caption: "Main Programs",
        editable: false,
        expanded: true,
        items: [
          {
            id: "Main_Programs.Prompt",
            caption: "Prompt",
            leaf: true,
            metadata: "Panel"
          },
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
            id: "Root_Module.Images",
            caption: "Images",
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
            id: "Root_Module.Files",
            caption: "Files",
            editable: false,
            leaf: true
          },
          {
            id: "Root_Module.Domain",
            caption: "Domain",
            editable: false,
            leaf: true
          }
        ]
      },
      {
        id: "References",
        caption: "References",
        editable: false
      },
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
      }
    ]
  }
];

/* - - - - - - - - - - - - 
iconsModel
- - - - - - - - - - - -  */

export const iconsModel = [
  {
    id: "root",
    caption: "GeneXusNext Develop",
    parts: "objects-version",
    expanded: true,
    leaf: false,
    startImgSrc: "--icon-path",
    items: [
      {
        id: "Main_Programs",
        caption: "Main Programs",
        parts: "objects-category",
        startImgSrc: "--icon-path",
        expanded: true,
        items: [
          {
            id: "Main_Programs.Prompt",
            caption: "Prompt",
            parts: "objects-panel-for-sd",
            leaf: true,
            startImgSrc: "--icon-path",
            metadata: "Panel"
          },
          {
            id: "Main_Programs.ApiHealthCheck",
            caption: "ApiHealthCheck",
            parts: "objects-api",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Main_Programs.BackHome",
            caption: "BackHome",
            parts: "objects-web-panel",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Main_Programs.Login",
            caption: "Login",
            parts: "objects-web-panel",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Main_Programs.ProvisioningServices",
            caption: "ProvisioningServices",
            parts: "objects-api",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Main_Programs.VersionCheck",
            caption: "VersionCheck",
            parts: "objects-procedure",
            leaf: true,
            startImgSrc: "--icon-path"
          }
        ]
      },
      {
        id: "Root_Module",
        caption: "Root Module",
        parts: "item--module",
        expanded: true,
        items: [
          {
            id: "Root_Module.Images",
            caption: "Images",
            parts: "objects-image",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Root_Module.GXNext",
            caption: "GXNext",
            parts: "objects-dso",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Root_Module.GeneXusNext",
            caption: "GeneXusNext",
            parts: "objects-dso",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Root_Module.Files",
            caption: "Files",
            parts: "objects-file",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Root_Module.Domain",
            caption: "Domain",
            parts: "objects-domain",
            leaf: true,
            startImgSrc: "--icon-path"
          }
        ]
      },
      {
        id: "References",
        caption: "References",
        parts: "objects-references",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Customization",
        caption: "Customization",
        parts: "objects-customization",
        startImgSrc: "--icons-path",
        expanded: true,
        items: [
          {
            id: "Customization.Files",
            caption: "Files",
            parts: "objects-file",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Customization.Images",
            caption: "Images",
            parts: "objects-image",
            leaf: true,
            startImgSrc: "--icon-path"
          }
        ]
      },
      {
        id: "Documentation",
        caption: "Documentation",
        parts: "objects-document",
        leaf: true,
        startImgSrc: "--icon-path"
      }
    ]
  }
];

/* - - - - - - - - - - - - 
checkboxesModel
- - - - - - - - - - - -  */
export const checkboxesModel = [
  {
    id: "root",
    caption: "GeneXusNext Develop",
    editable: false,
    expanded: true,
    leaf: false,
    checkbox: true,
    items: [
      {
        id: "Main_Programs",
        caption: "Main Programs",
        editable: false,
        expanded: true,
        checkbox: true,
        items: [
          {
            id: "Main_Programs.Prompt",
            caption: "Prompt",
            leaf: true,
            metadata: "Panel",
            checkbox: true
          },
          {
            id: "Main_Programs.ApiHealthCheck",
            caption: "ApiHealthCheck",
            leaf: true,
            checkbox: true
          },
          {
            id: "Main_Programs.BackHome",
            caption: "BackHome",
            leaf: true,
            checkbox: true
          },
          {
            id: "Main_Programs.Login",
            caption: "Login",
            leaf: true,
            checkbox: true
          },
          {
            id: "Main_Programs.ProvisioningServices",
            caption: "ProvisioningServices",
            leaf: true,
            checkbox: true
          },
          {
            id: "Main_Programs.VersionCheck",
            caption: "VersionCheck",
            leaf: true,
            checkbox: true
          }
        ]
      },
      {
        id: "Root_Module",
        caption: "Root Module",
        expanded: true,
        checkbox: true,
        items: [
          {
            id: "Root_Module.Images",
            caption: "Images",
            leaf: true,
            checkbox: true
          },
          {
            id: "Root_Module.GXNext",
            caption: "GXNext",
            leaf: true,
            checkbox: true
          },
          {
            id: "Root_Module.GeneXusNext",
            caption: "GeneXusNext",
            leaf: true,
            checkbox: true
          },
          {
            id: "Root_Module.Files",
            caption: "Files",
            editable: false,
            leaf: true,
            checkbox: true
          },
          {
            id: "Root_Module.Domain",
            caption: "Domain",
            editable: false,
            leaf: true,
            checkbox: true
          }
        ]
      },
      {
        id: "References",
        caption: "References",
        editable: false,
        checkbox: true
      },
      {
        id: "Customization",
        caption: "Customization",
        expanded: true,
        checkbox: true,
        items: [
          {
            id: "Customization.Files",
            caption: "Files",
            leaf: true,
            checkbox: true
          },
          {
            id: "Customization.Images",
            caption: "Images",
            leaf: true,
            checkbox: true
          }
        ]
      },
      {
        id: "Documentation",
        caption: "Documentation",
        editable: false,
        leaf: true,
        checkbox: true
      }
    ]
  }
];

export const allObjectsIcons = [
  {
    id: "objects",
    caption: "Tree Objects Icons",
    expanded: true,
    leaf: false,
    items: [
      {
        id: "objects-api",
        caption: "API (objects-api)",
        parts: "objects-api",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-attribute",
        caption: "Attribute (objects-attribute)",
        parts: "objects-attribute",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-bg-color",
        caption: "Background Color (objects-bg-color)",
        parts: "objects-bg-color",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-business-process-diagram",
        caption: "Business Process Diagram (objects-business-process-diagram)",
        parts: "objects-business-process-diagram",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-calendars",
        caption: "Calendars (objects-calendars)",
        parts: "objects-calendars",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-category",
        caption: "Category (objects-category)",
        parts: "objects-category",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-conversational-flows",
        caption: "Conversational Flows (objects-conversational-flows)",
        parts: "objects-conversational-flows",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-customization",
        caption: "Customization (objects-customization)",
        parts: "objects-customization",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-dashboard",
        caption: "Dashboard (objects-dashboard)",
        parts: "objects-dashboard",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-data-provider",
        caption: "Data Provider (objects-data-provider)",
        parts: "objects-data-provider",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-data-selector",
        caption: "Data Selector (objects-data-selector)",
        parts: "objects-data-selector",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-data-view",
        caption: "Data View (objects-data-view)",
        parts: "objects-data-view",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-datastore",
        caption: "Datastore (objects-datastore)",
        parts: "objects-datastore",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-datastore-category",
        caption: "Datastore Category (objects-datastore-category)",
        parts: "objects-datastore-category",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-dataview-index",
        caption: "Dataview Index (objects-dataview-index)",
        parts: "objects-dataview-index",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-deployment-unit",
        caption: "Deployment Unit (objects-deployment-unit)",
        parts: "objects-deployment-unit",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-design",
        caption: "Design (objects-design)",
        parts: "objects-design",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-diagram",
        caption: "Diagram (objects-diagram)",
        parts: "objects-diagram",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-document",
        caption: "Document (objects-document)",
        parts: "objects-document",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-document-workflow",
        caption: "Document Workflow (objects-document-workflow)",
        parts: "objects-document-workflow",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-domain",
        caption: "Domain (objects-domain)",
        parts: "objects-domain",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-dso",
        caption: "DSO (objects-dso)",
        parts: "objects-dso",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-environment-no-select",
        caption: "Environment No Select (objects-environment-no-select)",
        parts: "objects-environment-no-select",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-environment-select",
        caption: "Environment Select (objects-environment-select)",
        parts: "objects-environment-select",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-external-object",
        caption: "External Object (objects-external-object)",
        parts: "objects-external-object",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-file",
        caption: "File (objects-file)",
        parts: "objects-file",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-folder",
        caption: "Folder (objects-folder)",
        parts: "objects-folder",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-folder-open",
        caption: "Folder Open (objects-folder-open)",
        parts: "objects-folder-open",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-generator",
        caption: "Generator (objects-generator)",
        parts: "objects-generator",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-generator-category",
        caption: "Generator Category (objects-generator-category)",
        parts: "objects-generator-category",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-image",
        caption: "Image (objects-image)",
        parts: "objects-image",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-knowledge-base",
        caption: "Knowledge Base (objects-knowledge-base)",
        parts: "objects-knowledge-base",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-language",
        caption: "Language (objects-language)",
        parts: "objects-language",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-main-object",
        caption: "Main Object (objects-main-object)",
        parts: "objects-main-object",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-masterpage",
        caption: "Masterpage (objects-masterpage)",
        parts: "objects-masterpage",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-menu",
        caption: "Menu (objects-menu)",
        parts: "objects-menu",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-menubar",
        caption: "Menubar (objects-menubar)",
        parts: "objects-menubar",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-mini-app",
        caption: "Mini App (objects-mini-app)",
        parts: "objects-mini-app",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-module",
        caption: "Module (objects-module)",
        parts: "objects-module",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-module-open",
        caption: "Module Open (objects-module-open)",
        parts: "objects-module-open",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-notification-templates",
        caption: "Notification Templates (objects-notification-templates)",
        parts: "objects-notification-templates",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-object",
        caption: "Object (objects-object)",
        parts: "objects-object",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-offline-database",
        caption: "Offline Database (objects-offline-database)",
        parts: "objects-offline-database",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-orphant-document",
        caption: "Orphant Document (objects-orphant-document)",
        parts: "objects-orphant-document",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-panel-for-sd",
        caption: "Panel For SD (objects-panel-for-sd)",
        parts: "objects-panel-for-sd",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-patterns",
        caption: "Patterns (objects-patterns)",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-procedure",
        caption: "Procedure (objects-procedure)",
        parts: "objects-procedure",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-query",
        caption: "Query (objects-query)",
        parts: "objects-query",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-references",
        caption: "References (objects-references)",
        parts: "objects-references",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-report",
        caption: "Report (objects-report)",
        parts: "objects-report",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-roles",
        caption: "Roles (objects-roles)",
        parts: "objects-roles",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-stencil",
        caption: "Stencil (objects-stencil)",
        parts: "objects-stencil",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-structured-data-type",
        caption: "Structured Data Type (objects-structured-data-type)",
        parts: "objects-structured-data-type",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-subtype-group",
        caption: "Subtype Group (objects-subtype-group)",
        parts: "objects-subtype-group",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-super-app",
        caption: "Super App (objects-super-app)",
        parts: "objects-super-app",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-table",
        caption: "Table (objects-table)",
        parts: "objects-table",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-theme",
        caption: "Theme (objects-theme)",
        parts: "objects-theme",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-theme-for-sd",
        caption: "Theme For SD (objects-theme-for-sd)",
        parts: "objects-theme-for-sd",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-theme-web",
        caption: "Theme Web (objects-theme-web)",
        parts: "objects-theme-web",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-to-be-defined",
        caption: "To Be Defined (objects-to-be-defined)",
        parts: "objects-to-be-defined",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-transaction",
        caption: "Transaction (objects-transaction)",
        parts: "objects-transaction",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-url-rewrite",
        caption: "URL Rewrite (objects-url-rewrite)",
        parts: "objects-url-rewrite",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-version",
        caption: "Version (objects-version)",
        parts: "objects-version",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-web-component",
        caption: "Web Component (objects-web-component)",
        parts: "objects-web-component",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-web-panel",
        caption: "Web Panel (objects-web-panel)",
        parts: "objects-web-panel",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-work-panel",
        caption: "Work Panel (objects-work-panel)",
        parts: "objects-work-panel",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "objects-workflow",
        caption: "Workflow (objects-workflow)",
        parts: "objects-workflow",
        startImgSrc: "--icon-path",
        leaf: true
      }
    ]
  }
];
