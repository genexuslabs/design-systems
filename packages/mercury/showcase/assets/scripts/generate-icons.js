/*
Explanation: 

- multicolor: There is one article for all the icons
- monochrome: There is one article for each color state

- - - - - - - - - - - - - - - - - - - - - - - - - -

multicolor: 

section 
    section__header
        section__title
    section__articles-container
        article (just one)
            article__main
                article__content
                    icons-grid
                        icons-grid__item
                            icons-grid__item-title (icon name)
                            icons-grid__list

- - - - - - - - - - - - - - - - - - - - - - - - - -

monochrome: 

section 
    section__header
        section__title
    section__articles-container
        article (one article per icon)
            article__header * 
                article__title * (icon name)
            article__main
                article__content
                    icons-grid
                        icons-grid__item
                            icons-grid__item-title (color state)
                            icons-grid__list

- - - - - - - - - - - - - - - - - - - - - - - - - -
*/

import { MERCURY_ASSETS } from "./assets/MERCURY_ASSETS-test.js";
const CONTAINER_EL = document.querySelector(".container");

/* - - - - - - - - - - - - - - - - - - - -
Helper Render Functions
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
const createIconsGridItem = () => {
  const iconsGridItem = document.createElement("div");
  iconsGridItem.className = "icons-grid__item";
  return iconsGridItem;
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
  }
  return ulElement;
};

/* - - - - - - - - - - - - - - - - - - - -
Main function
- - - - - - - - - - - - - - - - - - - - */

const generateIconsForShowcase = () => {
  const designSystemIcons = MERCURY_ASSETS.icons;
  if (Object.keys(designSystemIcons).length === 0) {
    return;
  }

  for (let category in designSystemIcons) {
    const categoryIcons = designSystemIcons[category];
    if (Object.keys(categoryIcons).length === 0) {
      continue;
    }

    // CATEGORIES
    // .section + .section__header + .section__title
    let sectionEl = createSection(category);

    let sectionArticlesContainerEl = createSectionArticlesContainer();
    let articleEl = createArticle();
    let articleMainEl = createArticleMain();
    let articleContentEl = createArticleContent();
    let iconsGridEl = createIconsGrid();

    // loop through the icons of the current category:
    for (let categoryIcon in categoryIcons) {
      if (Object.keys(categoryIcon).length === 0) {
        continue;
      }

      // CATEGORIES ICONS
      const iconsGridItemEl = createIconsGridItem();
      const icon = categoryIcons[categoryIcon];

      // is this monochrome or multicolor?
      // if it is multicolor, the first icon property should have a property called "name"
      // else it is a monochrome
      const iconFirstPropertyName = Object.keys(icon)[0];
      const isMultiColor = icon[iconFirstPropertyName].hasOwnProperty("name");
      if (isMultiColor) {
        // is multicolor
        const listTitleEl = createItemTitle(categoryIcon);
        const statesListEl = createIconsStatesList(categoryIcons[categoryIcon]);
        iconsGridItemEl.appendChild(listTitleEl);
        iconsGridItemEl.appendChild(statesListEl);
        iconsGridEl.appendChild(iconsGridItemEl);
        articleContentEl.appendChild(iconsGridEl);
        articleMainEl.appendChild(articleContentEl);
        articleEl.appendChild(articleMainEl);
        sectionArticlesContainerEl.appendChild(articleEl);
        sectionEl.appendChild(sectionArticlesContainerEl);
      } else {
        // // is monochrome
        const articleHeaderEl = createArticleHeader();
        for (let iconColor in icon) {
          const listTitleEl = createItemTitle(iconColor);
          const statesListEl = createIconsStatesList(icon[iconColor]);
          iconsGridItemEl.appendChild(listTitleEl);
          iconsGridItemEl.appendChild(statesListEl);
          iconsGridEl.appendChild(iconsGridItemEl);
          articleContentEl.appendChild(iconsGridEl);
          articleMainEl.appendChild(articleContentEl);
          articleEl.appendChild(articleHeaderEl);
          articleEl.appendChild(articleMainEl);
        }
        sectionArticlesContainerEl.appendChild(articleEl);
        sectionEl.appendChild(sectionArticlesContainerEl);
      }
    }
    CONTAINER_EL.appendChild(sectionEl);
  }
};
generateIconsForShowcase();

// --icon__objects_attribute--disabled);
