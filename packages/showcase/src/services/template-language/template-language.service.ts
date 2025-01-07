import { Injectable, signal } from "@angular/core";
import { CodeTemplateLanguages } from "./types";

@Injectable({
  providedIn: "root"
})
export class TemplateLanguageService {
  language = signal<CodeTemplateLanguages>("Angular");
}
