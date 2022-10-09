/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      keyframes: {
        growDiv: {
          '0%': { transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(0)'},          
        },
        translateYandFade: {
          '0%': { transform: 'translateY(-100%)', opacity: 0},
          '100%': { transform: 'translateY(0)', opacity: 1},
        },
        translateYandFadeFast: {
          '0%': { transform: 'translateY(-100%)', opacity: 0},
          '100%': { transform: 'translateY(0)', opacity: 1},
        },
        translateFromRight: {
          '0%': { transform: 'translateX(100%)'},
          '100%': { transform: 'translateX(0)'},      
        },
        fadeIn: {
          '0%': { opacity: 0},
          '100%': { opacity: 1},      
        }
      },
      animation: {
        'divGrowRight': 'growDiv .4s linear',
        'textFallnFade': 'translateYandFade 3s',
        'textFallnFadeFast': 'translateYandFade 1.5s',
        'translateFromRight': 'translateFromRight 1.5s',
        'fadeIn': 'fadeIn 2s'
      },
    },
  },
  plugins: [],
}
