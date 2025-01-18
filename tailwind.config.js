/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./main.js", "./node_modules/flowbite/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#ffe5ec",
        darkBg: "#121212",
        accent: "#ffc2d1",
        vibrant: "#ffafcc",
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
