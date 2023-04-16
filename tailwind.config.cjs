/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        modifyScale: "modifyScale 0.3s ease-in-out",
        changeOpacity: "changeOpacity 0.7s ease-in-out",
        changeOpDire: "changeOpDire 0.7s ease",
      },
      keyframes: {
        modifyScale: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        changeOpacity: {
          "100%": { opacity: "1" },
          "0%": { opacity: "0" },
        },
        changeOpDire: {
          "100%": { opacity: "1", transform: "translateX(0px)" },
          "0%": { opacity: "0", transform: "translateX(-50px)" },
        },
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
