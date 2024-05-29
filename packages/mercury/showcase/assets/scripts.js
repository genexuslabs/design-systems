const HTML = document.querySelector("html");
const HEAD = document.head;
const BODY = document.querySelector("body");

const includeStyles = () => {
  //main styles
  const mainStylesLink = document.createElement("link");
  mainStylesLink.rel = "stylesheet";
  mainStylesLink.href = "./assets/styles-main.css";
  HEAD.appendChild(mainStylesLink);

  //aside styles
  const asideStylesLink = document.createElement("link");
  asideStylesLink.rel = "stylesheet";
  asideStylesLink.href = "./assets/styles-aside.css";
  HEAD.appendChild(asideStylesLink);

  //mercury styles
  const mercuryLink = document.createElement("link");
  mercuryLink.rel = "stylesheet";
  mercuryLink.href = "../dist/css/mercury.css";
  HEAD.appendChild(mercuryLink);
};

const includeChameleon = () => {
  const chameleonScript = document.createElement("script");
  chameleonScript.src =
    "https://unpkg.com/@genexus/chameleon-controls-library@latest/dist/chameleon/chameleon.esm.js";
  chameleonScript.type = "module";
  HEAD.appendChild(chameleonScript);
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

const createSidebar = () => {};

includeStyles();
includeChameleon();
setScheme();
addGoogleFonts();
toggleRTLBtn();
