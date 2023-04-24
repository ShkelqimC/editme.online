/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class', 
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   'bg-light': '#1fb6ff',
    //   'surface-light': '#ff49db',
    //   'primary': '#ff7849',
    //   'secondary': '#13ce66',
    //   'onbackground': '#273444',
    //   'onsurface': '#8492a6',
    //   'onprimary': '#d3dce6',
    //   'onsecondary': '#d3dce6',
    // },
    extend: {},
  },
  plugins: [],
}

