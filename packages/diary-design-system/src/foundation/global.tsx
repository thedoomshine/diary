import { rgba } from 'polished'
import { createGlobalStyle } from 'styled-components'

import { reset } from '~/foundation'
import { fluidType, grainyGradientBackground } from '~/utils'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    display: flex;

    width: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    min-height: 100dvh;

    font-size: ${({ theme }) =>
      fluidType(
        theme.size.sm,
        theme.size.xl,
        theme.fontSize._min,
        theme.fontSize._max
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

    width: 100%;
    margin: 0;

    font-family: ${({ theme }) => theme.font.sans};
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    font-style: normal;
    line-height: ${({ theme }) => theme.lineHeight.body};
  }

  #root {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    line-height: ${({ theme }) => theme.lineHeight.title};
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
    background-color: ${({ theme }) => rgba(theme.color.black, 0.75)};
    animation: none;
  }

  :where(dialog:modal) {
    width: calc(100% - 1rem);
    max-width: 40rem;
    padding: 0.5rem;
  }
`
