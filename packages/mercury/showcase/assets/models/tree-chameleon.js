const KB_EXPLORER_ORDER = {
  module: 1,
  folder: 2,
  api: 3,
  dso: 3,
  stencil: 3,
  sdPanel: 3,
  masterPanel: 3,
  procedure: 3,
  webPanel: 3,
  globalEvents: 4,
  domain: 5,
  localization: 6,
  files: 7,
  images: 8
};

const FIRST_LEVEL_SIZE = 10;
const SECOND_LEVEL_SIZE = 20;
const THIRD_LEVEL_SIZE = 20;

const fileSystem_root = [
  {
    id: "dev",
    caption: "dev",
    parts: "item--folder",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true
  },
  {
    id: "etc",
    caption: "etc",
    editable: false,
    parts: "item--folder",
    dragDisabled: true,
    dropDisabled: true,
    items: [
      {
        id: "cups",
        caption: "cups",
        parts: "objects-file",
        startImgSrc: "--icon-path",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      },
      {
        id: "httpd",
        caption: "httpd",
        parts: "objects-file",
        startImgSrc: "--icon-path",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      },
      {
        id: "init",
        caption: "init.d",
        parts: "objects-file",
        startImgSrc: "--icon-path",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      }
    ]
  },
  {
    id: "sbin",
    caption: "sbin",
    parts: "item--folder",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true
  },
  {
    id: "tmp",
    caption: "tmp",
    parts: "item--folder",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true
  },
  {
    id: "Users",
    caption: "Users",
    parts: "item--folder",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    items: [
      {
        id: "jdoe",
        caption: "jdoe",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      },
      {
        id: "jmiller",
        caption: "jmiller",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      },
      {
        id: "mysql",
        caption: "mysql",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      }
    ]
  },
  {
    id: "usr",
    caption: "usr",
    parts: "item--folder",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    items: [
      {
        id: "bin",
        caption: "bin",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      },
      {
        id: "lib",
        caption: "lib",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      },
      {
        id: "local",
        caption: "local",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      }
    ]
  },
  {
    id: "var",
    caption: "var",
    parts: "item--folder",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    items: [
      {
        id: "log",
        caption: "log",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      },
      {
        id: "spool",
        caption: "spool",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      },
      {
        id: "yp",
        caption: "yp",
        parts: "item--folder",
        editable: false,
        dragDisabled: true,
        dropDisabled: true,
        leaf: true
      }
    ]
  }
];

export const fileSystemModel = [
  {
    id: "root",
    caption: "/",
    parts: "item--folder",
    editable: false,
    expanded: true,
    dragDisabled: true,
    dropDisabled: true,
    items: fileSystem_root
  }
];

const kbExplorer_root = [
  {
    id: "Main_Programs",
    caption: "Main Programs",
    parts: "objects-category",
    editable: false,
    startImgSrc: "--icon-path",
    dragDisabled: true,
    dropDisabled: true,
    lazy: true,
    order: 0,
    expanded: true
  },
  {
    id: "Root_Module",
    caption: "Root Module",
    editable: false,
    parts: "item--module",
    dragDisabled: true,
    lazy: true,
    order: 1
  },
  {
    id: "References",
    caption: "References",
    parts: "objects-references",
    editable: false,
    startImgSrc: "--icon-path",
    dragDisabled: true,
    dropDisabled: true,
    order: 2
  },
  {
    id: "Customization",
    caption: "Customization",
    parts: "objects-customization",
    editable: false,
    startImgSrc: "--icons-path",
    dragDisabled: true,
    dropDisabled: true,
    lazy: true,
    order: 3,
    expanded: true
  },
  {
    id: "Documentation",
    caption: "Documentation",
    parts: "objects-document",
    editable: false,
    leaf: true,
    startImgSrc: "--icon-path",
    dragDisabled: true,
    dropDisabled: true,
    order: 4
  }
];

export const kbExplorerModel = [
  {
    id: "root",
    caption: "GeneXusNext Develop 1",
    parts: "objects-version",
    editable: false,
    expanded: true,
    leaf: false,
    startImgSrc: "--icon-path",
    dragDisabled: true,
    dropDisabled: true,
    items: kbExplorer_root
  }
];

const kbExplorerModel_MainPrograms = [
  {
    id: "Main_Programs.Prompt",
    caption: "Prompt",
    parts: "objects-panel-for-sd",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    metadata: "Panel",
    order: KB_EXPLORER_ORDER.sdPanel
  },
  {
    id: "Main_Programs.ApiHealthCheck",
    caption: "ApiHealthCheck",
    parts: "objects-api",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.api
  },
  {
    id: "Main_Programs.BackHome",
    caption: "BackHome",
    parts: "objects-web-panel",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.webPanel
  },
  {
    id: "Main_Programs.Login",
    caption: "Login",
    parts: "objects-web-panel",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.webPanel
  },
  {
    id: "Main_Programs.ProvisioningServices",
    caption: "ProvisioningServices",
    parts: "objects-api",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.api
  },
  {
    id: "Main_Programs.VersionCheck",
    caption: "VersionCheck",
    parts: "objects-procedure",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.procedure
  }
];

const kbExplorerModel_RootModule = [
  {
    id: "Root_Module.Images",
    caption: "Images",
    parts: "objects-image",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.images
  },
  {
    id: "Root_Module.GXNext",
    caption: "GXNext",
    parts: "objects-dso",
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.dso
  },
  {
    id: "Root_Module.GeneXusNext",
    caption: "GeneXusNext",
    parts: "objects-dso",
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.dso
  },
  {
    id: "Root_Module.Files",
    caption: "Files",
    parts: "objects-file",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.files
  },
  {
    id: "Root_Module.Domain",
    caption: "Domain",
    parts: "objects-domain",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.domain
  }
];

const kbExplorerModel_Customization = [
  {
    id: "Customization.Files",
    caption: "Files",
    parts: "objects-file",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.files
  },
  {
    id: "Customization.Images",
    caption: "Images",
    parts: "objects-image",
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.images
  },
  {
    id: "Customization.Localization",
    caption: "Localization 1",
    parts: "objects-lenguage",
    dragDisabled: true,
    dropDisabled: true,
    lazy: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.localization
  }
];

const kbExplorerModel_Customization_Localization = [
  {
    id: "Customization.Localization.Arabic",
    caption: "Arabic",
    parts: "objects-lenguage",
    checkbox: true,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.localization
  },
  {
    id: "Customization.Localization.English",
    caption: "English",
    parts: "objects-lenguage",
    checkbox: true,
    checked: true,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.localization
  },
  {
    id: "Customization.Localization.Spanish",
    caption: "Spanish",
    parts: "objects-lenguage",
    checkbox: true,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.localization
  },
  {
    id: "Customization.Localization.Italian",
    caption: "Italian",
    parts: "objects-lenguage",
    checkbox: true,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.localization
  }
];

const kbExplorerModel_RootModule_General = [
  {
    id: "Root_Module.General.Security",
    caption: "Security",
    parts: "item--module",
    order: KB_EXPLORER_ORDER.module
  },
  {
    id: "Root_Module.General.Services",
    caption: "Services",
    parts: "item--module",
    order: KB_EXPLORER_ORDER.module
  },
  {
    id: "Root_Module.General.UI",
    caption: "UI",
    parts: "item--module",
    lazy: true,
    order: KB_EXPLORER_ORDER.module
  },
  {
    id: "Root_Module.General.Domain",
    caption: "Domain",
    parts: "objects-domain",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.domain
  },
  {
    id: "Root_Module.General.GlobalEvents",
    caption: "GlobalEvents",
    parts: "objects-external-object",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.globalEvents
  }
];

const kbExplorerModel_RootModule_General_UI = [
  {
    id: "Root_Module.General.UI.DesignSystem",
    caption: "DesignSystem",
    parts: "item--module",
    order: KB_EXPLORER_ORDER.module
  },
  {
    id: "Root_Module.General.UI.Q2",
    caption: "Q2",
    parts: "item--folder",
    lazy: true,
    order: KB_EXPLORER_ORDER.folder
  },
  {
    id: "Root_Module.General.UI.Popups",
    caption: "Popups",
    parts: "item--module",
    order: KB_EXPLORER_ORDER.module
  },
  {
    id: "Root_Module.General.UI.Stencils",
    caption: "Stencils",
    parts: "item--folder",
    lazy: true,
    order: KB_EXPLORER_ORDER.folder
  },
  {
    id: "Root_Module.General.UI.Domain",
    caption: "Domain",
    parts: "objects-domain",
    editable: false,
    dragDisabled: true,
    dropDisabled: true,
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.domain
  },
  {
    id: "Root_Module.General.UI.Login",
    caption: "Login",
    parts: "item--pending-commit objects-panel-for-sd",
    leaf: true,
    startImgSrc: "--icon-path",
    metadata: "Panel",
    order: KB_EXPLORER_ORDER.sdPanel
  }
];

const kbExplorerModel_RootModule_General_UI_Q2 = [
  {
    id: "Root_Module.General.UI.Q2.ContactUs",
    caption: "ContactUs",
    parts: "objects-panel-for-sd",
    leaf: true,
    startImgSrc: "--icon-path",
    metadata: "Panel",
    order: KB_EXPLORER_ORDER.sdPanel
  },
  {
    id: "Root_Module.General.UI.Q2.ProjectDetail",
    caption: "ProjectDetail",
    parts: "item--pending-commit objects-panel-for-sd",
    leaf: true,
    startImgSrc: "--icon-path",
    metadata: "Panel",
    order: KB_EXPLORER_ORDER.sdPanel
  },
  {
    id: "Root_Module.General.UI.Q2.MyApps",
    caption: "MyApps",
    parts: "objects-panel-for-sd",
    leaf: true,
    startImgSrc: "--icon-path",
    metadata: "Panel",
    order: KB_EXPLORER_ORDER.sdPanel
  }
];

const kbExplorerModel_RootModule_General_UI_Stencils = [
  {
    id: "Root_Module.General.UI.Stencils.StencilPublishProject",
    caption: "StencilPublishProject",
    parts: "objects-stencil",
    leaf: true,
    startImgSrc: "--icon-path",
    order: KB_EXPLORER_ORDER.stencil
  }
];

export const importObjectsModel = [
  {
    id: "Category",
    caption: "Category",
    parts: "objects-category",
    startImgSrc: "--icon-path",
    items: [
      {
        id: "Category.Main_Programs",
        caption: "Main Programs",
        parts: "objects-category",
        startImgSrc: "--icon-path",
        leaf: true
      }
    ]
  },
  {
    id: "Design System",
    caption: "Design System",
    parts: "objects-dso",
    startImgSrc: "--icon-path",
    items: [
      {
        id: "Design_System.ActionGroup",
        caption: "ActionGroup",
        parts: "objects-dso",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Design_System.DynamicActionGroup",
        caption: "DynamicActionGroup",
        parts: "objects-dso",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Design_System.UserControls",
        caption: "UserControls",
        parts: "objects-dso",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Design_System.Dropdown",
        caption: "Dropdown",
        parts: "objects-dso",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Design_System.UnanimoAngularWithoutUserControls",
        caption: "UnanimoAngularWithoutUserControls",
        parts: "objects-dso",
        startImgSrc: "--icon-path",
        leaf: true
      }
    ]
  },
  {
    id: "Module",
    caption: "Module",
    parts: "objects-module",
    startImgSrc: "--icon-path",
    indeterminate: true,
    items: [
      {
        id: "Module.General",
        caption: "General",
        parts: "objects-module",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Module.General.UI",
        caption: "General.UI",
        parts: "objects-module",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Module.General.Services",
        caption: "General.Services",
        parts: "objects-module",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Module.GeneralReporting",
        caption: "GeneralReporting",
        parts: "objects-module",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "Module.GeneXusUnanimo",
        caption: "GeneXusUnanimo",
        parts: "objects-module",
        startImgSrc: "--icon-path",
        checked: false,
        leaf: true
      },
      {
        id: "Module.GeneXus",
        caption: "GeneXus",
        parts: "objects-module",
        startImgSrc: "--icon-path",
        checked: false,
        leaf: true
      }
    ]
  },
  [
    {
      id: "Data Provider",
      caption: "Data Provider",
      parts: "objects-data-provider",
      startImgSrc: "--icon-path",
      items: [
        {
          id: "Data_Provider.General.UI.SidebarItemsDP",
          caption: "General.UI.SidebarItemsDP",
          parts: "objects-data-provider",
          startImgSrc: "--icon-path",
          leaf: true
        }
      ]
    },
    {
      id: "Panel",
      caption: "Panel",
      parts: "objects-panel-for-sd",
      lazy: true,
      startImgSrc: "--icon-path"
    }
  ]
];

const importOBjectsPanelModel = [
  [
    {
      id: "Panel.ActionGroupTests",
      caption: "ActionGroupTests",
      parts: "objects-panel-for-sd",
      startImgSrc: "--icon-path",
      metadata: "Panel",
      leaf: true
    },
    {
      id: "Panel.DropdownTests",
      caption: "DropdownTests",
      parts: "objects-panel-for-sd",
      startImgSrc: "--icon-path",
      metadata: "Panel",
      leaf: true
    }
  ]
];

export const preferencesModel = [
  {
    id: "root",
    caption: "GeneXusNext",
    parts: "objects-knowledge-base",
    startImgSrc: "--icon-path",
    expanded: true,
    items: [
      {
        id: "Environment.GeneXusNext",
        caption: "GeneXusNext Develop 1",
        parts: "objects-version",
        lazy: true,
        startImgSrc: "--icon-path"
      },
      {
        id: "Environment.TeamDev",
        caption: "Team Development",
        parts: "objects-teamdev",
        leaf: true,
        startImgSrc: "--icon-path",
        order: 1
      },
      {
        id: "Environment.Patterns",
        caption: "Patterns",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        order: 2,
        items: [
          {
            id: "Environment.Patterns.ConversationalFlows",
            caption: "Conversational Flows",
            parts: "objects-conversational-flows",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Environment.Patterns.WorkWith",
            caption: "Work With",
            parts: "objects-workwith-for-sd",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Environment.Patterns.WorkWithForWeb",
            caption: "Work With for Web",
            parts: "objects-work-with-web",
            leaf: true,
            startImgSrc: "--icon-path"
          }
        ]
      },
      {
        id: "Environment.Workflow",
        caption: "Workflow",
        parts: "objects-workflow",
        startImgSrc: "--icon-path",
        order: 3,
        items: [
          {
            id: "Environment.Workflow.Roles",
            caption: "Roles",
            parts: "objects-roles",
            leaf: true,
            startImgSrc: "--icon-path",
            order: 0
          },
          {
            id: "Environment.Workflow.Documents",
            caption: "Documents",
            parts: "objects-document-workflow",
            leaf: true,
            startImgSrc: "--icon-path",
            order: 1
          },
          {
            id: "Environment.Workflow.Calendars",
            caption: "Calendars",
            parts: "objects-calendars",
            leaf: true,
            startImgSrc: "--icon-path",
            order: 2
          },
          {
            id: "Environment.Workflow.Notification_Templates",
            caption: "Notification templates",
            parts: "objects-notification-templates",
            leaf: true,
            startImgSrc: "--icon-path",
            order: 3
          }
        ]
      }
    ]
  }
];

const Environment_GeneXusNext_preferencesModel = [
  {
    id: "Environment.GeneXusNext.JavaMySQL",
    caption: "JavaMySQL",
    parts: "objects-java",
    startImgSrc: "--icon-path",
    items: [
      {
        id: "Environment.GeneXusNext.JavaMySQL.Backend",
        caption: "Back end",
        parts: "objects-generator",
        items: [
          {
            id: "Environment.GeneXusNext.JavaMySQL.Backend.DefaultJava",
            caption: "Default (Java)",
            parts: "objects-java",
            startImgSrc: "--icon-path",
            leaf: true,
            order: 0
          },
          {
            id: "Environment.GeneXusNext.JavaMySQL.Backend.DataStores",
            caption: "Data Stores",
            parts: "objects-datastore",
            order: 1,
            items: [
              {
                id: "Environment.GeneXusNext.JavaMySQL.Backend.DataStores.DefaultMySQL",
                caption: "Default (MySQL)",
                parts: "objects-mysql",
                leaf: true,
                startImgSrc: "--icon-path"
              },
              {
                id: "Environment.GeneXusNext.JavaMySQL.Backend.DataStores.GAMMySQL",
                caption: "GAM (MySQL)",
                parts: "objects-mysql",
                leaf: true,
                startImgSrc: "--icon-path",
                order: 1
              }
            ]
          },
          {
            id: "Environment.GeneXusNext.JavaMySQL.Backend.Services",
            caption: "Services",
            parts: "objects-datastore-green",
            leaf: true,
            startImgSrc: "--icon-path",
            order: 2
          }
        ]
      },
      {
        id: "Environment.GeneXusNext.JavaMySQL.Frontend",
        caption: "Front end",
        parts: "objects-sd",
        order: 1,
        items: [
          {
            id: "Environment.GeneXusNext.JavaMySQL.Frontend.WebJava",
            caption: "Web (Java)",
            parts: "objects-java",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Environment.GeneXusNext.JavaMySQL.Frontend.WebAngular",
            caption: "Web (Angular)",
            parts: "objects-angular",
            leaf: true,
            startImgSrc: "--icon-path",
            order: 1
          }
        ]
      },
      {
        id: "Environment.GeneXusNext.JavaMySQL.Deployment",
        caption: "Deployment",
        parts: "objects-deployment-unit",
        order: 2,
        items: [
          {
            id: "Environment.GeneXusNext.JavaMySQL.Deployment.Backend",
            caption: "Backend",
            parts: "objects-deployment-unit",
            leaf: true,
            startImgSrc: "--icon-path"
          },
          {
            id: "Environment.GeneXusNext.JavaMySQL.Deployment.Frontend",
            caption: "Frontend",
            parts: "objects-deployment-unit",
            leaf: true,
            startImgSrc: "--icon-path"
          }
        ]
      }
    ]
  }
];

export const lazyLoadItemsDictionary = {
  root: kbExplorer_root,
  Main_Programs: kbExplorerModel_MainPrograms,
  Root_Module: kbExplorerModel_RootModule,
  Customization: kbExplorerModel_Customization,
  "Customization.Localization": kbExplorerModel_Customization_Localization,
  "Root_Module.General": kbExplorerModel_RootModule_General,
  "Root_Module.General.UI": kbExplorerModel_RootModule_General_UI,
  "Root_Module.General.UI.Q2": kbExplorerModel_RootModule_General_UI_Q2,
  "Root_Module.General.UI.Stencils":
    kbExplorerModel_RootModule_General_UI_Stencils,
  Panel: importOBjectsPanelModel,
  "Environment.GeneXusNext": Environment_GeneXusNext_preferencesModel
};

export const lazyLargeModel = [];

for (let i = 0; i < FIRST_LEVEL_SIZE; i++) {
  lazyLargeModel.push({
    id: "item-" + i,
    caption: "item-" + i,
    parts: "objects-patterns",
    lazy: true,
    leaf: false,
    startImgSrc: "--icon-path",
    items: []
  });
}

export const eagerLargeModel = [];

for (let i = 0; i < FIRST_LEVEL_SIZE; i++) {
  const subEagerLargeModel = [];
  const modelId = "item-" + i;

  for (let j = 0; j < SECOND_LEVEL_SIZE; j++) {
    const subModelId = modelId + "-" + j;
    const subSubEagerLargeModel = [];

    for (let k = 0; k < THIRD_LEVEL_SIZE; k++) {
      const subSubModelId = subModelId + "-" + k;

      subSubEagerLargeModel.push({
        id: subSubModelId,
        caption: subSubModelId,
        parts: "objects-file",
        startImgSrc: "--icon-path",
        leaf: true
      });
    }

    subEagerLargeModel.push({
      id: subModelId,
      caption: subModelId,
      expanded: true,
      leaf: false,
      parts: "objects-knowledge-base",
      startImgSrc: "--icon-path",
      items: subSubEagerLargeModel
    });
  }

  eagerLargeModel.push({
    id: modelId,
    caption: modelId,
    expanded: true,
    leaf: false,
    parts: "objects-patterns",
    startImgSrc: "--icon-path",
    items: subEagerLargeModel
  });
}

const modelLazyUpdated1 = [
  {
    id: "lazy-loaded-1",
    caption: "Lazy Loaded 1 (drag disabled)",
    parts: "objects-patterns",
    startImgSrc: "--icon-path",
    leaf: true,
    checkbox: true,
    dragDisabled: true
  },
  {
    id: "lazy-loaded-2",
    caption: "Lazy Loaded 2 (lazy, drag disabled, drop disabled)",
    parts: "objects-patterns",
    startImgSrc: "--icon-path",
    leaf: false,
    lazy: true,
    checkbox: true,
    dragDisabled: true,
    dropDisabled: true,
    toggleCheckboxes: true
  }
];

const modelLazyUpdated2 = [
  {
    id: "lazy-loaded-3",
    caption: "Lazy Loaded 3 (drag disabled)",
    parts: "objects-patterns",
    startImgSrc: "--icon-path",
    leaf: true,
    checkbox: true,
    dragDisabled: true
  },
  {
    id: "lazy-loaded-4",
    caption: "Lazy Loaded 4 (drag disabled)",
    parts: "objects-patterns",
    startImgSrc: "--icon-path",
    leaf: true,
    checkbox: true,
    dragDisabled: true
  }
];

export const lazyLoadTreeItemsCallback = modelId =>
  new Promise(resolve => {
    let lazyModel =
      modelId === "lazy-loaded-2" ? modelLazyUpdated2 : modelLazyUpdated1;

    if (modelId.startsWith("item-")) {
      lazyModel = [];

      for (let j = 0; j < SECOND_LEVEL_SIZE; j++) {
        const subModelId = modelId + "-" + j;
        const subModelItems = [];

        for (let k = 0; k < THIRD_LEVEL_SIZE; k++) {
          subModelItems.push({
            id: subModelId + "-" + k,
            caption: subModelId + "-" + k,
            parts: "objects-file",
            leaf: true,
            startImgSrc: "--icon-path"
          });
        }

        lazyModel.push({
          id: subModelId,
          caption: subModelId,
          parts: "objects-patterns",
          expanded: true,
          leaf: false,
          startImgSrc: "--icon-path",
          items: subModelItems
        });
      }
    }

    const lazyModelResultFromDictionary = lazyLoadItemsDictionary[modelId];

    if (lazyModelResultFromDictionary) {
      lazyModel = lazyModelResultFromDictionary;
    }

    setTimeout(() => {
      resolve(structuredClone(lazyModel));
    }, 500); // Resolves or rejects after 500ms second
  });

export const disabledItemsModel = [
  {
    id: "number-1",
    caption: "number-1",
    parts: "objects-knowledge-base",
    startImgSrc: "--icon-path",
    leaf: false,
    items: [
      {
        id: "number-1-1",
        caption: "number-1-1",
        class: "ch-tree-view-item--success",
        leaf: false,
        parts: "objects-knowledge-base",
        startImgSrc: "--icon-path",
        items: [
          {
            id: "number-1-1-1",
            caption: "number-1-1-1",
            parts: "objects-knowledge-base",
            startImgSrc: "--icon-path",
            leaf: true
          },
          {
            id: "number-1-1-2",
            caption: "number-1-1-2",
            parts: "objects-knowledge-base",
            startImgSrc: "--icon-path",
            leaf: false,
            items: [
              {
                id: "number-1-1-2-1",
                caption: "number-1-1-2-1",
                parts: "objects-knowledge-base",
                startImgSrc: "--icon-path",
                leaf: false,
                items: [
                  {
                    id: "new-item-added-1",
                    caption: "new-item-added-1",
                    parts: "objects-knowledge-base",
                    startImgSrc: "--icon-path",
                    disabled: true,
                    leaf: true
                  },
                  {
                    id: "new-item-added-2",
                    caption: "new-item-added-2",
                    parts: "objects-knowledge-base",
                    startImgSrc: "--icon-path",
                    disabled: false,
                    leaf: true
                  },
                  {
                    id: "new-item-added-3",
                    caption: "new-item-added-3",
                    parts: "objects-knowledge-base",
                    startImgSrc: "--icon-path",
                    disabled: true,
                    leaf: true
                  },
                  {
                    id: "new-item-added-4",
                    caption: "new-item-added-4",
                    parts: "objects-knowledge-base",
                    startImgSrc: "--icon-path",
                    disabled: false,
                    expanded: true,
                    leaf: false,
                    items: [
                      {
                        id: "new-item-added-4-1",
                        caption: "new-item-added-4-1",
                        parts: "objects-knowledge-base",
                        startImgSrc: "--icon-path",
                        disabled: false,
                        leaf: true
                      },
                      {
                        id: "new-item-added-4-2",
                        caption: "new-item-added-4-2",
                        parts: "objects-knowledge-base",
                        startImgSrc: "--icon-path",
                        disabled: true,
                        expanded: true,
                        leaf: false,
                        items: [
                          {
                            id: "new-item-added-4-2-1",
                            caption: "new-item-added-4-2-1",
                            parts: "objects-knowledge-base",
                            startImgSrc: "--icon-path",
                            disabled: true,
                            expanded: true,
                            leaf: false,
                            items: [
                              {
                                id: "new-item-added-4-2-1-1",
                                caption: "new-item-added-4-2-1-1",
                                parts: "objects-knowledge-base",
                                startImgSrc: "--icon-path",
                                disabled: false,
                                leaf: true
                              },
                              {
                                id: "new-item-added-4-2-1-2",
                                caption: "new-item-added-4-2-1-2",
                                parts: "objects-knowledge-base",
                                startImgSrc: "--icon-path",
                                disabled: false,
                                leaf: true
                              },
                              {
                                id: "new-item-added-4-2-1-3",
                                caption: "new-item-added-4-2-1-3",
                                parts: "objects-knowledge-base",
                                startImgSrc: "--icon-path",
                                disabled: true,
                                leaf: true
                              },
                              {
                                id: "new-item-added-4-2-1-4",
                                caption: "new-item-added-4-2-1-4",
                                parts: "objects-knowledge-base",
                                startImgSrc: "--icon-path",
                                disabled: false,
                                leaf: true
                              }
                            ]
                          },
                          {
                            id: "new-item-added-4-2-2",
                            caption: "new-item-added-4-2-2",
                            parts: "objects-knowledge-base",
                            startImgSrc: "--icon-path",
                            disabled: true,
                            leaf: true
                          }
                        ]
                      }
                    ]
                  },
                  {
                    id: "new-item-added-5",
                    caption: "new-item-added-5",
                    parts: "objects-knowledge-base",
                    startImgSrc: "--icon-path",
                    disabled: true,
                    expanded: true,
                    leaf: false,
                    items: [
                      {
                        id: "new-item-added-5-1",
                        caption: "new-item-added-5-1",
                        parts: "objects-knowledge-base",
                        startImgSrc: "--icon-path",
                        disabled: false,
                        leaf: true
                      },
                      {
                        id: "new-item-added-5-2",
                        caption: "new-item-added-5-2",
                        parts: "objects-knowledge-base",
                        startImgSrc: "--icon-path",
                        disabled: true,
                        leaf: true
                      }
                    ]
                  }
                ]
              },
              {
                id: "number-1-1-2-2",
                caption: "number-1-1-2-2",
                parts: "objects-knowledge-base",
                startImgSrc: "--icon-path",
                leaf: true
              }
            ]
          }
        ]
      },
      {
        id: "number-1-2",
        caption: "number-1-2",
        parts: "objects-knowledge-base",
        startImgSrc: "--icon-path",
        leaf: true
      }
    ]
  },
  {
    id: "number-2",
    caption: "number-2",
    parts: "objects-datastore",
    startImgSrc: "--icon-path",
    leaf: false,
    items: [
      {
        id: "number-2-1",
        caption: "number-2-1",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "number-2-2",
        caption: "number-2-2",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "number-2-3",
        caption: "number-2-3",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        disabled: true,
        leaf: true
      }
    ]
  },
  {
    id: "number-3",
    caption: "number-3",
    parts: "objects-datastore",
    startImgSrc: "--icon-path",
    leaf: false,
    disabled: true,
    expanded: true,
    items: [
      {
        id: "number-3-1",
        caption: "number-3-1",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "number-3-2",
        caption: "number-3-2",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        disabled: true,
        leaf: true
      },
      {
        id: "number-3-3",
        caption: "number-3-3",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        leaf: true
      }
    ]
  }
];

export const simpleModel1 = [
  {
    id: "number-1",
    caption: "number-1 label (always editable)",
    class: "tree-view-item tree-view-item--success",
    parts: "objects-datastore",
    startImgSrc: "--icon-path",
    leaf: false,
    editable: true,
    items: [
      {
        id: "number-1-1",
        caption: "number-1-1 (always editable)",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        leaf: false,
        editable: true,
        items: [
          {
            id: "number-1-1-1",
            caption: "number-1-1-1",
            parts: "objects-knowledge-base",
            startImgSrc: "--icon-path",
            leaf: true
          },
          {
            id: "number-1-1-2",
            caption: "number-1-1-2",
            parts: "objects-knowledge-base",
            startImgSrc: "--icon-path",
            leaf: false,
            items: [
              {
                id: "number-1-1-2-1",
                caption: "number-1-1-2-1 (lazy, drag disabled)",
                parts: "objects-knowledge-base",
                startImgSrc: "--icon-path",
                leaf: false,
                lazy: true,
                checkbox: true,
                dragDisabled: true,
                toggleCheckboxes: true
              },
              {
                id: "number-1-1-2-2",
                caption: "number-1-1-2-2",
                parts: "objects-java",
                startImgSrc: "--icon-path",
                leaf: true
              }
            ]
          }
        ]
      },
      {
        id: "number-1-2",
        caption: "number-1-2",
        parts: "objects-knowledge-base",
        startImgSrc: "--icon-path",
        leaf: true
      }
    ]
  },
  {
    id: "number-2",
    caption: "number-2",
    class: "tree-view-item tree-view-item--custom-image",
    parts: "objects-java",
    startImgSrc: "--icon-path",
    leaf: false,
    items: [
      {
        id: "number-2-1",
        caption: "number-2-1",
        parts: "objects-java",
        startImgSrc: "--icon-path",
        leaf: true
      },
      {
        id: "number-2-2",
        caption: "number-2-2",
        parts: "objects-knowledge-base",
        startImgSrc: "--icon-path",
        leaf: true
      }
    ]
  }
];

export const simpleModel2 = [
  {
    id: "number-a",
    caption: "number-a (always editable)",
    parts: "objects-apple",
    startImgSrc: "--icon-path",
    leaf: true,
    editable: true
  },
  {
    id: "number-b",
    caption: "number-b",
    parts: "objects-file",
    startImgSrc: "--icon-path",
    leaf: false,
    items: [
      {
        id: "number-2.1",
        caption: "number-2.1",
        parts: "objects-patterns",
        startImgSrc: "--icon-path",
        leaf: false,
        items: [
          {
            id: "number-2.1.1",
            caption: "number-2.1.1",
            parts: "objects-java",
            startImgSrc: "--icon-path",
            leaf: false,
            items: [
              {
                id: "number-2.1.1.1",
                caption: "number-2.1.1.1",
                parts: "objects-mysql",
                startImgSrc: "--icon-path",
                leaf: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "number-3",
    caption: "number-3",
    parts: "objects-patterns",
    startImgSrc: "--icon-path",
    leaf: true
  }
];
