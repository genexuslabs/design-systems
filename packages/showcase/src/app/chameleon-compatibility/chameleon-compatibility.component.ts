import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  signal,
  ViewEncapsulation
} from "@angular/core";
import { DesignSystemService } from "../../services/design-system.service";
import { DesignSystem } from "../../common/types";
import { mercuryCompatibilityTable } from "./mercury-compatibility-table";
import { unanimoCompatibilityTable } from "./unanimo-compatibility-table";

@Component({
  selector: "chameleon-compatibility",
  templateUrl: "./chameleon-compatibility.component.html",
  host: { class: "main-content", ngSkipHydration: "true" },
  styleUrl: "./chameleon-compatibility.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ChameleonCompatibilityComponent {
  designSystem = inject(DesignSystemService);
  theme = signal<DesignSystem | undefined>(undefined);

  compatibilityTable = computed(() => {
    if (!this.theme()) {
      return [];
    }

    return this.theme() === "mercury"
      ? mercuryCompatibilityTable
      : unanimoCompatibilityTable;
  });

  constructor() {
    this.designSystem.theme$.subscribe(newTheme => {
      this.theme.set(newTheme);
    });
  }
}
