/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        "smd": "0 2px 2px rgba(0, 0, 0, 0.09)"
      },
      boxShadow: {
        "smd": "0 2px 2px rgba(0, 0, 0, 0.09)"
      },
      colors: {
        "text": "#292929"
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'sans-serif']
      }
    },
  },
  plugins: [],
}

