/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray': '#1E1E1E',
        'medium-gray': '#2A2A2A',
        'light-gray': '#3A3A3A',
      },
    },
  },
  plugins: [], 
}
