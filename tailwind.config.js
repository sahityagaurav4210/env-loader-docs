/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleImage: {
        point: 'url("./src/assets/hand-point-right.svg")',
      },
    },
    fontFamily: {
      arial: ["Arial", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
