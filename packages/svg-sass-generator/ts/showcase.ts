import { glob } from "glob";
import { readFileSync } from "fs";
//import sass from "sass";
import * as sass from "sass";
import { join } from "path";
import cheerio from "cheerio";
import { processMulticolorFigures } from "./partials-svg/process-multicolor-figures.js";
import { saveSvgOnDisk } from "./partials-svg/utilities.js";
import { RED, RESET_COLOR } from "./partials-common/utilities.js";

//Directories
const SRC_SASS_FOLDER = await process.argv[2];
const OUTPUT_DIRECTORY = await process.argv[3];
const SASS_FILE_NAME = "svg-generator-icons-lists.scss";

const scssFilePath = join(SRC_SASS_FOLDER, SASS_FILE_NAME);
const scssResult = sass.compile(scssFilePath, { style: "expanded" });
const cssResultString = scssResult["css"].toString();

console.log("cssResultString", cssResultString);
