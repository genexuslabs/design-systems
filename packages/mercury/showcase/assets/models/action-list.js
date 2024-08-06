const chatIconPath =
  "https://unpkg.com/@genexus/unanimo@0.10.0/dist/assets/icons/chat.svg";
const editIconPath =
  "https://unpkg.com/@genexus/unanimo@0.10.0/dist/assets/icons/edit.svg";
const deleteIconPath =
  "https://unpkg.com/@genexus/unanimo@0.10.0/dist/assets/icons/delete.svg";

const GxEAIRecentChatsAdditionalInfo = {
  "stretch-start": {
    center: [{ imageSrc: chatIconPath, imageType: "mask" }]
  },
  "stretch-end": {
    center: [
      {
        accessibleName: "Edit caption",
        imageSrc: editIconPath,
        imageType: "mask",
        action: {
          type: "modify",
          showOnHover: true
        }
      },
      {
        accessibleName: "Delete item",
        imageSrc: deleteIconPath,
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
        caption: "item 1.1"
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
