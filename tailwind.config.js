/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  safelist: ["animate-marquee"],
  theme: {
    extend: {
      fontFamily: {
        lora: ["Lora", "serif"],
        latin: ["Pinyon Script", "cursive"],
      },
      animation: {
        marquee: "marquee 10s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)",
          },

          "100%": {
            transform: "translateX(-100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
