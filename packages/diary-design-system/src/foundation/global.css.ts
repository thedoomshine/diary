import { globalStyle } from '@vanilla-extract/css'
import { themeVars } from './theme.css'

globalStyle('html', {
  display: 'flex',
  width: '100%',
  minHeight: '100dvh',
  fontSize: 'clamp(1rem, 0.52vw + 0.83rem, 1.25rem)',
  color: 'white',
  textSizeAdjust: '100%',
  colorScheme: 'dark',
  WebkitFontSmoothing: 'subpixel-antialiased',
  MozOsxFontSmoothing: 'grayscale',
})

globalStyle('body', {
  display: 'flex',
    flex: '1 1 auto',

    width: '100%',
    margin: '0',

    fontFamily: themeVars.font.sans,
    fontSize: themeVars.fontSize.md,
    fontWeight: themeVars.fontWeight.normal,
    fontStyle: 'normal',
    lineHeight: themeVars.lineHeight.body,
})

globalStyle('#root', {
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
})

globalStyle('h1, h2, h3, h4, h5, h6', {
  fontWeight: themeVars.fontWeight.normal,
  lineHeight: themeVars.lineHeight.title,
})

globalStyle('h1', {
  fontSize: themeVars.fontSize.h1,
})


globalStyle('h2', {
  fontSize: themeVars.fontSize.h2,
})

globalStyle('h3', {
  fontSize: themeVars.fontSize.h3,
})

globalStyle('h4', {
  fontSize: themeVars.fontSize.h4,
})

globalStyle('h5', {
  fontSize: themeVars.fontSize.h5,
})

globalStyle('h6', {
  fontSize: themeVars.fontSize.h6,
})

globalStyle('a', {
  color: themeVars.color.yellow,
  textDecoration: 'underline',
  textDecorationSkipInk: 'all',
})

globalStyle('pre', {
  width: '100%',
  wordBreak: 'break-word',
  tabSize: 4,
  whiteSpace: 'pre-wrap',
})

