import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: { center: true, padding: "1rem", screens: { "2xl": "1440px" } },
    extend: {
      fontFamily: { sans: ["var(--font-inter)", ...fontFamily.sans] },
      colors: {
        accent: { DEFAULT: "#4B5563", light: "#9CA3AF", dark: "#1F2937" }
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;
