import { LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { ComponentTemplateModel } from "../../services/template-language/types";
import { renderItems } from "./renders";

@customElement("template-render")
export class TemplateRender extends LitElement {
  protected override createRenderRoot() {
    return this;
  }

  @property() accessor model!: ComponentTemplateModel;

  override render() {
    if (!this.model) {
      return "";
    }

    return renderItems(this.model);
  }
}
