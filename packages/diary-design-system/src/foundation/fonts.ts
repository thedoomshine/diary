const FONT_FALLBACK = {
  MONO: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  SANS: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  SERIF: `Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
} as const

export const font = {
  mono: `'IBM Plex Mono', ${FONT_FALLBACK.MONO}`,
  sans: `'Atkinson Hyperlegible', ${FONT_FALLBACK.SANS}`,
  serif: `${FONT_FALLBACK.SERIF}`,
} as const
