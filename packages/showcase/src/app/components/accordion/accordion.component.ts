import { Component } from "@angular/core";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.component";

@Component({
  selector: "components-accordion",
  imports: [RuntimeBundlesComponent],
  templateUrl: "./accordion.component.html",
  host: { class: "main-content" }
})
export class AccordionComponent {}
