/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        st: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'
      }
    },
    colors: {
      border_color: '#bce3c9',
      black_text: '#3d3d3d',
      gray_text:'#9e9e9e',
      border_gray: '#e0e0e0',
      green_text:'#3bb77e'
    }


  },
  plugins: [],
}

