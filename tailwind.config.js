/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#A2D8FF",
        bg: "#F9F9F9",
        secondary: "#B0B8C1",
        sand: "#D6BDAF",
      },
    },
  },
  plugins: [],
};

