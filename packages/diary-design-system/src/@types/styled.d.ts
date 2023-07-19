import 'styled-components'

import type { BashTheme } from '~/foundation'

1``
declare module '@diaryco/design-system' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends BashTheme {}
}

declare module 'styled-components' {
  export type DefaultTheme = BashTheme
}
