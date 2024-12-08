// https://docs.expo.dev/guides/using-eslint/
module.exports = {
	extends: ["expo", "prettier"],
	plugins: ["prettier"],
	ignorePatterns: ["/dist/*"],
	rules: {
		"arrow-spacing": "error",
		"no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
		"padding-line-between-statements": [
			"error",
			{ blankLine: "always", prev: ["*"], next: "return" },
		],
		"prettier/prettier": [
			"error",
			{
				useTabs: true,
				tabWidth: 4,
			},
		],
		quotes: [
			"warn",
			"double",
			{ avoidEscape: true, allowTemplateLiterals: true },
		],
	},
};
