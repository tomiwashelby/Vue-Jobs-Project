/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30': '70% 28%'
      }
    },
  },
  variants: {
    extends: {},
  },
  plugins: [], 
}
