/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
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
