import { Routes } from "@angular/router";
import { NavigationListItemModel } from "@genexus/chameleon-controls-library";

const childRoutes: Routes = [
  {
    path: "components/accordion",
    loadComponent: () =>
      import("./components/accordion/accordion.component").then(
        m => m.AccordionComponent
      )
  },
  {
    path: "components/button",
    loadComponent: () =>
      import("./components/button/button.component").then(
        m => m.ButtonComponent
      )
  },
  {
    path: "components/checkbox",
    loadComponent: () =>
      import("./components/checkbox/checkbox.component").then(
        m => m.CheckboxComponent
      )
  },
  {
    path: "components/input",
    loadComponent: () =>
      import("./components/input/input.component").then(m => m.InputComponent)
  },
  {
    path: "components/radio-group",
    loadComponent: () =>
      import("./components/radio-group/radio-group.component").then(
        m => m.RadioGroupComponent
      )
  },
  {
    path: "components/tree-view",
    loadComponent: () =>
      import("./components/tree-view/tree-view.component").then(
        m => m.TreeViewComponent
      )
  },
  {
    path: "utility-classes/elevation",
    loadComponent: () =>
      import("./utility-classes/elevation/elevation.component").then(
        m => m.ElevationComponent
      )
  },
  {
    path: "chameleon-compatibility",
    loadComponent: () =>
      import(
        "./chameleon-compatibility/chameleon-compatibility.component"
      ).then(m => m.ChameleonCompatibilityComponent)
  }
];

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./landing/landing.component").then(m => m.LandingComponent)
  },
  {
    path: "mercury",
    children: [
      ...childRoutes,
      {
        path: "icons",
        loadComponent: () =>
          import("./icons/icons.component").then(m => m.IconsComponent)
      }
    ]
  },
  {
    path: "unanimo",
    children: childRoutes
  },
  {
    // 404
    path: "**",
    loadComponent: () =>
      import("./landing/landing.component").then(m => m.LandingComponent)
  }
];

const getNavigationListItem = <Id extends `/${string}`, Caption extends string>(
  id: Id,
  caption: Caption,
  designSystem: "mercury" | "unanimo"
) =>
  ({
    id: id,
    caption: caption,
    link: { url: `/${designSystem}${id}` }
  }) as const satisfies NavigationListItemModel;

export const getNavigationListRoutes = (ds: "mercury" | "unanimo") => [
  { id: "Home", caption: "Home" },
  getNavigationListItem(
    "/chameleon-compatibility",
    "Chameleon Compatibility",
    ds
  ),
  {
    caption: "Components",
    expanded: true,
    items: [
      getNavigationListItem("/components/accordion", "Accordion", ds),
      getNavigationListItem("/components/button", "Button", ds),
      getNavigationListItem("/components/checkbox", "Checkbox", ds),
      getNavigationListItem("/components/combo-box", "Combo Box", ds),
      getNavigationListItem("/components/dialog", "Dialog", ds),
      getNavigationListItem("/components/dialog", "Dialog", ds),
      getNavigationListItem("/components/input", "Input", ds),
      getNavigationListItem("/components/label", "Label", ds),
      getNavigationListItem("/components/list-box", "List Box", ds),
      getNavigationListItem("/components/pills", "Pills", ds),
      getNavigationListItem("/components/property-grid", "Property Grid", ds),
      getNavigationListItem("/components/radio-group", "Radio Group", ds),
      getNavigationListItem("/components/slider", "Slider", ds),
      getNavigationListItem("/components/tab", "Tab", ds),
      getNavigationListItem("/components/tabular-grid", "Tabular Grid", ds),
      getNavigationListItem("/components/tooltip", "Tooltip", ds),
      getNavigationListItem("/components/tree-view", "Tree View", ds),
      getNavigationListItem("/components/widget", "Widget", ds)
    ]
  },
  {
    caption: "Utility classes",
    items: [
      getNavigationListItem("/utility-classes/elevation", "Elevation", ds),
      getNavigationListItem("/utility-classes/form", "Form", ds),
      getNavigationListItem("/utility-classes/layout", "Layout", ds),
      getNavigationListItem("/utility-classes/spacing", "Spacing", ds),
      getNavigationListItem("/utility-classes/typography", "Typography", ds)
    ]
  },

  ...(ds === "mercury"
    ? [
        getNavigationListItem("/icons", "Icons", ds),
        getNavigationListItem("/gemini-migration", "Gemini Migration", ds)
      ]
    : [])
];
