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
  componentsIcon = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.ICON}`
  );
  componentsInput = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.INPUT}`
  );
  componentsLabel = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.LABEL}`
  );
  componentsLisBox = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.LIST_BOX}`
  );
  componentsRadioGroup = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.RADIO_GROUP}`
  );
  componentsTab = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.TAB}`
  );
  componentsTabularGrid = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.TABULAR_GRID}`
  );
  componentsTree = computed(
    () => `/${this.dsService.designSystem()}${COMPONENTS_ROUTES.TREE_VIEW}`
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
