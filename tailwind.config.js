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
      xs: { min: '320px' },
      sm: { min: '576px' },
      md: { min: '768px' },
      mdlg: { min: '842px' },
      lg: { min: '992px' },
      xl: { min: '1200px' },
      '2xl': { min: '1536px' },
    },
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
