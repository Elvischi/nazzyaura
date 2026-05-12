/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        latin: ["Pinyon Script", "cursive"],
      }
    },
  },
  plugins: [],
};
