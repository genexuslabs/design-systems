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

  - [2.1. Before starting, define the path for the CSS bundles, custom fonts and icons](#21-before-starting-define-the-path-for-the-css-bundles-custom-fonts-and-icons)
  - [2.2. Create the CSS bundles](#22-create-the-css-bundles)
    - [2.2.1. Using the CLI to create the CSS bundles](#221-using-the-cli-to-create-the-bundles)
    - [2.2.2. Using SASS to transpile the CSS bundles](#222-generating-the-css-using-sass)
    - [2.2.3. Using already generated CSS bundles](#223-using-already-generated-css)
  - [2.3. Copy the CSS bundles, custom fonts and icons to the dev and prod builds](#23-copy-the-css-bundles-custom-fonts-and-icons-to-the-dev-and-prod-builds)
    - [2.3.1. Copying assets with Angular](#231-copying-assets-with-angular)
    - [2.3.2. Copying assets with StencilJS](#232-copying-assets-with-stenciljs)
    - [2.3.3. Copying assets with Vite](#233-copying-assets-with-vite)
  - [2.4. Register Mercury and Chameleon utilities to use the icons](#24-register-mercury-and-chameleon-utilities)
  - [2.5. Style the base application](#25-style-the-base-application)
  - [2.6. Style the components with the CSS bundles](#26-style-the-components-with-the-css-bundles)
  - [2.7. Set the dark and light mode](#27-set-the-darklight-mode)

- [3. CSS bundles mapping](#3-css-bundles-mapping)

- [4. CLI flags](#4-cli-flags)

## 1. Installation

```bash
npm i @genexus/mercury
```

## 2. Usage

This repository provides the following assets to implement the Mercury DS:

- CSS to style the Chameleon components.
- Custom fonts.
- Icons.

The CSS is divided by bundles, where each bundle contains the CSS to style a component. For example, to style a `button` we have the `components/button` bundle, to style the `ch-checkbox` we have the `components/checkbox`, and so on.

Refer to the [CSS bundles](#css-bundles) section to see how each component in the Mercury DS Figma maps to a CSS bundle. This mapping is also present in each page of [showcase](https://mercury-showcase.genexus.com/).

### 2.1. Before starting, define the path for the CSS bundles, custom fonts and icons

First of all, you must define the path where the CSS bundles, custom fonts and icons will be contained in the `dist` folder of your final application.

We will refer to those paths with the following names:

| Reference                      | Meaning                                                                | Example                    |
| ------------------------------ | ---------------------------------------------------------------------- | -------------------------- |
| `{{ CSS outDir path }}`        | An untracked folder for generating the CSS of the application          | `/src/assets/mercury-css/` |
| `{{ CSS bundles final path }}` | Path in the final application where the CSS bundles will be consumed   | `/assets/css/`             |
| `{{ Fonts final path }}`       | Path in the final application where the custom fonts will be consumed  | `/assets/fonts/`           |
| `{{ Icons final path }}`       | Path in the final application where the icons bundles will be consumed | `/assets/icons/`           |

### 2.2. Create the CSS bundles

After you have defined the path for assets, you must create the CSS bundles with the path to those assets.

In the following sections we provide examples of how to create those CSS bundles.

#### 2.2.1. Using the CLI to create the CSS bundles

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
   "build.scss": "mercury --i={{ Icons final path }} --f={{ Fonts path final }} --gl --outDir={{ CSS outDir path }}"
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
   import { bundleToHashMappings } from "{{ CSS outDir path }}/bundle-to-hash-mappings";

   setBundleMapping(bundleToHashMappings);

   // Other Mercury and Chameleon utilities...
   ```

#### 2.2.2. Using SASS to transpile the CSS bundles

> [!IMPORTANT]  
> We don't recommend this way, because the CLI does this under the hood in a much better and faster way. Also, this way does not hash the generated CSS, which leads to cache issues when re-deploying your application after updating your version of Mercury.

1.  Install `sass` dependency to transpile the bundles.

    ```bash
    npm i -D sass
    ```

2.  Add a config file (called `config.scss`) in your project to determine the path to the assets.  
    Include the following configuration:

    ```scss
    $font-face-path: "{{ Fonts final path }}";
    $icons-path: "{{ Icons final path }}";
    $globant-colors: false;
    ```

3.  Run the following command to transpile the bundles with the new path for the assets:

    ```bash
    npx sass --load-path=<path to config.scss directory> --no-source-map --style compressed <path to node_modules>/@genexus/mercury/dist/bundles/scss:{{ CSS outDir path }}
    ```

#### 2.2.3. Using already generated CSS bundles

> [!IMPORTANT]  
> We don't recommend this way, because the generated CSS contains fixed paths for the assets and the CSS names don't contain a hash, which leads to cache issues when re-deploying your application after updating your version of Mercury.
> We only include this case, because in some scenarios it can facilitate the initialization with Mercury.

1. Copy the `<path to node_modules>/@genexus/mercury/dist/bundles/css` content to the `{{ CSS outDir path }}` where the CSS will be.

### 2.3. Copy the CSS bundles, custom fonts and icons to the dev and prod builds

Custom fonts and icons are distributed under the following folders:

- `<path to node_modules>/@genexus/mercury/dist/assets/fonts`
- `<path to node_modules>/@genexus/mercury/dist/assets/icons`

To use these assets with the CSS bundles, we recommend copying them statically, that is, do not track these assets in your repository sources, only copy them to the dev server and prod builds.

In the following sections we provide examples of how to copy the assets with different build tools and frameworks.

#### 2.3.1. Copying assets with Angular

```json
{
  "projects": {
    "<app name>": {
      "architect": {
        "build": {
          "options": {
            "assets": [
              {
                "glob": "**/*",
                "input": "{{ CSS outDir path }}",
                "output": "{{ CSS bundles final path }}"
              },
              {
                "glob": "**/*",
                "input": "<path to node_modules>/@genexus/mercury/dist/assets/fonts",
                "output": "{{ Fonts final path }}"
              },
              {
                "glob": "**/*",
                "input": "<path to node_modules>/@genexus/mercury/dist/assets/icons",
                "output": "{{ Icons final path }}"
              }
            ]
          }
        }
      }
    }
  }
}
```

#### 2.3.2. Copying assets with StencilJS

When building web components with the StencilJS compiler, the assets can be copied using the copy tasks that provides StencilJS:

```ts
// stencil.config.ts
import { Config } from "@stencil/core";
import { CopyTask } from "@stencil/core/internal";

const copyTasks = [
  {
    src: "{{ CSS outDir path }}",
    dest: "{{ CSS bundles final path }}"
  },
  {
    src: "<path to node_modules>/@genexus/mercury/dist/assets/fonts",
    dest: "{{ Fonts final path }}"
  },
  {
    src: "<path to node_modules>/@genexus/mercury/dist/assets/icons",
    dest: "{{ Icons final path }}"
  }
] as const satisfies CopyTask[];

export const config: Config = {
  namespace: "your-name-space",
  outputTargets: [
    {
      type: "dist",
      copy: copyTasks
    },
    {
      type: "www",
      serviceWorker: null,
      copy: copyTasks
    }
  ]
};
```

#### 2.3.3. Copying assets with Vite

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
          src: "{{ CSS outDir path }}",
          dest: "{{ CSS bundles final path }}"
        },
        {
          src: "<path to node_modules>/@genexus/mercury/dist/assets/fonts",
          dest: "{{ Fonts final path }}"
        },
        {
          src: "<path to node_modules>/@genexus/mercury/dist/assets/icons",
          dest: "{{ Icons final path }}"
        }
      ]
    })
  ]
});
```

### 2.4. Register Mercury and Chameleon utilities to use the icons

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

### 2.5. Style the base application

> [!TIP]
> For performance reason, we recommend to style the base application, using a `link` tag in the `head` of the HTML, or even inlining the base CSS into the HTML.

#### 2.5.1. Adding base styles using Vite

In Vite we can inline the base styles to improve the initial load performance.

> [!TIP]
> If the CSS bundles were created using the CLI, we recommend adding the `--avoid-hash=base/base` to avoid hashing the base CSS bundle and thus facilitating the path for the base CSS bundle.

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <style>
      @import "{{ CSS outDir path }}/base/base.css";
    </style>
  </head>
  <body></body>
</html>
```

#### 2.5.2. Adding base styles using React

> [!TIP]
> If the CSS bundles were created using the CLI, we recommend adding the `--avoid-hash=base/base` to avoid hashing the base CSS bundle and thus facilitating the path for the base CSS bundle.

```ts
// App.tsx
import "{{ CSS outDir path }}/base/base.css";
```

#### 2.5.3. Adding base styles using normal HTML

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link
      rel="stylesheet"
      crossorigin
      href="{{ CSS bundles final path }}/base/base-<hash>.css"
    />
  </head>
  <body></body>
</html>
```

### 2.6. Style the components with the CSS bundles

Chameleon provides a component, the `ch-theme`, to download and reuse the CSS bundles across the application.

Refer to the showcase to see

### 2.7. Set the dark/light mode

Mercury's implementation is designed from the ground up to support both dark and light modes. To set the dark/light mode, add the `light` or `dark` class in the `<html>` tag. This will toggle the color scheme for all components and even the icons!

```html
// index.html (dark)
<!DOCTYPE html>
<html lang="en" dir="ltr" class="dark">
  <head></head>
  <body></body>
</html>

// index.html (light)
<!DOCTYPE html>
<html lang="en" dir="ltr" class="light">
  <head></head>
  <body></body>
</html>
```

## 3. CSS bundles mapping

## 4. CLI flags

Flags:
| Flag | Description |
| -- | -- |
| `--globant` <br/><br/> `--gl` <br/><br/> `-gl` | If specified, the generated CSS will use the tokens for the Mercury Globant variant. |
| `--icons-path=path` <br/><br/>`--icons=path` <br/><br/>`--i=path` <br/><br/>`-i=path` | Allows you to customize the base path for the icons. If not specified, `./assets/icons/` will be used. |
| `--font-face-path=path` <br/><br/>`--font-face=path` <br/><br/>`--f=path` <br/><br/>`-f=path` | Allows you to customize the base path for the custom fonts. If not specified, `./assets/fonts/` will be used. |
| `--avoid-hash=bundle1,bundle2,...` <br/><br/>`--ah=bundle1,bundle2,...` <br/><br/>`-ah=bundle1,bundle2,...` | Receives a set of comma-separated values, where each value is a bundle. Allows you to avoid the creating the hash for the provided bundles. |
| `--outDir=path` <br/><br/>`--outdir=path` <br/><br/>`--o=path` <br/><br/>`-o=path` | Allows you to customize the path where the CSS files will be created. If not specified, `./mercury/` will be used. |
