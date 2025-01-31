import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  inject,
  PLATFORM_ID,
  Renderer2,
  signal
} from "@angular/core";
import {
  ActivatedRoute,
  NavigationStart,
  Router,
  RouterOutlet
} from "@angular/router";
import { DOCUMENT, isPlatformBrowser, Location } from "@angular/common";
import {
  ChEditCustomEvent,
  ChNavigationListRenderCustomEvent,
  ChSegmentedControlRenderCustomEvent,
  ItemLink,
  NavigationListHyperlinkClickEvent,
  NavigationListModel,
  SegmentedControlModel,
  ThemeModel
} from "@genexus/chameleon-controls-library";

// Side effect to define the template render
import "../user-controls/template-render/template-render";

import { RuntimeBundlesComponent } from "../user-controls/runtime-bundles/runtime-bundles.component";
import { getNavigationListRoutes } from "./app.routes";
import { ColorScheme, DesignSystem } from "../common/types";
import { bundleMapping, URL_MAPPING } from "./bundles-and-url-mapping";

import { ColorSchemeService } from "../services/color-scheme.service";
import {
  DesignSystemService,
  MERCURY_BASE_CSS_URL
} from "../services/design-system.service";
import { SEOService } from "../services/seo.service";
import { bundleToHashMappings } from "../../.mercury/bundle-to-hash-mappings";

const MERCURY_UNANIMO_PREFIX_URL_REGEX = /\/(mercury|unanimo)/;
const FRAGMENT_QUERY_PARAMS_URL = /(#.*|\?.*)/;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, RuntimeBundlesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: { ngSkipHydration: "true" }
})
export class AppComponent {
  _document = inject(DOCUMENT);
  renderer2 = inject(Renderer2);
  location = inject(Location);
  platform = inject(PLATFORM_ID);
  router = inject(Router);
  route = inject(ActivatedRoute);

  colorSchemeService = inject(ColorSchemeService);
  dsService = inject(DesignSystemService);
  seoService = inject(SEOService);

  colorSchemeModel = signal<SegmentedControlModel>([
    { id: "dark", caption: "Dark" },
    { id: "light", caption: "Light" }
  ]);
  colorScheme = signal<ColorScheme>("dark");
  designSystem = signal<DesignSystem | undefined>(undefined);
  designSystemModel = signal<SegmentedControlModel>([
    { id: "mercury", caption: "Mercury" },
    { id: "unanimo", caption: "Unanimo" }
  ]);

  selectedLink = signal<{ id?: string; link: ItemLink }>({ link: { url: "" } });
  selectedBundle = computed(
    () => bundleMapping[this.selectedLink().id as keyof typeof bundleMapping]
  );
  navigationListModel = computed<NavigationListModel>(() =>
    getNavigationListRoutes(this.designSystem() ?? "mercury")
  );

  mercuryIconsBundle: ThemeModel = [
    {
      name: "mercury/base/icons",
      url: MERCURY_BASE_CSS_URL + `${bundleToHashMappings["base/icons"]}.css`
    }
  ];

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const urlNoFragment = event.url.replace(FRAGMENT_QUERY_PARAMS_URL, "");
        const componentName = urlNoFragment.replace(
          MERCURY_UNANIMO_PREFIX_URL_REGEX,
          ""
        );

        this.selectedLink.set({
          id: componentName,
          link: { url: urlNoFragment }
        });

        if (event.url.includes("unanimo")) {
          this.designSystem.set("unanimo");
        } else {
          this.designSystem.set("mercury");
        }

        this.seoService.updateTitle(
          URL_MAPPING[componentName as keyof typeof URL_MAPPING]
        );
      }
    });

    // Browser
    if (isPlatformBrowser(this.platform)) {
      // Initialize the color scheme
      this.colorScheme.set(this.colorSchemeService.getColorScheme());

      // Store the new color scheme each time the signal is updated
      effect(() => this.colorSchemeService.setColorScheme(this.colorScheme()));
    }

    effect(() => {
      if (this.designSystem()) {
        // The "!" is a WA to avoid Angular's issues with signal type narrowing
        this.dsService.setDesignSystem(this.designSystem()!);
      }
    });
  }

  handleColorSchemeChange = (
    event: ChSegmentedControlRenderCustomEvent<string>
  ) => {
    this.colorScheme.set(event.detail as ColorScheme);
  };

  copyBundle = () => navigator.clipboard.writeText(this.selectedBundle());

  handleDesignSystemChange = (
    event: ChSegmentedControlRenderCustomEvent<string>
  ) => {
    this.designSystem.set(event.detail as DesignSystem);

    const previousSelectedLink = this.selectedLink();

    this.selectedLink.set({
      id: previousSelectedLink.id,
      link: {
        url: previousSelectedLink.link.url.replace(
          MERCURY_UNANIMO_PREFIX_URL_REGEX,
          "/" + this.designSystem()!
        )
      }
    });

    this.location.replaceState(this.selectedLink().link.url);
  };

  handleHyperlinkClick = (
    event: ChNavigationListRenderCustomEvent<NavigationListHyperlinkClickEvent>
  ) => {
    event.preventDefault();
    const itemInfo = event.detail.item;
    this.router.navigate([itemInfo.link!.url]);
  };

  handleFilterChange = (event: ChEditCustomEvent<string>) => {
    this.router.navigate([], {
      queryParams: { filter: event.detail },
      queryParamsHandling: "merge" // Conserve other query parameters
    });
  };
}
