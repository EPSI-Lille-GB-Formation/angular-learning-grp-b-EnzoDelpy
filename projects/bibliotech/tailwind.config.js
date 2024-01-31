/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/bibliotech/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut .4s ease-in-out',
      },

      // that is actual animation
      keyframes: {
        fadeOut: {
          '0%': { opacity: 0 },
          '100%': { opacity: 100 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

