import { glob } from "glob";
import { readFileSync, writeFile, existsSync, mkdirSync, rmSync } from "fs";
import * as path from "path";
import { dirname, basename, join } from "path";
import { optimize } from "svgo";
import * as cheerio from "cheerio";

const REGEX_USED_VARS = new RegExp("--i\\d\\d", "g");
const REGEX_REMOVE_VARS = new RegExp("--i\\d\\d:[^;]+;", "g");
const SRC_DIRECTORY = await process.argv[2];
const OUTPUT_DIRECTORY = await process.argv[3];
const MULTICOLOR_TEMPLATE_SVG = await process.argv[4];
const MONOCHROME_TEMPLATE_SVG = await process.argv[5];
const MONOCHROME_STATES_FILE = process.argv[6];

const SVG_FIGURES = [
  "rect",
  "circle",
  "ellipse",
  "line",
  "path",
  "polygon",
  "polyline"
];

const MULTICOLOR_TEMPLATE = readAllTextFile(MULTICOLOR_TEMPLATE_SVG);
const MONOCHROME_TEMPLATE = readAllTextFile(MONOCHROME_TEMPLATE_SVG);

const files = await glob(`${SRC_DIRECTORY}/**/*.svg`);
const statesJson = getStatesJson();

//ch is for Cheerio
let ch;

clearOutputDir();

files.forEach(file => {
  processSvg(file, readAllTextFile(file), getOutputPaths(file));
});

/**
 * @description It removes the OUTPUT_DIR, and it then creates the folder.
 */
function clearOutputDir() {
  rmSync(OUTPUT_DIRECTORY, { recursive: true, force: true }, err => {
    if (err) {
      throw err;
    }
  });
}

function getStatesJson() {
  try {
    const statesJson = readFileSync(`./${MONOCHROME_STATES_FILE}`, "utf8");
    return JSON.parse(statesJson);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(
        `states.json not found in /${SRC_DIRECTORY}. All states will be generated for every icon.`
      );
    } else {
      console.error(
        `Error reading ${SRC_DIRECTORY}/states.json:`,
        error.message
      );
    }
  }
}

function readAllTextFile(file) {
  try {
    return readFileSync(file, "utf8");
  } catch (err) {
    throw err;
  }
}

function getOutputPaths(file) {
  const categoryFolder = basename(dirname(file));
  const folder = join(OUTPUT_DIRECTORY, categoryFolder);
  const directoryLight = join(folder, "light");
  const directoryDark = join(folder, "dark");
  const fileName = basename(file);

  if (!existsSync(directoryLight)) {
    mkdirSync(directoryLight, { recursive: true });
  }
  if (!existsSync(directoryDark)) {
    mkdirSync(directoryDark, { recursive: true });
  }

  return {
    light: join(directoryLight, fileName),
    dark: join(directoryDark, fileName)
  };
}

function processSvg(path, data, output) {
  ch = cheerio.load(data, { xmlMode: true });
  const chSvg = ch("svg");
  //const contents = chSvg.contents();
  const size = chSvg.attr("viewBox");
  const width = size.split(" ")[2];
  const height = size.split(" ")[3];
  const content = parseContent(chSvg);
  const templateInfo = getTemplate(path);
  const template = templateInfo["template"];
  const states = templateInfo["states"];

  let svg = template;

  if (states !== undefined) {
    //only for monochrome icons. states is defined only for monochrome icons.
    svg = removeUnusedStates(svg, states);
  }

  svg = setSize(svg, width, height);
  svg = setContent(svg, content);
  svg = setX(svg, width, states);

  if (states === undefined) {
    //only for multicolor icons.
    svg = removeUnusedVars(svg, content, path);
  }

  writeAllTextFile(output.light, compressSvg(setColorScheme(svg, "light")));
  writeAllTextFile(output.dark, compressSvg(setColorScheme(svg, "dark")));
}

/**
 * @description it removes the unused styles, views and uses from the svg. This is only for the monochrome icons. The list of states for every icon is defined on states-monochrome.json
 */
function removeUnusedStates(template, states) {
  const templateHtml = ch.load(template, null, false);

  for (const state in states) {
    const selected = states[state];

    if (!selected) {
      templateHtml(`style[data-state="${state}"]`).remove();
      templateHtml(`view[id="${state}"]`).remove();
      templateHtml(`use[data-state="${state}"]`).remove();
    }
  }

  return templateHtml.html();
}

function getTemplate(iconPath) {
  if (statesJson) {
    //states json is used for coloring monochrome icons
    let iconPathArray = iconPath.split(path.sep);
    const iconCategory = iconPathArray[iconPathArray.length - 2];
    const iconName = iconPathArray[iconPathArray.length - 1].split(".")[0];

    let categoryFound = false;
    let iconFound = false;
    let category;
    let iconValue;
    for (let cat in statesJson) {
      if (cat === iconCategory) {
        categoryFound = true;
        category = cat;
        break;
      }
    }
    if (categoryFound) {
      for (let icon in statesJson[category]) {
        if (icon === iconName) {
          iconFound = true;
          iconValue = icon;
          break;
        }
      }
    }
    if (iconFound) {
      return {
        template: MONOCHROME_TEMPLATE,
        states: statesJson[category][iconValue]["states"]
      };
    }
    return {
      template: MULTICOLOR_TEMPLATE,
      states: undefined
    };
  }
}

function getIconName(fileNameExtension) {
  // Find the position of the last dot (.)
  const dotIndex = fileNameExtension.lastIndexOf(".");
  // If dotIndex is greater than 0, return the substring before the last dot
  if (dotIndex > 0) {
    const fileName = fileNameExtension.slice(0, dotIndex);
    return fileName;
  }
  // If no dot is found or it's the first character, return the original string
  return fileNameExtension;
}

function getIconStates(stateObj, iconPath, i = 0) {
  // i has to be the index of the category folder in the path, or the icon name.

  const iconCategory = iconPath[0];
  const iconName = iconPath[1];

  let categoryFound = false;
  for (let cat in stateObj) {
    if (cat === iconCategory) {
      categoryFound = true;
      break;
    }
  }
  if (categoryFound) {
    let iconFound = false;
    for (let icon in stateObj[iconCategory]) {
      if (icon === iconName) {
        iconFound = true;
        break;
      }
    }
    if (iconFound) {
      return stateObj[iconCategory][iconName].states;
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
}

function setSize(svg, width, height) {
  return svg.replaceAll("$width$", width).replaceAll("$height$", height);
}

function setContent(svg, content) {
  return svg.replace("$content$", content);
}
function setX(svg, width, states) {
  const size = parseInt(width);

  if (states === undefined) {
    //if icons has no states, if because is multicolor
    return svg
      .replaceAll("$x-enabled$", size * 0)
      .replaceAll("$x-hover$", size * 1)
      .replaceAll("$x-active$", size * 2)
      .replaceAll("$x-disabled$", size * 3);
  } else {
    //if icons has states, if because is monochrome
    let counter = 0;
    for (let state in states) {
      if (states[state]) {
        svg = svg.replaceAll(`$x-${state}$`, size * counter);
        counter++;
      }
    }

    return svg;
  }
}

/**
 * @description For every figure (path, circle, etc) it will update the fill value with a css var()
 * that matches the class name. For example, if the class name is "--icon-04" the fill value will be
 * updated to "var(--icon-04)".
 * @argument content: it expects to be a cheerio virtual DOM.
 */
function parseContent(content) {
  const svgFigures = content.find(SVG_FIGURES.join(","));
  let updatedContent = "";

  svgFigures.each((i, svgFigure) => {
    let cssClasses = svgFigure.attribs.class;
    let colorClass;
    let isMultiColor = false;
    let hasFill = svgFigure.attribs.fill;
    const hasStroke = svgFigure.attribs.stroke;

    //temporary fix
    if (!hasFill) {
      svgFigure.attribs.fill = "black";
      hasFill = true;
    }

    if (cssClasses) {
      cssClasses = cssClasses.split(" ");
      colorClass = cssClasses.find(cssClass => cssClass.includes("--i"));
      //figures that have a class '--i**' are multicolor icons. A single --i** is expected for every figure.
      if (colorClass !== undefined) {
        isMultiColor = true;
      }
    }

    //fill (is not a linear icon)
    if (hasFill) {
      if (isMultiColor) {
        svgFigure.attribs.fill = `var(${colorClass})`;
      } else {
        svgFigure.attribs.fill = `var(--icon-color)`;
      }
    }

    //stroke (is a linear icon)
    if (hasStroke) {
      if (isMultiColor) {
        svgFigure.attribs.stroke = `var(${colorClass})`;
      } else {
        svgFigure.attribs.stroke = `var(--icon-color)`;
      }
      const strokeWidth = svgFigure.attribs.strokeWidth;
      svgFigure.attribs.strokeWidth = strokeWidth;
      //prevent "automatic" fill if "Remove svg element fill" option was not activated on SVG Export figma plugin.
      svgFigure.attribs.fill = "none";
    }

    //Remove class, not needed anymore
    delete svgFigure.attribs.class;
    //Remove style, if any;
    delete svgFigure.attribs.style;
    //convert object to string
    updatedContent += ch.html(svgFigure);
  });

  return updatedContent;
}

function removeUnusedVars(svg, content, path) {
  let usedVars = content.match(REGEX_USED_VARS);
  if (usedVars) {
    //remove repeated vars
    usedVars = usedVars.filter((item, index) => {
      return usedVars.indexOf(item) === index;
    });
  }
  return svg.replace(REGEX_REMOVE_VARS, match => {
    if (usedVars.includes(match.slice(0, 5))) {
      return match;
    }
    return "";
  });
}

function setColorScheme(svg, colorScheme) {
  return svg.replaceAll("$color-scheme$", colorScheme);
}

function compressSvg(svg) {
  svg = optimizeSvg(svg);
  svg = minifyCssVars(svg);
  return svg;
}

function optimizeSvg(svg) {
  return optimize(svg, {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupIds: {
              preserve: [
                "primary",
                "primary-hover",
                "primary-active",
                "primary-disabled",
                "on-primary",
                "on-primary-hover",
                "on-primary-active",
                "on-disabled",
                "neutral"
              ]
            }
          }
        }
      }
    ]
  }).data;
}

function minifyCssVars(svg) {
  const map = {
    "--i01": "--a",
    "--i02": "--b",
    "--i03": "--c",
    "--i04": "--d",
    "--i05": "--e",
    "--i06": "--f",
    "--i07": "--g",
    "--i08": "--h",
    "--i09": "--i"
  };

  return svg.replace(REGEX_USED_VARS, match => {
    return map[match];
  });
}

function writeAllTextFile(filePath, data) {
  writeFile(filePath, data, "utf8", err => {
    if (err) {
      console.error("Error writing to output file:", err);
      return;
    }
  });
}
