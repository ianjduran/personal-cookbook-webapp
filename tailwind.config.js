
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
        subtitle : 'var(--font-kanit)',
        header : 'var(--font-ubuntu)'
      },
      screens: {
        'tablet': '640px',
         // => @media (min-width: 640px) { ... }g
      }
    },
    
  },
  plugins: [],
  
}
