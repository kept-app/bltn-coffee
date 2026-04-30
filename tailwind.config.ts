import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // sand + deep brown + brick red
        sand: {
          50: "#f5efe4",
          100: "#ede4d2",
          200: "#dccfb4",
          300: "#c8b894",
        },
        ink: {
          900: "#3a2418", // deep brown, primary text
          700: "#5c3d2e",
          500: "#8a6f5c",
        },
        accent: {
          brick: "#a8412a",
          brickDark: "#8a3422",
          olive: "#6b6840",
        },
      },
      fontFamily: {
        display: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(58,36,24,0.05), 0 8px 24px rgba(58,36,24,0.08)",
        card: "0 2px 4px rgba(58,36,24,0.06), 0 16px 40px rgba(58,36,24,0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
