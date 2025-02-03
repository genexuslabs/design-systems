import {
  CodeTemplateStates,
  CodeTemplateVariables,
  ComponentTemplateModel
} from "../services/template-language/types";
import { CommonSnippetType } from "../user-controls/common-snippets/types";

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
  additionalInfoTemplate?: {
    type: CommonSnippetType;
    metadata: string;
  };
  avoidTemplateRender?: boolean;
  language?: string;
  linkId: string;
  title: string;
  imports?: string[];
  states?: CodeTemplateStates;
  variables?: CodeTemplateVariables;
  template: ComponentTemplateModel;
};

export type ComponentMetadataCodeSnippetBeforeAndAfter = {
  additionalInfoTemplate?: {
    type: CommonSnippetType;
    metadata: string;
  };
  avoidTemplateRender?: boolean;
  linkId: string;
  title: string;
  before: {
    imports?: string[];
    language?: string;
    states?: CodeTemplateStates;
    variables?: CodeTemplateVariables;
    template: ComponentTemplateModel;
  };
  after: {
    imports?: string[];
    language?: string;
    states?: CodeTemplateStates;
    variables?: CodeTemplateVariables;
    template: ComponentTemplateModel;
  };
};
