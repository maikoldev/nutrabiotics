const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    container: {
      padding: '1rem',
      screens: {
        'xl': '1280px',
      },
    },
    fontFamily: {
      'mulish': "var(--font-mulish)",
      'inter': "var(--font-inter)",
    },
    extend: {
      backgroundImage: {
        'yellow-gradient': 'linear-gradient(96deg, var(--color-gold) 3%, var(--color-light-yellow) 100%)',
        'yellow-gradient-hover': 'linear-gradient(96deg, #E4CFAD 1.5%, #F7F1D3 100%)',
        'purple-gradient': 'linear-gradient(180deg, rgba(60, 32, 82, 0) 31.08%, var(--color-purple) 100%);',
        'neuromorphism': 'linear-gradient(130deg, rgba(115, 53, 128, 0.07) -4%, rgba(115, 53, 128, 0.03) 105%)',
      },
      boxShadow: {
        DEFAULT: '0px 4px 22px 0px rgba(0, 0, 0, 0.25)',
      },
      colors: {
        // primary
        'dark-purple': 'var(--color-dark-purple)',
        'purple': 'var(--color-purple)',
        'light-purple': 'var(--color-light-purple)',
        'violet': 'var(--color-violet)',
        'dark-blue': 'var(--color-dark-blue)',
        'light-blue': 'var(--color-light-blue)',

        // secondary
        'yellow': 'var(--color-yellow)',
        'light-yellow': 'var(--color-light-yellow)',
        'dark-grey': 'var(--color-dark-grey)',
        'light-grey': 'var(--color-light-grey)',

        // tertiary
        'gold': 'var(--color-gold)',
      },
      fontSize: {
        'title': ['4.5rem', {
          lineHeight: '1',
          fontWeight: '800',
        }],
        'subtitle': ['3rem', {
          lineHeight: '1',
          fontWeight: '800',
        }],
        'subtitle-sm': ['1.5rem', {
          lineHeight: '2rem',
          fontWeight: '700',
        }],
        'normal-md': ['1.5rem', {
          lineHeight: '2rem',
          fontWeight: '500',
        }],
        'normal': ['1.25rem', {
          lineHeight: '1.75rem',
          fontWeight: '400',
        }],
        'base': ['1rem', {
          lineHeight: '1.5rem',
          fontWeight: '400',
        }],
        'small': ['0.875rem', {
          lineHeight: '1.25rem',
          fontWeight: '400',
        }],
        'product-title': ['2.5rem', {
          lineHeight: '1rem',
          fontWeight: '900',
        }],
        'product-text': ['1.25rem', {
          lineHeight: '1.75rem',
          fontWeight: '400',
        }],
      },
    },
  },
  plugins: [],
};
