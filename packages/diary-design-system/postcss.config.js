/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require('@pandacss/dev/postcss')(),
    require('autoprefixer')(),
    require('css-declaration-sorter')(),
    require('css-has-pseudo')(),
    require('postcss-nested')(),
  ]
}
