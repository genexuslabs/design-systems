import { Routes } from "@angular/router";

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
    children: childRoutes
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
