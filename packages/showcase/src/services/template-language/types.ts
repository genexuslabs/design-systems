export type CodeTemplateLanguages = "Angular" | "React" | "StencilJS";

export type CodeTemplatesByLanguage = Record<CodeTemplateLanguages, string>;

export type ComponentTemplateModel = ComponentTemplateItem[];

export type ComponentTemplateItem =
  | ComponentTemplateItemNode
  | ComponentTemplateItemText;

export type ComponentTemplateType = "component" | "text";

export type ComponentTemplateItemNode = {
  tag: string;
  class?: string;
  properties?: ComponentTemplateItemNodeProperty[];
  events?: ComponentTemplateItemNodeEvent[];
  type?: "component";
  children?: ComponentTemplateModel;
};

export type ComponentTemplateItemText = {
  text: string;
  type: "text";
};

export type ComponentTemplateItemNodeProperty = {
  name: string;
  value: string | number | boolean;
  variable?: boolean;
};

export type ComponentTemplateItemNodeEvent = {
  name: string;
};
