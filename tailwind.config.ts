import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#111010",
        "dark-secondary": "#1f1f1f",
        "text-gray": "#ccc",
      },
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
} satisfies Config;
