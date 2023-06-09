import { Atkinson_Hyperlegible } from 'next/font/google'

import StyledComponentsRegistry from '~/utils/registry'

import { RootLayoutContainer } from './root-layout-container'

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
          <RootLayoutContainer>
            {children}
          </RootLayoutContainer>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
