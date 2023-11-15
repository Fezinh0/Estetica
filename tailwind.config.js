/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      zIndex: {
        'z1000': '1000'
      },
      fontFamily: {
        'Dancing': 'Dancing Script, cursive',
        'Edu':'Edu TAS Beginner, cursive'
      }, 
      colors: {
        'azulclarinho': '#87CEFA'
      }
    },
  },
  plugins: [],
}

