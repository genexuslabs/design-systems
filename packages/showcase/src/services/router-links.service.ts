import { computed, inject, Injectable } from "@angular/core";
import { DesignSystemService } from "./design-system.service";
import {
  COMPONENTS_ROUTES,
  STANDALONE_ROUTES,
  UTILITY_CLASSES_ROUTES
} from "../app/bundles-and-url-mapping";

@Injectable({ providedIn: "root" })
export class RouterCommonLinksService {
  dsService = inject(DesignSystemService);

  componentsCheckbox = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.CHECKBOX}`
  );
  componentsComboBox = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.COMBO_BOX}`
  );
  componentsLabel = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.LABEL}`
  );
  componentsIcon = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.ICON}`
  );
  componentsRadioGroup = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.RADIO_GROUP}`
  );
  componentsInput = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.INPUT}`
  );
  componentsTabularGrid = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.TABULAR_GRID}`
  );
  componentsLisBox = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.LIST_BOX}`
  );
  componentsTab = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.TAB}`
  );

  utilsForm = computed(
    () => `/${this.dsService.designSystem()}${UTILITY_CLASSES_ROUTES.FORM}`
  );
  utilsTypography = computed(
    () =>
      `/${this.dsService.designSystem()}${UTILITY_CLASSES_ROUTES.TYPOGRAPHY}`
  );

  icons = computed(
    () => `/${this.dsService.designSystem()}${STANDALONE_ROUTES.ICONS}`
  );
}
