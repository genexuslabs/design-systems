import {
  CodeTemplateLanguages,
  CodeTemplatesByLanguage,
  CodeTemplateVariables,
  ComponentTemplateItemNode,
  ComponentTemplateItemNodeProperty,
  ComponentTemplateItemText,
  ComponentTemplateModel
} from "./types";

const INDENTATION_SIZE = 2; // 2 spaces
const MAX_LINE_WIDTH_FOR_PRETTIER = 80; // 80 characters

const lineBreakWithIndentation = (indentation: number) =>
  "\n" + " ".repeat(indentation);

const camelCaseFromKebab = (inputString: string) =>
  inputString
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

const createTag = (tagName: string, codeLanguage: CodeTemplateLanguages) =>
  codeLanguage === "React" &&
  (tagName.startsWith("ch-") || tagName.startsWith("gxg-"))
    ? camelCaseFromKebab(tagName)
    : tagName;

const renderProperty = (
  property: ComponentTemplateItemNodeProperty,
  codeLanguage: CodeTemplateLanguages
): string => {
  const propertyValue = property.value;

  if (property.name === "class") {
    return codeLanguage === "React"
      ? `className="${propertyValue}"`
      : `class="${propertyValue}"`;
  }

  if (property.name === "id") {
    return `id="${propertyValue}"`;
  }

  if (property.name === "for") {
    return codeLanguage === "Angular"
      ? `for="${propertyValue}"`
      : `htmlFor="${propertyValue}"`;
  }

  if (propertyValue === true) {
    return property.name;
  }

  const propertyName =
    codeLanguage === "Angular" ? `[${property.name}]` : property.name;

  if (codeLanguage === "Angular") {
    return property.variable || typeof propertyValue !== "string"
      ? `${propertyName}="${propertyValue}"`
      : `${propertyName}="'${propertyValue}'"`;
  }

  // JSX
  return property.variable
    ? `${propertyName}={${propertyValue}}`
    : `${propertyName}="${propertyValue}"`;
};

const renderProperties = (
  properties: ComponentTemplateItemNodeProperty[],
  codeLanguage: CodeTemplateLanguages
): string[] =>
  properties.map(property => renderProperty(property, codeLanguage));

const renderTemplate = {
  component: (
    item: ComponentTemplateItemNode,
    codeLanguage: CodeTemplateLanguages,
    indentation: number
  ) => {
    const currentLevelIndentation = lineBreakWithIndentation(indentation);
    const nextLevelIndentation = lineBreakWithIndentation(
      indentation + INDENTATION_SIZE
    );

    const formattedTag = createTag(item.tag, codeLanguage);
    const propertiesWithClass: ComponentTemplateItemNodeProperty[] = [];

    if (item.class) {
      propertiesWithClass.push({ name: "class", value: item.class });
    }
    if (item.properties) {
      propertiesWithClass.push(...item.properties);
    }

    // Example: ['class="input"', 'disabled', 'value="Spider man"']
    const renderedProperties = renderProperties(
      propertiesWithClass,
      codeLanguage
    );

    let children = "";
    let childrenLength = 0;
    let onlyHasATextNode = false;

    // If the children is only a text node, consider its large to check if the
    // template fits in one line

    if (
      item.children &&
      (!Array.isArray(item.children) || item.children.length > 0)
    ) {
      const firstElement = Array.isArray(item.children)
        ? item.children[0]
        : item.children;

      onlyHasATextNode =
        (!Array.isArray(item.children) || item.children.length === 1) &&
        firstElement.type === "text";

      if (onlyHasATextNode) {
        children = (firstElement as ComponentTemplateItemText).text;
        childrenLength = children.length;
      } else {
        children =
          nextLevelIndentation +
          createTemplate(
            item.children,
            codeLanguage,
            indentation + INDENTATION_SIZE
          ) +
          currentLevelIndentation;
      }
    }

    const bindingsFitsInTheSameLine =
      indentation +
        formattedTag.length * 2 +
        // Characters <> and </>
        5 +
        renderedProperties.reduce((acc, prop) => acc + prop.length, 0) +
        // Spaces to separate each property
        renderedProperties.length +
        childrenLength <=
      MAX_LINE_WIDTH_FOR_PRETTIER;

    // Check if the indentation must be applied for the text node
    if (!bindingsFitsInTheSameLine && onlyHasATextNode) {
      children = nextLevelIndentation + children + currentLevelIndentation;
    }

    return bindingsFitsInTheSameLine
      ? `<${formattedTag} ${renderedProperties.join(" ")}>${children}</${formattedTag}>`
      : `<${formattedTag}${nextLevelIndentation}${renderedProperties.join(nextLevelIndentation)}${currentLevelIndentation}>${children}</${formattedTag}>`;
  },
  text: (item: ComponentTemplateItemText) => item.text
};

// satisfies Record<ComponentTemplateType, () => string>

const wrapperForImportsAndVariables = {
  Angular: (
    renderedImports: string,
    renderedVariables: string,
    renderedTemplate: string
  ) => `import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from "@angular/core";
${renderedImports ? renderedImports + "\n" : ""} 
@Component({
  selector: "my-custom-dialog",
  styleUrl: "./my-custom-dialog.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    ${renderedTemplate}\`
}) {${renderedVariables ? "\n  " + renderedVariables + "\n" : ""}}`,

  React: (
    renderedImports: string,
    renderedVariables: string,
    renderedTemplate: string
  ) => `${renderedImports ? renderedImports + "\n\n" : ""}${renderedVariables ? renderedVariables + "\n\n" : ""}const MyCustomDialog = () => {
  return (
    <>
      ${renderedTemplate}
    </>
  );
}

export default MyCustomDialog;`,

  StencilJS: (
    renderedImports: string,
    renderedVariables: string,
    renderedTemplate: string
  ) =>
    `import { Component, Host } from "@stencil/core";${renderedImports ? "\n" + renderedImports : ""}${renderedVariables ? "\n\n" + renderedVariables : ""}

@Component({
  shadow: true,
  styleUrl: "my-custom-dialog.scss",
  tag: "my-custom-dialog"
})
export class MyCustomDialog {
  render() {
    return (
      <Host>
        ${renderedTemplate}
      </Host>
    );
  }
}`
};

const initialIndentation = {
  Angular: 4,
  React: 6,
  StencilJS: 8
};

const createTemplate = (
  template: ComponentTemplateModel,
  codeLanguage: CodeTemplateLanguages,
  indentation: number,
  imports?: string[],
  variables?: CodeTemplateVariables
): string => {
  const renderedImports = imports ? imports.join("\n") : "";
  const renderedVariables = variables
    ? variables
        .map(entry => `const ${entry.name} = ${entry.value};`)
        .join(codeLanguage === "Angular" ? "\n  " : "\n")
    : "";

  const actualIndentation =
    renderedImports || renderedVariables
      ? initialIndentation[codeLanguage]
      : indentation;

  const renderedTemplate = Array.isArray(template)
    ? template
        .map(item =>
          renderTemplate[item.type ?? "component"](
            item as any,
            codeLanguage,
            actualIndentation
          )
        )
        .join("\n" + " ".repeat(actualIndentation))
    : renderTemplate[template.type ?? "component"](
        template as any,
        codeLanguage,
        actualIndentation
      );

  return renderedImports || renderedVariables
    ? wrapperForImportsAndVariables[codeLanguage](
        renderedImports,
        renderedVariables,
        renderedTemplate
      )
    : renderedTemplate;
};

export const createTemplateForAllLanguages = (
  template: ComponentTemplateModel,
  imports?: string[],
  variables?: CodeTemplateVariables
): CodeTemplatesByLanguage => ({
  Angular: createTemplate(template, "Angular", 0, imports, variables),
  React: createTemplate(template, "React", 0, imports, variables),
  StencilJS: createTemplate(template, "StencilJS", 0, imports, variables)
});
