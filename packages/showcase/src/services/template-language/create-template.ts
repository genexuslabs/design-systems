import {
  CodeTemplateLanguages,
  CodeTemplatesByLanguage,
  CodeTemplateState,
  CodeTemplateStates,
  CodeTemplateVariables,
  ComponentTemplateItem,
  ComponentTemplateItemNode,
  ComponentTemplateItemNodeProperty,
  ComponentTemplateItemText,
  ComponentTemplateModel
} from "./types";

const INDENTATION_SIZE = 2; // 2 spaces
const MAX_LINE_WIDTH_FOR_PRETTIER = 80; // 80 characters

const insertSpacesAtTheBeginningExceptForTheFirstLine = (
  text: string,
  spaces = 2
) =>
  text
    .split("\n")
    .map((line, index) => (index === 0 ? line : " ".repeat(spaces) + line))
    .join("\n");

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
    if (property.state) {
      return `${propertyName}="${propertyValue}()"`;
    }

    return property.variable || typeof propertyValue !== "string"
      ? `${propertyName}="${propertyValue}"`
      : `${propertyName}="'${propertyValue}'"`;
  }

  if (codeLanguage === "StencilJS" && property.state) {
    return `${propertyName}={this.#${propertyValue}}`;
  }

  // JSX
  return property.variable || property.state
    ? `${propertyName}={${propertyValue}}`
    : `${propertyName}="${propertyValue}"`;
};

const renderProperties = (
  properties: ComponentTemplateItemNodeProperty[],
  codeLanguage: CodeTemplateLanguages
): string[] =>
  properties.map(property => renderProperty(property, codeLanguage));

const renderTemplate = (
  item: ComponentTemplateItem,
  codeLanguage: CodeTemplateLanguages,
  indentation: number
) => {
  if (typeof item === "string") {
    return item;
  }

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
      typeof firstElement === "string";

    if (onlyHasATextNode) {
      children = firstElement as ComponentTemplateItemText;
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
};

// satisfies Record<ComponentTemplateType, () => string>

const wrapperForImportsAndVariables = {
  Angular: (
    renderedImports: string,
    renderedVariables: string,
    renderedTemplate: string,
    renderedStates: string
  ) => `import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA${renderedStates ? ",\n  signal" : ""}
} from "@angular/core";
${renderedImports ? renderedImports + "\n" : ""} 
@Component({
  selector: "custom-dialog",
  styleUrl: "./custom-dialog.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: \`
    ${renderedTemplate}\`
})
export class CustomDialogComponent {${renderedVariables ? "\n  " + renderedVariables + "\n" : ""}${renderedStates ? "\n  " + renderedStates + "\n" : ""}}`,

  React: (
    renderedImports: string,
    renderedVariables: string,
    renderedTemplate: string,
    renderedStates: string
  ) => `${renderedStates ? 'import { useState } from "react";\n' : ""}${renderedImports ? renderedImports + "\n\n" : ""}${renderedVariables ? renderedVariables + "\n\n" : ""}const CustomDialog = () => {
  ${renderedStates ? renderedStates + "\n\n  " : ""}return (
    <>
      ${renderedTemplate}
    </>
  );
}

export default CustomDialog;`,

  StencilJS: (
    renderedImports: string,
    renderedVariables: string,
    renderedTemplate: string,
    renderedStates: string
  ) =>
    `import { Component, Host } from "@stencil/core";${renderedImports ? "\n" + renderedImports : ""}${renderedVariables ? "\n\n" + renderedVariables : ""}

@Component({
  shadow: true,
  styleUrl: "custom-dialog.scss",
  tag: "custom-dialog"
})
export class CustomDialog {
  ${renderedStates ? renderedStates + "\n\n  " : ""}render() {
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
} as const;

const stateDefinitionByCodeTemplateLanguage = {
  Angular: (state: CodeTemplateState) =>
    `${state.name} = signal<${state.type}>(${insertSpacesAtTheBeginningExceptForTheFirstLine(JSON.stringify(state.value, undefined, 2))});`,

  React: (state: CodeTemplateState) =>
    `const [${state.name}] = useState<${state.type}>(${insertSpacesAtTheBeginningExceptForTheFirstLine(JSON.stringify(state.value, undefined, 2))});`,

  StencilJS: (state: CodeTemplateState) =>
    `#${state.name}: ${state.type} = ${insertSpacesAtTheBeginningExceptForTheFirstLine(JSON.stringify(state.value, undefined, 2))};`
};

const createTemplate = (
  template: ComponentTemplateModel,
  codeLanguage: CodeTemplateLanguages,
  indentation: number,
  imports?: string[],
  variables?: CodeTemplateVariables,
  states?: CodeTemplateStates
): string => {
  const renderedImports = imports ? imports.join("\n") : "";
  const renderedVariables = variables
    ? variables
        .map(entry =>
          codeLanguage === "Angular"
            ? `${entry.name} = ${entry.value};`
            : `const ${entry.name} = ${entry.value};`
        )
        .join(codeLanguage === "Angular" ? "\n  " : "\n")
    : "";

  const renderedStates = states
    ? states
        .map(stateDefinitionByCodeTemplateLanguage[codeLanguage])
        .join("  \n")
    : "";

  const actualIndentation =
    renderedImports || renderedVariables || renderedStates
      ? initialIndentation[codeLanguage]
      : indentation;

  const renderedTemplate = Array.isArray(template)
    ? template
        .map(item => renderTemplate(item, codeLanguage, actualIndentation))
        .join("\n" + " ".repeat(actualIndentation))
    : renderTemplate(template, codeLanguage, actualIndentation);

  return renderedImports || renderedVariables
    ? wrapperForImportsAndVariables[codeLanguage](
        renderedImports,
        renderedVariables,
        renderedTemplate,
        renderedStates
      )
    : renderedTemplate;
};

export const createTemplateForAllLanguages = (
  template: ComponentTemplateModel,
  imports?: string[],
  variables?: CodeTemplateVariables,
  states?: CodeTemplateStates
): CodeTemplatesByLanguage => ({
  Angular: createTemplate(template, "Angular", 0, imports, variables, states),
  React: createTemplate(template, "React", 0, imports, variables, states),
  StencilJS: createTemplate(
    template,
    "StencilJS",
    0,
    imports,
    variables,
    states
  )
});
