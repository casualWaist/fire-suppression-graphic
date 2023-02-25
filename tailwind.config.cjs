/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#d5e4c5',
        dark: '#5a6962',
        accent: '#fab600',
        highlight: '#fae001',
        white: '#f6f4e8'
      }
    },
  },
  plugins: [],
}
