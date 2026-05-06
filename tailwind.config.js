/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      pointerEvents: ['group-hover'],
    },
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#181818',
      },
      linearGradients: {
        'bg-top': ['180deg', '#181818 0%', 'transparent 50%'],
        'bg-bottom': ['0deg', '#181818 0%', 'transparent 100%'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
