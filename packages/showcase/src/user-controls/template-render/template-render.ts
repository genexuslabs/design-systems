import { LitElement, PropertyValues } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  CodeTemplateStates,
  ComponentTemplateModel
} from "../../services/template-language/types";
import { renderItems } from "./renders";

@customElement("template-render")
export class TemplateRender extends LitElement {
  #stateMapping: Map<string, any> | undefined;

  protected override createRenderRoot() {
    return this;
  }

  @property({ attribute: false }) accessor model!: ComponentTemplateModel;

  @property({ attribute: false }) accessor states!:
    | CodeTemplateStates
    | undefined;

  #computeStateMapping = () => {
    this.#stateMapping = undefined;

    if (this.states) {
      this.#stateMapping = new Map();

      this.states.forEach(state => {
        this.#stateMapping!.set(state.name, state.value);
      });
    }
  };

  override connectedCallback(): void {
    super.connectedCallback();
    this.#computeStateMapping();
  }

  protected override willUpdate(changedProperties: PropertyValues): void {
    if (changedProperties.has("states")) {
      this.#computeStateMapping();
    }
  }

  override render() {
    console.log(this.model, this.#stateMapping);

    if (!this.model) {
      return "";
    }

    return renderItems(this.model, this.#stateMapping);
  }
}
