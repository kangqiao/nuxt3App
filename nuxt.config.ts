// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["assets/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/_variables.scss";',
        },
      },
    },
  },
  imports: {
    dirs: ["store"],
  },
  // modules: ["@nuxtjs/tailwindcss"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@huntersofbook/naive-ui-nuxt",
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // 自动引入 `defineStore(), storeToRefs()`
          "defineStore",
          "storeToRefs",
        ],
      },
    ],
  ],
  runtimeConfig: {
    // 只能用于服务端的 keys
    apiSecret: "123",
    // 可用于客户端的 keys
    public: {
      apiBase: "/api",
    },
  },
  appConfig: {
    title: "Hello Nuxtzp",
    theme: {
      dark: true,
      colors: {
        primary: "#ff0000",
      },
    },
  },
  app: {
    head: {
      charset: "utf-8", //快捷方式
      viewport: "width=device-width, initial-scale=1", // 快捷方式
      title: "村长的技术空间",
      meta: [
        { name: "description", content: "专注于前端技术分享" },
        { name: "keywords", content: "nuxt,vue,ts,frontend" },
      ],
      link: [],
      style: [],
      script: [],
    },
  },
  nitro: {
    preset: "vercel",
  },
});
