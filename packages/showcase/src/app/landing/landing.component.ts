import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "landing",
  templateUrl: "./landing.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "main-content" },
  imports: []
})
export class LandingComponent {}
