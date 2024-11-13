import {
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
import { bundleMapping, urlMapping } from "./bundles-and-url-mapping";
import { SEOService } from "../services/seo.service";
import { DOCUMENT, isPlatformBrowser, Location } from "@angular/common";
import { getImagePathCallback } from "@genexus/mercury";
import { getNavigationListRoutes } from "./app.routes";
import { ThemeService } from "../services/theme.service";

const MERCURY_UNANIMO_PREFIX_URL_REGEX = /\/(mercury|unanimo)/;
const FRAGMENT_QUERY_PARAMS_URL = /(#.*|\?.*)/;
const COLOR_SCHEME_KEY = "color-scheme";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
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

  themeService = inject(ThemeService);
  seoService = inject(SEOService);

  getImagePathCallback = signal(getImagePathCallback);

  colorSchemeModel = signal<SegmentedControlModel>([
    { id: "dark", caption: "Dark" },
    { id: "light", caption: "Light" }
  ]);
  colorScheme = signal<"dark" | "light">("dark");
  designSystem = signal<"mercury" | "unanimo" | undefined>(undefined);
  designSystemModel = signal<SegmentedControlModel>([
    { id: "mercury", caption: "Mercury" },
    { id: "unanimo", caption: "Unanimo" }
  ]);

  themeModel = computed<ThemeModel>(() =>
    this.designSystem() === "mercury"
      ? { name: "mercury", url: "./assets/css/mercury/all.css" }
      : { name: "unanimo", url: "./assets/css/unanimo/all.css" }
  );

  selectedLink = signal<{ id?: string; link: ItemLink }>({ link: { url: "" } });
  selectedBundle = computed(
    () => bundleMapping[this.selectedLink().id as keyof typeof bundleMapping]
  );
  navigationListModel = computed<NavigationListModel>(() =>
    getNavigationListRoutes(this.designSystem() ?? "mercury")
  );

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
          urlMapping[componentName as keyof typeof urlMapping]
        );
      }
    });

    // Browser
    if (isPlatformBrowser(this.platform)) {
      const colorSchemeStored =
        localStorage.getItem(COLOR_SCHEME_KEY) ??
        (window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light");

      this.colorScheme.set(colorSchemeStored as "dark" | "light");

      effect(() => {
        localStorage.setItem(COLOR_SCHEME_KEY, this.colorScheme());

        if (this.colorScheme() === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
        }
      });
    }

    effect(() => {
      if (this.designSystem()) {
        // The "!" is a WA to avoid Angular's issues with signal type narrowing
        this.themeService.setTheme(this.designSystem()!);
      }
    });
  }

  handleColorSchemeChange = (
    event: ChSegmentedControlRenderCustomEvent<string>
  ) => {
    this.colorScheme.set(event.detail as "dark" | "light");
  };

  handleDesignSystemChange = (
    event: ChSegmentedControlRenderCustomEvent<string>
  ) => {
    this.designSystem.set(event.detail as "mercury" | "unanimo");

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
      queryParamsHandling: "merge" // Remove to replace all query params by provided
    });
  };
}
