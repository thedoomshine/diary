import { defineGlobalStyles } from '@pandacss/dev'
import { rgba } from 'polished'

export const globalCss = defineGlobalStyles({
  html: {
    display: 'flex',
    width: '100%',
    minHeight: ['100vh', '-webkit-fill-available', '100dvh'],
    fontSize: `clamp(
      token(fontSizes._min)px,
      calc(
        (token(fontSizes._min)px + (token(fontSizes._max) - token(fontSizes._min))) * ((100vw - token(breakpoints.xs)) / (token(breakpoints.xl) - token(breakpoints.xs)))
      ),
      {fontSizes._max}px)`,
    color: 'color.white',
    textSizeAdjust: '100%',
    colorScheme: 'dark',
    '-webkit-font-smoothing': 'subpixel-antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },

  body: {
    display: 'flex',
    flex: '1 1 auto',

    width: '100%',
    margin: '0',

    fontFamily: 'fonts.sans',
    fontSize: 'fontSizes.md',
    fontWeight: 'fontWeights["400"]',
    fontStyle: 'normal',
    lineHeight: 'lineHeights.body',
  },

  '#root': {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
  },

  ['h1, h2, h3, h4, h5, h6']: {
    fontWeight: 'fontWeights["700"]',
    lineHeight: 'lineHeights.heading',
  },

  h1: {
    fontSize: 'fontSizes.h1',
  },
  h2: {
    fontSize: 'fontSizes.h2',
  },
  h3: {
    fontSize: 'fontSizes.h3',
  },
  h4: {
    fontSize: 'fontSizes.h4',
  },
  h5: {
    fontSize: 'fontSizes.h5',
  },
  h6: {
    fontSize: 'fontSizes.h6',
  },

  a: {
    color: 'colors.yellow',
    textDecoration: 'underline',
    textDecorationSkipInk: 'all',
  },

  pre: {
    width: '100%',
    wordBreak: 'break-word',
    tabSize: 4,
    whiteSpace: 'pre-wrap',
  },

  'dialog::backdrop': {
    position: 'fixed',
    inset: 0,
    backgroundColor: rgba('colors.black', 0.75),
    animation: 'none',
  },

  ':where(dialog:modal)': {
    width: 'calc(100% - 1rem)',
    maxWidth: '40rem',
    padding: '0.5rem',
  },
})
