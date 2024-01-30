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
      green_2: '#bce3c9',
      black_1: '#3d3d3d',
      gray_1:'#9e9e9e',
      gray_2: '#e0e0e0',
      green_1:'#3bb77e',
      city_light:'#dfe6e9',
      white:'#ffffff',
      airbnb_rausch:'#ff5a5f',
      airbnb_yellow:'#ffcc00',
      airbnb_blue:'#0079c2',
      airbnb_orange:'#ff5a5f',
      airbnb_babu:'#00a699',
      airbnb_arches:'#fc642d',
    }


  },
  plugins: [],
}

