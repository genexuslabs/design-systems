export type CodeTemplateLanguages = "Angular" | "React" | "StencilJS";

export type CodeTemplateVariables = { name: string; value: string }[];

export type CodeTemplateState = {
  name: string;
  value: string | any[] | Record<string, any> | boolean;
  type: string;
  stateStencil?: boolean;
};
export type CodeTemplateStates = CodeTemplateState[];

export type CodeTemplatesByLanguage = Record<CodeTemplateLanguages, string>;

export type ComponentTemplateModel =
  | ComponentTemplateItem
  | ComponentTemplateItem[];

export type ComponentTemplateItem =
  | ComponentTemplateItemNode
  | ComponentTemplateItemText;

export type ComponentTemplateItemNode = {
  tag: string;
  class?: string;
  properties?: ComponentTemplateItemNodeProperty[];
  events?: ComponentTemplateItemNodeEvent[];
  children?: ComponentTemplateModel;
};

export type ComponentTemplateItemText = string;

export type ComponentTemplateItemNodeProperty = {
  name: string;
  value: string | number | boolean;
  variable?: boolean;
  state?: boolean;
  stateStencil?: boolean;
};

export type ComponentTemplateItemNodeEvent = {
  name: string;
};
