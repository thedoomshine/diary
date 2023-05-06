const fallbacks = {
  [`system-mono`]: `Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace`,
  [`system-sans`]: `-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif`,
  [`system-serif`]: `Iowan Old Style, Apple Garamond, Baskerville, Times New Roman, Droid Serif, Times, Source Serif Pro, serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol`,
}

export const fonts = {
  mono: `'IBM Plex Mono', ${fallbacks['system-mono']}`,
  sans: `${fallbacks['system-sans']}`,
  serif: `'Playfair Display', ${fallbacks['system-serif']}`,
}

export const fontSizes = {
  min: `16px`,
  max: `20px`,
  xl: `3rem`,
}

export const fontWeights = {
  100: 100,
  200: 200,
  300: 300,
  400: 400,
  500: 500,
  600: 600,
  700: 700,
  800: 800,
  900: 900,
}
