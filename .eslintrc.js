/** @type {import("eslint").Linter.Config} */
module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/base',
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': ['warn'],
		'indent': ['error', 'tab'],
		'no-trailing-spaces': 'error',
		'space-before-blocks': ['error', 'always'],
		'switch-colon-spacing': ['error', { after: true, before: false }],
		'template-tag-spacing': 'error',
		'space-unary-ops': [2, { words: true, nonwords: false }],
		'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		'vue/multi-word-component-names': 'off',
		'vue/script-setup-uses-vars': 'error',
	},
};
