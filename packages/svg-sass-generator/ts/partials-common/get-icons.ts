// libraries
import { glob } from "glob";

/**
 * @description it gets the svg icons as an array.
 */
export async function getIcons(srcDirectory: string): Promise<string[]> {
  return await glob.sync(`${srcDirectory}/**/*.svg`);
}
