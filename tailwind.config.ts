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
        tycheGreen: "#435334",
        tycheBeige: "#FAF1E4",
        tycheBlue: "#627EEA",
        tycheRed: "#F21616",
        tycheWhite: "#FFFAF3",
        tycheGray: "#646464",
      },
    },
  },
  plugins: [],
};
export default config;
