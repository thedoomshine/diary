import { globalCss } from '@stitches/react'

import { fontSizes, sizes } from './constants'
import { fluidType } from './utils'

export const globalStyles = globalCss({
  [`*,
    *::after,
    *::before`
  ]: {
    boxSizing: `border-box`,
    margin: 0,
    padding: 0,
  },
  html: {
    [`-webkit-font-smoothing`]: `antialiased`,
    [`-moz-osx-font-smoothing`]: `grayscale`,
    backgroundColor: `$colors$black`,
    color: `$colors$white`,
    fontSize: fluidType(sizes.sm, sizes.lg, fontSizes.min, fontSizes.max),
    height: `100vh`,
    display: `flex`,
  },
  body: {
    fontFamily: `$fonts$sans`,
    fontStyle: `normal`,
    fontWeight: 400,
    lineHeight: 1.5,
    padding: `$space$sm`,
    flex: `1 1 auto`,
    overflow: `auto`
  },
  [`h1, h2, h3`]: {
    fontSize: `inherit`,
    letterSpacing: `1px`,
  },
  ul: {
    listStyle: `none`,
  },
})
