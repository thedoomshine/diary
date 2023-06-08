/**
 * Name: stylelint-config-diary
 * @type {import("stylelint").Config}
 */
module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-clean-order'],
  customSyntax: 'postcss-styled-syntax',
  rules: {
    'no-empty-source': null,
    'selector-class-pattern': '^([a-z][a-z0-9]*)([-_]{0,2}[a-z0-9]+)*$',
    'function-allowed-list': null,
    'color-function-notation': null,
  },
}
