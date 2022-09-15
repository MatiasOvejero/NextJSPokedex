/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        700: "43.75rem",
        448: "28rem",
      },
      spacing: {
        25: "25%",
      },
      width: {
        40: "40%",
      },
      boxShadow: {
        pokShadow: "5px 5px rgb(233 233 233 / 45%)",
      },
      borderRadius: {
        pok: "25px",
      },
      colors: {
        greenBG: "#008000",
        grass: "#7ac94f",
        water: "#6890f0",
        fire: "#ff9d84",
        bug: "#a8b820",
        normal: "#a8a878",
        flying: "#a890f0",
        psychic: "#f85888",
        electric: "#f8d030",
        ice: "#98d8d8",
        fighting: "#c03028",
        poison: "#a040a0",
        ground: "#e0c068",
        rock: "#b8a038",
        ghost: "#705898",
        dark: "#705848",
        dragon: "#7038f8",
        steel: "#b8b8d0",
        fairy: "#f0b6bc",
        textGrey: "rgb(151 151 151 / 77%)",
        borderGrey: "#80808057",
        lightBorder: "rgb(252, 240, 240)",
      },
    },
  },
  plugins: [],
};
