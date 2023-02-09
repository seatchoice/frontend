/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './domain/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontSize: {
      sm: '0.75rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '1.75rem',
      '3xl': '2rem',
      '4xl': '3rem',
    },
    extend: {
      colors: {
        primary: colors.violet,
      },
      fontFamily: {
        pretendardBlack: 'pretendard-black',
        pretendardBold: 'pretendard-bold',
        pretendardExtraBold: 'pretendard-extra-bold',
        pretendardExtraLight: 'pretendard-extra-light',
        pretendardLight: 'pretendard-light',
        pretendardMedium: 'pretendard-medium',
        pretendardRegular: 'pretendard-regular cursive',
        pretendardSemiBold: 'pretendard-semi-bold',
        pretendardThin: 'pretendard-thin',
      },
    },
  },
  plugins: [],
};
