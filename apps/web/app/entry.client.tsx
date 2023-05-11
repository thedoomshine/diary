/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client'
import { RemixBrowser } from '@remix-run/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@bash/design-system'

function hydrate() {
  startTransition(() => {
    hydrateRoot(
      document.getElementById('root')!,
      <StrictMode>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RemixBrowser />
        </ThemeProvider>
      </StrictMode>,
    );
  });
}

if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(hydrate);
} else {
  setTimeout(hydrate, 1);
}