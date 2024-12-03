/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homepageBig: "url('/images/mainBG.png')",
        homepageSmall: "url('/images/mobileBG.png')",
      },
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
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add Roboto as a sans-serif font
        bebas: ["Bebas Neue", "cursive"], // Add Bebas Neue as a display font
      },
    },
  },
  plugins: [],
};
