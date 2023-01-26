/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "light-orange": "#fa8142",
        "dark-primary": "#1f1f1f",
        "dark-secondary": "#313131",
        "text-gray": "#ccc",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
