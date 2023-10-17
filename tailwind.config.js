/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      height: {
        '15': '0.9375rem',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

