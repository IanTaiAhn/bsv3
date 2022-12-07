/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/*.js"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        growDiv: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        growDivMidTRight: {
          "0%": { transform: "translateX(0)", width: "50%" },
          "100%": { transform: "translateX(100%)", width: "50%" },
        },
        growDivMidTLeft: {
          "0%": { transform: "translateX(0)", width: "50%" },
          "100%": { transform: "translateX(-100%)", width: "50%" },
        },
        translateYandFade: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        translateYandFadeFast: {
          "0%": { transform: "translateY(-100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        translateFromRight: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        translateYBotToTop: {
          "0%": { transform: "translateY(0)", scale: 1 },
          "100%": { transform: "translateY(-100%)", scale: 1.2 },
        },
        fadeInSlow: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        divGrowRight: "growDiv .4s linear",
        divGrowFromMidToRight: "growDivMidTRight 1s linear",
        divGrowFromMidToLeft: "growDivMidTLeft 1s linear",
        textFallnFade: "translateYandFade 3s",
        textFallnFadeFast: "translateYandFade 1.5s",
        translateFromRight: "translateFromRight 1s",
        fadeIn: "fadeIn 2s",
        fadeInSlow: "fadeInSlow 4s",
        "textGrow&Scale": "translateYBotToTop forwards ease-in-out 1.5s",
      },
    },
  },
  plugins: [],
};
