import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import autoprefixer from "autoprefixer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@app": fileURLToPath(new URL("./src/app", import.meta.url)),
      "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
      "@widgets": fileURLToPath(new URL("./src/widgets", import.meta.url)),
      "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
      "@entities": fileURLToPath(new URL("./src/entities", import.meta.url)),
      "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        additionalData: `@import "@shared/styles/_prepend.scss";`,
      },
    },
  },
  server: {
    port: 8080,
  },
});
