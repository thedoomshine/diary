import { Icon, buttonStyles } from '@diaryco/design-system'
import { css, cx } from '@diaryco/style-engine/css'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useMemo } from 'react'

const navLinkStyles = cx(
  buttonStyles(),
  css({
    position: 'relative',
    marginTop: '0.5em',
    color: 'white',
    textDecoration: 'none',
    '&:visited, &:hover, &:active': {
      color: 'white',
    },
    '&:active': {
      fontWeight: 'bold',
    },
    xl: {
      padding: '0.25rem 0.75rem 0.25rem 0.5rem',
    },
  })
)

const linkNameStyles = css({
  display: 'none',
  xl: {
    position: 'relative',
    display: 'inline-block',
    _after: {
      content: 'attr(title)',
      overflow: 'hidden',
      display: 'block',
      height: '1px',
      fontWeight: '700',
      color: 'transparent',
      visibility: 'hidden',
    },
  },
})

const navIconStyles = css({
  fontSize: 'xl',
  xl: {
    fontSize: 'lg',
    marginRight: '0.5em',
  },
})

type ActiveLinkProps = LinkProps & {
  className?: string
  activeClassName: string
  icon: string
  name: string
}

export const ActiveNavLink = ({
  children,
  activeClassName,
  className,
  icon,
  name,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const { asPath, isReady } = useRouter()

  const isActive = useMemo(() => {
    if (isReady) {
      const linkPathname = new URL(
        (props.as || props.href) as string,
        location.href
      ).pathname

      const activePathname = new URL(asPath, location.href).pathname

      return linkPathname === activePathname
    }
    return false
  }, [asPath, isReady, props.as, props.href, activeClassName])

  return (
    <Link
      className={cx(navLinkStyles, className, isActive ?? activeClassName)}
      {...props}
    >
      <>
        <Icon
          className={linkNameStyles}
          name={isActive ? `${icon}-filled` : icon}
          aria-hidden
        />
        <span
          className={navIconStyles}
          title={name}
        >
          {name}
        </span>
        {children}
      </>
    </Link>
  )
}
