const colors = require("tailwindcss/colors")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.gray,
      red: colors.red,
      blue: colors.sky,
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
