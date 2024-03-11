/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      green: "#0FC65C",
      white: "#FFFFFF",
      blue: {
        DEFAULT: "#3C82F4",
        light: "#3D82F2",
        midDark: "#326CF9",
        dark: "#306EF7",
      },
      gray: {
        light: "#707070",
        DEFAULT: "#919191",
        dark: "#2D2D2D",
      },
      black: {
        light: "#0E0E0E",
        DEFAULT: "#000000",
        dark: "#0D0D0D",
      },
    },
  },
  plugins: [],
};
