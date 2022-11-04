/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        navigation: "2fr 1fr",
      },
    },
  },
  plugins: [],
};
