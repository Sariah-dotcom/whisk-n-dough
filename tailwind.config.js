/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'red-hat': ['Red Hat Display', 'sans-serif'],
      'montserrat':['Montserrat', 'sans-serif']
    },
    colors: {
      'white': '#FFF',
      'tan':'#C1A058',
      'med-brown': '#7E6837',
      'yellow-brown': '#EFC875',
      'gold': '#C79832',
      'dark-brown': '#5B2E12',
      'dark-pink': '#D44393',
      'light-blue': '#7D99BA',
    },
    extend: {},
  },
  plugins: [],
}

