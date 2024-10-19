/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colours: {
        white: "white",
        none: "none",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
