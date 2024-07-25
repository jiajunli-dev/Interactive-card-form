/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [...['./src/**/*.html', './src/**/*.js', './src/**/*.jsx', './src/**/*.ts', './src/**/*.tsx']],
  theme: {
    extend: {
      fontFamily: {
        "space": ["Space Grotesk", "sans-serif"],
      },
      colors: {
        "customPurple": "hsl(278, 94%, 30%)",
        "customBlue": "hsl(249, 99%, 64%)"
      }
    },
  },
  plugins: [],
};
