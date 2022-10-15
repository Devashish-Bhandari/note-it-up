/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      display: ['Inter', 'sans-serif'],
      body: ['Inter', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        200: '200px',
        250: '250px',
        300: '300px',
        325: '325px',
        600: '600px',
        1200: '1200px'
      },
      minHeight:{
        150: '150vh',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height:{
        325: '325px',
        150: '150vh'
      }
    },
  },
  plugins: [],
}
