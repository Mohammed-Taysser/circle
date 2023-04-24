/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        aurora: '#20c997',
      },
      boxShadow: {
        nice: '0 3px 15px rgba(22, 41, 124, 0.1)',
      },
    },
  },
  plugins: [],
};
