/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#6366F1',    // Indigo-500
        secondary: '#F59E0B',  // Amber-500
        dark: {
          bg: '#0F172A',       // Slate-900
          surface: '#1E293B',  // Slate-800
        },
        text: {
          primary: '#F8FAFC',  // Slate-50
          secondary: '#94A3B8', // Slate-400
        }
      },
    },
  },
  plugins: [],
}