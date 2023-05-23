const FONT_FALLBACK = {
  MONO: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  SANS: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  SERIF: `Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
}

export const font = {
  mono: `'IBM Plex Mono', ${FONT_FALLBACK.MONO}`,
  sans: `'Atkinson Hyperlegible', ${FONT_FALLBACK.SANS}`,
  serif: `'Playfair Display', ${FONT_FALLBACK.SERIF}`,
} as const

const prefix = ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'xxxxl']

// typographic scale formula
// fᵢ = f₀rᶦ
const TYPE_SCALE = Array.from(
  { length: 7 },
  (_, i) => `${Number(Math.pow(Math.sqrt(2), i - 1).toFixed(4))}rem`
).reduce((a, v, i) => ({ ...a, [prefix[i]]: v }), {})

export const fontSize = {
  _min: `16px`,
  _max: `22.63px`,
  ...TYPE_SCALE,
} as const

const FONT_WEIGHT = Array.from({ length: 8 }, (_, i) =>
  ((i + 1) * 100).toString()
).reduce((a, v) => ({ ...a, [v]: v }), {})

export const fontWeight = {
  ...FONT_WEIGHT,
} as const
