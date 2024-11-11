import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from "@angular/core";

@Component({
  selector: "copy-code",
  templateUrl: "./copy-code.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  host: { ngSkipHydration: "true" },
  styleUrl: "./copy-code.scss"
})
export class CopyCodeComponent {
  value = input<string>("");
  language = input<string>("ts");

  handleCopyMarkup = () => {
    navigator.clipboard.writeText(this.value());
  };
}
