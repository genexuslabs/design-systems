import { readFile } from "fs/promises";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

// Get the directory of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Adjust the path to the JSON file
const filePath = path.join(__dirname, "tokens-manifest.json");

const main = tokensManifest => {
  // Helper function to construct CSS variable names
  const constructVariableName = (block, element, modifier, tokensManifest) => {
    const {
      prefix,
      // Accessing properties using bracket notation
      "prefix-block-separator": prefixBlockSeparator,
      "block-element-separator": blockElementSeparator,
      "element-modifier-separator": elementModifierSeparator
    } = tokensManifest.metadata;

    // Construct the variable name correctly
    return `${prefix}${prefixBlockSeparator}${block}${blockElementSeparator}${element}${elementModifierSeparator}${modifier}`;
  };

  // Generate SCSS mixins from the manifest
  const generateScssFromManifest = tokensManifest => {
    let scssContent = "";

    // Generate the `border-width` mixin
    scssContent += "@mixin border-width() {\n  // border widths\n";
    const borderWidths = tokensManifest.primitive.border.width;
    for (const key in borderWidths) {
      const variableName = constructVariableName(
        "border",
        "width",
        key,
        tokensManifest
      );
      scssContent += `  ${variableName}: ${borderWidths[key]};\n`;
    }
    scssContent += "}\n\n";

    // Generate the `border-radius` mixin
    scssContent += "@mixin border-radius() {\n  // border radius\n";
    const borderRadius = tokensManifest.primitive.border.radius;
    for (const key in borderRadius) {
      const variableName = constructVariableName(
        "border",
        "radius",
        key,
        tokensManifest
      );
      scssContent += `  ${variableName}: ${borderRadius[key]};\n`;
    }
    scssContent += "}\n";

    return scssContent;
  };

  // Get the SCSS content
  const scssContent = generateScssFromManifest(tokensManifest);

  // Write the SCSS content to a file
  const outputFilePath = path.join(__dirname, "tokens.scss");
  writeFileSync(outputFilePath, scssContent, "utf8");

  console.log("SCSS file generated:", outputFilePath);
};

// Read the JSON file
try {
  const data = await readFile(filePath, "utf8");
  const tokensManifest = JSON.parse(data);

  // Run the main function with the parsed data
  main(tokensManifest);
} catch (err) {
  console.error("Error reading the file:", err);
}
