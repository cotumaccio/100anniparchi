module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: '#114B31',
        secondary: '#F6BE41',
        terziary: '#ED6B06'
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      height: {
        "carousel": "700px",
      },
    },
  },
  plugins: [],
};
