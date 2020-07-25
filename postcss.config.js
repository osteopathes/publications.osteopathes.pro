const path = require('path')

module.exports = ctx => ({
  plugins: {
    "postcss-import": {},
    "postcss-url": {},
    "tailwindcss": {},
    "postcss-preset-env": {
      browsers: "last 2 versions",
      features: {
        // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
        "focus-within-pseudo-class": false
      }
    },
    autoprefixer: {},
  }
})
