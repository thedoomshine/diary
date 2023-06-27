import { defineTokens } from '@pandacss/dev'

import { generateTokens } from '../utils'

export const animationTokens = {
  scaleUp: 'scaleUp {durations.150} {easings.easeOutQuart} normal',
  fadeIn: 'fadeIn {durations.150} {easings.easeOutQuart} normal',
}

export const animations = defineTokens.animations(
  generateTokens(animationTokens)
)

export const keyframes = {
  fadeIn: {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  slideUpAndFade: {
    '0%': {
      opacity: 0,
      transform: 'translateY(0.125rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  slideRightAndFade: {
    '0%': {
      opacity: 0,
      transform: 'translateX(-0.125rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  slideDownAndFade: {
    '0%': {
      opacity: 0,
      transform: 'translateY(-0.125rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  slideLeftAndFade: {
    '0%': {
      opacity: 0,
      transform: 'translateX(0.125rem)',
    },
    '100%': {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  scaleUp: {
    '0%': { opacity: 0, transform: 'translate(-50%; -48%) scale(.96)' },
    '100%': { opacity: 1, transform: 'translate(-50%; -50%) scale(1)' },
  },
}
