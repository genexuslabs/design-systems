import { Routes } from "@angular/router";
import {
  NavigationListItemModel,
  NavigationListModel
} from "@genexus/chameleon-controls-library";
import {
  COMPONENTS_ROUTES,
  STANDALONE_ROUTES,
  URL_MAPPING,
  UTILITY_CLASSES_ROUTES
} from "./bundles-and-url-mapping";

const childRoutes: Routes = [
  {
    // substring(1) removes the initial "/"
    path: COMPONENTS_ROUTES.ACCORDION.substring(1),
    loadComponent: () =>
      import("./components/accordion/accordion.component").then(
        m => m.AccordionComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.BUTTON.substring(1),
    loadComponent: () =>
      import("./components/button/button.component").then(
        m => m.ButtonComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.CHECKBOX.substring(1),
    loadComponent: () =>
      import("./components/checkbox/checkbox.component").then(
        m => m.CheckboxComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.COMBO_BOX.substring(1),
    loadComponent: () =>
      import("./components/combo-box/combo-box.component").then(
        m => m.ComboBoxComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.DIALOG.substring(1),
    loadComponent: () =>
      import("./components/dialog/dialog.component").then(
        m => m.DialogComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.ICON.substring(1),
    loadComponent: () =>
      import("./components/icon/icon.component").then(m => m.IconComponent)
  },
  {
    path: COMPONENTS_ROUTES.INPUT.substring(1),
    loadComponent: () =>
      import("./components/input/input.component").then(m => m.InputComponent)
  },
  {
    path: COMPONENTS_ROUTES.LABEL.substring(1),
    loadComponent: () =>
      import("./components/label/label.component").then(m => m.LabelComponent)
  },
  {
    path: COMPONENTS_ROUTES.LIST_BOX.substring(1),
    loadComponent: () =>
      import("./components/list-box/list-box.component").then(
        m => m.ListBoxComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.PILLS.substring(1),
    loadComponent: () =>
      import("./components/pills/pills.component").then(m => m.PillsComponent)
  },
  {
    path: COMPONENTS_ROUTES.PROPERTY_GRID.substring(1),
    loadComponent: () =>
      import("./components/property-grid/property-grid.component").then(
        m => m.PropertyGridComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.RADIO_GROUP.substring(1),
    loadComponent: () =>
      import("./components/radio-group/radio-group.component").then(
        m => m.RadioGroupComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.SEARCH.substring(1),
    loadComponent: () =>
      import("./components/search/search.component").then(
        m => m.SearchComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.SLIDER.substring(1),
    loadComponent: () =>
      import("./components/slider/slider.component").then(
        m => m.SliderComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.TAB.substring(1),
    loadComponent: () =>
      import("./components/tab/tab.component").then(m => m.TabComponent)
  },
  {
    path: COMPONENTS_ROUTES.TABULAR_GRID.substring(1),
    loadComponent: () =>
      import("./components/tabular-grid/tabular-grid.component").then(
        m => m.TabularGridComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.TOOLTIP.substring(1),
    loadComponent: () =>
      import("./components/tooltip/tooltip.component").then(
        m => m.TooltipComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.TREE_VIEW.substring(1),
    loadComponent: () =>
      import("./components/tree-view/tree-view.component").then(
        m => m.TreeViewComponent
      )
  },
  {
    path: COMPONENTS_ROUTES.WIDGET.substring(1),
    loadComponent: () =>
      import("./components/widget/widget.component").then(
        m => m.WidgetComponent
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
      import("./introduction/installation/Angular/angular.component").then(
        m => m.InstallationAngularComponent
      )
  },
  {
    path: UTILITY_CLASSES_ROUTES.ELEVATION.substring(1),
    loadComponent: () =>
      import("./utility-classes/elevation/elevation.component").then(
        m => m.ElevationComponent
      )
  },
  {
    path: UTILITY_CLASSES_ROUTES.LAYOUT.substring(1),
    loadComponent: () =>
      import("./utility-classes/layout/layout.component").then(
        m => m.LayoutComponent
      )
  },
  {
    path: UTILITY_CLASSES_ROUTES.SPACING.substring(1),
    loadComponent: () =>
      import("./utility-classes/spacing/spacing.component").then(
        m => m.SpacingComponent
      )
  },
  {
    path: UTILITY_CLASSES_ROUTES.FORM.substring(1),
    loadComponent: () =>
      import("./utility-classes/form/form.component").then(m => m.FormComponent)
  },
  {
    path: UTILITY_CLASSES_ROUTES.TYPOGRAPHY.substring(1),
    loadComponent: () =>
      import("./utility-classes/typography/typography.component").then(
        m => m.TypographyComponent
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
    redirectTo: "mercury/introduction/what-is-mercury",
    pathMatch: "full"
  },
  {
    path: "mercury",
    children: [
      ...childRoutes,
      {
        path: STANDALONE_ROUTES.ICONS.substring(1),
        loadComponent: () =>
          import("./icons/icons.component").then(m => m.IconsComponent)
      },
      {
        path: STANDALONE_ROUTES.GEMINI_MIGRATION.substring(1),
        loadComponent: () =>
          import("./gemini-migration/gemini-migration.component").then(
            m => m.GeminiMigrationComponent
          )
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
        }

        // TODO: Pages for tomorrow
        // {
        //   caption: "Installation",
        //   items: [
        //     {
        //       id: "/introduction/installation/angular",
        //       caption: "Angular",
        //       link: { url: `/${ds}/introduction/installation/angular` }
        //     },
        //     {
        //       id: "/introduction/installation/react",
        //       caption: "React",
        //       link: { url: `/${ds}/introduction/installation/react` }
        //     },
        //     {
        //       id: "/introduction/installation/stencil-js",
        //       caption: "StencilJS",
        //       link: { url: `/${ds}/introduction/installation/stencil-js` }
        //     }
        //   ]
        // }
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
      items: Object.values(COMPONENTS_ROUTES).map(componentRoute =>
        getNavigationListItem(componentRoute, URL_MAPPING[componentRoute], ds)
      )
    },
    {
      caption: "Utility classes",
      items: Object.values(UTILITY_CLASSES_ROUTES).map(utilityClassRoute =>
        getNavigationListItem(
          utilityClassRoute,
          URL_MAPPING[utilityClassRoute],
          ds
        )
      )
    },

    ...(ds === "mercury"
      ? [
          getNavigationListItem(
            STANDALONE_ROUTES.ICONS,
            URL_MAPPING[STANDALONE_ROUTES.ICONS],
            ds
          ),
          getNavigationListItem(
            STANDALONE_ROUTES.GEMINI_MIGRATION,
            URL_MAPPING[STANDALONE_ROUTES.GEMINI_MIGRATION],
            ds
          )
        ]
      : [])
  ] satisfies NavigationListModel;
