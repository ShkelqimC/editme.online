/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        white: "var(--white)",
        gray: "var(--gray)",
        lightgray: "var(--lightgray)",
        darkgray: "var(--darkgray)",
        lightblack: "var(--lightblack)",
        black: "var(--black)",
        blue: "var(--blue)",
        lightblue: "var(--lightblue)",
        coral: "var(--coral)",
        violet: "var(--violet)",
        lightviolet: "var(--lightviolet)",
        darkviolet: "var(--darkviolet)",
      },
      gradientColorStops: {
        editMe: {
          hue: "var(--lightgray)",
        },
      },
    },
  },
  plugins: [],
};

// --background: #ffffff;
// --surface: #f2f2f2;
// --primary: #3700b3;
// --secondary: #6200ee;
// --onBackground: #212121;
// --onSurface: #000000;
// --onPrimary: #f2f2f2e3;
// --onSecondary: #ffffff;

// --dark-background: #212121;
// --dark-surface: #1e1e1e;
// --dark-primary: #3700b3;
// --dark-secondary: #6200ee;
// --dark-onBackground: #dbdbdb;
// --dark-onSurface: #faf8ff;
// --dark-onPrimary: #212121;
// --dark-onSecondary: #faf8ff;
// --white: #fefefe;
// --gray: #808080;
// --lightgray: #d3d3d3;
// --darkgray: #A9A9A9;
// --lightblack: #242124;
// --black: #0E0E10;
// --blue: #1a1463;
// --lightblue: #31bacd;
// --coral: #fc7b54;
// --violet: #7F00FF;
// --lightviolet:#CF9FFF;