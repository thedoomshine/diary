import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction, V2_MetaFunction } from '@remix-run/node'
import { createHead } from 'remix-island'

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

export const meta: V2_MetaFunction = () => {
  return [
    {
      title: 'bash'
  }]
}

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    href: 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&display=swap',
    rel: 'stylesheet',
  },
]

export const Head = createHead(() => (
  <>
    <Meta />
    <Links />
  </>
))

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <Outlet />
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </ThemeProvider>
  )
}

export function CatchBoundary() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>This is a catch boundary!</h1>
      <p>
        <a href="/">Go back home</a>
      </p>
    </div>
  );
}