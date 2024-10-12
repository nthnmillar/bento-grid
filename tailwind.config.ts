import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans-regular)", "sans-serif"],
        italic: ["var(--font-dm-sans-italic)", "sans-serif"],
        medium: ["var(--font-dm-sans-medium)", "sans-serif"],
        "medium-italic": ["var(--font-dm-sans-medium-italic)", "sans-serif"],
        variable: ["var(--font-dm-sans-variable)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
