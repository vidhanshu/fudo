/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #FFF3F3, transparent)",
      },
      colors: {
        primary: {
          main: "#F54748",
          light: "#FEECEB",
          xl_light: "#FFF4F3",
          dark: "#D93132",
        },
        secondary: "#FEC65E",
      },
      boxShadow: {
        "sm-all": "0px 0px 30px 0 rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
