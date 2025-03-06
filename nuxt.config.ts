import { fileURLToPath, URL } from "node:url";
import autoprefixer from "autoprefixer";
import viteGenerateIconNameTypePlugin from "./viteGenerateIconNameTypePlugin";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "./src",
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  alias: {
    public: fileURLToPath(new URL("./public", import.meta.url)),
    assets: fileURLToPath(new URL("./assets", import.meta.url)),
  },

  vite: {
    resolve: {
      alias: {
        public: fileURLToPath(new URL("./public", import.meta.url)),
        assets: fileURLToPath(new URL("./assets", import.meta.url)),
        "@app": fileURLToPath(new URL("./src/app", import.meta.url)),
        "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
        "@widgets": fileURLToPath(new URL("./src/widgets", import.meta.url)),
        "@features": fileURLToPath(new URL("./src/features", import.meta.url)),
        "@entities": fileURLToPath(new URL("./src/entities", import.meta.url)),
        "@shared": fileURLToPath(new URL("./src/shared", import.meta.url)),
      },
    },
    plugins: [viteGenerateIconNameTypePlugin()],
    css: {
      postcss: {
        plugins: [autoprefixer()],
      },
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  vue: {
    propsDestructure: true,
  },

  modules: ["@nuxt/image"],

  routeRules: {
    "/": { prerender: true },
    "/t/**": { prerender: true },
    "/k/**": { prerender: true },
    "/disclaimer": { prerender: true },
    "/history": { prerender: true },
    "/how-to-define-type": { prerender: true },
    "/people": { prerender: true },
    "/profile": { prerender: true },
    "/specialists": { prerender: true },
    "/teams": { prerender: true },
    "/tests": { prerender: true },
    "/what-is-it": { prerender: true },
  },
});
