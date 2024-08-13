import { MERCURY_ASSETS } from "./assets/MERCURY_ASSETS-test.js";
const CONTAINER_EL = document.querySelector(".container");
const NOT_AVAILABLE_ICON = `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPjxwYXRoIGQ9Ik0gMTUgMyBDIDExLjc4MzA1OSAzIDguODY0MTk4MiA0LjI4MDc5MjYgNi43MDcwMzEyIDYuMzQ5NjA5NCBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNi4zNDc2NTYyIDYuNzA3MDMxMiBDIDQuMjc5Mzc2NiA4Ljg2NDEwNzEgMyAxMS43ODM1MzEgMyAxNSBDIDMgMjEuNjE1NTcyIDguMzg0NDI3NiAyNyAxNSAyNyBDIDE4LjIxMDAwNyAyNyAyMS4xMjM0NzUgMjUuNzI0OTk1IDIzLjI3OTI5NyAyMy42NjQwNjIgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIzLjY2MjEwOSAyMy4yODEyNSBDIDI1LjcyNDE2OCAyMS4xMjUyMzUgMjcgMTguMjEwOTk4IDI3IDE1IEMgMjcgOC4zODQ0Mjc2IDIxLjYxNTU3MiAzIDE1IDMgeiBNIDE1IDUgQyAyMC41MzQ2OTIgNSAyNSA5LjQ2NTMwNzkgMjUgMTUgQyAyNSAxNy40MDYzNyAyNC4xNTUxNzMgMTkuNjA5MDYyIDIyLjc0NjA5NCAyMS4zMzIwMzEgTCA4LjY2Nzk2ODggNy4yNTM5MDYyIEMgMTAuMzkwOTM4IDUuODQ0ODI3NCAxMi41OTM2MyA1IDE1IDUgeiBNIDcuMjUzOTA2MiA4LjY2Nzk2ODggTCAyMS4zMzIwMzEgMjIuNzQ2MDk0IEMgMTkuNjA5MDYyIDI0LjE1NTE3MyAxNy40MDYzNyAyNSAxNSAyNSBDIDkuNDY1MzA3OSAyNSA1IDIwLjUzNDY5MiA1IDE1IEMgNSAxMi41OTM2MyA1Ljg0NDgyNzQgMTAuMzkwOTM4IDcuMjUzOTA2MiA4LjY2Nzk2ODggeiIvPjwvc3ZnPg==)`;

/* - - - - - - - - - - - - - - - - - - - -
Helper Render Functions (Elements)
- - - - - - - - - - - - - - - - - - - - */

const createSection = name => {
  const sectionElement = document.createElement("section");
  sectionElement.className = "section";
  const headerElement = document.createElement("header");
  headerElement.className = "section__header";
  const h1Element = document.createElement("h1");
  h1Element.className = "section__title";
  h1Element.textContent = name;
  headerElement.appendChild(h1Element);
  sectionElement.appendChild(headerElement);
  return sectionElement;
};
const createSectionArticlesContainer = () => {
  const sectionArticlesContainer = document.createElement("div");
  sectionArticlesContainer.className = "section__articles-container";
  return sectionArticlesContainer;
};
const createArticle = dataTitle => {
  const article = document.createElement("article");
  article.className = "article";
  if (dataTitle) {
    article.setAttribute("data-title", dataTitle);
  }
  return article;
};
const createArticleHeader = () => {
  const header = document.createElement("header");
  header.className = "article__header";
  return header;
};
const createArticleMain = () => {
  const articleMain = document.createElement("div");
  articleMain.className = "article__main";
  return articleMain;
};
const createArticleContent = () => {
  const articleContent = document.createElement("div");
  articleContent.className = "article__content";
  return articleContent;
};
const createIconsGrid = () => {
  const iconsGridEl = document.createElement("div");
  iconsGridEl.className = "icons-grid";
  return iconsGridEl;
};
const createItemTitle = listTitle => {
  const iconsGridItemTitle = document.createElement("h2");
  iconsGridItemTitle.className = "icons-grid__item-title";
  iconsGridItemTitle.textContent = listTitle;
  return iconsGridItemTitle;
};
const createIconsStatesList = statesObject => {
  // list
  const ulElement = document.createElement("ul");
  ulElement.className = "icons-grid__list";
  // list items
  let notImplementedStates = ["enabled", "hover", "active", "disabled"];
  for (let state in statesObject) {
    const customVar = `var(--icon__${statesObject[state].name})`;
    const liEl = document.createElement("li");
    const iEl = document.createElement("i");
    const stateTextNode = document.createTextNode(state);
    iEl.className = "icon icon-sm";
    iEl.style.setProperty("--icon-path", customVar);
    liEl.appendChild(iEl);
    liEl.appendChild(stateTextNode);
    ulElement.appendChild(liEl);
    // remove state from notImplementedStates
    const implementedStateIndex = notImplementedStates.indexOf(state);
    if (implementedStateIndex !== -1) {
      notImplementedStates.splice(implementedStateIndex, 1);
    }
  }
  notImplementedStates.forEach(notImplementedState => {
    const liEl = document.createElement("li");
    liEl.classList.add("icon-not-implemented");
    liEl.classList.add("not-applicable");
    const iEl = document.createElement("i");
    const stateTextNode = document.createTextNode(notImplementedState);
    iEl.className = "icon icon-sm";
    iEl.style.setProperty("mask-image", NOT_AVAILABLE_ICON);
    liEl.appendChild(iEl);
    liEl.appendChild(stateTextNode);
    ulElement.appendChild(liEl);
  });
  return ulElement;
};
const createIconsGridItem = (itemName, itemSatesObject) => {
  const iconsGridItem = document.createElement("div");
  iconsGridItem.className = "icons-grid__item";
  // item title
  const title = createItemTitle(itemName);
  // list
  const statesList = createIconsStatesList(itemSatesObject);
  iconsGridItem.appendChild(title);
  iconsGridItem.appendChild(statesList);
  return iconsGridItem;
};

/* - - - - - - - - - - - - - - - - - - - -
Render Multicolor or Monochrome
- - - - - - - - - - - - - - - - - - - - */

const renderMulticolorArticle = (categoryIcons, categoryIcon) => {
  const articleEl = createArticle(iconName);
  const articleMailEl = createArticleMain();
  const articleContent = createArticleContent();
  const iconsGridEl = createIconsGrid();
  for (let color in iconColorsObject) {
    const gridItemEl = createIconsGridItem(color, iconColorsObject[color]);
    iconsGridEl.appendChild(gridItemEl);
  }
  articleContent.appendChild(iconsGridEl);
  articleMailEl.appendChild(articleContent);
  articleEl.appendChild(articleHeaderEl);
  articleEl.appendChild(articleMailEl);
  return articleEl;
};

const renderMonochromeArticle = (iconName, iconColorsObject) => {
  const articleEl = createArticle(iconName);
  const articleHeaderEl = createArticleHeader();
  const articleMailEl = createArticleMain();
  const articleContent = createArticleContent();
  const iconsGridEl = createIconsGrid();
  for (let color in iconColorsObject) {
    const gridItemEl = createIconsGridItem(color, iconColorsObject[color]);
    iconsGridEl.appendChild(gridItemEl);
  }
  articleContent.appendChild(iconsGridEl);
  articleMailEl.appendChild(articleContent);
  articleEl.appendChild(articleHeaderEl);
  articleEl.appendChild(articleMailEl);
  return articleEl;
};

/* - - - - - - - - - - - - - - - - - - - -
Main function
- - - - - - - - - - - - - - - - - - - - */

const generateIconsForShowcase = () => {
  const designSystemIcons = MERCURY_ASSETS.icons;
  if (Object.keys(designSystemIcons).length === 0) {
    return;
  }

  // For each category...
  for (let category in designSystemIcons) {
    const categoryIcons = designSystemIcons[category];
    if (Object.keys(categoryIcons).length === 0) {
      continue;
    }

    // createSection = .section + .section__header + .section__title
    let sectionEl = createSection(category);
    let sectionArticlesContainerEl = createSectionArticlesContainer();

    // For each icon of the current category...
    for (let icon in categoryIcons) {
      if (Object.keys(icon).length === 0) {
        continue;
      }

      // is this monochrome or multicolor?
      // if it is multicolor, the first icon property should have a property called "name"
      // else it is a monochrome
      const iconFirstPropertyName = Object.keys(icon)[0];
      const isMultiColor = icon[iconFirstPropertyName].hasOwnProperty("name");

      if (isMultiColor) {
        const multicolorArticle = renderMulticolorArticle(
          icon,
          categoryIcons[icon]
        );
        sectionArticlesContainerEl.appendChild(multicolorArticle);
      } else {
        // is monochrome
        const monochromeArticle = renderMonochromeArticle(
          icon,
          categoryIcons[icon]
        );
        sectionArticlesContainerEl.appendChild(monochromeArticle);
      }
    }
    sectionEl.appendChild(sectionArticlesContainerEl);
    CONTAINER_EL.appendChild(sectionEl);
  }
};
generateIconsForShowcase();
