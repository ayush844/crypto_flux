/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#ffc83e',
        custom: "#4E342E"
      },
      selection: {
        backgroundColor: '#ffc83e', // Custom yellow background
        color: '#4E342E',           // Custom blue text
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}