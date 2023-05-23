import { keyframes } from 'styled-components'

export const slideUpAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(0.125rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideRightAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(-0.125rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const slideDownAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(-0.125rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideLeftAndFade = keyframes`
  from {
    opacity: 0;
    transform: translateX(0.125rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`