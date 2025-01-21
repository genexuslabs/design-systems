# Mercury Design System

Mercury Design System is a robust and scalable solution designed to improve product development. It's implemented over [Chameleon](https://github.com/genexuslabs/chameleon-controls-library) a library of white-label, highly-customizable and reusable web components, which implements all components necessaries for the Mercury DS.

**Chameleon** works on every framework since it's a library of web components (the standard for creating components in the web) and provides the following features:

- It build with accessibility in mind.
- Tiny bundle size.
- Blazing fast performance.
- Full RTL and internationalization support.
- Open source.

## Contents

- [1. Installation](#1-installation)

- [2. Usage](#2-usage)

  - [2.1. Copy icons and custom fonts](#21-copy-icons-and-custom-fonts)
    - [2.1.1. Copying assets with Vite](#211-copying-assets-with-vite)
    - [2.1.2. Copying assets with StencilJS](#212-copying-assets-with-stenciljs)
  - [2.2. Create the CSS bundles](#22-creating-the-css-bundles)
    - [2.2.1. Using the CLI to create the CSS bundles](#221-using-the-cli-to-create-the-bundles)
    - [2.2.2. Using SASS to transpile the CSS bundles](#222-generating-the-css-using-sass)
    - [2.2.3. Using already generated CSS bundles](#223-using-already-generated-css)
  - [2.3. Register Mercury and Chameleon utilities](#23-register-mercury-and-chameleon-utilities)
  - [2.4. Style the base application](#24-style-the-base-application)
  - [2.5. Style the components with the CSS bundles](#25-style-the-components-with-the-css-bundles)

- [3. CLI flags](#3-cli-flags)

## 1. Installation

```bash
npm i @genexus/mercury
```

s

## 2. Usage

This repository provides the following assets to implement the Mercury DS:

- Custom fonts
- Icons
- CSS to style Chameleon component.

The CSS is divided by bundles, where each bundle contains the CSS to style a component. For example, to style a `button` we have the `components/button` bundle, to style the `ch-checkbox` we have the `components/checkbox`, and so on.

### 2.1. Copy icons and custom fonts

Custom fonts and icons are distributed under the following folders:

- `<path to node_modules>/@genexus/mercury/dist/assets/fonts`
- `<path to node_modules>/@genexus/mercury/dist/assets/icons`

To use these assets, we recommend copying them statically, that is, do not track these assets in your repository sources, only copy them to the dev server and prod builds.

In the following sections we provide examples of how to copy the assets with different build tools.

### 2.1.1. Copying assets with Vite

First, install `vite-plugin-static-copy`:

```bash
npm i vite-plugin-static-copy --save-dev
```

```ts
// vite.config.ts
import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "node_modules/@genexus/mercury/dist/assets",
          dest: "./" // Path to your assets folder
        }
      ]
    })
  ]
});
```

### 2.1.2. Copying assets with StencilJS

When building web components with the StencilJS compiler, the assets can be copied using the copy tasks that provides StencilJS:

```ts
// stencil.config.ts
import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "your-name-space",
  outputTargets: [
    {
      type: "dist",
      copy: [
        {
          src: "../node_modules/@genexus/mercury/dist/assets",
          dest: "assets" // Path to your assets folder
        }
      ]
    },
    {
      type: "www",
      serviceWorker: null,
      copy: [
        {
          src: "../node_modules/@genexus/mercury/dist/assets",
          dest: "assets" // Path to your assets folder
        }
      ]
    }
  ]
};
```

### 2.2. Create the CSS bundles

After you have defined the path for the icons and custom fonts, you must create the CSS bundles with the path to those assets.

In the following sections we provide examples of how to create these bundles.

### 2.2.1. Using the CLI to create the CSS bundles

> [!IMPORTANT]  
> This is the way we recommend to create the bundles.

Mercury exposes a CLI to automate the creation of bundles. This CLI comes with the installation of the `@genexus/mercury` dependency.

Usage:

```bash
# Command line
npx mercury <flags>

# package.json script
"build.scss": "mercury <flags>"
```

Consult the [CLI flags](#cli-flags) section to read the complete documentation for the CLI.

Using the CLI:

1. Add a `"build.scss"` script in your package.json and include the paths where the icons and fonts will be copied, also include the `outDir` path where the CSS will be generated.

   For example:

   ```json
   "build.scss": "mercury --i=/assets/icons/ --f=/assets/fonts/ --gl --outDir=src/assets/generated/"
   ```

2. Use the `"build.scss"` script before building your application (dev server and prod build).

   For example:

   ```json
   "dev": "npm run build.scss && ...",
   "start": "npm run build.scss && ...",
   "build": "npm run build.scss && ..."
   ```

3. Before using any Mercury or Chameleon utility, you must register the bundle mapping. This mapping allows Mercury to map the bundle names (for example, `components/button`) with the real name of the CSS file (for example, `components/button-9f82641938b85445.css`).

   **IMPORTANT**: Run this JavaScript before using any Mercury or Chameleon utilities.

   ```ts
   import { setBundleMapping } from "@genexus/mercury/dist/bundles";

   // This path is generated in the same directory as the one specified in the CLI --outDir flag
   import { bundleToHashMappings } from "<path to the file>/bundle-to-hash-mappings";

   setBundleMapping(bundleToHashMappings);

   // Other Mercury and Chameleon utilities...
   ```

### 2.2.2. Using SASS to transpile the CSS bundles

> [!IMPORTANT]  
> We don't recommend this way, because the CLI does this under the hood in a much better and faster way. Also, this way does not hash the generated CSS, which leads to cache issues when re-deploying your application after updating your version of Mercury.

1.  Install `sass` dependency to transpile the bundles.

    ```bash
    npm i -D sass
    ```

2.  Add a config file (called `config.scss`) in your project to determine the path to the assets.  
    Include the following configuration:

    ```scss
    $icons-path: "/assets/custom/path/icons/";
    $font-face-path: "/assets/custom/path/fonts/";
    $globant-colors: false;
    ```

3.  Run the following command to transpile the bundles with the new path for the assets:

    ```bash
    npx sass --load-path=<path to config.scss directory> --no-source-map --style compressed node_modules/@genexus/mercury/dist/bundles/scss:untracked-folder/bundles
    ```

    For example:

    ```bash
    npx sass --load-path=src --no-source-map --style compressed node_modules/@genexus/mercury/dist/bundles/scss:src/assets/generated
    ```

### 2.2.3. Using already generated CSS bundles

> [!IMPORTANT]  
> We don't recommend this way, because the generated CSS contains fixed paths for the assets and the CSS names don't contain a hash, which leads to cache issues when re-deploying your application after updating your version of Mercury.
> We only include this case, because in some scenarios it can facilitate the initialization with Mercury.

1. Copy the `<path to node_modules>/@genexus/mercury/dist/bundles/css` content to the `outDir` where the CSS will be.

### 2.3. Register Mercury and Chameleon utilities

Chameleon and Mercury export utilities to facilitate the usage of icons. If you are using Mercury icons, do the following:

```ts
import { registryProperty } from "@genexus/chameleon-controls-library/dist/collection";
import { getImagePathCallbackDefinitions } from "@genexus/mercury/assets-manager.js";
import { registerMercury } from "@genexus/mercury/register-mercury.js";

// Register the default value for the getImagePathCallback property in all Chameleon
// components. This implementation allows us to remove the need for binding the
// getImagePathCallback property in all Chameleon controls that must render icons.
registryProperty("getImagePathCallback", getImagePathCallbackDefinitions);

// It registers a mapping between the icons metadata and its path.
registerMercury();
```

### 2.4. Style the base application

### 2.5. Style the components with the CSS bundles

## 3. CLI flags

Flags:
| Flag | Description |
| -- | -- |
| `--globant` <br/><br/> `--gl` <br/><br/> `-gl` | If specified, the generated CSS will use the tokens for the Mercury Globant variant. |
| `--icons-path=path` <br/><br/>`--icons=path` <br/><br/>`--i=path` <br/><br/>`-i=path` | Allows you to customize the base path for the icons. If not specified, `./assets/icons/` will be used. |
| `--font-face-path=path` <br/><br/>`--font-face=path` <br/><br/>`--f=path` <br/><br/>`-f=path` | Allows you to customize the base path for the custom fonts. If not specified, `./assets/fonts/` will be used. |
| `--avoid-hash=bundle1,bundle2,...` <br/><br/>`--ah=bundle1,bundle2,...` <br/><br/>`-ah=bundle1,bundle2,...` | Receives a set of comma-separated values, where each value is a bundle. Allows you to avoid the creating the hash for the provided bundles. |
| `--outDir=path` <br/><br/>`--outdir=path` <br/><br/>`--o=path` <br/><br/>`-o=path` | Allows you to customize the path where the CSS files will be created. If not specified, `./mercury/` will be used. |
