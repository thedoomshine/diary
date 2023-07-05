'use client'

import { Icon } from '@diaryco/design-system'
import { css, cx } from '@diaryco/style-engine/css'
import { token } from '@diaryco/style-engine/tokens'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { AUTH_ROUTES } from '~/app/@types/routes'

const layoutStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  minHeight: '100%',
  margin: '0 auto',
})

const mainStyles = css({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  maxWidth: '24rem',
  padding: '0.5rem',
})

const linkStyles = css({
  marginLeft: '0.125rem',
  textDecoration: 'none',
  _hover: {
    textDecoration: 'underline',
  },
})

const wrapperStyles = css({
  width: '100%',
  marginTop: '1rem',
  padding: '1.5rem 1rem',
  color: 'white',
  backgroundColor: 'charcoal',
  borderRadius: '0.5rem',
  boxShadow: 'normal',
  gg: 'grainyGradientBackground()',
})

const containerStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  marginTop: '0.5rem',
  padding: '0.25rem',
  backgroundColor: 'charcoal',
  borderRadius: 'md',
  boxShadow: 'normal',
})

const logoStyles = css({
  display: 'block',
  marginBottom: '2rem',
  padding: '0.5rem',
  fontSize: 'h1',
  borderRadius: 'md',
})

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

type ViewType =
  | 'sign_in'
  | 'sign_up'
  | 'forgotten_password'
  | 'magic_link'
  | 'update_password'

const diaryTheme = {
  default: {
    colors: {
      brand: token('colors.black'),
      brandAccent: token('colors.yellow'),
      brandButtonText: token('colors.white'),
    },
    fonts: {
      bodyFontFamily: token('fonts.sans'),
      buttonFontFamily: token('fonts.sans'),
      inputFontFamily: token('fonts.sans'),
      labelFontFamily: token('fonts.sans'),
    },
    radii: {
      borderRadiusButton: token('radii.md'),
      buttonBorderRadius: token('radii.md'),
      inputBorderRadius: token('radii.md'),
    },
  },
}

type AuthLinkProps = {
  pathname: AUTH_LINK_ROUTE
}

const RedirectLink: React.FC<AuthLinkProps> = ({ pathname }) => {
  const { cta, message, route } = LINK_COPY[pathname]

  return (
    <div className={containerStyles}>
      {message}
      <Link href={route}>{cta}</Link>
    </div>
  )
}

export default function AuthForm({ view }: { view: ViewType }) {
  const supabase = createClientComponentClient()
  const pathname = usePathname()
  const title = HEADER_COPY[pathname as AUTH_LINK_ROUTE]

  return (
    <div className={layoutStyles}>
      <main className={mainStyles}>
        <Link
          className={linkStyles}
          title='diary.'
          href='/'
        >
          <Icon
            className={logoStyles}
            name='logo-mobile'
          />
        </Link>
        <h1>{title} diary.</h1>
        <Auth
          supabaseClient={supabase}
          view={view}
          appearance={{ theme: ThemeSupa, variables: diaryTheme }}
          showLinks={true}
          providers={['discord', 'google']}
          redirectTo='http://localhost:3000/auth/callback'
        />
        <RedirectLink pathname={pathname as AUTH_LINK_ROUTE} />
      </main>
    </div>
  )
}
