import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  input,
  type Signal,
  ViewEncapsulation
} from "@angular/core";
import { RouterLink, RouterModule } from "@angular/router";
import { CopyCodeComponent } from "../copy-code/copy-code.component";
import { createTemplateForAllLanguages } from "../../services/template-language/create-template";
import {
  ComponentMetadataCodeSnippet,
  ComponentMetadataCodeSnippetBeforeAndAfter
} from "../../common/types";
import { CommonSnippetsComponent } from "../common-snippets/common-snippets.component";

const DEFAULT_TEMPLATE_LANGUAGE = "html";

@Component({
  selector: "code-snippet",
  templateUrl: "./code-snippet.component.html",
  styleUrl: "./code-snippet.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
    RouterModule,
    CopyCodeComponent,
    CommonSnippetsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // Lighter HTML by not adding any extra attribute to emulate the encapsulation
  encapsulation: ViewEncapsulation.None
})
export class CodeSnippetComponent {
  codeSnippet = input<ComponentMetadataCodeSnippet | undefined>();
  codeSnippetBeforeAndAfter = input<
    ComponentMetadataCodeSnippetBeforeAndAfter | undefined
  >();

  actualCodeSnippetToRender = computed(
    () => this.codeSnippet() ?? this.codeSnippetBeforeAndAfter()?.after
  );

  additionalInfoTemplate = computed(
    () =>
      (this.codeSnippet() ?? this.codeSnippetBeforeAndAfter())
        ?.additionalInfoTemplate
  );

  avoidTemplateRender = computed(
    () =>
      (this.codeSnippet() ?? this.codeSnippetBeforeAndAfter())
        ?.avoidTemplateRender
  );

  codeTemplate = computed(() => {
    const codeSnippet = this.codeSnippet();

    return codeSnippet
      ? createTemplateForAllLanguages(
          codeSnippet.template,
          codeSnippet.imports,
          codeSnippet.variables,
          codeSnippet.states,
          codeSnippet.avoidStateImportAndVariablesDisplay
        )
      : undefined;
  });
  codeTemplateBefore = computed(() => {
    const codeSnippet = this.codeSnippetBeforeAndAfter();

    return codeSnippet
      ? createTemplateForAllLanguages(
          codeSnippet.before.template,
          codeSnippet.before.imports,
          codeSnippet.before.variables,
          codeSnippet.before.states,
          codeSnippet.before.avoidStateImportAndVariablesDisplay
        )
      : undefined;
  });
  codeTemplateAfter = computed(() => {
    const codeSnippet = this.codeSnippetBeforeAndAfter();

    return codeSnippet
      ? createTemplateForAllLanguages(
          codeSnippet.after.template,
          codeSnippet.after.imports,
          codeSnippet.after.variables,
          codeSnippet.after.states,
          codeSnippet.after.avoidStateImportAndVariablesDisplay
        )
      : undefined;
  });

  headingLevel = input<2 | 3>(2);

  protected language = computed(() => {
    const codeSnippet = this.codeSnippet();
    return !codeSnippet?.avoidStateImportAndVariablesDisplay &&
      (codeSnippet?.states || codeSnippet?.variables || codeSnippet?.imports)
      ? "ts"
      : DEFAULT_TEMPLATE_LANGUAGE;
  });
  languageBefore = computed(() => {
    const codeSnippet = this.codeSnippetBeforeAndAfter()?.before;
    return !codeSnippet?.avoidStateImportAndVariablesDisplay &&
      (codeSnippet?.states || codeSnippet?.variables || codeSnippet?.imports)
      ? "ts"
      : DEFAULT_TEMPLATE_LANGUAGE;
  });
  languageAfter = computed(() => {
    const codeSnippet = this.codeSnippetBeforeAndAfter()?.after;
    return !codeSnippet?.avoidStateImportAndVariablesDisplay &&
      (codeSnippet?.states || codeSnippet?.variables || codeSnippet?.imports)
      ? "ts"
      : DEFAULT_TEMPLATE_LANGUAGE;
  });

  linkId = computed(
    () => (this.codeSnippet() ?? this.codeSnippetBeforeAndAfter()!).linkId
  );
  title = computed(
    () => (this.codeSnippet() ?? this.codeSnippetBeforeAndAfter()!).title
  );
}
