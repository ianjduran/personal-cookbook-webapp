
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'subtitle' : 'Kanit',
        'header' : 'Ubuntu'
      },
      screens: {
        'tablet': '640px',
         // => @media (min-width: 640px) { ... }
      }
    },
    
  },
  plugins: [],
  
}
