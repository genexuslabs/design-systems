# Mercury Design System

A design system for GeneXus generated IDE Web.

## Install

```bash
npm i @genexus/mercury
```

## Using this design system

- Import the Mercury reference into a SCSS file and use the provided mixins:

  ```scss
  @import "<path to node_modules>/@genexus/mercury/dist/mercury.scss";

  @include mercury(optional parameters...);
  ```

- Copy the assets with a copy task for your development and production build.

  - In a StencilJS project, it will be something like this:

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
              dest: "assets"
            }
          ]
        },
        {
          type: "www",
          serviceWorker: null,
          copy: [
            {
              src: "../node_modules/@genexus/mercury/dist/assets",
              dest: "assets"
            }
          ]
        }
      ]
    };
    ```

  - In a Vite project, it will be something like this:

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
              dest: "./"
            }
          ]
        })
      ]
    });
    ```

  - Using the bundles from this repository.

    1.  Install `sass` dependency to transpile the bundles.

        ```bash
        npm i -D sass
        ```

    2.  Add a config file in your project to determine the path to the assets.  
        Include the following configuration:

        ```scss
        $icons-path: "assets/custom/path/icons/";
        $font-face-path: "assets/custom/path/fonts/";
        ```

    3.  Run the following command to transpile the bundles with the new path for the assets:
        ```bash
        npx sass --load-path=path/to/config/file/directory --no-source-map --style compressed node_modules/@genexus/mercury/dist/bundles:untracked-folder/bundles
        ```
