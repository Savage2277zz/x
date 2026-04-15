import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0F0D",
        "text-primary": "#E8EDE9",
        "text-secondary": "#A4B3B6",
        accent: "#6C8274",
        "deep-forest": "#2E4535",
        "muted-sage": "#6C8274",
        "stormy-slate": "#5D6C74",
        "overcast-silver": "#A4B3B6",
        "deep-umber": "#4A3A2A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
