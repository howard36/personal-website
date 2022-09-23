/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./content/**/*.md', './layouts/**/*.html'],
  theme: {
    extend: {
	  colors: {
		themeblue: {
		  light: '#bdebfc',
		  DEFAULT: '#55bde2',
		  dark: '#2d96bd',
		},
		themepink: '#ef3982',
		themegray: '#a9a9b3',
	  }
	},
  },
  darkMode: 'class',
  plugins: [],
  important: true,
}
