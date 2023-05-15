const FONT_FALLBACK = {
  [`system-mono`]: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  [`system-sans`]: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  [`system-serif`]: `Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
}

export const font = {
  mono: `'IBM Plex Mono', ${FONT_FALLBACK['system-mono']}`,
  sans: `'Atkinson Hyperlegible', ${FONT_FALLBACK['system-sans']}`,
  serif: `'Playfair Display', ${FONT_FALLBACK['system-serif']}`,
} as const

const TYPE_SCALE = Array.from(
  { length: 6 },
  (_, i) => `${(i + 1) / Math.sqrt(2)}em`
).reduce((a, v, i) => ({ ...a, [i + 1]: v }), {})

export const fontSize = {
  min: `16px`,
  max: `22.63px`,
  ...TYPE_SCALE,
} as const

const FONT_WEIGHT = Array.from(
  { length: 8 },
  (_, i) => ((i + 1) * 100).toString()).reduce(
  (a, v) => ({ ...a, [v]: v }),
  {}
)

export const fontWeight = {
  ...FONT_WEIGHT,
} as const
