import { fileURLToPath, URL } from "node:url";
import autoprefixer from "autoprefixer";
import viteGenerateIconNameTypePlugin from "./viteGenerateIconNameTypePlugin";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Человековедение",
      viewport: "width=device-width, initial-scale=1, maximum-scale=1",
      htmlAttrs: {
        lang: "ru",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
      meta: [
        {
          name: "og:title",
          content: "Человековедение",
        },
        {
          name: "og:description",
          content: "Приложение чтобы наконец разбираться в людях.",
        },
        {
          name: "description",
          content: "Приложение чтобы наконец разбираться в людях.",
        },
      ],
    },
  },

  srcDir: "./src",
  devtools: { enabled: false },

  components: {
    dirs: ["~/shared/ui"],
  },

  dir: {
    public: "./public",
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
    "/k/**": { prerender: false },
    "/s/**": { prerender: true },
    "/t/**": { prerender: true },
    "/disclaimer": { prerender: true },
    "/history": { prerender: true },
    "/how-to-define-type": { prerender: true },
    "/people": { prerender: false },
    "/profile": { prerender: false },
    "/specialists": { prerender: false },
    "/teams": { prerender: false },
    "/tests": { prerender: true },
    "/what-is-it": { prerender: true },
  },

  compatibilityDate: "2025-04-08",
});