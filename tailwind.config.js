module.exports = {
  content: ["./src/**/*.{html,njk,md}"],
  theme: {
    extend: {
      colors: {
          primary: "#E25A28",
          teal: "#1C8282", 
          dark: "#363636", 
          light: "#ffffff", 
          accent: "#c8c6af",
      },
      fontFamily: {
        sans: ["Raleway", "system-ui", "sans-serif"],
        body: ["Lora", "serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out",
      },
    },
  },
  plugins: [],
};