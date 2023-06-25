/**
 * Name: eslint-config-diary
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  extends: ['turbo', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
    'no-empty-character-class': 'off',
    semi: 'off',
  },
}
