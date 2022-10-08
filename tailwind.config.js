/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#06F5D9',
      'secondary': '#06F591',
      'tertiary': '#173640',
      'black': '#020202',
      'green': '#05F591',
      'white': {
        '100': '#FFFFFF',
        '200': '#D8D8D8',
        '300': '#D9D9D9',
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
