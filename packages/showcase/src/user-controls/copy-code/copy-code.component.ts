import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  signal
} from "@angular/core";
import { getImagePathCallback } from "@genexus/mercury";

@Component({
  selector: "copy-code",
  templateUrl: "./copy-code.component.html",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrl: "./copy-code.scss"
})
export class CopyCodeComponent {
  value = input<string>("");
  language = input<string>("ts");

  getImagePathCallback = signal(getImagePathCallback);

  handleCopyMarkup = () => {
    navigator.clipboard.writeText(this.value());
  };
}
