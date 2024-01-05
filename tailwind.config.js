/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
    },
    extend: {
      keyframes: {
        glitch: {
          "0%": {opacity:1},
          "25%": {opacity:.5},
          "50%": {opacity:0},
          "75%": {opacity:.5},
          "100%": {opacity:1},
        },
        rotate: {
          from: { transform: 'rotateY(0deg)' },
          to: { transform: 'rotateY(360deg)' },
        },
        appear: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'mobile': {'max': '1680px'},
      // => custom @media (max-width: 1200px) { ... }
    }
  },
  plugins: [
    require('tailwindcss-3d')
  ],
}