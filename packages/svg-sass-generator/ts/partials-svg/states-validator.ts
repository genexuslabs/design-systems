import Ajv, { ErrorObject } from "ajv";
import { readFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

/**
 * @param description: it returns an array with each missing monochrome color state, on the color states json file.
 */
const allMonochromeStatesExist = (
  statesObject: any
): missingMonochromeState[] => {
  const missingMonochromeStates: missingMonochromeState[] = [];

  const monochromeStates = Object.keys(statesObject["monochrome"]["states"]);

  for (const icon of statesObject["monochrome"]["icons"]) {
    const iconStates = Object.keys(icon.states);
    for (const state of iconStates) {
      if (!monochromeStates.includes(state)) {
        missingMonochromeStates.push({
          info: "Required monochrome state, but not found on monochrome.states",
          category: icon["folder"],
          state: state,
        });
      }
    }
  }

  return missingMonochromeStates;
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
    const missingMonochromeStates = allMonochromeStatesExist(statesObject);
    if (missingMonochromeStates.length) {
      return {
        isValid: false,
        errors: missingMonochromeStates,
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
    | missingMonochromeState[]
    | null
    | undefined;
};

type missingMonochromeState = {
  info: string;
  category: string;
  state: string;
};
