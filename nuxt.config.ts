// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // only working in safari atm
  devServer: {
    https: {
      key: "localhost-key.pem",
      cert: "localhost.pem",
    },
  },
  css: ["~/assets/scss/main.scss"],
  pages: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxt/content", // may not need
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-swiper",
    "nuxt-svgo",
    [
      "@storyblok/nuxt",
      {
        accessToken: "jtLKymBftjll1KWlUVdQIAtt",
        apiOptions: {
          region: "us",
        },
      },
    ],
    "@nuxtjs/google-fonts",
  ],
  image: {
    inject: true,
    domains: ["localhost:3000", "a-us.storyblok.com"],
    storyblok: {
      baseURL: "https://a.storyblok.com",
    },
  },
  googleFonts: {
    families: {
      "Space+Grotesk": [300, 400, 500, 600, 700],
    },
  },
});
