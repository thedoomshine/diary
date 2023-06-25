import { rgba } from 'polished'

import { token } from '~/style-engine/tokens'

type GrainyGradientProps = {
  angle?: number
  background?: string
  color1?: string
  color2?: string
  type?: 'conic' | 'linear' | 'radial' | 'repeating-linear'
}

export const utilities = {
  extend: {
    grainyGradientBackground: {
      className: 'grainy-gradient',
      shorthand: 'gg',
      values: 'colors',
      transform({
        angle = 0,
        background = token('colors.black'),
        color1 = token('colors.black'),
        color2 = rgba(token('colors.black'), 0),
        type = 'linear',
      } = {} as GrainyGradientProps) {
        return {
          backgroundColor: background,
          position: 'relative',

          '&:before': {
            background: `${type}-gradient(${angle}, ${color1}, ${color2}),
              url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0.125,
            borderRadius: '0.5rem',
            width: '100%',
            height: '100%',
            content: '',
            pointerEvents: 'none',
          }
        }
      }
    }
  }
}
