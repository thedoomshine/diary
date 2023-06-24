/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GlobalStyle, theme } from '@diaryco/design-system'
import { RemixBrowser } from '@remix-run/react'
import { StrictMode, startTransition } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document.getElementById('root')!,
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RemixBrowser />
        </ThemeProvider>
      </StrictMode>
    )
  })
}

if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(hydrate)
} else {
  setTimeout(hydrate, 1)
}
