/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#DDDDDD",
      gray: "#222831",
      blue: "#30475E",
      red: "#F05454",
      green: "#33cc33",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    extend: {
      animation: {
        fadeIn: "1s ease 0.3s backwards fadeIn",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
