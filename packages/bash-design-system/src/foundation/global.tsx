import { createGlobalStyle } from 'styled-components'

import { color, font, fontSize, size, space } from './constants'
import { fluidType } from '../utils'
import { reset } from './reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    text-size-adjust: 100%;
    font-smooth: antialiased;
    background-color: ${color.black};
    color: ${color.white};
    font-size: ${fluidType(size.sm, size.lg, fontSize.min, fontSize.max)};
    height: 100vh;
    display: flex;
    line-height: 1.15;
  }

  body {
    font-family: ${font.sans};
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    margin: 0;
    padding: ${space.sm};
    flex: 1 1 auto;
    overflow: auto;
  }

  a {
    color: ${color.blue};
    text-decoration: underline;
    &:visited {
      color: ${color.purple};
    }
    &:hover {
      color:  ${color.yellow};
    }
  }
`
