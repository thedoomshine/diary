const fallbacks = {
  [`system-mono`]: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  [`system-sans`]: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  [`system-serif`]: `Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
}

export const font = {
  mono: `'IBM Plex Mono', ${fallbacks['system-mono']}`,
  sans: `${fallbacks['system-sans']}`,
  serif: `'Playfair Display', ${fallbacks['system-serif']}`,
} as const

export const fontSize = {
  min: `16px`,
  max: `20px`,
  xl: `3rem`,
} as const

export const fontWeight = {
  '100': '100',
  '200': '200',
  '300': '300',
  '400': '400',
  '500': '500',
  '600': '600',
  '700': '700',
  '800': '800',
  '900': '900',
} as const
