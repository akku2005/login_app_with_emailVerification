/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        // Define your custom class within @layer components
        '@layer components': {
          '.minw': {
            minWidth: '1rem', // Define your minimum width styles
          },
        },
      });
    },
  ],
}

