/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "wave-mobile-1": "url('/assets/wave-mobile1.svg')",
        "wave-mobile-2": "url('/assets/wave-mobile2.svg')",
        "wave-pc-1": "url('/assets/wave-pc1.svg')",
        "wave-pc-2": "url('/assets/wave-pc2.svg')",
      },
    },
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
