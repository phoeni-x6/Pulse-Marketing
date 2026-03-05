/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1E4E8C",
          blueDark: "#163B6A",
          lavender: "#C13BCB",
          lavenderSoft: "#F4ECFF",
          dark: "#0F172A",
          light: "#F8FAFC",
        },
      },
      backgroundImage: {
        heroGradient:
          "linear-gradient(to right, #1E4E8C, #C13BCB)",
        softGradient:
          "linear-gradient(to bottom right, #F4ECFF, #ffffff)",
      },
      container: {
        center: true,
        padding: "1.5rem",
      },
    },
  },
  plugins: [],
};