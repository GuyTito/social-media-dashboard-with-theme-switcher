const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html",],
  theme: {
    extend: {
      colors: {
        'Lime-Green': 'hsl(163, 72%, 41%)',
        'Bright-Red': 'hsl(356, 69%, 56%)',
      },
      fontFamily: {
        sans : ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
