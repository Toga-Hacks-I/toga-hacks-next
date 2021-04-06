module.exports = {
  purge: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    ,
    "./data/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  corePlugins: {
    ringWidth: false,
    outline: false,
  },
  theme: {
    extend: {
      colors: {
        togahacks: {
          primary: {
            main: "#C92128",
            light: "#e8383f",
            dark: "##a80c12"
          },
          secondary: {
            main: "#0E1B4D",
            gray: "#18224a",
            grayer: "#222b4d",
            dark: "#050d2b",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
