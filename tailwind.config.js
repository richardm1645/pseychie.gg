/** @type {import('tailwindcss').Config} */
module.exports = {
  //Will apply the CSS library to any of the mentioned extensions
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto-Regular", "sans-serif"]
    },
    maxWidth: {
      '1/10': '10%'
    },
    extend: {},
  },
  plugins: [],
}

