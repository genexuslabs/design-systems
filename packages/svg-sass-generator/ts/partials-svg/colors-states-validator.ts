import Ajv, { ErrorObject } from "ajv";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { monochromeSchema } from "../partials-common/types";

/**
 * @param description: it returns an array with each missing monochrome color state on the color states json file.
 */

/* This is a validation function that validates if every color under monochrome.iconsCategories exists monochrome.colors. It does not check the other way, because it doesn't
matter if a color exists in monochrome.color, that it is not used in monochrome.iconsCategories. 
*/

const allMonochromeColorsExist = (
  statesObject: any
): missingMonochromeColor[] => {
  const missingMonochromeColors: missingMonochromeColor[] = [];
  const monochromeColors = Object.keys(statesObject["monochrome"]["states"]);

  for (const icon of statesObject["monochrome"]["icons"]) {
    const iconStates = Object.keys(icon.states);
    for (const state of iconStates) {
      if (!monochromeColors.includes(state)) {
        missingMonochromeColors.push({
          info: "Required monochrome state, but not found on monochrome.states",
          color: state,
          folder: icon["folder"],
        });
      }
    }
  }

  return missingMonochromeColors;
};

export const validateStatesSchema = (
  statesObject: Object
): validateSchemaReturn => {
  // Load the JSON schema
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  //get multicolor schema
  const __multicolorSchemaPath = path.join(__dirname, "schema-multicolor.json");
  const multicolorSchema = JSON.parse(
    readFileSync(__multicolorSchemaPath, "utf-8")
  );

  //get monochrome schema
  const __monochromeSchemaPath = path.join(__dirname, "schema-monochrome.json");
  const monochromeSchema = JSON.parse(
    readFileSync(__monochromeSchemaPath, "utf-8")
  );

  // Merge schemas
  const mergedSchema = {
    $id: "mergedSchema",
    type: "object",
    properties: {
      multicolor: multicolorSchema.properties.multicolor,
      monochrome: monochromeSchema.properties.monochrome,
    },
    required: ["multicolor", "monochrome"],
  };

  // Create an instance of Ajv (with multicolor)
  const ajv = new Ajv({
    schemas: [mergedSchema],
    allErrors: true,
  });

  // Compile the schema
  const validate = ajv.getSchema("mergedSchema");

  // Validate the JSON data against the schema
  const isValid = validate(statesObject);

  if (isValid) {
    const missingMonochromeColors = allMonochromeColorsExist(statesObject);
    if (missingMonochromeColors.length) {
      return {
        isValid: false,
        errors: missingMonochromeColors,
      };
    } else {
      return {
        isValid: isValid as boolean,
        errors: null,
      };
    }
  } else {
    return {
      isValid: isValid as boolean,
      errors: validate.errors,
    };
  }
};

export type validateSchemaReturn = {
  isValid: boolean;
  errors:
    | ErrorObject<string, Record<string, any>, unknown>[]
    | missingMonochromeColor[]
    | null
    | undefined;
};

type missingMonochromeColor = {
  info: string;
  color: string;
  folder: string;
};
