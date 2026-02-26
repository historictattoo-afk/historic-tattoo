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
        "ht-black": "#0a0a08",
        "ht-red": "#c41e1e",
        "ht-red-light": "#e63232",
        "ht-gold": "#d4a017",
        "ht-cream": "#f5edd6",
        "ht-gray": "#1a1814",
        "ht-green": "#1a5e3a",
        "ht-navy": "#1c2733",
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        blackletter: ["var(--font-blackletter)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
