/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#00c3c7",
        secondary:"#0287a8",
      },
      container:{
        padding:{
          center:true,
          DEFAULT:"1rem",
          sm:"2rem",
          large:"4rem",
          xl:"5rem",
          "2xl":"6rem",
        }
      }
    },
    
  },
  plugins: [],
}

