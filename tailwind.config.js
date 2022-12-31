/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html", "./src/**/*.{vue,html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
        md: "425px",
        lg: "768px",
        xl: "1440px",
        "2xl": "1440px",
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
