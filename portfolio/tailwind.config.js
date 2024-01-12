/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        macbg: "url('/images/macbg.jpg')",
      },
      colors: {
        topBarHard: '#993910',
        topBarEasy: '#c28870',
        finderBg: '#2e201d',
        finderHeaderBg: '#603F30',
      },
    },
  },
  plugins: [],
};
