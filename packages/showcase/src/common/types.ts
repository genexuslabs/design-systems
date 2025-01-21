import {
  CodeTemplateStates,
  CodeTemplateVariables,
  ComponentTemplateModel
} from "../services/template-language/types";

export type ColorScheme = "dark" | "light";

export type DesignSystem = "mercury" | "unanimo";

export type ComponentMetadata = {
  title: string;
  description: string;
  codeSnippets: Record<string, ComponentMetadataCodeSnippet>;
};

export type ComponentMetadataBeforeAfter = {
  title: string;
  description: string;
  codeSnippets: Record<string, ComponentMetadataCodeSnippetBeforeAndAfter>;
};

export type ComponentMetadataCodeSnippet = {
  linkId: string;
  title: string;
  imports?: string[];
  states?: CodeTemplateStates;
  variables?: CodeTemplateVariables;
  template: ComponentTemplateModel;
};

export type ComponentMetadataCodeSnippetBeforeAndAfter = {
  linkId: string;
  title: string;
  before: {
    imports?: string[];
    states?: CodeTemplateStates;
    variables?: CodeTemplateVariables;
    template: ComponentTemplateModel;
  };
  after: {
    imports?: string[];
    states?: CodeTemplateStates;
    variables?: CodeTemplateVariables;
    template: ComponentTemplateModel;
  };
};
