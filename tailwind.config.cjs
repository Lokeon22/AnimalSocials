/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 0.4s ease-in",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateX(-30px)", opacity: "0.5" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
