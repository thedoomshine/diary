'use client'

import { GlobalStyle, theme } from '@diaryco/design-system'
import isPropValid from '@emotion/is-prop-valid'
import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { ThemeProvider } from 'styled-components'

export default function StyledComponentsRegistry({
  children,
}: {
  children?:
    | React.ReactNode
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance} shouldForwardProp={isPropValid} enableVendorPrefixes>
      <>
        <GlobalStyle />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </>
    </StyleSheetManager>
  )
}
