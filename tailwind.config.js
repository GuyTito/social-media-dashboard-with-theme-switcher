const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./*.html",],
  theme: {
    extend: {
      colors: {
        'Lime-Green': 'hsl(163, 72%, 41%)',
        'Bright-Red': 'hsl(356, 69%, 56%)',
        'Facebook': 'hsl(208, 92%, 53%)',
        'Twitter': 'hsl(203, 89%, 53%)',
        'Instagram': 'linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)',
        'YouTube': 'hsl(348, 97%, 39%)',
        'Toggle-dark': 'linear gradient hsl(210, 78%, 56%) to hsl(146, 68%, 55%)',
        'Toggle-light': 'hsl(230, 22%, 74%)',
        'Very-Dark-Blue': 'hsl(230, 17%, 14%)',
        'Very-Dark-Blue-pattern': 'hsl(232, 19%, 15%)',
        'Dark-Desaturated-Blue': 'hsl(228, 28%, 20%)',
        'Desaturated-Blue':'hsl(228, 34%, 66%)',
        'Very-Pale-Blue': 'hsl(225, 100%, 98%)',
        'Light-Grayish-Blue': 'hsl(227, 47%, 96%)',
        'Dark-Grayish-Blue': 'hsl(228, 12%, 44%)',
      },
      fontFamily: {
        sans : ["'Inter'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
