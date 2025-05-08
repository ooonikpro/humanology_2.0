import pluginVue from "eslint-plugin-vue";
import vueTsEslintConfig from "@vue/eslint-config-typescript";
import skipFormatting from "@vue/eslint-config-prettier/skip-formatting";

export default [
  {
    name: "app/files-to-lint",
    files: ["**/*.{ts,mts,tsx,vue}"],
    rules: {
      "no-console": "error",
      "vue/multi-word-component-names": 0,
      "vue/attributes-order": [
        "warn",
        {
          order: [
            "CONDITIONALS",
            "RENDER_MODIFIERS",
            "DEFINITION",
            "SLOT",
            "LIST_RENDERING",
            "UNIQUE",
            "ATTR_DYNAMIC",
            "GLOBAL",
            "ATTR_STATIC",
            "ATTR_SHORTHAND_BOOL",
            "OTHER_DIRECTIVES",
            "CONTENT",
            "TWO_WAY_BINDING",
            "EVENTS",
          ],
          alphabetical: false,
        },
      ],
    },
  },

  {
    name: "app/files-to-ignore",
    ignores: [
      ".nuxt/**",
      ".output/**",
      "**/dist/**",
      "**/dist-ssr/**",
      "**/coverage/**",
    ],
  },

  ...pluginVue.configs["flat/essential"],
  ...vueTsEslintConfig(),
  skipFormatting,
];
