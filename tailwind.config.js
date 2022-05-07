module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3A5A40",
        text: "#588157",
        lightGreen: "#E8F6DD",
        deepGreen: "#232922",
        red: "#EF233C",
        yellow: "#FA983A",
      },
      fontSize: {
        title: "32px",
        titleXL: "48px",
        textHeader: "20px",
        textTexts: "16px",
        xl: "72px",
      },
      lineHeight: {
        headerLH: "64px",
        textLH: "28px",
      },
    },
  },

  fontFamily: {
    montserrat: ["Montserrat", "sans-serif"],
    openSans: ["Open Sans", "sana-serif"],
  },
  plugins: [],
};
