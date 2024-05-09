import { dirname, join } from "path";
import * as fs from "fs";

/**
 * Recursively writes a file and creates necessary directories if they don't exist.
 * @param {string} filePath The path of the file to write.
 * @param {string | Buffer} data The data to write to the file.
 */
export const writeFileRecursiveSync = (filePath: string, data: string) => {
  const directory = dirname(filePath);

  if (!fs.existsSync(directory)) {
    // If directory does not exist, create it recursively.
    fs.mkdirSync(directory, { recursive: true });
  }

  fs.writeFileSync(filePath, data);
};

const DIST_DIRECTORY = await process.argv[2];

const data = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

writeFileRecursiveSync(join(DIST_DIRECTORY, "output", "lorem.txt"), data);
