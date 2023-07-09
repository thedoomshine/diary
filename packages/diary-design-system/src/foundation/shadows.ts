import { color } from './colors'

export const shadow = {
  normal: '0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5)',
  isometric: `0 0 0 ${color.black},
  -1px 1px 0 ${color.black},
  -2px 2px 0 ${color.black},
  -3px 3px 0 ${color.black},
  -4px 4px 0 ${color.black},
  -5px 5px 0 ${color.black},
  -6px 6px 0 ${color.black},
  -7px 7px 0 ${color.black},
  -8px 8px 0 ${color.black}`,
  glow: `0 0 16rem 0.125rem ${color.yellow}`,
} as const
