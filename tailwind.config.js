/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
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
        background: {
          main: "#fff",
          secondary: "#FBFBFA",
        },
      },
      boxShadow: {
        "sm-all": "0px 0px 30px 0 rgba(0, 0, 0, 0.07)",
      },
    },
  },
  plugins: [],
};
