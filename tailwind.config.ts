import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'custom': "#526AC2",
      'dark': "#474C57",
      "lightestdark":"#edededcb",
      'lightDark': "#6A707C",
      "footerDark": "#474C57",
      'bg-light': "#E9E9EA",
      'redesignWhite': "#FFFFFF",
      'darkText': "#3A3C41",
      'lightBlue': "#E4E7ED"
    }
    ,
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
