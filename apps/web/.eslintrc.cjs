/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    'diary',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node',
  ],
  ignorePatterns: ['**/api/*'],
}
