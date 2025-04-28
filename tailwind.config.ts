import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode toggling
  theme: {
    extend: {
      fontFamily: {
        sans: "var(--gideon-roman)",
      },
      colors: {
        surface: "#000000",
        "dark-surface": "#fff0f0",
        "on-surface": "#ffffff",
        "on-dark-surface": "#000000",
        background: "#e0e0e0",
        "dark-background": "#201212",
        "on-background": "#121212",
        "on-dark-background": "#e0e0e0",
      },
    },
  },
  plugins: [],
} satisfies Config;
