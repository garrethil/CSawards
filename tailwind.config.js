/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        homepage: "url('images/BG.HP.png')",
      },
      animation: {
        sparkle: "sparkle 1.5s infinite ease-in-out",
      },
      keyframes: {
        sparkle: {
          "0%, 100%": {
            opacity: 0.8,
            transform: "scale(1)",
            textShadow: "0 0 2px rgba(255, 255, 255, 0.5)",
          },
          "50%": {
            opacity: 1,
            transform: "scale(1.2)",
            textShadow: "0 0 6px rgba(255, 255, 255, 0.7)",
          },
        },
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
    },
  },
  plugins: [],
};
