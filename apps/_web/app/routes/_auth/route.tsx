import { Icon, grainyGradientBackground } from '@diaryco/design-system'
import { NavLink, Outlet, useLocation } from '@remix-run/react'
import type { LoaderFunction } from '@vercel/remix'
import { json, redirect } from '@vercel/remix'
import styled from 'styled-components'

import { createServerClient } from '~/services/db.server'

import { AUTH_ROUTES, ROUTES } from '../types'

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 100%;
  margin: 0 auto;
`

const StyledMain = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 24rem;
  padding: ${({ theme }) => theme.space.sm};
`

const StyledNavLink = styled(NavLink)`
  margin-left: ${({ theme }) => theme.space.xxs};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const OutletWrapper = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding: 1.5rem 1rem;

  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.charcoal};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 50%)
    ${grainyGradientBackground()};
`

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  margin-top: ${({ theme }) => theme.space.md};
  padding: ${({ theme }) => theme.space.xs};

  background-color: ${({ theme }) => theme.color.charcoal};
  border-radius: ${({ theme }) => theme.space.xxs};
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 50%);
`

const StyledLogo = styled(Icon)`
  display: block;

  margin-bottom: 2rem;
  padding: 0.5rem;

  font-size: ${({ theme }) => theme.fontSize.xxxxl};

  border-radius: 0.5rem;
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
    message: 'new to diary?',
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
      <StyledNavLink to={route}>{cta}</StyledNavLink>
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
    return redirect(ROUTES.CALENDAR, {
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
        <NavLink
          title='diary.'
          to='/'
        >
          <StyledLogo name='logo-mobile' />
        </NavLink>
        <StyledH1>{title} diary.</StyledH1>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
        <RedirectLink pathname={pathname as AUTH_LINK_ROUTE} />
      </StyledMain>
    </StyledLayout>
  )
}
