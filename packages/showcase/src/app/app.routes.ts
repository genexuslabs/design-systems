import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'accordion',
    loadComponent: () =>
      import('./components/accordion/accordion.component').then(
        (m) => m.AccordionComponent
      ),
  },
  {
    path: 'button',
    loadComponent: () =>
      import('./components/button/button.component').then(
        (m) => m.ButtonComponent
      ),
  },
];
