/**
 * Name: eslint-config-diary
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['turbo', 'prettier', 'stylelint'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-empty-character-class': 'off',
  },
}
