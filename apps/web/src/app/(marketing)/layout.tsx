import { buttonStyles } from '@diaryco/design-system'
import { css, cx } from '@diaryco/style-engine/css'
import Link from 'next/link'

const layoutStyles = css({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  maxWidth: 'xl',
  minHeight: '100%',
  margin: '0 auto',
})

const headerStyles = css({
  display: 'flex',
  padding: '0.5rem',
})

const buttonsContainerStyles = css({
  display: 'flex',
  marginRight: 0,
  marginLeft: 'auto',
})

const mainStyles = css({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  padding: '0.5rem',
})

const navLinkStyles = css({
  flex: '0 1 auto',
  padding: '0.25rem 0.5rem',
  '&:last-of-type': {
    marginLeft: '0.5rem',
  },
})

const signInStyles = cx(buttonStyles(), navLinkStyles)

const signOutStyles = cx(
  buttonStyles({ type: 'outline' }),
  css({
    padding: '0.25rem 0.5rem',
  })
)

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={layoutStyles}>
      <header className={headerStyles}>
        <div className={buttonsContainerStyles}>
          <Link
            className={signInStyles}
            href='/sign-in'
          >
            sign in
          </Link>
          <Link
            className={signOutStyles}
            href='/sign-up'
          >
            sign up
          </Link>
        </div>
      </header>
      <main className={mainStyles}>{children}</main>
    </div>
  )
}
