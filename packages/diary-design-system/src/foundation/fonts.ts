import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

const FONT_FALLBACK = {
  MONO: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  SANS: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  SERIF: `Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
}

export const fontTokens = {
  mono: `'IBM Plex Mono', ${FONT_FALLBACK.MONO}`,
  sans: `'Atkinson Hyperlegible', ${FONT_FALLBACK.SANS}`,
  serif: `'Playfair Display', ${FONT_FALLBACK.SERIF}`,
} as const

export const fonts = defineTokens.fonts(generateTokens(fontTokens))
