import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // warm cream palette, no stark white, no pure black
        cream: {
          50: "#fbf7f0",
          100: "#f7f0e3",
          200: "#ede1c9",
          300: "#e0cea8",
        },
        ink: {
          900: "#2a221b", // primary text, warm charcoal
          700: "#544237",
          500: "#7a6655",
        },
        accent: {
          terracotta: "#c4623f",
          olive: "#6b6840",
          sky: "#7a9bb0",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(42,34,27,0.04), 0 8px 24px rgba(42,34,27,0.06)",
        card: "0 2px 4px rgba(42,34,27,0.05), 0 16px 40px rgba(42,34,27,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
