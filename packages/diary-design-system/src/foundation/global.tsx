import { remToPx, rgba } from 'polished'
import { createGlobalStyle } from 'styled-components'

import {
  color,
  duration,
  easing,
  font,
  fontSize,
  fontWeight,
  lineHeight,
  opacity,
  radii,
  shadow,
  size,
  spacing,
  zIndex,
} from '~/foundation'
import { fluidType, grainyGradientBackground } from '~/utils'
import { objToVar } from '~/utils/obj-to-var'

const theme = {
  color,
  duration,
  easing,
  fontSize,
  fontWeight,
  font,
  lineHeight,
  opacity,
  radii,
  shadow,
  size,
  spacing,
  zIndex,
}

export const GlobalStyle = createGlobalStyle`
  /***
    The new CSS reset - version 1.8.4 (last updated 14.2.2023)
    GitHub page: https://github.com/elad2412/the-new-css-reset
  ***/
  /*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
 */
    *:where(:not(html, iframe, canvas, img, svg, video, audio, svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  /* Preferred box-sizing value */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Reapply the pointer cursor for anchor tags */
  a,
  button {
    cursor: revert;
  }

  /* Remove list styles (bullets/numbers) */
  ol,
  ul,
  menu {
    list-style: none;
  }

  /* For images to not be able to exceed their container */
  img {
    max-inline-size: 100%;
    max-block-size: 100%;
  }

  /* removes spacing between cells in tables */
  table {
    border-collapse: collapse;
  }

  /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
  input,
  textarea {
    user-select: auto;
  }

  /* revert the 'white-space' property for textarea elements on Safari */
  textarea {
    white-space: revert;
  }

  /* minimum style to allow to style meter element */
  meter {
    appearance: revert;
  }

  /* preformatted text - use only for this feature */
  :where(pre) {
    all: revert;
  }

  /* reset default text opacity of input placeholder */
  ::placeholder {
    color: unset;
  }

  /* remove default dot (•) sign */
  ::marker {
    content: initial;
  }

  /* fix the feature of 'hidden' attribute.
   display:revert; revert to element instead of attribute */
  :where([hidden]) {
    display: none;
  }

  /* revert for bug in Chromium browsers
    - fix for the content editable attribute will work properly.
    - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element */
  :where([contenteditable]:not([contenteditable='false'])) {
    user-select: auto;

    -webkit-line-break: after-white-space;
    line-break: after-white-space;
    overflow-wrap: break-word;

    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable='true']) {
    -webkit-user-drag: element;
  }

  /* Revert Modal native behavior */
  :where(dialog:modal) {
    all: revert;

    overflow: visible;

    padding: 0;

    background-color: transparent;
    border: none;
  }

  :root {
    ${objToVar(theme)}
  }

  html {
    display: flex;

    width: 100%;

    font-size: ${({ theme }) =>
      fluidType(
        theme.size.md,
        theme.size.xl,
        remToPx(theme.fontSize.md),
        remToPx(theme.fontSize.xl)
      )};
    color: ${({ theme }) => theme.color.white};
    text-size-adjust: 100%;

    color-scheme: dark;
    ${({ theme }) =>
      grainyGradientBackground({ background: theme.color.black })};

    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;

    width: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    min-height: 100dvh;
    margin: 0;

    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-style: normal;
    line-height: ${({ theme }) => theme.lineHeight.body};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.title};
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.h1};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.h2};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.h5};
  }

  small {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  a {
    color: ${({ theme }) => theme.color.yellow};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &:focus-visible {
      outline: ${({ theme }) =>
        `dotted ${theme.spacing[2]} ${theme.color.yellow}`};
      outline-offset: ${({ theme }) => theme.spacing[2]};
      text-decoration: underline;
    }
  }

  strong {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  em {
    font-style: italic;
  }

  pre {
    width: 100%;
    word-break: break-word;
    tab-size: 4;
    white-space: pre-wrap;
  }

  dialog::backdrop {
    position: fixed;
    inset: 0;
    background-color: ${({ theme }) => rgba(theme.color.black, 0.75)};
    animation: none;
  }

  :where(dialog:modal) {
    width: calc(100% - 1rem);
    max-width: 40rem;
    padding: 0.5rem;
  }
`
