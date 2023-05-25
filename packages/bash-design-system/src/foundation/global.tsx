import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'
import { color, font, fontSize, size } from './constants'
import { fluidType } from '../utils'
import { reset } from './reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    text-size-adjust: 100%;
    font-smooth: antialiased;
    background-color: ${color.black};
    color: ${color.white};
    font-size: ${fluidType(size.sm, size.xl, fontSize._min, fontSize._max)};
    height: 100vh;
    display: flex;
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      height: 100%;
      width: 100%;
      opacity: 0.125;
      background: linear-gradient(
          320deg,
          ${color.black},
          ${rgba(color.white, 0)}
        ),
        url("data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }
  }

  body {
    display: flex;
    font-family: ${font.sans};
    font-style: normal;
    font-size: ${({ theme }) => theme.fontSize.md};
    font-weight: ${({ theme }) => theme.fontWeight[`400`]};
    line-height: 1.15;
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
    line-height: 1.15;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.xxxxl}
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl}
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xxl}
  }

  h4 {
    font-size: ${({ theme }) => theme.fontSize.xl}
  }

  h5 {
    font-size: ${({ theme }) => theme.fontSize.lg}
  }

  small {
    font-size: ${({ theme }) => theme.fontSize.sm};
  }

  a {
    color: ${color.yellow};
    text-decoration: underline;
  }
`
