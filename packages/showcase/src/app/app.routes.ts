import { Routes } from "@angular/router";

const childRoutes: Routes = [
  {
    path: "accordion",
    loadComponent: () =>
      import("./components/accordion/accordion.component").then(
        m => m.AccordionComponent
      )
  },
  {
    path: "button",
    loadComponent: () =>
      import("./components/button/button.component").then(
        m => m.ButtonComponent
      )
  },
  {
    path: "checkbox",
    loadComponent: () =>
      import("./components/checkbox/checkbox.component").then(
        m => m.CheckboxComponent
      )
  },
  {
    path: "radio-group",
    loadComponent: () =>
      import("./components/radio-group/radio-group.component").then(
        m => m.RadioGroupComponent
      )
  },
  {
    path: "tree-view",
    loadComponent: () =>
      import("./components/tree-view/tree-view.component").then(
        m => m.TreeViewComponent
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
