/** @type {import("tailwindcss").Config} */
module.exports = {
	content: [
		"./app/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
	],
	presets: [require("nativewind/preset")],
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			// Adjusted light and dark for better pairing with primary scheme
			light: "#f5f9f7", // Light with a green tint from primary color
			dark: "#2a4737", // Dark with a deeper green hue from primary color
			white: "#ffffff", // Pure white
			black: "#000000", // Pure black
			primary: {
				100: "#e5f2e9", // Lightest shade of primary
				200: "#c6e0cf",
				300: "#a7d0b4",
				400: "#86bd98",
				500: "#6D9775", // Main primary color
				600: "#5f8667",
				700: "#507557",
				800: "#416447",
				900: "#334f38", // Darkest primary shade
				DEFAULT: "#6D9775",
			},
			accent: {
				100: "#f2e6de", // Lightest shade of accent
				200: "#e0c3b1",
				300: "#d0a085",
				400: "#bf7e60",
				500: "#A67B5C", // Main accent color
				600: "#936f53",
				700: "#805f49",
				800: "#6c503f",
				900: "#583f34", // Darkest accent shade
				DEFAULT: "#A67B5C",
			},
			gray: {
				100: "#eaeaea",
				200: "#d5d5d5",
				300: "#c0c0c0",
				400: "#aaaaaa",
				500: "#959595",
				600: "#808080",
				700: "#606060",
				800: "#404040",
				900: "#202020",
				DEFAULT: "#808080",
			},
			warning: {
				100: "#fbeae6", // Lightest shade of warning
				200: "#f5b8a8",
				300: "#f08a77",
				400: "#eb5c47",
				500: "#e4321c", // Main warning color (red-orange to match primary and accent)
				600: "#cc2d19",
				700: "#b32a16",
				800: "#992513",
				900: "#801f10", // Darkest warning shade
				DEFAULT: "#e4321c",
			},
		},
		extend: {
			boxShadow: {
				pawFinder: "0 10px 15px rgba(11, 42, 14, 0.5)", // Custom shadow equivalent to 'shadow-lg shadow-dark'
			},
			borderRadius: {
				pawFinder: "10px",
			},
			fontSize: {
				pawFinder: "12px",
			},
		},
	},
	plugins: [],
};
