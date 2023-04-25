/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      koulen: ['Koulen', 'cursive'],
      poppins: ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}