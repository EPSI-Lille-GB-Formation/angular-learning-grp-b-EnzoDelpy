/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./projects/bibliotech/src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

