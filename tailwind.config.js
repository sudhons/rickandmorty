const {
  colors: { transparent, white, black, current },
} = require('tailwindcss/defaultTheme');
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      '2xs': ['.625rem', '14px'],
      xs: ['.75rem', '18px'],
      sm: ['.875rem', '20px'],
      base: ['1rem', '22px'],
      lg: ['1.125rem', '24px'],
      xl: ['1.25rem', '26px'],
      '2xl': ['1.5rem', '28px'],
      '3xl': '1.875rem',
      '4xl': ['2.25rem', '44px'],
      '5xl': ['3rem', '60px'],
      '6xl': ['4rem', '78px'],
    },
    colors: {
      transparent: transparent,
      white: white,
      black: black,
      current: current,
      primary: '#DBE4F3',
      blue: '#2068e2',
      red: '#DC2626',
      secondary: '#eaf1ff',
      'alternate': '#F2F8FC',
      grey: '#D1D5DB',
      'grey-deep': '#6B7280'
    },
    scale: {
      '0': '0',
     '25': '.25',
      '50': '.5',
      '75': '.75',
      '90': '.9',
     '95': '.95',
      '100': '1',
     '101': '1.01',
     '105': '1.05',
     '110': '1.1',
      '125': '1.25',
      '150': '1.5',
     '200': '2',
    },
    extend: {
      minHeight: {
        '24': '6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
