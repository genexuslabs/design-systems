import { DOCUMENT } from '@angular/common';
import {
  afterNextRender,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  inject,
  signal,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, RouterOutlet } from '@angular/router';
import {
  ChNavigationListRenderCustomEvent,
  ItemLink,
  NavigationListHyperlinkClickEvent,
  NavigationListModel,
  ThemeModel,
} from '@genexus/chameleon-controls-library';
import { bundleMapping } from './bundles-mapping';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  router = inject(Router);
  title = inject(Title);

  colorScheme = signal<'dark' | 'light'>('dark');
  designSystem = signal<'mercury' | 'unanimo'>('mercury');
  themeModel = computed<ThemeModel>(() =>
    this.designSystem() === 'mercury'
      ? { name: 'mercury', url: './assets/css/mercury/all.css' }
      : { name: 'unanimo', url: './assets/css/unanimo/all.css' }
  );

  selectedLink = signal<{ id?: string; link: ItemLink }>({ link: { url: '' } });
  selectedBundle = computed(
    () => bundleMapping[this.selectedLink().id as keyof typeof bundleMapping]
  );
  navigationListModel = signal<NavigationListModel>([
    { id: 'Home', caption: 'Home' },
    {
      caption: 'Components',
      expanded: true,
      items: [
        { id: 'Accordion', caption: 'Accordion', link: { url: '/accordion' } },
        { id: 'Button', caption: 'Button', link: { url: '/button' } },
        { id: 'Checkbox', caption: 'Checkbox', link: { url: '/checkbox' } },
        { id: 'Combo Box', caption: 'Combo Box', link: { url: '/combo-box' } },
        { id: 'Dialog', caption: 'Dialog', link: { url: '/dialog' } },
        { id: 'Input', caption: 'Input', link: { url: '/input' } },
        { id: 'Label', caption: 'Label', link: { url: '/label' } },
        { id: 'List Box', caption: 'List Box', link: { url: '/list-box' } },
        { id: 'Pills', caption: 'Pills', link: { url: '/pills' } },
        {
          id: 'Property Grid',
          caption: 'Property Grid',
          link: { url: '/property-grid' },
        },
        {
          id: 'Radio Group',
          caption: 'Radio Group',
          link: { url: '/radio-group' },
        },
        { id: 'Slider', caption: 'Slider', link: { url: '/slider' } },
        { id: 'Tab', caption: 'Tab', link: { url: '/tab' } },
        {
          id: 'Tabular Grid',
          caption: 'Tabular Grid',
          link: { url: '/tabular-grid' },
        },
        { id: 'Tooltip', caption: 'Tooltip', link: { url: '/tooltip' } },
        { id: 'Tree View', caption: 'Tree View', link: { url: '/tree-view' } },
        { id: 'Widget', caption: 'Widget', link: { url: '/widget' } },
      ],
    },
    {
      caption: 'Utility classes',
      items: [
        { id: 'Elevation', caption: 'Elevation', link: { url: '/elevation' } },
        { id: 'Form', caption: 'Form', link: { url: '/form' } },
        { id: 'Layout', caption: 'Layout', link: { url: '/layout' } },
        { id: 'Spacing', caption: 'Spacing', link: { url: '/spacing' } },
      ],
    },
    {
      id: 'Gemini Migration',
      caption: 'Gemini Migration',
      link: { url: '/gemini-migration' },
    },
  ]);

  constructor() {
    effect(() => {
      this.title.setTitle(this.selectedLink().id!);
    });

    afterNextRender({
      write: () => {
        if (this.colorScheme() === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }

        this.selectedLink.set({
          link: { url: this.router.url },
        });
      },
    });
  }

  handleHyperlinkClick = (
    event: ChNavigationListRenderCustomEvent<NavigationListHyperlinkClickEvent>
  ) => {
    event.preventDefault();
    const itemInfo = event.detail.item;

    this.router.navigate([itemInfo.link!.url]);
    this.selectedLink.set({ id: itemInfo.id, link: itemInfo.link! });
  };
}
