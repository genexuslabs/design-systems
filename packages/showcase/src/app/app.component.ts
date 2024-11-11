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

const MERCURY_UNANIMO_PREFIX_URL_REGEX = /(mercury|unanimo)\//;
const FRAGMENT_URL = /#.*/;
const COLOR_SCHEME_KEY = "color-scheme";

@Component({
  selector: "app-root",
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {
  _document = inject(DOCUMENT);
  renderer2 = inject(Renderer2);
  location = inject(Location);
  platform = inject(PLATFORM_ID);
  router = inject(Router);
  route = inject(ActivatedRoute);
  seoService = inject(SEOService);

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
    () =>
      bundleMapping[this.selectedLink().link.url as keyof typeof bundleMapping]
  );
  navigationListModel = signal<NavigationListModel>([
    { id: "Home", caption: "Home" },
    {
      caption: "Components",
      expanded: true,
      items: [
        { id: "/accordion", caption: "Accordion", link: { url: "/accordion" } },
        { id: "/button", caption: "Button", link: { url: "/button" } },
        { id: "/checkbox", caption: "Checkbox", link: { url: "/checkbox" } },
        { id: "/combo-box", caption: "Combo Box", link: { url: "/combo-box" } },
        { id: "/dialog", caption: "Dialog", link: { url: "/dialog" } },
        { id: "/input", caption: "Input", link: { url: "/input" } },
        { id: "/label", caption: "Label", link: { url: "/label" } },
        { id: "/list-box", caption: "List Box", link: { url: "/list-box" } },
        { id: "/pills", caption: "Pills", link: { url: "/pills" } },
        {
          id: "/property-grid",
          caption: "Property Grid",
          link: { url: "/property-grid" }
        },
        {
          id: "/radio-group",
          caption: "Radio Group",
          link: { url: "/radio-group" }
        },
        { id: "/slider", caption: "Slider", link: { url: "/slider" } },
        { id: "/tab", caption: "Tab", link: { url: "/tab" } },
        {
          id: "/tabular-grid",
          caption: "Tabular Grid",
          link: { url: "/tabular-grid" }
        },
        { id: "/tooltip", caption: "Tooltip", link: { url: "/tooltip" } },
        { id: "/tree-view", caption: "Tree View", link: { url: "/tree-view" } },
        { id: "/widget", caption: "Widget", link: { url: "/widget" } }
      ]
    },
    {
      caption: "Utility classes",
      items: [
        { id: "/elevation", caption: "Elevation", link: { url: "/elevation" } },
        { id: "/form", caption: "Form", link: { url: "/form" } },
        { id: "/layout", caption: "Layout", link: { url: "/layout" } },
        { id: "/spacing", caption: "Spacing", link: { url: "/spacing" } },
        {
          id: "/typography",
          caption: "Typography",
          link: { url: "/typography" }
        }
      ]
    },
    {
      id: "Gemini Migration",
      caption: "Gemini Migration",
      link: { url: "/gemini-migration" }
    }
  ]);

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const componentName = event.url
          .replace(FRAGMENT_URL, "")
          .replace(MERCURY_UNANIMO_PREFIX_URL_REGEX, "");

        this.selectedLink.set({
          id: componentName,
          link: { url: componentName }
        });

        if (event.url.includes("unanimo")) {
          this.designSystem.set("unanimo");
        } else {
          this.designSystem.set("mercury");
        }

        this.seoService.updateTitle(
          urlMapping[
            event.url.replace(
              MERCURY_UNANIMO_PREFIX_URL_REGEX,
              ""
            ) as keyof typeof urlMapping
          ]
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
        console.log("SET KEY", this.colorScheme());
        localStorage.setItem(COLOR_SCHEME_KEY, this.colorScheme());

        if (this.colorScheme() === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.classList.remove("light");
        } else {
          document.documentElement.classList.add("light");
          document.documentElement.classList.remove("dark");
        }
      });

      effect(() => {
        if (!this.designSystem()) {
          return;
        }

        const designSystemLink = document.head.querySelector(
          "[data-design-system]"
        ) as HTMLLinkElement;
        designSystemLink.href = `./assets/css/${this.designSystem()}/all.css`;
      });
    }
    // Server
    else {
      effect(() => {
        if (!this.designSystem()) {
          return;
        }

        const link = this.renderer2.createElement("link");
        link.rel = "stylesheet";
        link.href = `./assets/css/${this.designSystem()}/all.css`;
        this.renderer2.setAttribute(link, "data-design-system", "");
        this.renderer2.appendChild(this._document.head, link);
      });
    }
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

    this.location.replaceState(
      "/" + this.designSystem() + this.selectedLink().link.url
    );
  };

  handleHyperlinkClick = (
    event: ChNavigationListRenderCustomEvent<NavigationListHyperlinkClickEvent>
  ) => {
    event.preventDefault();
    const itemInfo = event.detail.item;
    this.router.navigate([this.designSystem() + "/" + itemInfo.link!.url]);
  };
}
