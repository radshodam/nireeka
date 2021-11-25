module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontWeight: {
      hairline: 300,
      "extra-light": 300,
      thin: 300,
      light: 300,
      normal: 300,
      medium: 300,
      semibold: 300,
      bold: 300,
      extrabold: 300,
      "extra-bold": 300,
      black: 300,
    },
    extend: {
      colors: {
        customColorNIR: "#ff8a00",
      },
      screens: {
        lp: "820px",
        xs: "480px",
        x320: "320px",
      },
      boxShadow: {
        customShadow: "10px 9px 19px 5px rgb(242 242 242)",
      },

      outline: {
        Outgray: "0px solid #e5e7eb",
      },
      fontWeight: {
        radBold: 600,
   
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms"),  require('tailwind-scrollbar')],
};
