const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.coolGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      white: colors.white,
      green: colors.green,
      purple: colors.purple,
      teal: colors.teal,
    },
    extend: {
      fontFamily: {
        nav: ["Rugen", "sans-serif"],
      },
      colors: {
        primary: "#9f2a31",
        secondary: "#ffeb55",
      },
      animation: {
        "fade-in": "fadeIn 1.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
