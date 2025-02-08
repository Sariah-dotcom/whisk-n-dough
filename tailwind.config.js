/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'bri': ['Bricolage Grotesque', 'serif'],
      'montserrat':['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        'grey': '#1E1E1E',
        'blue': '#D1E9F6',
        'green': '#BAD8B6',
        'yellow': '#F6EACB',
        'pink': '#EECAD5'
      }
    },
  },
  plugins: [],
}

