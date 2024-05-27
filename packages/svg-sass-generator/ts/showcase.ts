import path from "path";
import * as fs from "fs";

import {
  copyFolderSync,
  deleteDirectory,
} from "./partials-common/file-system-utils.js";
import { writeFile } from "./partials-common/file-system-utils.js";

import {
  ColorScheme,
  IconType,
  IconsColorsSchema,
  ElementStates,
  ElementState,
  MonochromeColorsMap,
  MonochromeCategoriesMap,
  MonochromeColor,
  MonochromeSchema,
} from "./partials-common/types";

export const pushSavedIcon = (
  savedIconsOnDisk: savedIcons,
  svgFilePath: string,
  type: IconType,
  category: string,
  colorScheme: ColorScheme
) => {
  const iconCategory = category || "uncategorized";
  const iconName = path.basename(svgFilePath);

  // create category if inexistent
  if (!(iconCategory in savedIconsOnDisk[type])) {
    savedIconsOnDisk[type][iconCategory] = {
      light: [],
      dark: [],
    };
  }

  // save
  savedIconsOnDisk[type][iconCategory][colorScheme].push({
    name: iconName,
    path: svgFilePath,
  });
};

export const generateShowcase = (
  savedIconsOnDisk: savedIcons,
  outputPath: string,
  showcasePath: string,
  logPath: string,
  statesJson: IconsColorsSchema,
  monochromeColorsMap: MonochromeColorsMap,
  monochromeCategoriesMap: MonochromeCategoriesMap
) => {
  const monochromeColorsAndCategories: MonochromeSchema = statesJson.monochrome;

  // remove directory for a fresh start
  deleteDirectory(showcasePath);

  let htmlOutput = `
  <!DOCTYPE html>
  <html lang="en" class="dark">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Icons Showcase</title>
      <style>
        ${showcaseStyles}
      </style>

    </head>
    <body>
      <div class="top-bar">
        <button id="toggle-dark-btn" class="top-bar__button">toggle dark</button>
        <small class="top-bar__description">Automatically generated</small>
      </div>
      ${getAside(savedIconsOnDisk)}
      ${getMain(
        savedIconsOnDisk,
        monochromeColorsAndCategories,
        monochromeColorsMap,
        monochromeCategoriesMap
      )}
      ${toggleAsideLists()}
      ${preventListLinkPropagation()}
    </body>
  </html>
  `;

  const filePath = path.join(showcasePath, "index.html");
  writeFile(filePath, htmlOutput, logPath);

  // Then copy all the icons;
  fs.cpSync(outputPath, path.join(showcasePath, outputPath), {
    recursive: true,
  });
};

const toggleAsideLists = (): string => {
  return `
    <script>
      document.addEventListener("DOMContentLoaded", function () {
        const asideListsToggleButtons = document.querySelectorAll(".aside__category-title");
        asideListsToggleButtons.forEach((listToggleButton) => {
          listToggleButton.addEventListener("click", function() {
            const relatedCategoryList = listToggleButton.nextElementSibling;
            relatedCategoryList.classList.toggle("aside__category-list-wrapper--uncollapsed");
          });
        });
      });
  </script>`;
};

const preventListLinkPropagation = (): string => {
  return `
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      const asideCategoriesLinks = document.querySelectorAll(".aside__category-title-link");
      asideCategoriesLinks.forEach((categoryTitleLink) => {
        categoryTitleLink.addEventListener("click", function(e) {
          e.stopPropagation();
        });
      });
    });
  </script>`;
};

const getAside = (savedIconsOnDisk: savedIcons): string => {
  const multicolor = savedIconsOnDisk.multicolor;
  const monochrome = savedIconsOnDisk.monochrome;
  let multicolorCategoriesOutput = ``;
  let monochromeCategoriesOutput = ``;

  // multicolor
  Object.keys(multicolor).map((categoryName) => {
    multicolorCategoriesOutput += `  
    <h3 class="aside__category-title" role="button">
      <a href="#${categoryName}" class="aside__category-title-link">${categoryName}</a>
    </h3>
      <!-- multicolor light -->
      ${renderIconsListAside(
        categoryName,
        multicolor[categoryName].light,
        "light"
      )}
      <!-- multicolor dark -->
      ${renderIconsListAside(
        categoryName,
        multicolor[categoryName].dark,
        "dark"
      )}
    </article>
    `;
  });

  // monochrome
  Object.keys(monochrome).map((categoryName) => {
    monochromeCategoriesOutput += `  
    <h3 class="aside__category-title" role="button">
      <a href="#${categoryName}" class="aside__category-title-link">${categoryName}</a>
    </h3>
      <!-- multicolor light -->
        ${renderIconsListAside(
          categoryName,
          monochrome[categoryName].light,
          "light"
        )}
        <!-- multicolor dark -->
        ${renderIconsListAside(
          categoryName,
          monochrome[categoryName].dark,
          "dark"
        )}
      </article>
      `;
  });

  return `
  <!-- ASIDE -->
  <aside class="aside">

    <!-- a detailed (bigger) view of any clicked icon -->
    <button class="sc-button sc-button--full-width aside__toggle-detailed-view-button aside__toggle-detailed-view-button--collapsed" id="toggle-enlarged-version-btn"></button>  

    <div class="aside__detailed-view-wrapper aside__detailed-view-wrapper--visible" id="aside__detailed-view-wrapper">
      <figure class="aside__detailed-view" id="icon-detailed-view">
        <div class="aside__icon-detailed-image-wrapper">
        <img id="icon-detailed-img" class="aside__icon-detailed-image" src="" alt="An enlarged view of the selected icon">
        </div>
        <figcaption id="icon-detailed-view-caption" class="aside__detailed-icon-figcaption" >
          <strong>category/icon.svg</strong>
          <p class="detailed-icon__description">
            Here goes an optional description for the icon use
          </p>
        </figcaption>
      </figure>
    </div>

    <nav class="aside__nav" id="aside-nav">
      <!-- multicolor icons list -->
      <h2 class="aside__primary-title aside__primary-title--multicolor">
        <a href="#multicolor-icons-section">
        multicolor
        </a>
      </h2>
      ${multicolorCategoriesOutput}

      <!-- monochrome icons list -->
      <h2 class="aside__primary-title aside__primary-title--monochrome">
        <a href="#monochrome-icons-section">
        monochrome
        </a>
      </h2>
      ${monochromeCategoriesOutput}

    </nav>
  </aside>

  <script>
    // toggle enlarged icon version
    const toggleEnlargedVersionBtn = document.getElementById("toggle-enlarged-version-btn");
    const detailedViewWrapper = document.getElementById("aside__detailed-view-wrapper");
  
    var svgIconsShowcaseLS = localStorage.getItem("svg-icons-showcase");
    var svgIconsShowcaseLSObject = svgIconsShowcaseLS ? JSON.parse(svgIconsShowcaseLS) : null;
    var detailedViewVisible = svgIconsShowcaseLSObject
    ? svgIconsShowcaseLSObject.detailedViewVisible
    : null;
    if (detailedViewVisible) {
      toggleEnlargedVersionBtn.classList.add("aside__toggle-detailed-view-button--collapsed");
      detailedViewWrapper.classList.add("aside__detailed-view-wrapper--visible");
    }
  </script>
  `;
};

const noImgSrc =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPjxwYXRoIGQ9Ik0gMTUgMyBDIDExLjc4MzA1OSAzIDguODY0MTk4MiA0LjI4MDc5MjYgNi43MDcwMzEyIDYuMzQ5NjA5NCBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNi4zNDc2NTYyIDYuNzA3MDMxMiBDIDQuMjc5Mzc2NiA4Ljg2NDEwNzEgMyAxMS43ODM1MzEgMyAxNSBDIDMgMjEuNjE1NTcyIDguMzg0NDI3NiAyNyAxNSAyNyBDIDE4LjIxMDAwNyAyNyAyMS4xMjM0NzUgMjUuNzI0OTk1IDIzLjI3OTI5NyAyMy42NjQwNjIgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIzLjY2MjEwOSAyMy4yODEyNSBDIDI1LjcyNDE2OCAyMS4xMjUyMzUgMjcgMTguMjEwOTk4IDI3IDE1IEMgMjcgOC4zODQ0Mjc2IDIxLjYxNTU3MiAzIDE1IDMgeiBNIDE1IDUgQyAyMC41MzQ2OTIgNSAyNSA5LjQ2NTMwNzkgMjUgMTUgQyAyNSAxNy40MDYzNyAyNC4xNTUxNzMgMTkuNjA5MDYyIDIyLjc0NjA5NCAyMS4zMzIwMzEgTCA4LjY2Nzk2ODggNy4yNTM5MDYyIEMgMTAuMzkwOTM4IDUuODQ0ODI3NCAxMi41OTM2MyA1IDE1IDUgeiBNIDcuMjUzOTA2MiA4LjY2Nzk2ODggTCAyMS4zMzIwMzEgMjIuNzQ2MDk0IEMgMTkuNjA5MDYyIDI0LjE1NTE3MyAxNy40MDYzNyAyNSAxNSAyNSBDIDkuNDY1MzA3OSAyNSA1IDIwLjUzNDY5MiA1IDE1IEMgNSAxMi41OTM2MyA1Ljg0NDgyNzQgMTAuMzkwOTM4IDcuMjUzOTA2MiA4LjY2Nzk2ODggeiIvPjwvc3ZnPg==";

const getMain = (
  savedIconsOnDisk: savedIcons,
  monochromeColorsAndCategories: MonochromeSchema,
  monochromeColorsMap: MonochromeColorsMap,
  monochromeCategoriesMap: MonochromeCategoriesMap
) => {
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
    <article class="category" id="${categoryName}">

    <h3 class="category__title title light">
      / ${categoryName} (${
      savedIconsOnDisk["multicolor"][categoryName].light.length
    })</h3>
    <h3 class="category__title title dark">
      / ${categoryName} (${
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
      <article class="category" id="${categoryName}">

      <h3 class="category__title title light">
        / ${categoryName} (${
      savedIconsOnDisk["monochrome"][categoryName].light.length
    })</h3>
        <h3 class="category__title title dark">
          / ${categoryName} (${
      savedIconsOnDisk["monochrome"][categoryName].dark.length
    })</h3>
  
        <!-- monochrome light -->
        ${renderIcons(
          categoryName,
          monochrome[categoryName].light,
          "monochrome",
          "light",
          monochromeColorsAndCategories,
          monochromeColorsMap,
          monochromeCategoriesMap
        )}
  
        <!-- monochrome dark -->
        ${renderIcons(
          categoryName,
          monochrome[categoryName].dark,
          "monochrome",
          "dark",
          monochromeColorsAndCategories,
          monochromeColorsMap,
          monochromeCategoriesMap
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
    ${buttonToggleDark()}
    ${getIconDetail()}

    const toggleEnlargedVersion = () => {
      detailedViewWrapper.classList.toggle("aside__detailed-view-wrapper--visible");
      toggleEnlargedVersionBtn.classList.toggle("aside__toggle-detailed-view-button--collapsed");
      if(detailedViewWrapper.classList.contains("aside__detailed-view-wrapper--visible")){
        localStorage.setItem('svg-icons-showcase', JSON.stringify({
          detailedViewVisible: true
        }));
      } else {
        localStorage.setItem('svg-icons-showcase', JSON.stringify({
          detailedViewVisible: false
        }));
      }
    };

    toggleEnlargedVersionBtn.addEventListener("click", toggleEnlargedVersion);
  </script>
`;

  return mainOutput;
};

const buttonToggleDark = (): string => {
  return `
    const btnToggleDark = document.getElementById("toggle-dark-btn");
    const html = document.querySelector("html");
    btnToggleDark.addEventListener("click", function () {
      html.classList.toggle("dark");
    });
  `;
};

const getIconDetail = () => {
  return `
  const iconDetailedView = document.getElementById("icon-detailed-view");
  const iconDetailedImage = document.getElementById("icon-detailed-img");
  const iconDetailedViewCaption = document.getElementById("icon-detailed-view-caption");

  const allIconsButtons = document.querySelectorAll(".icon-state-button");
  allIconsButtons.forEach(IconButton => {
    IconButton.addEventListener("click", (e) => {
      const button = e.currentTarget;
      const iconPath = button.dataset.src;
      const iconName = button.dataset.name;

      iconDetailedImage.setAttribute("src", iconPath);
      iconDetailedViewCaption.innerText = iconName;
    });
  });
`;
};

const renderIcons = (
  category: string,
  icons: savedIconInfo[],
  iconType: IconType,
  colorSchema: ColorScheme,
  monochromeColorsAndCategories?: MonochromeSchema,
  monochromeColorsMap?: MonochromeColorsMap,
  monochromeCategoriesMap?: MonochromeCategoriesMap
): string => {
  // default classes are for multicolor
  let iconsContainerClasses = `icons-container icons-container--grid icons-container--${iconType} ${colorSchema}`;
  let iconContainerClasses = "icon-container";
  if (iconType === "monochrome") {
    // classes for monochrome
    // for monochrome, icons container is not of type "grid"
    // (.icons-container--grid)
    iconsContainerClasses = `icons-container icons-container icons-container--${iconType} ${colorSchema}`;
    iconContainerClasses = "icon-container icon-container--with-separator";
  }

  return `
  <div class="${iconsContainerClasses}">
    ${icons
      .map((icon) => {
        const listId = `${category}-${icon.name.split(".")[0]}`;
        const htmlList =
          iconType === "multicolor"
            ? getMulticolorList(icon, category, listId)
            : getMonochromeList(
                icon,
                category,
                listId,
                colorSchema,
                monochromeColorsAndCategories,
                monochromeColorsMap,
                monochromeCategoriesMap
              );
        return `
        <div class="${iconContainerClasses}" id=${listId}>
           <h4 class="icon-container__title icon-container__title--h4 icon-container__title--svg-icon title">${icon.name}</h4>
           ${htmlList}
         </div>`;
      })
      .join("")}
  </div>`;
};

const getMulticolorList = (
  icon: savedIconInfo,
  category: string,
  listId: string
): string => {
  const states = ["enabled", "hover", "active", "disabled"];
  return `<ul class="icon-container__list list list--vertical">
  ${states
    .map((state) => {
      return `<li class="icon-container__list-item">
      <button class="icon-state-button" data-src="${icon.path}#${state}" data-name="${category}/${icon.name}" id="${listId}--${state}">
       <figure class="icon-container__figure">
         <img class="icon" src="${icon.path}#${state}" alt="${icon.name} icon on state '${state}'"/>
         <figcaption class="icon-container__figure-caption" disabled>${state}</figcaption>
       </figure>
      </button>
    </li>`;
    })
    .join("")}
</ul>`;
};

const getMonochromeList = (
  icon: savedIconInfo,
  category: string,
  listId: string,
  colorSchema: ColorScheme,
  monochromeColorsAndCategories: MonochromeSchema,
  monochromeColorsMap: MonochromeColorsMap,
  monochromeCategoriesMap: MonochromeCategoriesMap
): string => {
  const colorsHtmlList: string = getMonochromeColorsList(
    icon,
    category,
    colorSchema,
    monochromeColorsAndCategories,
    monochromeColorsMap,
    monochromeCategoriesMap
  );

  return `<ul class="icon-container__list list list--grid">${colorsHtmlList}</ul>`;
};

const getMonochromeColorsList = (
  icon: savedIconInfo,
  category: string,
  colorSchema: ColorScheme,
  monochromeColorsAndCategories?: MonochromeSchema,
  monochromeColorsMap?: MonochromeColorsMap,
  monochromeCategoriesMap?: MonochromeCategoriesMap
): string => {
  let colorLists: string[] = [];

  const categories = monochromeColorsAndCategories.iconsCategories;
  const categoryIndex = monochromeCategoriesMap.get(category);

  if (categoryIndex !== undefined) {
    Object.keys(categories[categoryIndex].colors).map((color) => {
      const colorIsNull = !categories[categoryIndex].colors[color];
      if (colorIsNull) {
        return;
      }
      const colorIndex = monochromeColorsMap.get(color);
      if (colorIndex !== undefined) {
        const color = monochromeColorsAndCategories.colors[colorIndex];
        // push states that have some value (enabled, hover, active, disabled)
        let states: ElementStates = {
          enabled: null,
          hover: null,
          active: null,
          disabled: null,
        };
        let colorStatesList: string[] = [];
        Object.keys(color.states).forEach((state: ElementState) => {
          // 1. Check if state is not null or undefined
          // 2. Then check if the color has a property defined fot the color scheme (light or dark)
          // 3. Then check if the value of the scheme is not null or undefined
          const stateValue = color.states[state];

          if (
            stateValue &&
            color.states[state].hasOwnProperty(colorSchema) &&
            color.states[state][colorSchema]
          ) {
            states[state] = color.states[state];
          }
        });

        // push list items
        Object.keys(states).forEach((state: ElementState) => {
          const stateIsNull = !states[state];
          let slot = `
          <button class="icon-state-button" data-src="${icon.path}#${state}" data-name="${category}/${icon.name}">
            <figure class="icon-container__figure">
              <img class="icon" src="${icon.path}#${color.name}-${state}" alt="${icon.name} icon on state '${state}'"/>
              <figcaption class="icon-container__figure-caption">${state}</figcaption>
            </figure>
          </button>`;

          if (stateIsNull) {
            slot = `
            <figure class="icon-container__figure">
              <span class="no-state-img"/></span>
              <figcaption class="icon-container__figure-caption icon-container__figure-caption--disabled">${state} is not defined</figcaption>
            </figure>`;
          }

          colorStatesList.push(`
          <li class="icon-container__list-item">
            ${slot}
          </li>`);
        });

        colorLists.push(`<li class="icon-container icons-container--nested">
        <h5 class="icon-container__title title icon-container__title--h5"><em>${
          color.name
        }</em></h5>
        <ul class="icon-container__list list list--vertical"> 
          ${colorStatesList.join("")}
        </ul>
      </li>`);
      }
    });
  }

  return colorLists.join("");
};

const renderIconsListAside = (
  category: string,
  icons: savedIconInfo[],
  colorSchema: ColorScheme
): string => {
  return `
  <div class="aside__category-list-wrapper">
    <ul class="aside__category-list list list--vertical">
      ${icons
        .map((icon) => {
          const href = `${category}-${icon.name.split(".")[0]}`;
          return `
            <li class="aside__category-list-item">
              <a href="#${href}">${icon.name}</a>
            </li>`;
        })
        .join("")}
    </ul>
  </div>`;
};

const getTotalIcons = (
  type: IconType,
  colorSchema: ColorScheme,
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
    --sc-icon__box: 24px;
    /*aside*/
    --sc-aside__width: 232px;
    /*container (main)*/
    --sc-icon__container-padding-block: 64px;
    --sc-icon__container-padding-inline: 32px;
    --sc-icon__container-max-width: 1200px;
    --sc-container-title__color: #000000ab;
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
    --sc-icons-type-section-title__font-weight: bold;
    --sc-icons-type-section-title__margin-block-end: 16px;
    /*category*/
    --sc-category-title__font-size: 14px;
    --sc-category__margin-block-end: 32px;
    --sc-category-title__margin-block-end: 18px;
    /*icons-container*/
    --sc-icons-container-list__separation: 16px;
    --sc-icons-container-list__border-block-end: 1px solid
      var(--sc-border-dimmed__color);
    /*icon-container*/
    --sc-icon-container__background: #FCFCFC;
    --sc-icon-container__border: 1px solid var(--sc-border-dimmed__color);
    --sc-icon-container__border-radius: 6px;
    --sc-icon-container__padding: 16px;
    --sc-icon-container__margin: 16px;
    --sc-icons-container-title__margin-block-end: 16px;
    /*icon-container__list*/
    --sc-icon-container-list__background-color: #212427;

  }
  /* =======================
  GENERAL
  ========================*/
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
  }
  html:not(.dark) .dark{
    display: none !important;
  }
  html.dark {
    --sc-body__background-color: #1a1d20;
    --sc-body__color: #999999;
    --sc-icon-container__background: #1D2023;
    --sc-container-title__color: #ffffffcc;
    --sc-border-dimmed__color: rgba(255, 255, 255, 0.1);
    --sc-top-bar-button__filter--hover: brightness(1.4);
    --sc-top-bar-button__filter--active: brightness(1.2);
    --sc-icon-container-list__background-color: #212427;
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
    color: inherit;
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
  .list--grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200PX, 1fr));
  }
  .sc-button {
    background-color: #155263;
    border: 0;
    padding: 4px 16px;
    border-radius: 2px;
    color: #ffffffcc;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
  }
  .sc-button:hover {
    cursor:pointer;
    filter: brightness(110%);
  }
  .sc-button:active {
    filter: brightness(90%);
  }
  .sc-button--full-width {
    width: 100%;
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
    overflow-x: auto;
  }
  .aside__detailed-view {
    margin: 0;
    overflow: hidden;
  }
  .aside__detailed-view-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 250ms;
  }
  .aside__detailed-view-wrapper--visible {
    grid-template-rows: 1fr;
  }
  .aside__icon-detailed-image-wrapper {
    padding-top:100%;
    position: relative;
    border: 1px solid var(--sc-border-dimmed__color);
    border-radius: 4px 4px 0 0;
  }
  .aside__icon-detailed-image {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%, -50%);
  }
  .aside__detailed-icon-figcaption {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--sc-border-dimmed__color);
    border-top: none;
    border-radius: 0 0 4px 4px;
    padding: 8px;
    font-size: 12px;
    gap: 8px;
  }
  
  .detailed-icon__description {
    margin-block-start: 0;
    font-style: italic;
    line-height:1.4em;
    font-size: 11px;
  }
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
    margin-block-start: calc(var(--sc-icons-type-section-title__margin-block-end) * 2);
    text-transform: capitalize;
  }
  .aside__primary-title:before {
    display: none;
    content: "🌈";
    margin-inline-end: 8px;
  }
  .aside__primary-title--monochrome:before {
    filter: sepia(1);
  }
  .aside__category-title {
    font-size: var(--sc-category-title__font-size);
    padding-block: 12px;
    margin: 0;
    text-transform: uppercase;
    color: var(--sc-container-title__color);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .aside__category-title::after {
    border-style: solid;
    border-width: 0.25em 0.25em 0 0;
    content: '';
    display: inline-block;
    height: 0.45em;
    right: 0.15em;
    position: relative;
    vertical-align: top;
    width: 0.45em;
    top: 0;
    transform: rotate(135deg);
    color: var(--sc-body__color);
  }
  .aside__category-title:hover {
    cursor: pointer;
  }
  .aside__category-title:hover::after {
    color: var(--sc-container-title__color);
  }
  .aside__category-title:last-of-type{
    border-block-end: none;
  }
  .aside__category-list-wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 250ms;
    transition: all 250ms;
  }
  .aside__category-list-wrapper--uncollapsed {
    grid-template-rows: 1fr;
    margin-block-end: 12px;
  }
  .aside__category-list {
    overflow: hidden
  }
  .aside__category-list-item {
    margin-block-end: calc(var(--sc-icons-container-title__margin-block-end) * 0.75);
    font-size: 13px;
  }
  .aside__category-list-item:before {
    display: inline-block;
    padding-inline-end: 8px; 
  }
  .aside__toggle-detailed-view-button {
    
  }
  .aside__toggle-detailed-view-button:before {
    content:"see enlarged version 🔎";
  }
  .aside__toggle-detailed-view-button--collapsed:before {
    content:"hide enlarged version";
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
  /*no state defined (no svg)*/
  .no-state-img {
    width: var(--sc-icon__box);
    height: var(--sc-icon__box);
    background-color: var(--sc-body__color);
    -webkit-mask-image: url(${noImgSrc});
    mask-image: url(${noImgSrc});
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-size: 18px;
    -webkit-mask-position-x: center;
    -webkit-mask-position-y: center;
    opacity: 0.5;
  }
  /*container*/
  .container {
    padding-inline: var(--sc-icon__container-padding-inline);
    padding-block: var(--sc-icon__container-padding-block);
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
    border: var(--sc-icon-container__border);
    border-radius: var(--sc-icon-container__border-radius);
    background-color: var(--sc-icon-container__background);
  }
  .icons-container--grid {
    display:grid; 
    grid-template-columns: repeat(auto-fill, minmax(220PX, 1fr));
  }
  .icon-container__list {

  }
  .icon-container__figure {
    margin: 0;
    display:flex;
    gap: 12px;
    align-items: center;
  }
  .icon-container__figure-caption {
    font-size: 13px;
    text-align: left;
  }
  .icon-container__figure-caption--disabled {
    opacity: 0.5
  }
  .icon-container__title {
    margin-block-end: var(--sc-icons-container-title__margin-block-end);
    color: var(--sc-container-title__color);
    font-size: 15px;
  }
  .icon-container__title--svg-icon {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 16px;
  }
  .icon-container__title--svg-icon::before {
    content:"🖼️";
  }
  .icon-container__title--h4 {
    font-size: 16px;
    margin-block-end: 16px;
    padding-block-end: 16px;
    border-block-end: 1px solid var(--sc-border-dimmed__color);
  }
  .icon-container__title--h5 {
    font-size: 14px;
    font-weight: 300;
  }
  .icon-container__list:not(:last-child) {
    padding-block-end: var(--sc-icons-container-list__separation);
  }
  /*icon-container*/
  .icon-container {
    padding: var(--sc-icon-container__padding);
  }
  .icon-container--with-separator {
    border-block-end: 1px dashed var(--sc-border-dimmed__color);
  }
  .icon-container .icon-container {
    padding: 0;
  }
  .icon-state-button {
    width: 100%;
    background-color: transparent;
    border: none;
    color: inherit;
    padding: 0;
  }
  .icon-state-button:hover {
    cursor: pointer;
    color : var(--sc-container-title__color);
  }
  /* =======================
  CUSTOM SCROLLBAR
  ========================*/
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--sc-body__background-color);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--sc-border-dimmed__color);
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    filter: brightness(1.1);
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

type MonochromeCategoriesStates = {
  [category: string]: ElementStates;
};
