import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
  signal,
  ViewEncapsulation
} from "@angular/core";

import { UnanimoBundleOptimized } from "@genexus/unanimo";
import { MercuryBundleOptimized } from "@genexus/mercury";

import { getBundles as getBundlesMercury } from "@genexus/mercury/bundles.js";
import { getBundles as getBundlesUnanimo } from "@genexus/unanimo/bundles.js";

import {
  DesignSystemService,
  MERCURY_BASE_CSS_URL,
  UNANIMO_BASE_CSS_URL
} from "../../services/design-system.service";
import { ThemeModel } from "@genexus/chameleon-controls-library";

@Component({
  selector: "runtime-bundles",
  templateUrl: "./runtime-bundles.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class RuntimeBundlesComponent {
  dsService = inject(DesignSystemService);
  bundles = input<MercuryBundleOptimized[] | UnanimoBundleOptimized[]>([]);
  mercuryThemeModel = computed<ThemeModel>(() =>
    getBundlesMercury(this.bundles(), MERCURY_BASE_CSS_URL, "mercury/")
  );

  unanimoThemeModel = computed<ThemeModel>(() =>
    getBundlesUnanimo(this.bundles(), UNANIMO_BASE_CSS_URL, "unanimo/")
  );
}
