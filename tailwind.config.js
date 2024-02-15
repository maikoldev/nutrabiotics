/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      screens: {
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        // primaries
        purple: "#3C2052",
        violet: "#73358B",
        "light-blue": "#AAB6DD",
        "dark-blue": "#171E45",

        // secondaries
        yellow: "#F9C80E",
        "light-yellow": "#DDCC72",
        "dark-grey": "#2E2E2E",
        "light-grey": "#E5E5E5",
      },
    },
  },
  plugins: [],
};
