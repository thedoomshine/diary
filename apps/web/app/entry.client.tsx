import * as React from 'react';
import { hydrate } from 'react-dom';
import { RemixBrowser } from '@remix-run/react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle, theme } from '@bash/design-system'

hydrate(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <RemixBrowser />
  </ThemeProvider>,
  document,
);
