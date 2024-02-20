/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: '1rem',
      screens: {
        'xl': '1280px',
      },
    },
    fontFamily: {
      sans: ['Mulish', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'yellow-gradient': 'linear-gradient(96deg, #BB8123 3%, #C8BB72 100%)',
        'yellow-gradient-hover': 'linear-gradient(96deg, #E4CFAD 1.5%, #F7F1D3 100%)',
      },
      colors: {
        // primary
        'purple': '#3C2052',
        'light-purple': '#A396B3',
        'violet': '#73358B',
        'dark-blue': '#171E45',
        'light-blue': '#AAB6DD',

        // secondary
        'yellow': '#F9C80E',
        'light-yellow': '#DDCC72',
        'dark-grey': '#2E2E2E',
        'light-grey': '#E5E5E5',

        // tertiary
        'gold': '#BB8123'
      },
      boxShadow: {
        DEFAULT: '0px 4px 22px 0px rgba(0, 0, 0, 0.25)',
      },
      fontSize: {
        'title': ['4rem', {
          lineHeight: '1',
          fontWeight: '700',
        }],
        'subtitle': ['3rem', {
          lineHeight: '1',
          fontWeight: '700',
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
      }
    },
  },
  plugins: [],
};
