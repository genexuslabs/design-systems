import {
  CodeTemplateLanguages,
  CodeTemplatesByLanguage,
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
  codeLanguage === "React" && tagName.startsWith("ch-")
    ? camelCaseFromKebab(tagName)
    : tagName;

const renderProperty = (
  property: ComponentTemplateItemNodeProperty,
  codeLanguage: CodeTemplateLanguages
): string => {
  if (property.name === "class") {
    return codeLanguage === "React"
      ? `className="${property.value}"`
      : `class="${property.value}"`;
  }

  if (property.value === true) {
    return property.name;
  }

  const propertyName =
    codeLanguage === "Angular" ? `[${property.name}]` : property.name;
  const propertyValue = property.value;

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

    const bindingsFitsInTheSameLine =
      indentation +
        formattedTag.length * 2 +
        // Characters <> and </>
        5 +
        renderedProperties.reduce((acc, prop) => acc + prop.length, 0) +
        // Spaces to separate each property
        renderedProperties.length <=
      MAX_LINE_WIDTH_FOR_PRETTIER;

    const children =
      item.children && item.children.length > 0
        ? nextLevelIndentation +
          createTemplate(
            item.children,
            codeLanguage,
            indentation + INDENTATION_SIZE
          ) +
          currentLevelIndentation
        : "";

    return bindingsFitsInTheSameLine
      ? `<${formattedTag} ${renderedProperties.join(" ")}>${children}</${formattedTag}>`
      : `<${formattedTag}${nextLevelIndentation}${renderedProperties.join(nextLevelIndentation)}${currentLevelIndentation}>${children}</${formattedTag}>`;
  },
  text: (item: ComponentTemplateItemText) => item.text
};

// satisfies Record<ComponentTemplateType, () => string>

const createTemplate = (
  template: ComponentTemplateModel,
  codeLanguage: CodeTemplateLanguages,
  indentation: number
): string =>
  template
    .map(item =>
      renderTemplate[item.type ?? "component"](
        item as any,
        codeLanguage,
        indentation
      )
    )
    .join("\n" + " ".repeat(indentation));

export const createTemplateForAllLanguages = (
  template: ComponentTemplateModel
): CodeTemplatesByLanguage => ({
  Angular: createTemplate(template, "Angular", 0),
  React: createTemplate(template, "React", 0),
  StencilJS: createTemplate(template, "StencilJS", 0)
});
