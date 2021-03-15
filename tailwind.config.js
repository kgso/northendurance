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
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
