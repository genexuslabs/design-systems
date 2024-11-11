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

const MERCURY_UNANIMO_PREFIX_URL_REGEX = /\/(mercury|unanimo)/;
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
    () => bundleMapping[this.selectedLink().id as keyof typeof bundleMapping]
  );
  navigationListModel = computed<NavigationListModel>(() => [
    { id: "Home", caption: "Home" },
    {
      caption: "Components",
      expanded: true,
      items: [
        {
          id: "/components/accordion",
          caption: "Accordion",
          link: { url: `/${this.designSystem()}/components/accordion` }
        },
        {
          id: "/components/button",
          caption: "Button",
          link: { url: `/${this.designSystem()}/components/button` }
        },
        {
          id: "/components/checkbox",
          caption: "Checkbox",
          link: { url: `/${this.designSystem()}/components/checkbox` }
        },
        {
          id: "/components/combo-box",
          caption: "Combo Box",
          link: { url: `/${this.designSystem()}/components/combo-box` }
        },
        {
          id: "/components/dialog",
          caption: "Dialog",
          link: { url: `/${this.designSystem()}/components/dialog` }
        },
        {
          id: "/components/input",
          caption: "Input",
          link: { url: `/${this.designSystem()}/components/input` }
        },
        {
          id: "/components/label",
          caption: "Label",
          link: { url: `/${this.designSystem()}/components/label` }
        },
        {
          id: "/components/list-box",
          caption: "List Box",
          link: { url: `/${this.designSystem()}/components/list-box` }
        },
        {
          id: "/components/pills",
          caption: "Pills",
          link: { url: `/${this.designSystem()}/components/pills` }
        },
        {
          id: "/components/property-grid",
          caption: "Property Grid",
          link: { url: `/${this.designSystem()}/components/property-grid` }
        },
        {
          id: "/components/radio-group",
          caption: "Radio Group",
          link: { url: `/${this.designSystem()}/components/radio-group` }
        },
        {
          id: "/components/slider",
          caption: "Slider",
          link: { url: `/${this.designSystem()}/components/slider` }
        },
        {
          id: "/components/tab",
          caption: "Tab",
          link: { url: `/${this.designSystem()}/components/tab` }
        },
        {
          id: "/components/tabular-grid",
          caption: "Tabular Grid",
          link: { url: `/${this.designSystem()}/components/tabular-grid` }
        },
        {
          id: "/components/tooltip",
          caption: "Tooltip",
          link: { url: `/${this.designSystem()}/components/tooltip` }
        },
        {
          id: "/components/tree-view",
          caption: "Tree View",
          link: { url: `/${this.designSystem()}/components/tree-view` }
        },
        {
          id: "/components/widget",
          caption: "Widget",
          link: { url: `/${this.designSystem()}/components/widget` }
        }
      ]
    },
    {
      caption: "Utility classes",
      items: [
        {
          id: "/utility-classes/elevation",
          caption: "Elevation",
          link: { url: `/${this.designSystem()}/utility-classes/elevation` }
        },
        {
          id: "/utility-classes/form",
          caption: "Form",
          link: { url: `/${this.designSystem()}/utility-classes/form` }
        },
        {
          id: "/utility-classes/layout",
          caption: "Layout",
          link: { url: `/${this.designSystem()}/utility-classes/layout` }
        },
        {
          id: "/utility-classes/spacing",
          caption: "Spacing",
          link: { url: `/${this.designSystem()}/utility-classes/spacing` }
        },
        {
          id: "/utility-classes/typography",
          caption: "Typography",
          link: { url: `/${this.designSystem()}/utility-classes/typography` }
        }
      ]
    },
    {
      id: "/icons",
      caption: "Icons",
      link: { url: `/${this.designSystem()}/icons` }
    },
    ...(this.designSystem() === "mercury"
      ? [
          {
            id: "/gemini-migration",
            caption: "Gemini Migration",
            link: { url: `/mercury/gemini-migration` }
          }
        ]
      : [])
  ]);

  constructor() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        const urlNoFragment = event.url.replace(FRAGMENT_URL, "");
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

    effect(() => {
      console.log(this.selectedLink().id);
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
}
