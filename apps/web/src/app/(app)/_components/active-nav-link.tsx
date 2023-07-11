'use client'

import { Icon, ButtonStyles } from '@diaryco/design-system'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import React, { PropsWithChildren, useMemo } from 'react'
import styled from 'styled-components'

const StyledNavLink = styled(Link)`
  ${ButtonStyles};
  position: relative;
  margin-top: 0.5em;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  &:visited, &:hover, &:active {
    color: ${({ theme }) => theme.color.white};
  }

  &:active {
    font-weight: bold;
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    padding: 0.25rem 0.75rem 0.25rem 0.5rem;
  }
`

const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSize.xl};

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

const StyledNavIcon = styled(StyledIcon)`
  @media ${({ theme }) => theme.breakpoints.xl} {
    margin-right: 0.5em;
  }
`

const StyledLinkName = styled.span`
  display: none;

  @media ${({ theme }) => theme.breakpoints.xl} {
    position: relative;
    display: inline-block;

    &::after {
      content: attr(title);

      overflow: hidden;
      display: block;

      height: 1px;

      font-weight: ${({ theme }) => theme.fontWeight.bold};
      color: transparent;

      visibility: hidden;
    }
  }
`

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
    <StyledNavLink
      className={clsx(className, isActive ?? activeClassName)}
      {...props}
    >
      <>
        <StyledNavIcon
          name={isActive ? `${icon}-filled` : icon}
          aria-hidden
        />
        <StyledLinkName
          title={name}
        >
          {name}
        </StyledLinkName>
        {children}
      </>
    </StyledNavLink>
  )
}
