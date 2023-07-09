import './global.css'
import './index.css'
import { Atkinson_Hyperlegible } from 'next/font/google'

import StyledComponentsRegistry from '~/utils/registry'
import { ThemeProvider } from 'styled-components'

import { theme, GlobalStyle } from '@diaryco/design-system'

const hyperlegible = Atkinson_Hyperlegible({
  style: ['normal', 'italic'],
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'diary.',
  description: 'your social calendar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={hyperlegible.className}>
        <StyledComponentsRegistry>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
