/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
	"./index.html",
	"./src/**/*.{js,ts,jsx,tsx}", 
 ],
  theme: {
	extend: {
	  screens: {
		'xs': '320px',
		'sm': '500px',
		'md': '600px',
		'lg': '800px',
		'xl': '940px',
		'2xl': '1000px'
	  },
	},
  },
  plugins: [],
}

