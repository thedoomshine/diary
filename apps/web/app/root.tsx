import { cssBundleHref } from '@remix-run/css-bundle'

import type { LinksFunction } from '@remix-run/node'
import type { V2_MetaFunction } from '@remix-run/react'

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

const ICONS = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'icon',
    type: 'image/x-icon',
    href: 'favicon.ico',
  },
  { rel: 'manifest', href: '/favicon/site.webmanifest' },
]

export const meta: V2_MetaFunction = () => [{ title: 'bash.' }]

export const links: LinksFunction = () => [
  ...ICONS,
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

function App() {
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

export default App
