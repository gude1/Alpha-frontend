/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      "sequel-sans": ["sequel-sans"],
    },
    keyframes: {
      "cursor-blink": {
        "from, to": {
          opacity: 0,
        },
        "50%:": {
          opacity: 1,
        },
      },
      slideinup: {
        "0%": {
          opacity: 0,
          transform: "translateY(50vh)",
        },
        "100%": {
          opacity: 1,
          transform: "none",
        },
      },
      slideindown: {
        "0%": {
          opacity: 0,
          transform: "translateY(-50%)",
        },
        "100%": {
          opacity: 1,
          transform: "none",
        },
      },
    },
    animation: {
      "slide-in-up": "slideinup 0.6s",
    },
  },
  plugins: [],
};
