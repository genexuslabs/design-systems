# svg-sass-generator

SVG Icon Generator: A Node.js tool that empowers developers to effortlessly create SVG icons with customizable color states such as hover and active effects. This tool simplifies the process by generating both SVG icons and accompanying Sass placeholder selectors. Easily integrate these icons into your projects by utilizing the generated CSS class names, streamlining your workflow for scalable and dynamic iconography.

## Using this tool:

1. `npm install` : Installs the required dependencies.
2. `npm run build` : It generates the /js directory with the javascript files that are required to run the tool.
3. Have a source directory with svg icons you would like to process. As an example, there is already a `/samples` directory with four sample icons.
4. `npm run svg` : This will generate the processed svg icons, and a html showcase that displays the generated icons.
5. `npm run sass` : This will generate the required sass files that can be then used to generate the final css class selectors that define the icon path. Run this after `npm run svg`.

### 📂 `/samples`

/samples directory contains some sample files that are required for testing this tool. Be default, the `npm run svg` command uses the `/assets` directory as the source directory, so you might want to copy the contents of `./samples` to `./assets` for a quick test, or use your own files, or use another source folder rather than `./assets`. If you are working on this tool, please do not modify `./samples`, as it facilitates quickly testing the tool. You will find four svg sample icons:

- /samples/bpm/path.svg
- /samples/bpm/stroke.svg
- /samples/objects/path.svg
- /samples/objects/stroke.svg

#### categories

- `/bpm` directory contains icons that are intended to be processed as monochrome.
- `/objects` directory contains icons that are intended to be processed as multicolor.

#### 📄 `color-states.json`

Then, `color-states.json` is a required configuration file that contains the colors values for monochrome and for multicolor icons. This is a starting template that we recommend you to use for you own icons. Please, consider that the definition must be unchanged, meaning that for example, `monochrome` and `multicolor` keys are expected, and that `monochrome` property expects a `states` property, and so on.

#### 📃 `color-states-sample.json`

This is the color states that is configured for running a simple test, using the icons inside `./samples`.

### 🛠️ `npm run svg`

This commands creates the colorized svg icons, and creates a html file with a showcase that displays every generated icon. It requires five arguments:

1. The path to the svg generator .js file: `./js/processor-svg.js`
2. The path to the source directory. This is the directory that contains the original svg icons: `./assets`
3. The output directory. This is the folder where you want the processed svg icons to be written: `./dist`
4. The json file that contains the required information for the colors of the different states. This includes the color definition for monochrome, and also multicolor icons. **Please, note that this path is relative to the source folder** (./assets in this example). You can use `./samples/color-states-json` as a starting template.
5. The showcase path directory. This is the directory where the html showcase will be generated.
6. The log directory where the log file will be written. The log file will contain information about the result of the process. It is specially helpful if there are any type of errors; `./log`
7. (optional) the relative path from the `./showcase` folder the the processed icons folder. If this argument is not provided, the tool will determine the path from `./showcase` to the dist folder that was set by the user in `svg` script as the third (3) argument.

### 🛠️ `npm run sass`

This commands generates .scss files, that you can then process with sass and generate css selectors for every icon path. This command will generate one `.scss` for every category, that includes a sass list of every icon of that given category.

This command will also generate a single master file `svg-generator-icons-lists.scss` that automatically imports every category list. In this file you will find two main lists:

- `$all-multicolor-lists`: it contains all the multicolor categories lists.
- `$all-monochrome-lists`: it contains all the monochrome categories lists.

This way, you can easily iterate over all the multicolor or monochrome categories icons. Or if you prefer, you can also access a single category list.

`npm run sass` command expects the following parameters:

1. The path to the sass generator file: `./js/processor-sass.js`
2. The path to the folder that contains the generated icons. It is the same directory/path as the output path on the `npm run svg` command.
3. The output path. This the path to the directory where you would like the .scss files to be generated. This folder is generated automatically. Be aware that it recreates the content every time you run the command, meaning that it will delete the folder before creating the folder and its contents again.

### notes

- To avoid collisions with already existing folders on the destination paths that might be named the same as source icons folders, please provide an additional folder to the output path folder, for the `svg` script, as well as for the `sass` folder. Suggested name is `_generated`.
- This tool is still a work in progress.
- If you are improving the tool, you can use the `npm run watch` command for a better developer experience. This will watch any changes on the `/ts` folder and update the `/js` output directory.
