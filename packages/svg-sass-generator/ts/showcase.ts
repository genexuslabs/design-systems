import path from "path";
import { writeFile } from "./partials-common/file-system-utils.js";

import {
  colorScheme,
  iconType,
  iconsColorsSchema,
  multiColorStatesArray,
} from "./partials-common/types.js";

export const pushSavedIcon = (
  savedIconsOnDisk: savedIcons,
  svgFilePath: string,
  type: iconType,
  category: string,
  colorScheme: colorScheme,
  colorStatesJson: iconsColorsSchema
) => {
  const filePathArray = svgFilePath.replace(/\//g, "\\").split(path.sep);
  const iconCategory = category || "uncategorized";
  const iconName = filePathArray[filePathArray.length - 1];
  let iconStates: string[] = [];

  // create category if inexistent
  if (!(iconCategory in savedIconsOnDisk[type])) {
    savedIconsOnDisk[type][iconCategory] = {
      light: [],
      dark: [],
    };
  }

  // set icon states
  if (type === "monochrome") {
    const foundCategory = colorStatesJson.monochrome.icons.find(
      (icon) => icon.folder === category
    );
    if (foundCategory) {
      iconStates = Object.keys(foundCategory.states).filter(
        (state) => foundCategory.states[state]
      );
    }
  } else {
    // is multicolor
    iconStates = multiColorStatesArray;
  }

  // save
  savedIconsOnDisk[type][iconCategory][colorScheme].push({
    name: iconName,
    path: svgFilePath,
    states: iconStates,
  });
};

export const generateShowcase = (
  savedIconsOnDisk: savedIcons,
  outputPath: string,
  showcasePath: string,
  logPath: string
) => {
  // calculate relative path from SHOWCASE_PATH to OUTPUT_PATH
  const baseTagHref = path.relative(showcasePath, outputPath);

  let htmlOutput = `
  <!DOCTYPE html>
  <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <base href="${baseTagHref}">
      <title>Icons Showcase</title>
      <style>
        ${showcaseStyles}
      </style>
      <body>
        <div class="top-bar">
          <button id="toggle-dark-btn" class="top-bar__button">toggle dark</button>
          <small class="top-bar__description">Automatically generated</small>
        </div>
        ${getAside(savedIconsOnDisk)}
        ${getMain(savedIconsOnDisk)}
      </body>
    </html>
  `;

  const filePath = path.join(showcasePath, "index.html");

  writeFile(filePath, htmlOutput, logPath);
};

const getAside = (savedIconsOnDisk: savedIcons): string => {
  const multicolor = savedIconsOnDisk.multicolor;
  const monochrome = savedIconsOnDisk.monochrome;
  let multicolorCategoriesOutput = ``;
  let monochromeCategoriesOutput = ``;

  // multicolor
  Object.keys(multicolor).map((categoryName) => {
    multicolorCategoriesOutput += `  
    <h3 class="aside__category-title"><a href="#">${categoryName}</a></h3>
      <!-- multicolor light -->
      ${renderIconsListAside(multicolor[categoryName].light, "light")}
      <!-- multicolor dark -->
      ${renderIconsListAside(multicolor[categoryName].dark, "dark")}
    </article>
    `;
  });

  // monochrome
  Object.keys(monochrome).map((categoryName) => {
    monochromeCategoriesOutput += `  
      <h3 class="aside__category-title"><a href="#">${categoryName}</a></h3>
        <!-- multicolor light -->
        ${renderIconsListAside(monochrome[categoryName].light, "light")}
        <!-- multicolor dark -->
        ${renderIconsListAside(monochrome[categoryName].dark, "dark")}
      </article>
      `;
  });

  return `
  <!-- ASIDE -->
  <aside class="aside">
    <nav class="aside__nav">

      <!-- multicolor icons list -->
      <h2 class="aside__primary-title aside__primary-title--multicolor">
        <a href="multicolor-icons-section">
        multicolor
        </a>
      </h2>
      ${multicolorCategoriesOutput}

      <!-- monochrome icons list -->
      <h2 class="aside__primary-title aside__primary-title--monochrome">
        <a href="multicolor-icons-section">
        monochrome
        </a>
      </h2>
      ${monochromeCategoriesOutput}

    </nav>
  </aside>
  `;
};

const getMain = (savedIconsOnDisk: savedIcons) => {
  // multicolor
  const multicolor = savedIconsOnDisk.multicolor;
  const monochrome = savedIconsOnDisk.monochrome;

  let multicolorCategoriesOutput = ``;
  let monochromeCategoriesOutput = ``;

  // get total icons
  const totalIcons: totalIcons = {
    multicolor: {
      light: getTotalIcons("multicolor", "light", savedIconsOnDisk),
      dark: getTotalIcons("multicolor", "dark", savedIconsOnDisk),
    },
    monochrome: {
      light: getTotalIcons("monochrome", "light", savedIconsOnDisk),
      dark: getTotalIcons("monochrome", "dark", savedIconsOnDisk),
    },
  };

  // multicolor
  Object.keys(multicolor).map((categoryName) => {
    multicolorCategoriesOutput += `
    <!-- ${categoryName} -->
    <article class="category">

    <h3 class="category__title title light">
      ${categoryName} (${
      savedIconsOnDisk["multicolor"][categoryName].light.length
    })</h3>
    <h3 class="category__title title dark">
      ${categoryName} (${
      savedIconsOnDisk["multicolor"][categoryName].dark.length
    })</h3>

      <!-- multicolor light -->
      ${renderIcons(
        categoryName,
        multicolor[categoryName].light,
        "multicolor",
        "light"
      )}

      <!-- multicolor dark -->
      ${renderIcons(
        categoryName,
        multicolor[categoryName].dark,
        "multicolor",
        "dark"
      )}
    </article>
    `;
  });

  // monochrome
  Object.keys(monochrome).map((categoryName) => {
    monochromeCategoriesOutput += `
      <!-- ${categoryName} -->
      <article class="category">

      <h3 class="category__title title light">
        ${categoryName} (${
      savedIconsOnDisk["monochrome"][categoryName].light.length
    })</h3>
        <h3 class="category__title title dark">
          ${categoryName} (${
      savedIconsOnDisk["monochrome"][categoryName].dark.length
    })</h3>
  
        <!-- multicolor light -->
        ${renderIcons(
          categoryName,
          monochrome[categoryName].light,
          "monochrome",
          "light"
        )}
  
        <!-- multicolor dark -->
        ${renderIcons(
          categoryName,
          monochrome[categoryName].dark,
          "monochrome",
          "dark"
        )}
      </article>
      `;
  });

  const mainOutput = `
  <!-- MAIN -->
  <main class="container" id="icons-container">

    <!-- multicolor -->
    <section class="icons-type-section" aria-labelledby="multicolor-icons-section">

      <h1 class="container__title title">auto-generated scalable vector icons</h1>

      <h2 class="icons-type-section__title icons-type-section__title--multicolor title" id="multicolor-icons-section">
        <span class="amount light">${totalIcons.multicolor.light}</span>
        <span class="amount dark">${totalIcons.multicolor.dark}</span>
        Multicolor <span class="icons-type-section__title-schema"></span> Icons
      </h2>

      <p hidden class="note"><small></small></p>

      ${multicolorCategoriesOutput}
    </section>

    <!-- monochrome -->
    <section class="icons-type-section" aria-labelledby="monochrome-icons-section">

      <h2 class="icons-type-section__title icons-type-section__title--monochrome title" id="monochrome-icons-section">
        <span class="amount light">${totalIcons.monochrome.light}</span>
        <span class="amount dark">${totalIcons.monochrome.dark}</span>
        Monochrome <span class="icons-type-section__title-schema"></span> Icons
      </h2>

      <p hidden class="note"><small></small></p>

      ${monochromeCategoriesOutput}
    </section>
  </main>

  <script>
    const btnToggleDark = document.getElementById("toggle-dark-btn");
    const html = document.querySelector("html");
    btnToggleDark.addEventListener("click", function(){
      html.classList.toggle("dark");
    });
  </script>
`;

  return mainOutput;
};

const renderIcons = (
  category: string,
  icons: savedIconInfo[],
  iconType: iconType,
  colorSchema: colorScheme
): string => {
  return `
  <div class="icons-container icons-container--${iconType} ${colorSchema}">
    ${icons
      .map((icon) => {
        return `<div class="icon-container">
         <h4 class="icon-container__title title">${icon.name}</h4>
         <ul class="icon-container__list list list--vertical">
           ${icon.states
             .map((state) => {
               return `<li class="icon-container__list-item" id=${category}/${icon.name}>
               <img class="icon" src="${icon.path}#${state}" title="${state}" alt="${icon.name} icon on state '${state}'">
             </li>`;
             })
             .join("")}
         </ul>
       </div>`;
      })
      .join("")}
  </div>`;
};

const renderIconsListAside = (
  icons: savedIconInfo[],
  colorSchema: colorScheme
): string => {
  return `
  <ul class="aside__category-list list list--vertical ${colorSchema}">
    ${icons
      .map((icon) => {
        return `
          <li class="aside__category-list-item">
            <a href="#">${icon.name}</a>
          </li>`;
      })
      .join("")}
  </ul>`;
};

const getTotalIcons = (
  type: iconType,
  colorSchema: colorScheme,
  savedIconsOnDisk: savedIcons
): number => {
  let total = 0;
  Object.keys(savedIconsOnDisk[type]).forEach((category) => {
    total += savedIconsOnDisk[type][category][colorSchema].length;
  });
  return total;
};

const showcaseStyles = `
  /* =======================
  TOKENS
  ========================*/
  :root {
    /*general*/
    --sc-border-dimmed__color: rgba(0, 0, 0, 0.1);
    --sc-list__gap: 16px;
    /*body*/
    --sc-body__background-color: #f4f5f5;
    --sc-body__color: #696969;
    --sc-body__font-family: sans-serif;
    --sc-body__font-size: 16px;
    /*top-bar*/
    --sc-top-bar__height: 42px;
    --sc-top-bar__padding-inline: 16px;
    --sc-top-bar__color: var(--sc-body__color);
    --sc-top-bar__background-color: var(--sc-border-dimmed__color);
    --sc-top-bar-button__background-color: var(--sc-border-dimmed__color);
    --sc-top-bar-button__color: var(--sc-body__color);
    --sc-top-bar-button__border: 1px solid var(--sc-border-dimmed__color);
    --sc-top-bar-button__filter--hover: brightness(0.6);
    --sc-top-bar-button__filter--active: brightness(0.8);
    --sc-top-bar-description__font-size: 12px;
    /*icon*/
    --sc-icon__box: 32px;
    /*aside*/
    --sc-aside__width: 232px;
    /*container (main)*/
    --sc-icon__container-padding-block: 64px;
    --sc-icon__container-padding-inline: 32px;
    --sc-icon__container-max-width: 1200px;
    --sc-container-title__font-size: 14px;
    --sc-container-title__font-weight: 300;
    --sc-container-title__text-transform: uppercase;
    --sc-container-title__letter-spacing: 0.2em;
    --sc-container-title__margin-block-end: 24px;
    --sc-container-title__padding-block-end: 24px;
    --sc-icons-container-title__text-align: center;
    /*icons-type-section*/
    --sc-icons-type-section__padding-block-end: 64px;
    --sc-icons-type-section__margin-block-end: 64px;
    --sc-icons-type-section__border: 3px dashed
      var(--sc-border-dimmed__color);
    --sc-icons-type-section-title__font-size: 18px;
    --sc-icons-type-section-title__font-weight: 400;
    --sc-icons-type-section-title__margin-block-end: 16px;
    /*category*/
    --sc-category-title__font-size: 14px;
    --sc-category__margin-block-end: 32px;
    --sc-category-title__margin-block-end: 18px;
    /*icons-container*/
    --sc-icon-container__background: #FCFCFC;
    --sc-icon-container__border: 1px solid var(--sc-border-dimmed__color);
    --sc-icon-container__border-radius: 6px;
    --sc-icon-container__padding: 16px;
    --sc-icon-container-title__margin-block-end: 24px;
    --sc-icons-container-list__separation: 16px;
    --sc-icons-container-list__border-block-end: 1px solid
      var(--sc-border-dimmed__color);
    /*icon-container*/
    --sc-icon-container__margin-block: 16px;
    --sc-icon-container__padding-block: 16px;
    --sc-icons-container-title__margin-block-end: 16px;

  }
  /* =======================
  GENERAL
  ========================*/
  html:not(.dark) .dark{
    display: none !important;
  }
  html.dark {
    --sc-body__background-color: #1a1d20;
    --sc-body__color: #999999;
    --sc-icon-container__background: #1D2023;
    --sc-border-dimmed__color: rgba(255, 255, 255, 0.1);
    --sc-top-bar-button__filter--hover: brightness(1.4);
    --sc-top-bar-button__filter--active: brightness(1.2);
  }
  html.dark .light{
    display: none !important;
  }
  body {
    background-color: var(--sc-body__background-color);
    color: var(--sc-body__color);
    font-family: var(--sc-body__font-family);
    font-size: var(--sc-body__font-size);
    margin: 0;
    margin-block-start: var(--sc-top-bar__height);
  }
  * {
    box-sizing: border-box;
  }
  *:last-child {
    margin-block-end: 0;
    padding-block-end: 0;
  }
  *:first-child {
    margin-block-start: 0;
    padding-block-start: 0;
  }
  a {
    text-decoration: none;
    color: var(--sc-body__color);
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    filter: var(--sc-top-bar-button__filter--active);
  }
  .title {
    margin: 0;
  }
  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: var(--sc-list__gap);
  }
  .list li {
    margin: 0;
  }
  .list--vertical {
    flex-direction: column;
    gap: 10px;
  }
  /* =======================
  TOP-BAR
  ========================*/
  .top-bar {
    position: fixed;
    z-index:99;
    backdrop-filter: blur(15px) saturate(1.5);
    top: 0;
    left: 0;
    width: 100%;
    height: var(--sc-top-bar__height);
    padding-inline: var(--sc-top-bar__padding-inline);
    background-color: var(--sc-top-bar__background-color);
    color: var(--sc-top-bar__color);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .top-bar__button {
    border-radius: 3px;
    background-color: var(--sc-top-bar-button__background-color);
    border: var(--sc-top-bar-button__border);
    color: var(--sc-top-bar-button__color);
  }
  .top-bar__button:hover {
    filter: var(--sc-top-bar-button__filter--hover);
  }
  .top-bar__button:active {
    filter: var(--sc-top-bar-button__filter--active);
  }
  .top-bar__description {
    font-size: var(--sc-top-bar-description__font-size);
  }
  /* =======================
  ASIDE
  ========================*/
  .aside {
    position: fixed;
    height: calc(100vh - var(--sc-top-bar__height));
    top: var(--sc-top-bar__height);
    left: 0;
    padding: 16px;
    width: var(--sc-aside__width);
    background-color: var(--sc-icon-container__background);
    z-index:99;
  }
  .aside__primary-title {
    font-size: var(--sc-icons-type-section-title__font-size);
    font-weight: var(--sc-icons-type-section-title__font-weight);
    margin-block-end: var(--sc-icons-type-section-title__margin-block-end);
    text-transform: capitalize;
    filter:
  }
  .aside__primary-title:before {
    content: "🌈";
    margin-inline-end: 8px;
  }
  .aside__primary-title--monochrome:before {
    filter: sepia(1);
  }
  .aside__category-title {
    font-size: var(--sc-category-title__font-size);
    margin-block-end: var(--sc-category-title__margin-block-end);
    text-transform: uppercase;
  }
  .aside__category-list {
    padding-block-end: var(--sc-category-title__margin-block-end);
    border-block-end: var(--sc-icon-container__border);
  }
  .aside__category-list-item {
    margin-block-end: calc(var(--sc-icons-container-title__margin-block-end) * 0.75);
    font-size: 13px;
  }
  .aside__category-list-item:before {
    content: "- ";
    display: inline-block;
    padding-inline-end: 8px;
    
  }
  /* =======================
  MAIN
  ========================*/
  /*icon*/
  .icon {
    display: inline-block;
    width: var(--sc-icon__box);
    height: var(--sc-icon__box);
    background-image: var(--icon-path);
    background-size: contain;
  }
  /*container*/
  .container {
    padding-inline: var(--sc-icon__container-padding-inline);
    padding-block: var(--sc-icon__container-padding-block);
    max-width: var(--sc-icon__container-max-width);
    margin: 0 0 0 var(--sc-aside__width);
  }
  .container__title {
    padding-block-end: var(--sc-container-title__padding-block-end);
    margin-block-end: var(--sc-container-title__margin-block-end);
    font-size: var(--sc-container-title__font-size);
    font-weight: var(--sc-container-title__font-weight);
    text-transform: var(--sc-container-title__text-transform);
    letter-spacing: var(--sc-container-title__letter-spacing);
    text-align: var(--sc-icons-container-title__text-align);
    position: relative;
  }
  .container__title:after {
    content: "";
    display: block;
    width: 128px;
    height: 2px;
    border-bottom: 1px solid var(--sc-border-dimmed__color);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  /*icons-type-section*/
  .icons-type-section:not(:last-child) {
    /* padding-block-end: var(--sc-icons-type-section__padding-block-end); */
    /* border-bottom: var(--sc-icons-type-section__border); */
    margin-block-end: var(--sc-icons-type-section__margin-block-end);
  }
  .icons-type-section__title {
    text-align: center;
    font-size: var(--sc-icons-type-section-title__font-size);
    font-weight: var(--sc-icons-type-section-title__font-weight);
    margin-block-end: var(--sc-icons-type-section-title__margin-block-end);
    text-transform: capitalize;
  }
  .icons-type-section__title-schema:before {
    content: "light";
  }
  html.dark .icons-type-section__title-schema:before {
    content: "dark";
  }
  .icons-type-section__title--multicolor:before {
    content: "🌈";
    margin-inline-end: 8px;
  }
  .icons-type-section__title--monochrome:before {
    content: "🌈";
    margin-inline-end: 8px;
    filter: sepia(1);
  }
  .note {
    text-align: center;
    margin-block-start: 0;
    margin-block-end: 32px;
    font-style: italic;
    opacity: 0.7;
  }
  /*category*/
  .category:not(:last-child) {
    margin-block-end: var(--sc-category__margin-block-end);
  }
  .category__title {
    font-size: var(--sc-category-title__font-size);
    margin-block-end: var(--sc-category-title__margin-block-end);
    text-transform: uppercase;
  }
  .category__title:before {
    content: "📁";
    filter: grayscale(1);
    margin-inline-end: 8px;
  }
  /*icons-container*/
  .icons-container {
    display: flex;
    flex-direction: row;
    border: var(--sc-icon-container__border);
    border-radius: var(--sc-icon-container__border-radius);
    padding: var(--sc-icon-container__padding);
    background-color: var(--sc-icon-container__background);
  }
  .icon-container__title {
    margin-block-end: var(--sc-icons-container-title__margin-block-end);
  }
  .icon-container__list:not(:last-child) {
    padding-block-end: var(--sc-icons-container-list__separation);
    margin-block-end: var(--sc-icons-container-list__separation);
    border-block-end: var(--sc-icons-container-list__border-block-end);
  }
  /*icon-container*/
  .icon-container:not(:last-child) {
    margin-block-end: var(--sc-icon-container__margin-block);
    padding-block-end: var(--sc-icon-container__padding-block);
    border-block-end: 1px solid var(--sc-border-dimmed__color);
  }

`;

export interface savedIcons {
  multicolor: {
    [category: string]: {
      light: savedIconInfo[];
      dark: savedIconInfo[];
    };
  };
  monochrome: {
    [category: string]: {
      light: savedIconInfo[];
      dark: savedIconInfo[];
    };
  };
}
interface savedIconInfo {
  name: string;
  path: string;
  states: string[];
}

type totalIcons = {
  multicolor: {
    light: number;
    dark: number;
  };
  monochrome: {
    light: number;
    dark: number;
  };
};
