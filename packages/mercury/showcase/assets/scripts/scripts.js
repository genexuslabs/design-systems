// configuration
// constants
const _URL = new URL(window.location.href);
const PAGE_URL = `${_URL.origin}${_URL.pathname}`;
// sections as articles, is for rendering sections on the sidebar nav, as if
// they were articles. This feature was created for the /icons showcase page,
// where we just want to include navigation for the sections, but it makes sense
// to display the list items as articles, because these are the only items.
const NAV_SECTIONS_AS_ARTICLES = document.body.hasAttribute(
  "data-sections-as-articles"
);
const ARTICLE_HEADER_CLASS = ".article__header";
const SECTION_SELECTOR = ".section";
const SECTION_TITLE_SELECTOR = ".section__title";
const ARTICLE_SELECTOR = ".article";
const SECTION_SIDEBAR_SELECTOR = ".section[data-nav]";
const ARTICLE_SIDEBAR_SELECTOR = ".article[data-nav]";
const DATA_TITLE_SELECTOR = "data-title";
const SIDEBAR_CHILD_LIST_CLASS = "sidebar__list--child";
let SIDEBAR_NAV; // A reference to the sidebar nav.
let CONTAINER_REF;
// code and ch-code
const ARTICLE_CODE_SELECTOR = ".article__code";
const CH_CODE_VALUE_LET_NAME = "chCodeValue";
const BUNDLE_SELECTOR = "data-bundle";

// references
const HTML = document.querySelector("html");
const HEAD = document.head;
const BODY = document.querySelector("body");
const SIDEBAR_DATA_ATTR = "data-sidebar";
const DATA_SCALES_ATTR = "data-sidebar";
const MAIN_SELECTOR = ".main";
let CURRENT_PAGE_NAV_ITEM; // a reference the navigation item for the actual actual page.
let PAGE_SECTIONS; // a reference to all the page ".article"
let PAGE_ARTICLES; // a reference to all the page ".article"

const includeFavicon = () => {
  const linkElement = document.createElement("link");
  linkElement.rel = "icon";
  linkElement.type = "image/png";
  linkElement.href = "./assets/images/favicon.png";
  linkElement.sizes = "32x32";
  document.head.appendChild(linkElement);
};

const addGoogleFonts = () => {
  // Create the first link element for preconnecting to "https://fonts.googleapis.com"
  const googleApis = document.createElement("link");
  googleApis.rel = "preconnect";
  googleApis.href = "https://fonts.googleapis.com";

  // Create the second link element for preconnecting to "https://fonts.gstatic.com" with crossorigin attribute
  const googleStatic = document.createElement("link");
  googleStatic.rel = "preconnect";
  googleStatic.href = "https://fonts.gstatic.com";
  googleStatic.setAttribute("crossorigin", "");

  // Create the third link element for importing JetBrains font
  const jetBrains = document.createElement("link");
  jetBrains.rel = "stylesheet";
  jetBrains.href =
    "https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,500;1,500&display=swap";

  // Append the link elements to the document head
  HEAD.appendChild(googleApis);
  HEAD.appendChild(googleStatic);
  HEAD.appendChild(jetBrains);
};

const toggleRTLBtn = () => {
  const toggleRTLBtn = document.getElementById("toggle-rtl-btn");
  if (toggleRTLBtn) {
    toggleRTLBtn.addEventListener("click", () => {
      const dir = HTML.getAttribute("dir");
      if (dir && dir === "ltr") {
        HTML.setAttribute("dir", "rtl");
      } else if (dir && dir === "rtl") {
        HTML.setAttribute("dir", "ltr");
      }
    });
  }
};

const getNavbarItems = () => {
  // Fetch the list of the showcase html pages.
  return fetch("./assets/json/navbar-items.json")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
};

const includeSidebarPageInternalNav = () => {
  // This is the navigation items for the current page articles.
  // Let's call this the internal navigation.
  const includeSidebar = BODY.hasAttribute(SIDEBAR_DATA_ATTR);
  if (includeSidebar && CURRENT_PAGE_NAV_ITEM) {
    // CURRENT_PAGE_NAV_ITEM is a reference to the item on the sidebar
    // that refers to the actual page.

    SIDEBAR_SECTIONS = document.querySelectorAll(SECTION_SIDEBAR_SELECTOR);
    SIDEBAR_ARTICLES = document.querySelectorAll(ARTICLE_SIDEBAR_SELECTOR);
    if (SIDEBAR_ARTICLES.length || SIDEBAR_SECTIONS.length) {
      //If there is more than one section to be added to the navigation..
      const navigationIncludesSections = SIDEBAR_SECTIONS.length > 1;
      const navigationSectionsArray = [];
      if (navigationIncludesSections && !NAV_SECTIONS_AS_ARTICLES) {
        // Create the navigation for the sections
        // Consider all sections, even the ones that are not intended to be added to the nav.
        // If The section has no data-nav attribute, it will be included in the nav without title.
        const allSections = document.querySelectorAll(SECTION_SELECTOR);
        allSections.forEach((section, i) => {
          // add a data-index for easier reference later.
          section.dataset.index = i;

          // section divider
          const navSection = document.createElement("div");
          section.classList.add("current-page__section");
          // title
          const sectionTitle =
            section.querySelector(".section__title").textContent;

          if (sectionTitle) {
            const navSectionTitleEl = document.createElement("h3");
            navSectionTitleEl.classList.add("current-page__section-title");
            navSectionTitleEl.textContent = sectionTitle;
            navSection.appendChild(navSectionTitleEl);
          }
          // list
          const navSectionList = document.createElement("ul");
          navSectionList.classList.add(SIDEBAR_CHILD_LIST_CLASS);
          navSection.appendChild(navSectionList);

          navigationSectionsArray.push(navSection);
        });
      } else if (navigationIncludesSections && NAV_SECTIONS_AS_ARTICLES) {
        SIDEBAR_ARTICLES = SIDEBAR_SECTIONS;
      }

      const pageUlEl = document.createElement("ul");
      pageUlEl.classList.add(SIDEBAR_CHILD_LIST_CLASS);
      SIDEBAR_ARTICLES.forEach(article => {
        let li;
        const hasId = article.hasAttribute("id");
        const hasTitle = article.hasAttribute(DATA_TITLE_SELECTOR);
        const isHidden = article.hasAttribute("hidden");

        if (hasId && hasTitle && !isHidden) {
          const articleId = article.getAttribute("id");
          const articleTitle = article.getAttribute(DATA_TITLE_SELECTOR);
          li = document.createElement("li");
          const a = document.createElement("a");
          a.href = `#${articleId}`;
          a.textContent = articleTitle;
          li.appendChild(a);
        }

        if (navigationIncludesSections && !NAV_SECTIONS_AS_ARTICLES) {
          const articleSection = article.closest(SECTION_SELECTOR);
          const articleSectionIndexString = articleSection.dataset.index;
          const articleSectionIndex = parseInt(articleSectionIndexString);
          const childList = navigationSectionsArray[
            articleSectionIndex
          ].querySelector(`.${SIDEBAR_CHILD_LIST_CLASS}`);
          childList.appendChild(li);
        } else {
          pageUlEl.appendChild(li);
        }
      });

      if (navigationIncludesSections && !NAV_SECTIONS_AS_ARTICLES) {
        navigationSectionsArray.forEach((navigationSection, i) => {
          CURRENT_PAGE_NAV_ITEM.appendChild(navigationSection);
        });
      } else {
        CURRENT_PAGE_NAV_ITEM.appendChild(pageUlEl);
      }
    }
  }
};

const addArticleTitles = () => {
  if (!PAGE_ARTICLES) {
    PAGE_ARTICLES = document.querySelectorAll(ARTICLE_SELECTOR);
  }
  if (PAGE_ARTICLES.length) {
    const moreThanOne = PAGE_ARTICLES.length > 1;
    PAGE_ARTICLES.forEach((article, i) => {
      const title = article.getAttribute(DATA_TITLE_SELECTOR);
      const header = article.querySelector(ARTICLE_HEADER_CLASS);
      if (title && header) {
        const articleTitleEl = document.createElement("h2");
        articleTitleEl.classList.add("article__title");
        articleTitleEl.textContent = title;

        // Add a number to each item to make it easier to refer to.
        // Make it a separate element, to allow different style.
        // This only makes sense if there is more than one .article[data-nav]
        if (moreThanOne) {
          const numberTag = document.createElement("span");
          numberTag.classList.add("article__number-id");
          numberTag.textContent = `${i + 1}`;
          articleTitleEl.insertBefore(numberTag, articleTitleEl.firstChild);
        }

        // Add an id to the article, to allow sharing the page url with an anchor to this article.
        const articleId = generateArticleId(title, i);
        if (articleId) {
          article.setAttribute("id", articleId);
        }

        header.insertBefore(articleTitleEl, header.firstChild);
      }
    });
  }
};

const addTitleAnchors = () => {
  if (!PAGE_ARTICLES) {
    PAGE_ARTICLES = document.querySelectorAll(ARTICLE_SELECTOR);
  }
  if (PAGE_ARTICLES.length) {
    PAGE_ARTICLES.forEach(article => {
      const header = article.querySelector(ARTICLE_HEADER_CLASS);
      const articleId = article.getAttribute("id");
      if (header && articleId) {
        header.addEventListener("click", () => {
          copyToClipBoard(`${PAGE_URL}#${articleId}`);
        });
      }
    });
  }
};

const generateArticleId = (title, i) => {
  // the index prevents duplicate ids if the article title is the same in more
  // than one case (who knows).
  return `${title.toLowerCase().replace(/ /g, "-")}-${i}`;
};

const includeSidebarNav = async () => {
  // This is the navigation items for the showcase html pages.
  // Let's call this the external navigation.
  const includeSidebar = BODY.hasAttribute(SIDEBAR_DATA_ATTR);
  if (includeSidebar) {
    const renderSidebarItems = itemsObj => {
      // get page url name to identify the navigation item
      // for this page later.
      const pageName = PAGE_URL.split("/").pop().split(".")[0];
      const listCaption = itemsObj.listCaption;
      const listItemsArr = itemsObj.items;

      // list section element
      const listSectionEl = document.createElement("section");
      listSectionEl.classList.add("sidebar__section");

      // list section title element
      let listSectionTitleEl;
      if (listCaption) {
        listSectionTitleEl = document.createElement("h2");
        listSectionTitleEl.classList.add("sidebar__section-title");
        listSectionTitleEl.textContent = listCaption;
        listSectionEl.appendChild(listSectionTitleEl);
      }

      // list element
      const ul = document.createElement("ul");
      ul.classList.add("sidebar__list");

      // sort alphabetically
      listItemsArr.sort((a, b) => {
        if (a.caption < b.caption) return -1;
        if (a.caption > b.caption) return 1;
        return 0;
      });

      listItemsArr.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.caption;

        // ¿Is this the item of the actual page?
        if (item.url.split(".")[0] === pageName) {
          CURRENT_PAGE_NAV_ITEM = li;
          li.classList.add("current-page");

          // Include chameleon URL
          if (item.chameleonUrl && item.chameleonUrl !== null) {
            includeChameleonURL(item.chameleonUrl);
          }
        }

        li.appendChild(a);
        ul.appendChild(li);
      });

      listSectionEl.appendChild(ul);
      SIDEBAR_NAV.appendChild(listSectionEl);
    };

    const navbarItems = await getNavbarItems();
    const componentsItemsObj = navbarItems?.components;
    const documentationItemsObj = navbarItems?.documentation;

    if (navbarItems && componentsItemsObj.items?.length) {
      renderSidebarItems(componentsItemsObj);
    }
    if (navbarItems && documentationItemsObj.items?.length) {
      renderSidebarItems(documentationItemsObj);
    }
  }

  if (CURRENT_PAGE_NAV_ITEM) {
    // only create internal navigation if the navigation item
    // for this page exists.
    includeSidebarPageInternalNav();
  }
};

const includeSidebar = () => {
  // the following js is credit to chat-gpt.
  // I just gave him the html, amazing!

  const includeSidebar = BODY.hasAttribute(SIDEBAR_DATA_ATTR);
  if (includeSidebar) {
    // Create aside element
    const aside = document.createElement("aside");
    aside.classList.add("sidebar");

    // Create header element
    const header = document.createElement("header");
    header.classList.add("sidebar__header");
    header.textContent = "Mercury Design System";
    aside.appendChild(header);

    // Create nav element
    SIDEBAR_NAV = document.createElement("nav");
    SIDEBAR_NAV.classList.add("sidebar__nav");
    aside.appendChild(SIDEBAR_NAV);

    // // Create footer element
    // const footer = document.createElement("footer");
    // footer.classList.add("sidebar__footer");
    // aside.appendChild(footer);

    // // Create anchor element
    // const anchor = document.createElement("a");
    // anchor.classList.add("sidebar__footer-link");
    // anchor.href = "#";
    // footer.appendChild(anchor);
    // // temporary until tokens are ready:
    // anchor.addEventListener("click", () => {
    //   alert("Tokens showcase is not ready yet!");
    // });

    // // Create span elements for footer text
    // const span1 = document.createElement("span");
    // span1.classList.add("sidebar__footer-text");
    // span1.textContent = "⚛️ The Tokens";

    // const span2 = document.createElement("span");
    // span2.classList.add(
    //   "sidebar__footer-text",
    //   "sidebar__footer-text--the-gold"
    // );
    // span2.textContent = "✨ The Gold !";

    // // Append span elements to anchor element
    // anchor.appendChild(span1);
    // anchor.appendChild(span2);

    // Prepend the aside element as the first child of the body
    const body = document.body;
    body.insertBefore(aside, body.firstChild);

    includeSidebarNav();
  }
};

const listenToCtrlCmd = () => {
  // when ctrl or cmd is pressed, if the mouse cursor is over a code block,
  // we want to display a pointer cursor, because it is on the "copy" mode.
  document.addEventListener("keydown", e => {
    if (e.key === "Control" || e.key === "Meta") {
      BODY.classList.add("ctrl-cmd-pressed");
    }
  });
  document.addEventListener("keyup", e => {
    if (e.key === "Control" || e.key === "Meta") {
      BODY.classList.remove("ctrl-cmd-pressed");
    }
  });
};

const addCopyCodeFunctionality = () => {
  const chCodes = document.querySelectorAll(".code");
  if (chCodes.length) {
    chCodes.forEach(chCode => {
      // ch-code header
      const chCodeHeader = document.createElement("div");
      chCodeHeader.classList.add("code__header");

      // data-attributes
      const dataTitle = chCode.dataset.title;
      const dataDocumentation = chCode.dataset.documentation;

      // copy code button
      const copyCodeButton = document.createElement("button");
      copyCodeButton.classList.add("code__button");
      copyCodeButton.innerText = dataTitle || "copy markup";

      // append button inside header
      chCodeHeader.appendChild(copyCodeButton);

      // insert the ch-code header before ch-code
      const codeParent = chCode.parentElement;
      codeParent.insertBefore(chCodeHeader, chCode);

      if (dataDocumentation === undefined) {
        copyCodeButton.classList.add("code__copy-button");
        // only add copy feature if it is not "documentation".
        copyCodeButton.addEventListener("click", event => {
          // assuming the copy code button is being inserted before ch-code
          // inside .code__header.
          const chCode = chCodeHeader.nextElementSibling;
          if (chCode) {
            copyToClipBoard(chCode.value);
            chCode.classList.add("code--highlight");
            setTimeout(() => {
              chCode.classList.remove("code--highlight");
            }, 200);
          }
        });
      } else {
        copyCodeButton.classList.add("code__button--documentation");
      }
    });
  }
};

const includeChameleonURL = chameleonURL => {
  if (chameleonURL && TOP_BAR) {
    const anchor = document.createElement("a");
    anchor.className = "button-tertiary chameleon-url";
    anchor.textContent = "Chameleon Reference";
    anchor.textContent = "Chameleon Reference";
    anchor.setAttribute("href", chameleonURL);
    anchor.setAttribute("target", "_blank");
    TOP_BAR.appendChild(anchor);
  }
};

const copyToClipBoard = text => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // copied successfully
    })
    .catch(err => {
      console.error("Error copying text: ", err);
    });
};

/**
 * @description this function sets for every ch-code the value, by getting the
 */
const extractCodeContent = str => {
  const match = str.match(/`([^`]*)`/);
  return match ? match[1] : null;
};
const getChCodeValues = () => {
  document.querySelectorAll(ARTICLE_CODE_SELECTOR).forEach(articleCode => {
    // Find the script tag inside each articleCode
    const script = articleCode.querySelector("script");
    const chCodeElement = articleCode.querySelector("ch-code");
    const chCodeElementHasId = chCodeElement.getAttribute("id");
    if (script && chCodeElement && !chCodeElementHasId) {
      // If chCodeElement has no id, assume that the chCode value is a string inside the script tag.
      const scriptChCode = extractCodeContent(script.textContent);
      chCodeElement.value = scriptChCode;
    }
  });
};

/**
 * @description this function includes a "Copy Bundle" that will be rendered at the top of the page.
 */
const includeBundleButton = () => {
  const bundleValue = document.body.getAttribute("data-bundle");
  const MAIN_REF = document.querySelector(MAIN_SELECTOR);

  console.log("bundleValue", bundleValue);

  if (bundleValue !== null && MAIN_REF) {
    // if bundleValue.length is 0, it means this component does not requires a bundle.
    // loading the icons is not required if the component does not requires a bundle.
    const PAGE_TITLE = document.title;
    let COPY_ICON;
    let CHECK_ICON;
    let WARNING_ICON;
    let chImage;
    let buttonCaption;

    if (bundleValue.length !== 0) {
      // Icons references
      COPY_ICON = getIconPath({
        category: "system",
        name: "copy",
        colorType: "primary"
      });
      CHECK_ICON = getIconPath({
        category: "system",
        name: "check",
        colorType: "primary"
      });
      WARNING_ICON = getIconPath({
        category: "system",
        name: "warning",
        colorType: "primary"
      });
    }

    // Create the .bundle-container
    const bundleContainer = document.createElement("header");
    bundleContainer.className = "bundle-container";

    // Create and add the ch-image element
    if (bundleValue.length !== 0) {
      chImage = document.createElement("ch-image");
      chImage.className = "icon-md";
      chImage.src = COPY_ICON;
    }

    // Create the "copy bundle" button
    const copyBundleButton = document.createElement("button");
    copyBundleButton.className = "button-tertiary button-icon-and-text";
    if (bundleValue.length !== 0) {
      buttonCaption = `Copy ${PAGE_TITLE} Bundle`;
    } else {
      buttonCaption = `No Bundle Required For ${PAGE_TITLE}`;
    }
    const buttonCaptionTextNode = document.createTextNode(buttonCaption);

    if (bundleValue.length !== 0) {
      copyBundleButton.addEventListener("click", e => {
        navigator.clipboard
          .writeText(`"${bundleValue}"`)
          .then(() => {
            chImage.nextSibling.textContent = "Bundle Copied!";
            chImage.src = CHECK_ICON;
            e.target.style.pointerEvents = "none";
          })
          .catch(err => {
            chImage.nextSibling.textContent = "Failed to Copy";
            chImage.src = WARNING_ICON;
            e.target.style.pointerEvents = "none";
          });
        setTimeout(() => {
          chImage.nextSibling.textContent = buttonCaption;
          chImage.src = COPY_ICON;
          e.target.style.pointerEvents = "auto";
        }, 1500);
      });
    }

    // Appends
    if (bundleValue.length !== 0) {
      copyBundleButton.appendChild(chImage);
      chImage.after(buttonCaptionTextNode);
    } else {
      copyBundleButton.innerText = buttonCaption;
      copyBundleButton.disabled = true;
    }
    console.log("bundleContainer", bundleContainer);
    console.log("MAIN_REF", MAIN_REF);
    bundleContainer.appendChild(copyBundleButton);
    MAIN_REF.insertBefore(bundleContainer, MAIN_REF.firstChild);
  }
};

/**
 * @description: this function includes for every section a caption at the end that indicates the end.
 */
const includeEndOfSectionCaption = () => {
  const pageSections = document.querySelectorAll(SECTION_SELECTOR);
  pageSections.forEach(section => {
    const sectionTitleEl = section.querySelector(SECTION_TITLE_SELECTOR);
    if (sectionTitleEl && sectionTitleEl.textContent.trim().length > 0) {
      const endOfSectionEl = document.createElement("p");
      endOfSectionEl.classList.add("section__end-caption");
      endOfSectionEl.textContent = `end of ${sectionTitleEl.textContent.trim()} section`;
      section.appendChild(endOfSectionEl);
    }
  });
};

/**
 * @description: this function includes a segmented control that allows picking a scale (mobile, desktop-compact, or desktop-regular).
 */
const includeScaleSelector = () => {
  const includeScales = BODY.hasAttribute("data-scales");
  const MOBILE_CLASS_SELECTOR = "mobile";
  const DESKTOP_COMPACT_CLASS_SELECTOR = "desktop-compact";
  const DESKTOP_REGULAR_CLASS_SELECTOR = "desktop-regular";
  if (TOP_BAR && includeScales) {
    const segmentedControl = document.createElement(
      "ch-segmented-control-render"
    );
    segmentedControl.classList.add("segmented-control");
    const scalesModel = [
      {
        id: MOBILE_CLASS_SELECTOR,
        caption: "mobile"
      },
      {
        id: DESKTOP_COMPACT_CLASS_SELECTOR,
        caption: "desktop compact"
      },
      {
        id: DESKTOP_REGULAR_CLASS_SELECTOR,
        caption: "desktop regular"
      }
    ];
    segmentedControl.model = scalesModel;
    segmentedControl.addEventListener("selectedItemChange", e => {
      const newScaleSelector = e.detail;
      // remove previous scale
      BODY.classList.remove(
        MOBILE_CLASS_SELECTOR,
        DESKTOP_COMPACT_CLASS_SELECTOR,
        DESKTOP_REGULAR_CLASS_SELECTOR
      );
      // set new scale
      BODY.classList.add(newScaleSelector);
    });
    TOP_BAR.appendChild(segmentedControl);

    TOP_BAR.classList.add(DESKTOP_COMPACT_CLASS_SELECTOR); // set compact scale for the top-bar
  }
};

document.addEventListener("DOMContentLoaded", function () {
  CONTAINER_REF = document.querySelector(".container");
  TOP_BAR = document.querySelector(".container__top-bar");
  if (TOP_BAR) {
    BODY.classList.add("has-top-bar");
  }
  includeFavicon();
  addGoogleFonts();
  addArticleTitles();
  addTitleAnchors();
  toggleRTLBtn();
  addCopyCodeFunctionality();
  listenToCtrlCmd();
  includeSidebar();
  getChCodeValues();
  includeBundleButton();
  includeEndOfSectionCaption();
  includeScaleSelector();
});
