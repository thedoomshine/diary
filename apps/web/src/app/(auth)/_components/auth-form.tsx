'use client'

import { Icon, grainyGradientBackground } from '@diaryco/design-system'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

import { AUTH_ROUTES, ValueOf } from '~/@types'

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

  max-width: 26rem;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing[64]} ${theme.spacing[8]}`};
`

const StyledWrapper = styled.div`
  width: 100%;
  max-width: 100%;
  margin-top: ${({ theme }) => theme.spacing[16]};
  padding: ${({ theme }) => theme.spacing[16]};

  overflow: hidden;

  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.charcoal};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.normal};
  ${grainyGradientBackground()};
`

const DesktopLogo = styled.h1`
  display: none;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.h3};
  text-decoration: none;
  @media ${({ theme }) => theme.breakpoints.md} {
    display: block;
  }
`

const MobileLogo = styled(Icon)`
  display: block;

  margin-bottom: 1rem;

  font-size: ${({ theme }) => theme.fontSize.h2};

  @media ${({ theme }) => theme.breakpoints.md} {
    display: none;
  }
`

const StyledP = styled.p`
  font-size: ${({ theme }) => theme.fontSize.h2};
  text-align: center;
`

const StyledRedirectLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing[8]};

  width: 100%;
  margin-top: ${({ theme }) => theme.spacing[16]};
  padding: ${({ theme }) => theme.spacing[8]};

  background-color: ${({ theme }) => theme.color.charcoal};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadow.normal};
`

const StyledPeriod = styled.span`
  color: ${({ theme }) => theme.color.yellow};
`

const Period = () => <StyledPeriod>.</StyledPeriod>

type RouteType = ValueOf<typeof AUTH_ROUTES>

const LINK_COPY = {
  [AUTH_ROUTES.SIGN_UP]: {
    message: 'already have an account?',
    cta: 'sign in',
    route: AUTH_ROUTES.SIGN_IN,
  },
  [AUTH_ROUTES.SIGN_IN]: {
    message: 'new to diary?',
    cta: 'create an account',
    route: AUTH_ROUTES.SIGN_UP,
  },
  [AUTH_ROUTES.FORGOT_PASSWORD]: {
    message: 'remember your password?',
    cta: 'sign in',
    route: AUTH_ROUTES.SIGN_IN,
  },
  [AUTH_ROUTES.MAGIC_LINK]: {
    message: 'new to diary?',
    cta: 'create an account',
    route: AUTH_ROUTES.SIGN_UP,
  },
} as const

const RedirectLink = ({ pathname }: { pathname: RouteType }) => {
  if (pathname === AUTH_ROUTES.UPDATE_PASSWORD) return null

  const { cta, message, route } = LINK_COPY[pathname]

  return (
    <StyledRedirectLink>
      {message}
      <Link href={route}>{cta}</Link>
    </StyledRedirectLink>
  )
}

const HEADER_COPY = {
  [AUTH_ROUTES.SIGN_IN]: (
    <>
      sign in to{' '}
      <strong>
        diary
        <Period />
      </strong>
    </>
  ),
  [AUTH_ROUTES.SIGN_UP]: (
    <>
      welcome to{' '}
      <strong>
        diary
        <Period />
      </strong>
    </>
  ),
  [AUTH_ROUTES.FORGOT_PASSWORD]: (
    <>
      reset your password
      <Period />
    </>
  ),
  [AUTH_ROUTES.MAGIC_LINK]: (
    <>
      sign in to{' '}
      <strong>
        diary
        <Period />
      </strong>
    </>
  ),
  [AUTH_ROUTES.UPDATE_PASSWORD]: (
    <>
      update your password
      <Period />
    </>
  ),
} as const

export default function AuthForm({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const title = HEADER_COPY[pathname as RouteType]

  return (
    <StyledLayout>
      <StyledMain>
        <Link
          title='diary.'
          href='/'
          style={{ textDecoration: 'none' }}
        >
          <DesktopLogo>
            diary
            <Period />
          </DesktopLogo>
          <MobileLogo name='logo-mobile' />
        </Link>
        <StyledP>{title}</StyledP>
        <StyledWrapper>{children}</StyledWrapper>
        <RedirectLink pathname={pathname as RouteType} />
      </StyledMain>
    </StyledLayout>
  )
}
