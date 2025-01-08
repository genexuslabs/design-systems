import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "installation-angular",
  templateUrl: "./angular.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: "main-content" }
})
export class InstallationAngularComponent {}
