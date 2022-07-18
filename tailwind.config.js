const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  theme: {
    fontFamily: {
      readable: ["Merriweather", ...defaultTheme.fontFamily.sans],
      sans: ["Nunito", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",

      black: "#000",
      white: "#fff",
      gray: colors.slate,

      red: colors.red,
      orange: colors.orange,
      yellow: colors.amber,
      teal: colors.teal,
      lime: colors.lime,
      green: colors.green,
      blue: colors.sky,
      violet: colors.violet,
    },
  },
  extend: {
    typography: {
      DEFAULT: {
        css: {
          a: {
            color: colors.gray[700],
            textDecoration: "none",
            "&:hover": {
              color: colors.teal[600],
            },
          },
          blockquote: {
            fontWeight: "500",
            fontStyle: "italic",
            color: colors.gray[900],
            borderLeftWidth: "0.25rem",
            borderLeftColor: colors.teal[300],
            quotes: "",
          },
          "blockquote p:first-of-type::before": {
            content: "",
          },
          "blockquote p:last-of-type::after": {
            content: "",
          },
        },
      },
    },
  },
  content: ["site/layouts/**/*.html", "site/content/**/*.md"],
  variants: {
    display: ["responsive", "group-hover"],
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
