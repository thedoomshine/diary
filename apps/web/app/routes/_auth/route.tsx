import { NavLink, Outlet, useLocation } from '@remix-run/react'
import type { LoaderFunction } from '@remix-run/node'
import { json, redirect } from '@remix-run/node'

import styled from 'styled-components'
import { Icon } from '@bash/design-system'

import { createServerClient } from '~/services/db.server'
import { AUTH_ROUTES, ROUTES } from './@types'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  width: 100%;
`

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;
  width: 100%;
  padding: ${({ theme }) => theme.space.sm};
  max-width: ${({ theme }) => theme.size.md};
`

const StyledNavLink = styled(NavLink)`
  margin-left: ${({ theme }) => theme.space.xxs};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.charcoal};
  border-radius: ${({ theme }) => theme.space.xxs};
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  margin-top: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.xs};
  width: 100%;
`

const StyledLogo = styled(Icon)`
  display: block;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  height: 2em;
  width: 2em;
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  overflow: visible;
`

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
`

const HEADER_COPY = {
  [AUTH_ROUTES.SIGN_IN]: 'sign in to',
  [AUTH_ROUTES.SIGN_UP]: 'sign up for',
} as const

const LINK_COPY = {
  [AUTH_ROUTES.SIGN_UP]: {
    cta: 'sign in',
    message: 'already have an account?',
    route: AUTH_ROUTES.SIGN_IN,
  },
  [AUTH_ROUTES.SIGN_IN]: {
    cta: 'create an account',
    message: 'new to bash?',
    route: AUTH_ROUTES.SIGN_UP,
  },
} as const

enum AUTH_LINK_ROUTE {
  SIGN_IN = AUTH_ROUTES.SIGN_IN,
  SIGN_UP = AUTH_ROUTES.SIGN_UP,
}

interface AuthLinkProps {
  pathname: AUTH_LINK_ROUTE
}

const RedirectLink: React.FC<AuthLinkProps> = ({ pathname }) => {
  const { cta, message, route } = LINK_COPY[pathname]

  return (
    <StyledContainer>
      {message}
      <StyledNavLink to={route}>{cta}.</StyledNavLink>
    </StyledContainer>
  )
}

export const loader: LoaderFunction = async ({ request }) => {
  const response = new Response()
  const db = createServerClient({ request, response })

  const {
    data: { session },
  } = await db.auth.getSession()

  if (session) {
    return redirect(ROUTES.DASHBOARD, {
      headers: response.headers,
    })
  }

  return json(
    { session },
    {
      headers: response.headers,
    }
  )
}

export default function Auth() {
  const { pathname } = useLocation()
  const title = HEADER_COPY[pathname as AUTH_LINK_ROUTE]

  return (
    <StyledLayout>
      <StyledMain>
        <NavLink title='bash.' to='/'>
          <StyledLogo name='logo-mobile' />
        </NavLink>
        <StyledH1>{title} bash.</StyledH1>
        <Outlet />
        <RedirectLink pathname={pathname as AUTH_LINK_ROUTE} />
      </StyledMain>
    </StyledLayout>
  )
}
