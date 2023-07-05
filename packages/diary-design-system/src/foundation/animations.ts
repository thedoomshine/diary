import { keyframes as kf } from '@vanilla-extract/css'

export const animation = {
  scaleUp: 'scaleUp {durations.150} {easings.easeOutQuart} normal',
  fadeIn: 'fadeIn {durations.150} {easings.easeOutQuart} normal',
}

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
