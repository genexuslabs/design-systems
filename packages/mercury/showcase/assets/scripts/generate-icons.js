import { MERCURY_ASSETS } from "./assets/MERCURY_ASSETS.js";
const CONTAINER_EL = document.querySelector(".container");
const NOT_AVAILABLE_ICON = `url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgMzAgMzAiIHdpZHRoPSIzMHB4IiBoZWlnaHQ9IjMwcHgiPjxwYXRoIGQ9Ik0gMTUgMyBDIDExLjc4MzA1OSAzIDguODY0MTk4MiA0LjI4MDc5MjYgNi43MDcwMzEyIDYuMzQ5NjA5NCBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgNi4zNDc2NTYyIDYuNzA3MDMxMiBDIDQuMjc5Mzc2NiA4Ljg2NDEwNzEgMyAxMS43ODM1MzEgMyAxNSBDIDMgMjEuNjE1NTcyIDguMzg0NDI3NiAyNyAxNSAyNyBDIDE4LjIxMDAwNyAyNyAyMS4xMjM0NzUgMjUuNzI0OTk1IDIzLjI3OTI5NyAyMy42NjQwNjIgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIzLjY2MjEwOSAyMy4yODEyNSBDIDI1LjcyNDE2OCAyMS4xMjUyMzUgMjcgMTguMjEwOTk4IDI3IDE1IEMgMjcgOC4zODQ0Mjc2IDIxLjYxNTU3MiAzIDE1IDMgeiBNIDE1IDUgQyAyMC41MzQ2OTIgNSAyNSA5LjQ2NTMwNzkgMjUgMTUgQyAyNSAxNy40MDYzNyAyNC4xNTUxNzMgMTkuNjA5MDYyIDIyLjc0NjA5NCAyMS4zMzIwMzEgTCA4LjY2Nzk2ODggNy4yNTM5MDYyIEMgMTAuMzkwOTM4IDUuODQ0ODI3NCAxMi41OTM2MyA1IDE1IDUgeiBNIDcuMjUzOTA2MiA4LjY2Nzk2ODggTCAyMS4zMzIwMzEgMjIuNzQ2MDk0IEMgMTkuNjA5MDYyIDI0LjE1NTE3MyAxNy40MDYzNyAyNSAxNSAyNSBDIDkuNDY1MzA3OSAyNSA1IDIwLjUzNDY5MiA1IDE1IEMgNSAxMi41OTM2MyA1Ljg0NDgyNzQgMTAuMzkwOTM4IDcuMjUzOTA2MiA4LjY2Nzk2ODggeiIvPjwvc3ZnPg==)`;

/* - - - - - - - - - - - - - - - - - - - -
On colors mapping
- - - - - - - - - - - - - - - - - - - - */
// the following "on" colors are not definitive.
// they should be validated with the designer.
const ON_COLORS = {
  "on-primary": "--mer-accent__primary",
  "on-surface": "--mer-color__surface",
  "on-message": "--mer-color__message-yellow--100",
  "on-elevation": "--mer-surface__elevation--01",
  "on-disabled": "--mer-accent__primary--disabled"
};

/* - - - - - - - - - - - - - - - - - - - -
Multicolors Array
- - - - - - - - - - - - - - - - - - - - */
// This array contains the multicolor categories names
// Is used to render the icon as multicolor, since it has
// some differences with the monochrome icon.
const MULTI_COLOR_CATEGORIES = [
  "objects",
  "controls",
  "editing-structures",
  "general",
  "gx-server",
  "gx-test",
  "objects-parts",
  "patterns",
  "patterns-default-associated"
];

/* - - - - - - - - - - - - - - - - - - - -
Icons descriptions mapping
- - - - - - - - - - - - - - - - - - - - */
const ICONS_DESCRIPTIONS = {
  "window-tools":
    "This category includes icons related to various tools and utilities used within the GeneXus development environment. These tools assist developers in managing and configuring different aspects of their projects, enhancing productivity and streamlining workflow within the GeneXus platform.",

  "patterns-default-associated":
    "Icons in this category represent default patterns that are automatically associated with certain functionalities within GeneXus. These patterns simplify the development process by providing pre-defined structures and behaviors that can be easily implemented across various parts of an application.",

  patterns:
    "The patterns category encompasses a range of design patterns that can be applied to GeneXus projects. These patterns help standardize development practices, ensuring consistency and efficiency when creating applications. They cover common scenarios and workflows, offering reusable solutions to common problems.",

  "object-parts":
    "This category includes icons representing various parts of objects within GeneXus. Objects in GeneXus are the building blocks of applications, and this category helps identify different components or sections of these objects, aiding developers in organizing and structuring their applications.",

  objects:
    "Icons under the objects category represent the core elements that make up GeneXus applications. Objects are essential units of functionality, including data structures, user interfaces, and business logic, which together define the behavior and appearance of an application.",

  navigation:
    "The navigation category features icons related to the navigation of applications and the GeneXus development environment. These icons help developers design and implement user-friendly navigation flows, ensuring that users can move seamlessly through different sections of an application.",

  menus:
    "This category is dedicated to icons representing menus within applications. Menus are crucial for organizing and presenting options to users, and these icons help in designing intuitive and accessible menus that enhance the overall user experience.",

  "gx-test":
    "Icons in the gx-test category are related to testing tools and features within GeneXus. Testing is a critical phase in the development process, and these icons represent the various tools and functionalities that help ensure the quality and reliability of applications developed with GeneXus.",

  "gx-server":
    "The gx-server category includes icons associated with GeneXus Server, a tool that facilitates collaboration and version control in GeneXus projects. These icons help represent different server-related actions, such as committing changes, updating versions, and managing project repositories.",

  general:
    "This category covers a broad range of icons that don't fit into specific categories but are essential for various general tasks and functionalities within GeneXus. These icons provide visual cues for a wide array of operations and actions in the development environment.",

  "gemini-tools":
    "Icons in the gemini-tools category are linked to tools that are part of the Gemini framework within GeneXus. These tools provide specialized functionalities for specific tasks, aiding developers in extending the capabilities of their applications and enhancing their workflows.",

  "editing-structures":
    "The editing-structures category includes icons related to the creation and modification of data structures within GeneXus. These icons assist developers in defining and managing the underlying data models that power their applications, ensuring that data is organized and accessible.",

  controls:
    "Icons under the controls category represent various UI controls that can be implemented in GeneXus applications. These controls include buttons, input fields, dropdowns, and other interactive elements that are essential for building user interfaces.",

  bpm: "The bpm category features icons related to Business Process Management (BPM) within GeneXus. BPM tools help in designing, automating, and optimizing business processes, and these icons represent the various elements and actions involved in managing and executing workflows."
};

/* - - - - - - - - - - - - - - - - - - - -
Helper Render Functions (Elements)
- - - - - - - - - - - - - - - - - - - - */

const createSection = iconCategory => {
  const sectionEl = document.createElement("section");
  sectionEl.setAttribute("id", iconCategory);
  sectionEl.className = "section";
  // description
  const sectionDescriptionEl = document.createElement("p");
  sectionDescriptionEl.classList.add("section__description");
  sectionDescriptionEl.textContent = ICONS_DESCRIPTIONS[iconCategory];
  // header
  const headerElement = document.createElement("header");
  headerElement.className = "section__header";
  // title
  const titleElement = document.createElement("h1");
  titleElement.className = "section__title";
  titleElement.textContent = iconCategory;
  // appends
  headerElement.appendChild(titleElement);
  headerElement.appendChild(sectionDescriptionEl);
  sectionEl.appendChild(headerElement);
  return sectionEl;
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
const createMonochromeIconsStatesList = (statesObject, itemName) => {
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

    if (itemName.includes("on-")) {
      // some monochrome icons are expected to be applied on specific background colors.
      // these icons color begin with "on". ie.: "on-surface".
      const suffix = state !== "enabled" ? `--${state}` : "";
      const color = `${ON_COLORS[itemName]}${suffix}`;
      iEl.style.backgroundColor = `var(${color})`;
    }

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
const createMulticolorIconsStatesList = (statesObject, itemName) => {
  // list
  const ulElement = document.createElement("ul");
  ulElement.className = "icons-grid__list";
  // list items
  let states = ["enabled", "hover", "active", "disabled"];
  for (let state in statesObject) {
    const customVar = `var(--icon__${statesObject[state].name})`;
    const liEl = document.createElement("li");
    const iEl = document.createElement("i");
    const stateTextNode = document.createTextNode(state);
    iEl.className = "icon icon-sm";
    iEl.style.setProperty("--icon-path", customVar);

    if (itemName.includes("on-")) {
      // some monochrome icons are expected to be applied on specific background colors.
      // these icons colors begin with "on". ie.: "on-surface".
      const suffix = state !== "enabled" ? `--${state}` : "";
      const color = `${ON_COLORS[itemName]}${suffix}`;
      iEl.style.backgroundColor = `var(${color})`;
    }

    liEl.appendChild(iEl);
    liEl.appendChild(stateTextNode);
    ulElement.appendChild(liEl);
  }

  return ulElement;
};

const createIconsGridItem = (itemName, itemStatesObject, isMonochrome) => {
  const iconsGridItem = document.createElement("div");
  iconsGridItem.className = "icons-grid__item";
  // item title
  const title = createItemTitle(itemName);
  // list
  let statesList;
  if (isMonochrome) {
    statesList = createMonochromeIconsStatesList(itemStatesObject, itemName);
  } else {
    statesList = createMulticolorIconsStatesList(itemStatesObject, itemName);
  }

  iconsGridItem.appendChild(title);
  iconsGridItem.appendChild(statesList);
  return iconsGridItem;
};

/* - - - - - - - - - - - - - - - - - - - -
Render Multicolor or Monochrome
- - - - - - - - - - - - - - - - - - - - */

const renderMulticolorArticle = categoryIcons => {
  const articleEl = createArticle();
  const articleMailEl = createArticleMain();
  const articleContent = createArticleContent();
  const iconsGridEl = createIconsGrid();
  for (let icon in categoryIcons) {
    const iconStates = categoryIcons[icon];
    const gridItemEl = createIconsGridItem(icon, iconStates, false);
    iconsGridEl.appendChild(gridItemEl);
    iconsGridEl.appendChild(gridItemEl);
  }

  articleContent.appendChild(iconsGridEl);
  articleMailEl.appendChild(articleContent);
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
    const gridItemEl = createIconsGridItem(
      color,
      iconColorsObject[color],
      true
    );
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
    sectionEl.setAttribute("data-title", category);
    sectionEl.setAttribute("data-nav", true);
    let sectionArticlesContainerEl = createSectionArticlesContainer();

    // is this monochrome or multicolor?
    const isMultiColor = MULTI_COLOR_CATEGORIES.includes(category);
    if (isMultiColor) {
      // One article for each category
      const multicolorArticle = renderMulticolorArticle(categoryIcons);
      sectionArticlesContainerEl.appendChild(multicolorArticle);
    } else {
      // One article for each icon
      for (let icon in categoryIcons) {
        if (Object.keys(icon).length === 0) {
          continue;
        }

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
