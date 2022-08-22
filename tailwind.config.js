/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          60: "#f1f1f1",
        },
        neutral: {
          940: "#ababab",
          950: "#333333",
        },
        zinc: {
          350: "#979797",
        },
        blue: {
          650: "#0a50e2",
          680: "#0063f7",
          690: "#0c77f9",
          710: "#0a58ff",
        },
        green: {
          450: "#1ccb22",
        },
        red: {
          450: "#ff5a5a",
        },
      },
    },
  },
  plugins: [],
};
