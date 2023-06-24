/** @type {import('prettier').Linter.Config} */
module.exports = {
  ...require('prettier-config-diary'),
  pluginSearchDirs: ['../../node_modules/prettier-config-diary/node_modules'],
}
