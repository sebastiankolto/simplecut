/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // pages/, app/, layout, etc.
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './guards/**/*.{js,ts,jsx,tsx}',
    './App.tsx',
  ],
  safelist: 'button',
  theme: {
    screens: {
      xs: '450px',
      sm: '576px',
      md: '768px',
      mdlg: '842px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        m: '18px',
      },
    },
  },
  plugins: [require('tailwind-children')],
};
