import React from 'react'
import { getCssText, globalStyles } from '@bash/design-system'

export const metadata = {
  title: 'Bash',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
  }) {

  return (
    <html lang="en">
      <head>
        <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        {children}
        {globalStyles()}
      </body>
    </html>
  );
}
