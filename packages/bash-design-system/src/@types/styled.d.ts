import 'styled-components'
import { BashTheme } from '../foundation/theme'

declare module '@bash/design-system' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends BashTheme {}
}

declare module 'styled-components' {
  export type DefaultTheme = BashTheme
}
