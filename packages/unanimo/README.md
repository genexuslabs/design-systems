# Unanimo Design System

A design system for GeneXus generated applications.

## Install

```bash
`npm i @genexus/unanimo`
```

## Using this design system

- Import the Unanimo reference into a SCSS file and use the provided mixins:

  ```scss
  @import "<path to node_modules>/@genexus/unanimo/dist/unanimo.scss";

  @include unanimo(optional parameters...);
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
              src: "../node_modules/@genexus/unanimo/dist/assets",
              dest: "assets"
            }
          ]
        },
        {
          type: "www",
          serviceWorker: null,
          copy: [
            {
              src: "../node_modules/@genexus/unanimo/dist/assets",
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
              src: "node_modules/@genexus/unanimo/dist/assets",
              dest: "./"
            }
          ]
        })
      ]
    });
    ```
