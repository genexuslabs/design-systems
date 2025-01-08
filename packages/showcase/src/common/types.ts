import { ComponentTemplateModel } from "../services/template-language/types";

export type ColorScheme = "dark" | "light";

export type DesignSystem = "mercury" | "unanimo";

export type ComponentMetadata = {
  title: string;
  description: string;
  codeSnippets: Record<string, ComponentMetadataCodeSnippet>;
};

export type ComponentMetadataCodeSnippet = {
  linkId: string;
  title: string;
  template: ComponentTemplateModel;
};
