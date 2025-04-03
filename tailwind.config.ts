import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        'on-primary': "var(--color-on-primary)",
        surface: "var(--color-surface)",
        'on-surface': "var(--color-on-surface)",
      },
      fontFamily: {
        sans: "var(--gideon-roman)",
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
