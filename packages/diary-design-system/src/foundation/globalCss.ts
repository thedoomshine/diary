import { defineGlobalStyles } from '@pandacss/dev'
import { rgba } from 'polished'

import { colorTokens } from './colors'

export const globalCss = defineGlobalStyles({
  html: {
    display: 'flex',
    width: '100%',
    minHeight: '100dvh',
    fontSize: 'clamp(1rem, 0.52vw + 0.83rem, 1.25rem)',
    color: 'white',
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

    fontFamily: 'sans',
    fontSize: 'md',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: 'body',
  },

  '#root': {
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%',
  },

  ['h1, h2, h3, h4, h5, h6']: {
    fontWeight: '700',
    lineHeight: 'title',
  },

  h1: {
    fontSize: 'h1',
  },
  h2: {
    fontSize: 'h2',
  },
  h3: {
    fontSize: 'h3',
  },
  h4: {
    fontSize: 'h4',
  },
  h5: {
    fontSize: 'h5',
  },
  h6: {
    fontSize: 'h6',
  },

  a: {
    color: 'yellow',
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
    backgroundColor: rgba(colorTokens.black, 0.75),
    animation: 'none',
  },

  ':where(dialog:modal)': {
    width: 'calc(100% - 1rem)',
    maxWidth: '40rem',
    padding: '0.5rem',
  },
})
