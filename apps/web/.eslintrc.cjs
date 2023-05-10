/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ["bash", "@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  ignorePatterns: ['**/api/*']
};
