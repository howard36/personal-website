/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./content/**/*.md', './layouts/**/*.html'],
  theme: {
    extend: {
	  colors: {
		themeblue: '#2d96bd',
		themepink: '#ef3982',
	  }
	},
  },
  plugins: [],
  important: true,
}
