/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00BFFF", // Miraverse mavi tonu
        secondary: "#FFD700", // Altın sarısı tonu
        background: "#050505", // Koyu arka plan
      },
    },
  },
  plugins: [],
}
