/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // dark blue
        secondary: '#3B82F6', // blue
      }
    },
  },
  plugins: [],
}
