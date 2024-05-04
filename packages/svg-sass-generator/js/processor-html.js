import { glob } from "glob";
import { readFileSync } from "fs";
import path from "path";
import cheerio from "cheerio";
import { RED, RESET_COLOR } from "./partials-common/utilities.js";
//Directories
const SRC_DIRECTORY = await process.argv[2];
const OUTPUT_DIRECTORY = await process.argv[3];
/********************************************
THIS IS A WORK IN PROGRESS
This will generate a html file to display the
generated icons.
*********************************************/
const iconsPromise = getIcons();
iconsPromise
    .then((result) => {
    const categoriesList = createIconsObject(result);
    for (const category in categoriesList) {
        const HTMLIcons = crateHTMLIcons(category, categoriesList[category]);
        let output = `
      <!-- category: /${category} -->
      <div class="section">
      <h2 class="category-title">/${category}</h2>
      <!-- bpn-stroke.svg -->
      <article>
        <h3 class="icon-title">bpm-stroke.svg</h3>
      </article>
      <div class="icons">
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-surface" alt="" />
          <figcaption>#on-surface</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-primary" alt="" />
          <figcaption>#on-primary</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-surface" alt="" />
          <figcaption>#on-surface</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-primary" alt="" />
          <figcaption>#on-primary</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-surface" alt="" />
          <figcaption>#on-surface</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-primary" alt="" />
          <figcaption>#on-primary</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-surface" alt="" />
          <figcaption>#on-surface</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-primary" alt="" />
          <figcaption>#on-primary</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-surface" alt="" />
          <figcaption>#on-surface</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-primary" alt="" />
          <figcaption>#on-primary</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-surface" alt="" />
          <figcaption>#on-surface</figcaption>
        </figure>
        <figure>
          <img src="../dist/bpm/light/bpm-stroke.svg#on-primary" alt="" />
          <figcaption>#on-primary</figcaption>
        </figure>
      </div>
        `;
    }
})
    .catch((error) => {
    const msg = `There was an error processing the icons. error: ${error}.`;
    throw new Error(`${RED} ${msg} ${RESET_COLOR}`);
});
/**
 * @description it creates the html for every icon.
 */
const crateHTMLIcons = (category, icons) => {
    let html = ``;
    for (const icon of icons) {
        const scheme = icon.colorScheme;
        const fileName = icon.fileName;
        icon.states.forEach((state) => {
            html += `
        <figure>
            <img src="../${SRC_DIRECTORY}/${category}/${scheme}/${fileName}.svg#${state}"/>
            <figcaption>#${state}</figcaption>
        </figure>
        `;
        });
    }
    return html;
};
/**
 * @description it gets the svg icons as an array.
 */
async function getIcons() {
    return await glob.sync(`${SRC_DIRECTORY}/**/*.svg`);
}
/**
 * @description it processes the icons for the html in an object
 */
function createIconsObject(iconsArray) {
    const iconsList = {};
    iconsArray.forEach((iconPath) => {
        const segments = iconPath.split(path.sep);
        let category;
        if (segments.length === 4) {
            category = segments[1];
        }
        else if (segments.length === 3) {
            category = "undefined";
        }
        const fileName = segments[segments.length - 1];
        const colorScheme = segments[segments.length - 2];
        const viewsIds = getViewsIds(iconPath);
        //create category if not existent
        if (!iconsList.hasOwnProperty(category)) {
            // If it doesn't exist, create it
            iconsList[category] = [];
        }
        iconsList[category].push({
            colorScheme: colorScheme,
            fileName: fileName,
            states: viewsIds,
        });
    });
    return iconsList;
}
const getViewsIds = (iconPath) => {
    let file;
    try {
        file = readFileSync(iconPath, "utf8");
    }
    catch (error) {
        throw new Error(`${RED} There was an error reading ${iconPath} error: ${error}. ${RESET_COLOR}`);
    }
    const viewsIds = [];
    const $ = cheerio.load(file);
    $("svg view").each(function () {
        const viewId = $(this).attr("id");
        viewsIds.push(viewId);
    });
    return viewsIds;
};
