import { createGlobalStyle } from 'styled-components'

import { color, font, fontSize, size, space } from './constants'
import { fluidType } from '../utils'
import { reset } from './reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

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
    display: flex;
    font-family: ${font.sans};
    font-style: normal;
    font-weight: ${({ theme }) => theme.fontSize[`400`]};
    line-height: 1.5;
    margin: 0;
    flex: 1 1 auto;
    overflow: auto;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: ${({ theme }) => theme.fontWeight[`800`]};
    line-height: 1;
    letter-spacing: 1px;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize[`6`]}
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize[`5`]}
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize[`4`]}
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize[`3`]}
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize[`2`]}
  }

  h6 {
    font-size: ${({ theme }) => theme.fontSize[`1`]}
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
