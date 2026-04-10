/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
  brand: ['Rock Salt', 'cursive'],
  heading: ['Raleway', 'sans-serif'],
  body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
