import { cssBundleHref } from '@remix-run/css-bundle'

import type { LinksFunction } from '@remix-run/node'
import type { V2_MetaFunction } from '@remix-run/react'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from '@remix-run/react'

import { createHead } from 'remix-island'

import styled, { ThemeProvider } from 'styled-components'
import { Button, GlobalStyle, Icon, theme } from '@bash/design-system'

const StyledMain = styled.main`
  padding: 1rem;
`

const StyledIcon = styled(Icon)`
  margin-right: 0.5rem;
`

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

const getErrorMessage = (error: Error | unknown) => {
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <h1>
          {error.status} {error.statusText.toLocaleLowerCase()}
        </h1>
        <p>{error.data.toLocaleLowerCase()}</p>
      </>
    )
  } else if (error instanceof Error) {
    return (
      <>
        <h1>error</h1>
        <p>{error.message.toLocaleLowerCase()}</p>
        <p>the stack trace is:</p>
        <pre>{error.stack?.toLocaleLowerCase()}</pre>
      </>
    )
  } else {
    return <h1>Unknown Error</h1>
  }
}

export function ErrorBoundary() {
  const error = useRouteError()
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head />
      <StyledMain>
        <Button onClick={goBack}>
          <StyledIcon name='arrow-left' /> go back to safety
        </Button>
        {getErrorMessage(error)}
      </StyledMain>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </ThemeProvider>
  )
}
