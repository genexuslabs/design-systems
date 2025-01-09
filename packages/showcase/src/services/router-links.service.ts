import { computed, inject, Injectable } from "@angular/core";
import { DesignSystemService } from "./design-system.service";
import { COMPONENT_ROUTES } from "../app/bundles-and-url-mapping";

@Injectable({ providedIn: "root" })
export class RouterCommonLinksService {
  dsService = inject(DesignSystemService);

  componentsLabel = computed(
    () => `/${this.dsService.designSystem()}${COMPONENT_ROUTES.LABEL}`
  );
  utilsForm = computed(() => `/${this.dsService.designSystem()}/utils/form`);
}
