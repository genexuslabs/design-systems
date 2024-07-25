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
