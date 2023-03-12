/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dark: "#303841",
      primary: "#3b5161",
      secondary: "#f6c90e",
      light: "#d8efff",
      lighter: "#ffffff",
    },
  },
  plugins: [],
};

module.exports = config;
