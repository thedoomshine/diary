import { rgba } from 'polished'
import { css } from 'styled-components'

import { color } from '../foundation/index';


type GrainyGradientProps = {
  angle?: number
  background?: string
  color1?: string
  color2?: string
  type?: 'conic' | 'linear' | 'radial' | 'repeating-linear'
}

export const grainyGradient = (
  {
    angle = 0,
    color1 = color.black,
    color2 = rgba(color.white, 0),
    type = 'linear',
  } = {} as GrainyGradientProps
) => {
  return css`
    background: ${type}-gradient(${angle}, ${color1}, ${color2}),
      url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  `
}

export const grainyGradientPseudo = (
  {
    angle = 0,
    background = color.charcoal,
    color1 = color.black,
    color2 = rgba(color.white, 0),
    type = 'linear',
  } = {} as GrainyGradientProps
) => css`
  position: relative;

  &:before {
    background: ${background};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.125;
    border-radius: 0.5rem;
    width: 100%;
    height: 100%;
    content: '';
    ${grainyGradient({ angle, color1, color2, type })};
    z-index: -1;
  }
`
