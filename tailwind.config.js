/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#060000",
          text: "#ffce46",
        },
        secondary: {
          DEFAULT: "#ffffff",
          text: "#e32f8d",
        },
      },
    },
  },
  plugins: [],
};
