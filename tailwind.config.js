/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        primary: "0 2px 8px rgba(0, 0, 0, 0.25)",
        cardShadow: "0 1px 8px rgba(0,0,0,0.25)",
      },
      maxWidth: {
        customSm: 580,
        95: "95%",
      },
      width: {
        50: "50rem",
      },
      colors: {
        primaryBg: "#4b4b4b",
        hoverPurple: "#510674",
        darkText: "#3a3a3a",
        primaryDark: "#272727",
        primaryDarkPurple: "#40005d",
        primaryLightGray: "#ccc",
        cardBg: "rgb(31,31,31)",
        primaryLightPurple: "#AF9BED",
      },
    },
  },
  plugins: [],
};
