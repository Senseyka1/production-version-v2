module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},

	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
	],

	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react', 'i18next'],
	rules: {
		'linebreak-style': ['error', 'unix'],
		indent: [2, 4],
		'react/jsx-indent': [2, 4],
		'react/jsx-indent-props': [2, 4],
		quotes: ['error', 'single'],
		semi: ['error', 'never'],
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
		'@typescript-eslint/ban-ts-comment': 'off',
		'i18next/no-literal-string': ['error', { markupOnly: true }],
		// 'no-unused-vars': 'warn',
	},
}
