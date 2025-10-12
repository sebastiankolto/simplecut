/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './screens/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './guards/**/*.{js,ts,jsx,tsx}',
    './App.tsx',
  ],
  safelist: 'button',
  theme: {
    screens: {
      xs: { max: '320px' },
      sm: { max: '576px' },
      md: { max: '768px' },
      mdlg: { max: '842px' },
      lg: { max: '992px' },
      xl: { max: '1200px' },
      '2xl': { max: '1536px' },
    },
    extend: {
      screens: {
        mdlg: '842px',
      },
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
