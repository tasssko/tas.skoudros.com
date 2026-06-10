/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f3f1eb',
        ink: '#1d211e',
        moss: '#28453b',
        coral: '#f26a4f',
        sun: '#f4d35e',
        muted: '#60645f',
      },
    },
  },
  plugins: [],
}