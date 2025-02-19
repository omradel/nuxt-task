// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import Compression from "vite-plugin-compression";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  srcDir: "src/",
  ssr: true,

  // favicon & fonts
  app: {
    baseURL: "/",
    pageTransition: false,
    layoutTransition: false,
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&family=Cairo:wght@200..1000&display=swap",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [
      tailwindcss(),
      Compression({
        ext: ".gz", // or '.br' for Brotli
        filter: (file) => file.includes("./src/assets/"), // compress assets in /src/assets/
      }),
    ],
  },

  nitro: {
    prerender: {
      routes: ["/"],
    },
  },

  build: {
    transpile: ["vuetify"],
  },

  modules: ["@pinia/nuxt"],

  plugins: ["./src/plugins/vee-validate.ts"],
});
