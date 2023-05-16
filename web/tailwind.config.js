/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        app: "url(/app-bg.png)",
      },
      colors: {
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
          600: "#29292E",
          700: "#1A1A1A",
          800: "#202024",
          900: "#0D0D0D",
        },
        purple: {
          300: "#8284FA",
          500: "#5E60CE",
        },
        blue: {
          100: "#90E0EF",
          200: "#34B3F1",
          300: "#4EA8DE",
          500: "#1E6F9F",
          700: "#001E6C",
        },
        red: {
          400: "#E25858",
          500: "#F15156",  
        },
        yellow: {
          200: "#F1E9C9",
          300: "#F4D35E",
          500: "#C47F17",
        },
      },
    },
  },
  plugins: [],
};