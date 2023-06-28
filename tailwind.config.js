/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			mobile: '470px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1440px',
		},
		extend: {
			colors: {
				primary: "#0EF6CC",
				"primary-100": "#9efbea",
				"primary-200": "#86fae5",
				"primary-300": "#6ef9e0",
				"primary-400": "#56f8db",
				"primary-500": "#3ef7d6",
				"primary-600": "#26f6d1",
				"primary-700": "#08e2bb",
				"primary-800": "#08c9a6",
				"primary-900": "#07b192",
			},
		},
	},
	plugins: [],
};
