// configuration
// constants
const _URL = new URL(window.location.href);
const PAGE_URL = `${_URL.origin}${_URL.pathname}`;
const ARTICLE_HEADER_CLASS = ".article__header";
const ARTICLE_SELECTOR = ".article";
const ARTICLE_SIDEBAR_SELECTOR = ".article[data-nav]";
let SIDEBAR_NAV; // A reference to the sidebar nav.
let CONTAINER_REF;
let topBarRef = null;

// references
const HTML = document.querySelector("html");
const HEAD = document.head;
const BODY = document.querySelector("body");
const SIDEBAR_DATA_ATTR = "data-sidebar";
let CURRENT_PAGE_NAV_ITEM; // a reference the navigation item for the actual actual page.
let PAGE_ARTICLES; // a reference to all the page ".article"

const includeFavicon = () => {
  const linkElement = document.createElement("link");
  linkElement.rel = "icon";
  linkElement.type = "image/png";
  linkElement.href = "./assets/images/favicon.png";
  linkElement.sizes = "32x32";
  document.head.appendChild(linkElement);
};

const setScheme = () => {
  HTML.classList.add("dark");
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
    SIDEBAR_ARTICLES = document.querySelectorAll(ARTICLE_SIDEBAR_SELECTOR);
    if (SIDEBAR_ARTICLES.length) {
      const pageUlEl = document.createElement("ul");
      pageUlEl.classList.add("sidebar__list--child");
      SIDEBAR_ARTICLES.forEach(article => {
        const hasId = article.hasAttribute("id");
        const hasTitle = article.hasAttribute("data-title");
        const isHidden = article.hasAttribute("hidden");
        if (hasId && hasTitle && !isHidden) {
          const articleId = article.getAttribute("id");
          const articleTitle = article.getAttribute("data-title");
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.href = `#${articleId}`;
          a.textContent = articleTitle;

          li.appendChild(a);
          pageUlEl.appendChild(li);
        }
      });
      CURRENT_PAGE_NAV_ITEM.appendChild(pageUlEl);
    }
  }
};

const includeTopBar = () => {
  if (CONTAINER_REF) {
    const topBarEl = document.createElement("div");
    topBarEl.className = "container__top-bar";
    CONTAINER_REF.appendChild(topBarEl);
    topBarRef = topBarEl;
  }
};

const addArticleTitles = () => {
  if (!PAGE_ARTICLES) {
    PAGE_ARTICLES = document.querySelectorAll(ARTICLE_SELECTOR);
  }
  if (PAGE_ARTICLES.length) {
    const moreThanOne = PAGE_ARTICLES.length > 1;
    PAGE_ARTICLES.forEach((article, i) => {
      const title = article.getAttribute("data-title");
      const header = article.querySelector(ARTICLE_HEADER_CLASS);
      if (title && header) {
        const articleTitleEl = document.createElement("h2");
        articleTitleEl.classList.add("article__title");
        articleTitleEl.textContent = title;

        // Add a number to each item to make it easier to refer to.
        // Make it a separate element, to allow different style.
        // This only makes sense if there is more than one .article[nav]
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

      // copy code button
      const copyCodeButton = document.createElement("button");
      copyCodeButton.classList.add("code__copy-button");
      copyCodeButton.classList.add("code__button");
      copyCodeButton.innerText = "copy markup";

      // append button inside header
      chCodeHeader.appendChild(copyCodeButton);

      // insert the ch-code header before ch-code
      const codeParent = chCode.parentElement;
      codeParent.insertBefore(chCodeHeader, chCode);

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
    });
  }
};

const includeChameleonURL = chameleonURL => {
  if (chameleonURL && topBarRef) {
    const anchor = document.createElement("a");
    anchor.className = "button-tertiary";
    anchor.textContent = "Chameleon Reference";
    anchor.textContent = "Chameleon Reference";
    anchor.setAttribute("href", chameleonURL);
    anchor.setAttribute("target", "_blank");
    topBarRef.appendChild(anchor);
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

document.addEventListener("DOMContentLoaded", function () {
  CONTAINER_REF = document.querySelector(".container");
  includeFavicon();
  addGoogleFonts();
  addArticleTitles();
  addTitleAnchors();
  setScheme();
  toggleRTLBtn();
  addCopyCodeFunctionality();
  listenToCtrlCmd();
  includeSidebar();
  includeTopBar();
  includeChameleonURL();
});
