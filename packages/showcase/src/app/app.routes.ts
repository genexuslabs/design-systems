import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./landing/landing.component").then(m => m.LandingComponent)
  },
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
    // 404
    path: "**",
    loadComponent: () =>
      import("./landing/landing.component").then(m => m.LandingComponent)
  }
];
