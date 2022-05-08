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
        normal: "16px",
        xl: "72px",
      },
      lineHeight: {
        headerLH: "64px",
        textLH: "28px",
      },

      spacing: {
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
      },
    },
  },

  fontFamily: {
    montserrat: ["Montserrat", "sans-serif"],
    openSans: ["Open Sans", "sans-serif"],
  },
  plugins: [],
};
