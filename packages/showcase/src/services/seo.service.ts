import { inject, Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: "root"
})
export class SEOService {
  title = inject(Title);
  meta = inject(Meta);

  updateTitle = (title: string) => {
    this.title.setTitle(title);
  };

  updateDescription = (desc: string) => {
    this.meta.updateTag({ name: "description", content: desc });
  };
}
