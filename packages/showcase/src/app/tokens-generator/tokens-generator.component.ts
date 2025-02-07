import { Component, Input, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "tokens-generator",
  templateUrl: "./tokens-generator.html",
  imports: [CommonModule],
  styleUrls: ["./tokens-generator.scss"]
})
export class TokensGeneratorComponent implements OnInit {
  @Input() tokens: any = {};
  @Input() mode: string = "Mercury Dark";

  groups: { groupName: string; categories: any[] }[] = [];

  ngOnInit() {
    this.processTokens();
  }

  processTokens() {
    if (!this.tokens || typeof this.tokens !== "object") return;

    this.groups = Object.entries(this.tokens)
      .map(([groupName, groupData]: any) => {
        const modeData = groupData.modes?.[this.mode];
        if (!modeData) return null;

        const categories = Object.entries(modeData).map(
          ([categoryName, categoryData]: any) => {
            const subCategories = Object.entries(categoryData).map(
              ([subCategoryName, subCategoryData]: any) => {
                const items = Object.entries(subCategoryData).map(
                  ([itemName, itemData]: any) => {
                    return {
                      name: `${subCategoryName}-${itemName}`,
                      value: itemData?.$value || "N/A"
                    };
                  }
                );
                return { subCategoryName, items };
              }
            );
            return { categoryName, subCategories };
          }
        );

        return { groupName, categories };
      })
      .filter(Boolean) as any[];
  }

  trackByFn(index: number, item: any): string {
    return item.name || index;
  }
}
