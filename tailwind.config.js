const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
		colors: {
			primaryGreen: '#019147',
			primaryBlack: '#121413',
			primaryYellow: '#fede3e',
			primaryGray: '#646464',
			white: colors.white,
			black: colors.black,
			blue: colors.blue,
			slate: colors.slate,
			gray: colors.gray,
			green: colors.green,
			neutral: colors.neutral,
			yellow: colors.yellow,
			orange: colors.orange,
			pink: colors.pink,
			sky: colors.sky,
			purple: colors.purple,
			red: colors.red,
			transparent: colors.transparent,

		},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
