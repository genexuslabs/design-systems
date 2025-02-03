import { Component, ViewEncapsulation, inject, input } from "@angular/core";
import { CommonModule } from "@angular/common"; // Import CommonModule
import { Router, RouterLink } from "@angular/router";
import { RouterCommonLinksService } from "../../services/router-links.service";
import { CommonSnippetType } from "./types";

@Component({
  selector: "common-snippets",
  templateUrl: "./common-snippets.component.html",
  styleUrls: ["./common-snippets.component.scss"],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, RouterLink]
})
export class CommonSnippetsComponent {
  metadata = input<string>();
  type = input.required<CommonSnippetType>();

  commonLinks = inject(RouterCommonLinksService);
  router = inject(Router);
}
