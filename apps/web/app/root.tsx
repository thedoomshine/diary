import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction, DataFunctionArgs, V2_MetaFunction } from '@remix-run/node'
import {
  RemixRootDefaultCatchBoundary,
  RemixRootDefaultErrorBoundary,
} from '@remix-run/react/dist/errorBoundaries'
import { createHead } from 'remix-island'

import { ClerkApp } from '@clerk/remix'
import { rootAuthLoader } from '@clerk/remix/ssr.server'

import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '@bash/design-system'

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  isRouteErrorResponse
} from '@remix-run/react'

export const meta: V2_MetaFunction = () => ([{ title: 'bash.' }])

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

export const loader = async (args: DataFunctionArgs) => rootAuthLoader(args)

export const Head = createHead(() => (
  <>
    <Meta />
    <Links />
  </>
))

export const ErrorBoundary = () => {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    const { __clerk_ssr_interstitial_html } = error?.data?.clerkState?.__internal_clerk_state || {}
    if (__clerk_ssr_interstitial_html) {
      return <html lang="en" dangerouslySetInnerHTML={{ __html: __clerk_ssr_interstitial_html }} />
    }
    //  Current CatchBoundary Component
    return <RemixRootDefaultCatchBoundary />
  } else if (error instanceof Error) {
    return <RemixRootDefaultErrorBoundary error={error} />
  } else {
    const errorString =
      error == null
        ? "Unknown Error"
        : typeof error === "object" && "toString" in error
        ? error.toString()
        : JSON.stringify(error)
    return <RemixRootDefaultErrorBoundary error={new Error(errorString)} />
  }
}

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

export default ClerkApp(App)
