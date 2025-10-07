/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './screens/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './guards/**/*.{js,ts,jsx,tsx}',
    './App.tsx',
  ],
  safelist: 'button',
  theme: {
    extend: {
      fontSize: {
        m: '18px',
      },
    },
    colors: {
      primary: {
        500: '#EDF115',
      },
      neutral: {
        500: '#6d6d6d',
      },
    },
  },
  plugins: [require('tailwind-children')],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};
