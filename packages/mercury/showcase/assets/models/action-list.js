const chatIconPath =
  "https://unpkg.com/@genexus/unanimo@0.10.0/dist/assets/icons/chat.svg";
const editIconPath =
  "https://unpkg.com/@genexus/unanimo@0.10.0/dist/assets/icons/edit.svg";
const deleteIconPath =
  "https://unpkg.com/@genexus/unanimo@0.10.0/dist/assets/icons/delete.svg";

export const withIconsModel = [
  {
    id: "workflow",
    type: "actionable",
    caption: "Workflow",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/workflow" }]
      }
    }
  },
  {
    id: "work-panel",
    type: "actionable",
    caption: "Work Panel",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/work-panel" }]
      }
    }
  },
  {
    id: "webpanel",
    type: "actionable",
    caption: "Webpanel",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/webpanel" }]
      }
    }
  },
  {
    id: "web-component",
    type: "actionable",
    caption: "Web Component",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/web-component" }]
      }
    }
  },
  {
    id: "version",
    type: "actionable",
    caption: "Version",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/version" }]
      }
    }
  },
  {
    id: "url-rewrite",
    type: "actionable",
    caption: "Url Rewrite",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/url-rewrite" }]
      }
    }
  },
  {
    id: "transaction",
    type: "actionable",
    caption: "Transaction",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/transaction" }]
      }
    }
  },
  {
    id: "to-be-defined",
    type: "actionable",
    caption: "To Be Defined",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/to-be-defined" }]
      }
    }
  },
  {
    id: "theme",
    type: "actionable",
    caption: "Theme",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/theme" }]
      }
    }
  },
  {
    id: "theme-web",
    type: "actionable",
    caption: "Theme Web",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/theme-web" }]
      }
    }
  },
  {
    id: "theme-for-sd",
    type: "actionable",
    caption: "Theme For Sd",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/theme-for-sd" }]
      }
    }
  },
  {
    id: "table",
    type: "actionable",
    caption: "Table",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/table" }]
      }
    }
  },
  {
    id: "super-app",
    type: "actionable",
    caption: "Super App",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/super-app" }]
      }
    }
  },
  {
    id: "subtype-group",
    type: "actionable",
    caption: "Subtype Group",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/subtype-group" }]
      }
    }
  },
  {
    id: "structured-data-type",
    type: "actionable",
    caption: "Structured Data Type",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/structured-data-type" }]
      }
    }
  },
  {
    id: "stencil",
    type: "actionable",
    caption: "Stencil",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/stencil" }]
      }
    }
  },
  {
    id: "roles",
    type: "actionable",
    caption: "Roles",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/roles" }]
      }
    }
  },
  {
    id: "report",
    type: "actionable",
    caption: "Report",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/report" }]
      }
    }
  },
  {
    id: "references",
    type: "actionable",
    caption: "References",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/references" }]
      }
    }
  },
  {
    id: "query",
    type: "actionable",
    caption: "Query",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/query" }]
      }
    }
  },
  {
    id: "procedure",
    type: "actionable",
    caption: "Procedure",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/procedure" }]
      }
    }
  },
  {
    id: "patterns",
    type: "actionable",
    caption: "Patterns",
    additionalInformation: {
      "stretch-start": {
        center: [{ imgSrc: "objects/patterns" }]
      }
    }
  }
];

const GxEAIRecentChatsAdditionalInfo = {
  "stretch-start": {
    center: [{ imgSrc: chatIconPath, imageType: "mask" }]
  },
  "stretch-end": {
    center: [
      {
        accessibleName: "Edit caption",
        imgSrc: editIconPath,
        imageType: "mask",
        action: {
          type: "modify",
          showOnHover: true
        }
      },
      {
        accessibleName: "Delete item",
        imgSrc: deleteIconPath,
        imageType: "mask",
        action: {
          type: "remove",
          showOnHover: true
        }
      },
      {
        accessibleName: "Pin item",
        imageType: "mask",
        action: {
          type: "fix"
        }
      }
    ]
  }
};

export const actionListModel = [
  {
    id: "2023 employee contracts",
    type: "actionable",
    caption: "2023 employee contracts",
    additionalInformation: GxEAIRecentChatsAdditionalInfo
  },
  {
    id: "Investors reports",
    type: "actionable",
    caption: "Investors reports",
    additionalInformation: GxEAIRecentChatsAdditionalInfo
  },
  {
    id: "2022 employee contracts",
    type: "actionable",
    caption: "2022 employee contracts",
    additionalInformation: GxEAIRecentChatsAdditionalInfo
  },
  {
    id: "Yesterday",
    type: "group",
    caption: "Yesterday",
    items: [
      {
        id: "Pluto Exploration Contract",
        type: "actionable",
        caption: "Pluto Exploration Contract",
        additionalInformation: GxEAIRecentChatsAdditionalInfo
      },
      {
        id: "Saturn Exploration Contract",
        type: "actionable",
        fixed: true,
        caption: "Saturn Exploration Contract",
        additionalInformation: GxEAIRecentChatsAdditionalInfo
      },
      {
        id: "Mars Exploration Contract",
        type: "actionable",
        caption: "Mars Exploration Contract",
        additionalInformation: GxEAIRecentChatsAdditionalInfo
      }
    ]
  }
];

export const keyboardNavigation = [
  {
    id: "item 1",
    type: "group",
    caption: "item 1",
    expandable: true,
    expanded: true,
    items: [
      {
        id: "item 1.1",
        type: "actionable",
        caption: "item 1.1",
        selected: true,
        additionalInformation: {
          "stretch-end": {
            center: [{ caption: "6.0.0-next.5" }]
          }
        }
      },
      {
        id: "item 1.2",
        type: "actionable",
        caption: "item 1.2"
      },
      {
        id: "item 1.3",
        type: "actionable",
        caption: "item 1.3"
      },
      {
        id: "item 1.4",
        type: "actionable",
        caption: "item 1.4"
      }
    ]
  },
  { type: "separator" },
  {
    id: "item 2",
    type: "group",
    caption: "item 2",
    expandable: true,
    expanded: false,
    items: [
      {
        id: "item 2.1",
        type: "actionable",
        caption: "item 2.1",
        disabled: true
      },
      {
        id: "item 2.2",
        type: "actionable",
        caption: "item 2.2"
      },
      {
        id: "item 2.3",
        type: "actionable",
        caption: "item 2.3",
        disabled: true
      },
      {
        id: "item 2.4",
        type: "actionable",
        caption: "item 2.4"
      }
    ]
  },
  { type: "separator" },
  {
    id: "item 3",
    type: "group",
    caption: "item 3",
    expandable: true,
    expanded: false,
    items: [
      {
        id: "item 3.1",
        type: "actionable",
        caption: "item 3.1",
        disabled: true
      },
      {
        id: "item 3.2",
        type: "actionable",
        caption: "item 3.2"
      },
      {
        id: "item 3.3",
        type: "actionable",
        caption: "item 3.3",
        disabled: true
      },
      {
        id: "item 3.4",
        type: "actionable",
        caption: "item 3.4",
        disabled: true
      }
    ]
  },
  { type: "separator" },
  {
    id: "item 4",
    type: "group",
    caption: "item 4",
    disabled: true,
    expandable: true,
    expanded: false,
    items: [
      {
        id: "item 4.1",
        type: "actionable",
        caption: "item 4.1",
        disabled: true
      },
      {
        id: "item 4.2",
        type: "actionable",
        caption: "item 4.2"
      }
    ]
  },
  { type: "separator" },
  {
    id: "item 5",
    type: "group",
    caption: "item 5",
    items: [
      {
        id: "item 5.1",
        type: "actionable",
        caption: "item 5.1",
        disabled: true
      },
      {
        id: "item 5.2",
        type: "actionable",
        caption: "item 5.2"
      },
      {
        id: "item 5.3",
        type: "actionable",
        caption: "item 5.3",
        disabled: true
      },
      {
        id: "item 5.4",
        type: "actionable",
        caption: "item 5.4",
        disabled: true
      }
    ]
  },
  { type: "separator" },
  {
    id: "item 6",
    type: "group",
    caption: "item 6",
    items: [
      {
        id: "item 6.1",
        type: "actionable",
        caption: "item 6.1",
        disabled: true
      },
      {
        id: "item 6.1",
        type: "actionable",
        caption: "item 6.1",
        disabled: true
      }
    ]
  },
  { type: "separator" },
  {
    id: "item 7",
    type: "actionable",
    caption: "item 7"
  },
  {
    id: "item 8",
    type: "actionable",
    caption: "item 8"
  },
  {
    id: "item 9",
    type: "actionable",
    caption: "item 9"
  },
  {
    id: "item 10",
    type: "group",
    caption: "item 10",
    expandable: true,
    items: [
      {
        id: "item 10.1",
        type: "actionable",
        caption: "item 10.1",
        disabled: true
      },
      {
        id: "item 10.1",
        type: "actionable",
        caption: "item 10.1",
        disabled: true
      }
    ]
  },
  { type: "separator" },
  {
    id: "item 11",
    type: "group",
    caption: "item 11",
    expandable: true,
    expanded: true,
    items: [
      {
        id: "item 11.1",
        type: "actionable",
        caption: "item 11.1"
      },
      {
        id: "item 11.2",
        type: "actionable",
        caption: "item 11.2",
        disabled: true
      }
    ]
  },
  { type: "separator" },
  {
    id: "item 12",
    type: "actionable",
    caption: "item 12"
  },
  {
    id: "item 13",
    type: "actionable",
    caption: "item 13",
    disabled: true
  },
  { type: "separator" },
  {
    id: "item 14",
    type: "group",
    caption: "item 14",
    disabled: true,
    items: [
      {
        id: "item 14.1",
        type: "actionable",
        caption: "item 14.1"
      },
      {
        id: "item 14.1",
        type: "actionable",
        caption: "item 14.1"
      }
    ]
  }
];
