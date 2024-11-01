/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#071D46'
      },
      screens: {
        'xsm': '344px'
      },
      width: {
        '2vw': '2vw'
      }
    },
  },
  plugins: [],
}

