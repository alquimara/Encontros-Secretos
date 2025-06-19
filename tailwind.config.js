const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FDF3FA",
        foreground: "#1E1E1E",
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        card: "0 2px 6px rgba(91, 59, 102, 0.08)",
      },
    },
  },
  plugins: [],
};
