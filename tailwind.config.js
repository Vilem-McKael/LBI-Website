/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'noto': ['Noto Sans', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'manrope': ['Manrope', 'sans-serif'],
        'lora': ['Lora', 'serif'],
        'merriweather': ['Merriweather', 'serif'],
        'nunito': ['Nunito Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

