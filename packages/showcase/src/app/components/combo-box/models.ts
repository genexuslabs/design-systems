import type { ComboBoxModel } from "@genexus/chameleon-controls-library";

export const comboBoxModel: ComboBoxModel = [
  { value: "Value 1", caption: "Label for the value 1" },
  {
    value: "Value 2",
    caption: "Always expanded",
    items: [
      { value: "Value 2.1", caption: "Label for the value 2.1" },
      { value: "Value 2.2", caption: "Label for the value 2.2" }
    ]
  },
  {
    value: "Value 3",
    caption: "Disabled",
    disabled: true
  },
  {
    value: "Value 4",
    caption: "Disabled and expanded",
    disabled: true,
    expandable: true,
    expanded: true,
    items: [{ value: "Value 4.1", caption: "Label for the value 4.1" }]
  },
  {
    value: "Value 5",
    caption: "Expandable",
    expandable: true,
    expanded: true,
    items: [
      {
        value: "Value 5.1",
        caption: "Label for the value 5.1"
      }
    ]
  }
];
