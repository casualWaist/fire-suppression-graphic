/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#9a9992',
        lite: '#e5e7eb',
        liteTrans: '#dad9d277',
        dark: '#5a5952',
        darkTrans: '#5a595277',
        accent: '#ea580c',
        accentTrans: '#ea580c44',
        highlight: '#fb923c',
        white: '#f9f9f9',
      },
      animation: {
        growFull: 'grow 2s ease-in-out'
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(100%)' },
          '100%': { transform: 'scale(200%)' }
        }
      }
    },
  },
  plugins: [],
}
