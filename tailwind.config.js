const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Archivo", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },

      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      borderWidth: {
        prologe: "1px",
        40: "40px",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      colors: {
        "prologe-primary": "#3200F5",
        "prologe-light": "#E9EBFF",
        "prologe-white": "#FAFAFA",
      },
      minHeight: {
        0: "0",

        "1/4": "25%",

        "1/2": "50%",

        "3/4": "75%",

        full: "100%",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],

  variants: {
    extend: {},
  },
};
