import React from 'react'
import { globalStyles } from 'ui'
import { ServerStylesheet } from './registry'

export const metadata = {
  title: 'Bash',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
  }) {
  globalStyles()
  return (
    <html lang="en">
      <body>
        <ServerStylesheet>{children}</ServerStylesheet>
      </body>
    </html>
  );
}
