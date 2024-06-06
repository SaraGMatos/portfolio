/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        antic: ["Antic Didone", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        cornsilk: "#FEFAE0",
        papayawhip: "#FAEDCD",
        beige: "#E9EDC9",
        teagreen: "#CCD5AE",
        ferngreen: "#588157",
        huntergreen: "#3A5A40",
        pakistangreen: "#283618",
        earthyellow: "#DDA15E",
        buff: "#D4A373",
      },
    },
  },
  plugins: [],
};
