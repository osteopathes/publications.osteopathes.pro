const path = require('path')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[\w-/.:]+(?<!:)/g) || []
  }
}

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
    '@fullhuman/postcss-purgecss': ctx.env === 'production' ? {
      content: [
        'site/layouts/**/*.html',
        'site/content/**/*.md',
      ],
      extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ['html', 'md']
      }],
      fontFace: false,
      whitelistPatterns: [/^cc-.*$/],
      whitelist: [],
    } : false,
    autoprefixer: {},
  }
})
