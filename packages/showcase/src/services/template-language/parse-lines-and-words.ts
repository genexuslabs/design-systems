export const fromDomAttributeToDomProperty = (attr: string) =>
  attr.replace(/-./g, x => x[1].toUpperCase());

export const insertSpacesAtTheBeginningExceptForTheFirstLine = (
  text: string,
  spaces = 2
) =>
  text
    .split("\n")
    .map((line, index) => (index === 0 ? line : " ".repeat(spaces) + line))
    .join("\n");

export const lineBreakWithIndentation = (indentation: number) =>
  "\n" + " ".repeat(indentation);

export const camelCaseFromKebab = (inputString: string) =>
  inputString
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
