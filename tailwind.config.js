export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C77DFF",
        secondary: "#FFB3C6",
        surface: "#FFF7FB",
        accent: "#FDE2FF",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 18px rgba(199, 125, 255, 0.45)",
      },
    },
  },
};
