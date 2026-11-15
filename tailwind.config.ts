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
        "navy-dark": "#0e2145",
        "navy":      "#1e4285",
        "gold":      "#F0BE35",
        "mid-grey":  "#5A5A5A",
        "light-grey":"#F5F8FB",
        "border-grey":"#DDDDDD",
      },
      fontFamily: {
        sans:    ["Inter", "system-ui", "sans-serif"],
        serif:   ["Space Grotesk", "Inter", "sans-serif"],
        mono:    ["ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
