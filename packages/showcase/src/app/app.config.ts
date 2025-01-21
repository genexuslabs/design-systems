import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection
} from "@angular/core";
import { provideRouter, withComponentInputBinding } from "@angular/router";

import { routes } from "./app.routes";
import {
  provideClientHydration,
  withEventReplay
} from "@angular/platform-browser";

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(withEventReplay())
  ]
};
