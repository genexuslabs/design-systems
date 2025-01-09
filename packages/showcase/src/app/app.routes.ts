import { Routes } from "@angular/router";
import {
  NavigationListItemModel,
  NavigationListModel
} from "@genexus/chameleon-controls-library";
import { COMPONENT_ROUTES, URL_MAPPING } from "./bundles-and-url-mapping";

const childRoutes: Routes = [
  {
    // substring(1) removes the initial "/"
    path: COMPONENT_ROUTES.ACCORDION.substring(1),
    loadComponent: () =>
      import("./components/accordion/accordion.component").then(
        m => m.AccordionComponent
      )
  },
  {
    path: COMPONENT_ROUTES.BUTTON.substring(1),
    loadComponent: () =>
      import("./components/button/button.component").then(
        m => m.ButtonComponent
      )
  },
  {
    path: COMPONENT_ROUTES.CHECKBOX.substring(1),
    loadComponent: () =>
      import("./components/checkbox/checkbox.component").then(
        m => m.CheckboxComponent
      )
  },
  {
    path: COMPONENT_ROUTES.COMBO_BOX.substring(1),
    loadComponent: () =>
      import("./components/combo-box/combo-box.component").then(
        m => m.ComboBoxComponent
      )
  },
  {
    path: COMPONENT_ROUTES.INPUT.substring(1),
    loadComponent: () =>
      import("./components/input/input.component").then(m => m.InputComponent)
  },
  {
    path: COMPONENT_ROUTES.LABEL.substring(1),
    loadComponent: () =>
      import("./components/label/label.component").then(m => m.LabelComponent)
  },
  {
    path: COMPONENT_ROUTES.RADIO_GROUP.substring(1),
    loadComponent: () =>
      import("./components/radio-group/radio-group.component").then(
        m => m.RadioGroupComponent
      )
  },
  {
    path: COMPONENT_ROUTES.SEARCH.substring(1),
    loadComponent: () =>
      import("./components/search/search.component").then(
        m => m.SearchComponent
      )
  },
  {
    path: COMPONENT_ROUTES.SLIDER.substring(1),
    loadComponent: () =>
      import("./components/slider/slider.component").then(
        m => m.SliderComponent
      )
  },
  {
    path: COMPONENT_ROUTES.TREE_VIEW.substring(1),
    loadComponent: () =>
      import("./components/tree-view/tree-view.component").then(
        m => m.TreeViewComponent
      )
  },
  {
    path: "introduction/what-is-mercury",
    loadComponent: () =>
      import("./introduction/what-is/what-is.component").then(
        m => m.WhatIsComponent
      )
  },
  {
    path: "introduction/what-is-unanimo",
    loadComponent: () =>
      import("./introduction/what-is/what-is.component").then(
        m => m.WhatIsComponent
      )
  },
  {
    path: "introduction/installation/angular",
    loadComponent: () =>
      import("./introduction/installation/angular/angular.component").then(
        m => m.InstallationAngularComponent
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

export const getNavigationListRoutes = (ds: "mercury" | "unanimo") =>
  [
    {
      caption: "Introduction",
      items: [
        {
          id: `/introduction/what-is-${ds}`,
          caption: `What is ${ds === "mercury" ? "Mercury" : "Unanimo"}?`,
          link: { url: `/${ds}/introduction/what-is-${ds}` }
        },
        {
          caption: "Installation",
          items: [
            {
              id: "/introduction/installation/angular",
              caption: "Angular",
              link: { url: `/${ds}/introduction/installation/angular` }
            },
            {
              id: "/introduction/installation/react",
              caption: "React",
              link: { url: `/${ds}/introduction/installation/react` }
            },
            {
              id: "/introduction/installation/stencil-js",
              caption: "StencilJS",
              link: { url: `/${ds}/introduction/installation/stencil-js` }
            }
          ]
        }
      ]
    },
    getNavigationListItem(
      "/chameleon-compatibility",
      "Chameleon Compatibility",
      ds
    ),
    {
      caption: "Components",
      expanded: true,
      items: Object.values(COMPONENT_ROUTES).map(componentRoute =>
        getNavigationListItem(componentRoute, URL_MAPPING[componentRoute], ds)
      )
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
  ] satisfies NavigationListModel;
