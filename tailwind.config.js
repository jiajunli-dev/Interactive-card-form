/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx']],
  theme: {
    extend: {
      fontFamily: {
        "space": ["Space Grotesk", "sans-serif"],
      }
    },
  },
  plugins: [],
};
