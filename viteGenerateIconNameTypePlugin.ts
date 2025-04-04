import { writeFileSync } from "fs";
import { parse } from "path";
import { glob } from "glob";
import prettier from "prettier";
import type { PluginOption } from "vite";

const OUTPUT_FILE = `./@types/iconNames.ts`;
const ICONS_FOLDER = "/public/icons/";

const generateIconNameType = async () => {
  const iconList = await glob("./public/icons/**/*.svg");

  const iconNames = Array.from(
    new Set(
      iconList
        .map((path) => `"${parse(path).name}"`)
        .sort((a, b) => a.localeCompare(b)),
    ),
  ).join(" | ");

  const contents = `/** ФАЙЛ СГЕНЕРИРОВАН АВТОМАТИЧЕСКИ - НЕ ИЗМЕНЯТЬ **/

export type IconNameType = ${iconNames};`;

  const options = await prettier.resolveConfig(OUTPUT_FILE);

  const formatted = await prettier.format(contents, {
    ...options,
    filepath: OUTPUT_FILE,
  });

  writeFileSync(OUTPUT_FILE, formatted);
};

/**
 * @description Плагин для генерации имен иконок в ТС
 * @link https://rollupjs.org/plugin-development/#watchchange
 */
const viteGenerateIconNameTypePlugin = () =>
  ({
    enforce: "pre",
    name: "generateIconNameType",
    watchChange: (id) => {
      if (id.includes(ICONS_FOLDER)) generateIconNameType();
    },
    buildEnd: generateIconNameType,
  }) as PluginOption;

export default viteGenerateIconNameTypePlugin;
