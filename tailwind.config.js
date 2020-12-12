module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    typography: {
      default: {
        css: {
          'code::before': {
            content: '""',
          },
          'code::after': {
            content: '""',
          },
        },
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require(`@tailwindcss/typography`)
    ]
}
