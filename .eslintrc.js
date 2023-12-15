/** @type {import('eslint').Linter.Config} */
module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        node: true,
        browser: true
    },
    extends: [
        'eslint:recommended',
        'eslint-config-turbo',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier'
    ],
    plugins: ['@typescript-eslint', 'prettier', 'eslint-plugin-react', 'eslint-plugin-react-hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest'
    },
    rules: {}
};
