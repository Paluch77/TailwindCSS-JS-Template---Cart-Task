/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        phone: "url('/icons/phone.png')",
        email: "url('/icons/email.png')",
        loupe: "url('/icons/loupe.png')",
        cart: "url('/icons/shopping-cart.png')",
      },
      backgroundColor: {
        headergray: "#f0f0e9",
        productHover: "#fe980f",
        optionmenu: "#40403e",
        orangediff: "#fe980f",
        buttoncolor: "#f5f5ed",
        footerbg: "#f0f0e9",
        footerlast: "#d6d6d0",
      },
      colors: {
        headergray: "#696763",
        productHover: "#fe980f",
        optionmenutext: "#b3afa8",
        orangediff: "#fe980f",
        textgray: "#b4b1ab",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundSize: {
        "10%": "10%",
        "25%": "10%",
      },
      backgroundPosition: {
        right1rem: "center right .5rem",
        left1rem: "center left 1rem",
      },
      contrast: {
        25: ".25",
      },
    },
  },
  plugins: [],
};
