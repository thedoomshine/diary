'use client'

import { theme, GlobalStyle } from '@diaryco/design-system'
import { ThemeProvider } from 'styled-components'

type RootLayoutContainerProps = {
  children: React.ReactNode
}

export const RootLayoutContainer = ({ children }: RootLayoutContainerProps) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </ThemeProvider>
  )
}
