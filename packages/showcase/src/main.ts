import { bootstrapApplication } from "@angular/platform-browser";
import { appConfig } from "./app/app.config";
import { AppComponent } from "./app/app.component";
import { defineCustomElements } from "@genexus/chameleon-controls-library/loader";
import { setBundleMapping } from "@genexus/mercury/bundles.js";
import { registerMercury } from "@genexus/mercury/register-mercury.js";
import { bundleToHashMappings } from "../.mercury/bundle-to-hash-mappings";

setBundleMapping(bundleToHashMappings);
registerMercury();
defineCustomElements(window);

bootstrapApplication(AppComponent, appConfig).catch(err => console.error(err));
