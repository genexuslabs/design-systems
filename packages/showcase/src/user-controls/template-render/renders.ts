import { html, unsafeStatic } from "lit/static-html.js";
import {
  ComponentTemplateItemNode,
  ComponentTemplateModel
} from "../../services/template-language/types";
import { TemplateResult } from "lit";

const renderNode = (node: ComponentTemplateItemNode): TemplateResult =>
  html`<${unsafeStatic(node.tag)} class=${node.class}>
  ${node.children ? renderItems(node.children) : undefined}
</${unsafeStatic(node.tag)}>`;

export function renderItems(model: ComponentTemplateModel) {
  if (Array.isArray(model)) {
    return model.map(item =>
      typeof item === "string" ? item : renderNode(item)
    );
  }

  return typeof model === "string" ? model : renderNode(model);
}
