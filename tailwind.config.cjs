/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "projects-bg": "url('/assets/layered-waves-projects.svg')",
        "photos-bg": "url('/assets/layered-waves-photos.svg')",
        "about-bg": "url('/assets/layered-waves-about.svg')",
        "contact-bg-pc": "url('/assets/contact-pc.svg')",
        "contact-bg-mobile": "url('/assets/contact-mobile.svg')",
        "success-bg": "url('/assets/layered-waves-success.svg')",
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
