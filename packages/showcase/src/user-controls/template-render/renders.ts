import { html, unsafeStatic } from "lit/static-html.js";
import {
  ComponentTemplateItem,
  ComponentTemplateItemNode,
  ComponentTemplateItemNodeProperty,
  ComponentTemplateModel
} from "../../services/template-language/types";
import { TemplateResult } from "lit";

import { spreadProps } from "@open-wc/lit-helpers";

const fromPropertiesToObject = (
  properties: ComponentTemplateItemNodeProperty[] | undefined,
  stateMapping: Map<string, any> | undefined
) => {
  if (!properties) {
    return undefined;
  }
  const result: any = {};

  for (let index = 0; index < properties.length; index++) {
    const property = properties[index];

    if (property.variable && typeof property.value === "string") {
      if (!stateMapping) {
        console.error(
          `The property "${property.name}" is a variable, but the there is not "states" member in the template definition to map its value`
        );
        return;
      }

      // if (typeof property.value !== "string") {
      //   throw `The property "${property.name}" is a state, but the there is not "states" property in the template definition to map its value`
      // }

      const actualValue = stateMapping.get(property.value);

      if (!actualValue) {
        console.error(
          `The property "${property.name}" is a variable, but the there is the "states" member in the template definition does not have a valid map for the property value (${property.value})`
        );
        return;
      }

      result[property.name] = actualValue;
    } else {
      result[property.name] = property.value;
    }
  }

  return spreadProps(result);
};

const renderNode = (
  node: ComponentTemplateItemNode,
  stateMapping: Map<string, any> | undefined
): TemplateResult =>
  html`<${unsafeStatic(node.tag)} class=${node.class} ${fromPropertiesToObject(node.properties, stateMapping)}>
  ${renderItems(node.children, stateMapping)}
</${unsafeStatic(node.tag)}>`;

const renderItem = (
  item: ComponentTemplateItem,
  stateMapping: Map<string, any> | undefined
) => (typeof item === "string" ? item : renderNode(item, stateMapping));

export function renderItems(
  model: ComponentTemplateModel | undefined,
  stateMapping: Map<string, any> | undefined
) {
  if (!model) {
    return undefined;
  }

  return Array.isArray(model)
    ? model.map(item => renderItem(item, stateMapping))
    : renderItem(model, stateMapping);
}
