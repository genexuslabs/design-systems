import { Component, Input, ViewEncapsulation, inject } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule
import { Router, RouterLink } from "@angular/router";
import { RouterCommonLinksService } from "../../services/router-links.service";

@Component({
  selector: "common-snippets",
  template: `
    <ng-container [ngSwitch]="type">
      <ng-container *ngSwitchCase="'spacing-body-description'">
        <div class="snippet-container">
          <p class="text-body-regular-s">
            By default, the <em>{{ componentName }}</em> does not include any
            padding around the content. This is a general rule followed by other
            components in the Mercury design system. To add padding, you can use
            any combination of the provided CSS classes designed for this
            purpose. Learn more about the spacing classes on the
            <a class="hyperlink" [routerLink]="commonLinks.utilsSpacing()"
              >spacing documentation page</a
            >.The following example displays the
            <em>{{ componentName }}</em> with padding all around, by applying
            the <code>.spacing-body</code> class.
          </p>
        </div>
      </ng-container>

      <ng-container *ngSwitchCase="'other-snippet'"> ... </ng-container>
    </ng-container>
  `,
  styles: [``],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterLink]
})
export class CommonSnippets {
  @Input() type = "";
  @Input() componentName = "";
  commonLinks = inject(RouterCommonLinksService);
  router = inject(Router);

  handleAction() {
    console.log("Snippet B action triggered!");
  }
}
