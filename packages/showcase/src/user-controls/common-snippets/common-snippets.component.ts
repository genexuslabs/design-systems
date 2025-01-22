import { Component, ViewEncapsulation, inject, input } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule
import { Router, RouterLink } from "@angular/router";
import { RouterCommonLinksService } from "../../services/router-links.service";

@Component({
  selector: "common-snippets",
  templateUrl: "./common-snippets.component.html",
  styleUrls: ["./common-snippets.component.scss"],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterLink]
})
export class CommonSnippets {
  type = input<string>();
  componentName = input<string>();

  commonLinks = inject(RouterCommonLinksService);
  router = inject(Router);
}
