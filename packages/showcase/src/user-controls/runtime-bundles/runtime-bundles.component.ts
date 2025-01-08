import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  HostBinding,
  inject,
  input,
  signal,
  ViewEncapsulation
} from "@angular/core";

import type { ThemeModel } from "@genexus/chameleon-controls-library";
import type { UnanimoBundleOptimized } from "@genexus/unanimo";
import type { MercuryBundleOptimized } from "@genexus/mercury";

import { getBundles as getBundlesMercury } from "@genexus/mercury/bundles.js";
import { getBundles as getBundlesUnanimo } from "@genexus/unanimo/bundles.js";

import {
  DesignSystemService,
  MERCURY_BASE_CSS_URL,
  UNANIMO_BASE_CSS_URL
} from "../../services/design-system.service";

@Component({
  selector: "runtime-bundles",
  templateUrl: "./runtime-bundles.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class RuntimeBundlesComponent {
  // Useful to reduce flickering when loading bundles
  @HostBinding("class.data-bundle-loaded") className = false;

  dsService = inject(DesignSystemService);

  avoidFlashOfUnstyledContent = input(false);
  bundles = input<MercuryBundleOptimized[] | UnanimoBundleOptimized[]>([]);

  mercuryThemeModel = computed<ThemeModel>(() =>
    getBundlesMercury(this.bundles(), MERCURY_BASE_CSS_URL, "mercury/")
  );

  unanimoThemeModel = computed<ThemeModel>(() =>
    getBundlesUnanimo(this.bundles(), UNANIMO_BASE_CSS_URL, "unanimo/")
  );

  mercuryThemeLoaded = signal(false);
  unanimoThemeLoaded = signal(false);

  constructor() {
    effect(() => {
      this.className = this.mercuryThemeLoaded() && this.unanimoThemeLoaded();
    });
  }

  handleMercuryThemeLoaded = () => this.mercuryThemeLoaded.set(true);
  handleUnanimoThemeLoaded = () => this.unanimoThemeLoaded.set(true);
}
