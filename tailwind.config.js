/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bright-gray': {
          DEFAULT: '#414656',
          50: '#9BA1B3',
          100: '#8F96AB',
          200: '#788099',
          300: '#646C84',
          400: '#53596D',
          500: '#414656',
          600: '#292C36',
          700: '#111216',
          800: '#000000',
          900: '#000000',
          950: '#000000'
        },
        'rock-blue': {
          DEFAULT: '#9EABCF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#F0F2F8',
          300: '#D5DAEA',
          400: '#B9C3DD',
          500: '#9EABCF',
          600: '#788BBC',
          700: '#546AA9',
          800: '#415384',
          900: '#2F3B5E',
          950: '#252F4B'
        },
        'zircon': {
          DEFAULT: '#F6F8FF',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F6F8FF',
          600: '#BECCFF',
          700: '#86A1FF',
          800: '#4E75FF',
          900: '#1649FF',
          950: '#0037F9'
        },
      },
      fontFamily: {
        "kanit": "'Kanit', sans-serif"
      }
    },
  },
  plugins: [],
}

