/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./storyblok/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      container: {
        center: true,
      },
      fontFamily: {
        space: ["Space Grotesk", "monospace"],
      },
      colors: {
        green: "#B9FF66",
        dark: "#191A23",
        grey: "#F3F3F3",
      },
      fontSize: {
        "2.25xl": "1.625rem",
        "4.5xl": "2.5rem",
        "43mob": "2.688rem",
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
