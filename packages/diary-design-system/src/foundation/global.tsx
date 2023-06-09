import { rgba } from 'polished'
import { createGlobalStyle } from 'styled-components'

import { color, font, fontSize, reset, size } from '~/foundation'
import { fluidType, grainyGradient } from '~/utils'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  dialog::backdrop {
    position: fixed;
    inset: 0;
    background-color: ${rgba(color.black, 0.75)};
    animation: none;
  }

  html {
    display: flex;

    width: 100%;
    height: 100vh;

    font-size: ${fluidType(size.sm, size.xl, fontSize._min, fontSize._max)};
    color: ${color.white};
    text-size-adjust: 100%;

    color-scheme: dark;
    background-color: ${color.black};

    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before {
      content: '';

      position: absolute;
      z-index: -1;
      inset: 0;

      width: 100%;
      height: 100%;

      opacity: 0.125
      ${grainyGradient()};
    }
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
`
