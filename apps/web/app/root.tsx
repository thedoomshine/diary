import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@bash/design-system'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
]

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <html lang='en'>
        <head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1"
          />
          <Meta />
          <Links />
          {typeof document === 'undefined' ? '__STYLES__' : null}
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </html>
    </ThemeProvider>
  )
}
