/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        forest: "#173d2b",
        moss: "#2c6e49",
        wheat: "#f2b84b",
        mist: "#eef4ed",
      },
      fontFamily: { display: ["Georgia", "serif"] },
    },
  },
  plugins: [],
};
