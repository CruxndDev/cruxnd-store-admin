/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryColor': '#0E0E2C', // Dark Blue
        'secondaryBlue': '#5281F8', // Light Blue
        'accentGreen': '#16E32B', // Green
        'gray': '#475467',
        'mediumGray': '#D0D5DD',
        'lightGray': '#F3F3F4',
      },
      fontSize: {
        'md': '15px',
      }
    },
  },
  plugins: [],
};
