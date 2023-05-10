import 'styled-components'
import { theme } from './foundation/theme'
import { DefaultTheme } from 'styled-components'

type BashTheme = typeof theme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface BashTheme extends DefaultTheme {}
}
