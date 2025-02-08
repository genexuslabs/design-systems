import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  ViewEncapsulation
} from "@angular/core";

import { DesignSystemService } from "../../services/design-system.service";
import { mercuryCompatibilityTable } from "./mercury-compatibility-table";
import { unanimoCompatibilityTable } from "./unanimo-compatibility-table";

@Component({
  selector: "chameleon-compatibility",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./chameleon-compatibility.ng.html",
  host: { class: "main-content", ngSkipHydration: "true" },
  styleUrl: "./chameleon-compatibility.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  encapsulation: ViewEncapsulation.None
})
export class ChameleonCompatibilityComponent {
  dsService = inject(DesignSystemService);

  compatibilityTable = computed(() => {
    if (!this.dsService.designSystem()) {
      return [];
    }

    return this.dsService.designSystem() === "mercury"
      ? mercuryCompatibilityTable
      : unanimoCompatibilityTable;
  });
}
