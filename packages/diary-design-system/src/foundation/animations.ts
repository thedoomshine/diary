import { css, keyframes as kf } from 'styled-components'

import { duration } from './durations'
import { easing } from './easings'

export const keyframes = {
  fadeIn: kf({
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  }),
  slideUpAndFade: kf({
    '0%': {
      opacity: '0',
      transform: 'translateY(0.125rem)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  }),
  slideRightAndFade: kf({
    '0%': {
      opacity: '0',
      transform: 'translateX(-0.125rem)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateX(0)',
    },
  }),
  slideDownAndFade: kf({
    '0%': {
      opacity: '0',
      transform: 'translateY(-0.125rem)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateY(0)',
    },
  }),
  slideLeftAndFade: kf({
    '0%': {
      opacity: '0',
      transform: 'translateX(0.125rem)',
    },
    '100%': {
      opacity: '1',
      transform: 'translateX(0)',
    },
  }),
  scaleUp: kf({
    '0%': { opacity: '0', transform: 'translate(-50%; -48%) scale(.96)' },
    '100%': { opacity: '1', transform: 'translate(-50%; -50%) scale(1)' },
  }),
}

export const animation = {
  scaleUp: css`animation: ${keyframes.scaleUp} ${duration['150']} ${easing.easeOutQuart} normal`,
  fadeIn: css`animation: ${keyframes.fadeIn} ${duration['150']} ${easing.easeOutQuart} normal`,
}
