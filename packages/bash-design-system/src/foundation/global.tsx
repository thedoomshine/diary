import { globalCss } from '@stitches/react'

import { fontSizes, sizes } from './constants'
import { fluidType } from '../utils'

export const globalStyles = globalCss({
  [`*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *))`]:
    {
      all: `unset`,
      display: `revert`,
    },
  [`*,
    *::after,
    *::before`]: {
    boxSizing: `border-box`,
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
    overflow: `auto`,
  },
  [`h1, h2, h3`]: {
    letterSpacing: `1px`,
  },
  [`a, button`]: {
    cursor: `revert`,
  },
  a: {
    color: `inherit`,
    [`&:visited`]: {
      color: `$colors$blue`,
    },
    [`&:hover`]: {
      color: `$colors$yellow`,
    },
  },
  [`ol, ul, menu`]: {
    listStyle: `none`,
  },
  img: {
    [`max-inline-size`]: `100%`,
    [`max-block-size`]: `100%`,
  },
  table: {
    borderCollapse: `collapse`,
  },
  [`input, textarea`]: {
    [`-webkit-user-select`]: `auto`,
  },
  textarea: {
    whiteSpace: `revert`,
  },
  meter: {
    [`-webkit-appearance`]: `revert`,
    appearance: `revert`,
  },
  [`:where(pre)`]: {
    all: `revert`,
  },
  [`::placeholder`]: {
    color: `unset`,
  },
  [`::marker`]: {
    content: `initial`,
  },
  [`:where([hidden])`]: {
    display: `none`,
  },
  [`:where([contenteditable]:not([contenteditable="false"]))`]: {
    [`-moz-user-modify`]: `read-write`,
    [`-webkit-user-modify`]: `read-write`,
    [`overflow-wrap`]: `break-word`,
    [`-webkit-line-break`]: `after-white-space`,
    [`-webkit-user-select`]: `auto`,
  },
  [`:where([draggable="true"])`]: {
    [`-webkit-user-drag`]: `element`,
  },
  [`:where(dialog:modal)`]: {
    all: `revert`,
  },
})
