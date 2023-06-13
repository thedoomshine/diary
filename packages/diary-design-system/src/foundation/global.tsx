import { rgba } from 'polished'
import { createGlobalStyle } from 'styled-components'

import { color, font, fontSize, reset, size } from '~/foundation'
import { fluidType, grainyGradientBackground } from '~/utils'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    display: flex;

    width: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    min-height: 100dvh;

    font-size: ${fluidType(size.sm, size.xl, fontSize._min, fontSize._max)};
    color: ${color.white};
    text-size-adjust: 100%;

    color-scheme: dark;
    ${grainyGradientBackground({ background: color.black })};

    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    display: flex;
    flex: 1 1 auto;

    width: 100%;
    margin: 0;

    font-family: ${font.sans};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight[`400`]};
    font-style: normal;
    line-height: 1.15;
  }

  #root {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fontWeight[`800`]};
    line-height: 1.15;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxxl};
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }

  small {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  a {
    color: ${color.yellow};
    text-decoration: underline;
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
    background-color: ${rgba(color.black, 0.75)};
    animation: none;
  }

  :where(dialog:modal) {
    width: calc(100% - 1rem);
    max-width: 40rem;
    padding: 0.5rem;
  }
`
