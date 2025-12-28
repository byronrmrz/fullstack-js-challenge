/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      //Colores de la marca Offymarket
      colors: {
        'offy-blue': '#13b0f0',    
        'offy-dark': '#222222',    
        'offy-light': '#f8f8f8',   
      },
      fontFamily: {
        sans: ['"Source Sans 3"', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}

