import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { defineCustomElements } from "@genexus/chameleon-controls-library/loader";
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection/index";

import { getImagePathCallbackDefinitions } from "@genexus/mercury";

registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);
defineCustomElements(window);

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
