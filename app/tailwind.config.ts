// tailwind.config.js
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}', // Include all files in pages
		'./components/**/*.{js,ts,jsx,tsx}', // Include all files in components
		'./app/**/*.{js,ts,jsx,tsx}' // If you're using the /app directory
	],
	theme: {
		extend: {}
	},
	plugins: []
}
