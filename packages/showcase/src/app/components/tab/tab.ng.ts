import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RuntimeBundlesComponent } from "../../../user-controls/runtime-bundles/runtime-bundles.ng";

@Component({
  selector: "components-tab",
  templateUrl: "./tab.ng.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RuntimeBundlesComponent, RuntimeBundlesComponent],
  host: { class: "main-content" }
})
export class TabComponent {}
