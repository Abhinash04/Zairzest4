/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {  
        'md': '880px',
        'lg' :'1025px'
      },
    },
  },
  plugins: [
  ],
}

