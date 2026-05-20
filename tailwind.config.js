/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ini sudah mencakup folder 'app' & 'components' di dalam src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af', // Dark blue
        secondary: '#ffffff', // White
        accent: '#1e40af', // Same as primary
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}