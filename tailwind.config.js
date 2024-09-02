/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['SUSE', 'sans-serif'], 
      },
      screens:{
        small: "450px",
      },
      keyframes: {
        'bounce-horizontal': {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(25%)' },
        },
      },
      animation: {
        'bounce-horizontal': 'bounce-horizontal 1s infinite',
      },
    },
  },
  plugins: [],
}

