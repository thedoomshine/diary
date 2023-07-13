'use client'

import { ButtonStyles, Icon } from '@diaryco/design-system'
import clsx from 'clsx'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

const StyledNavLink = styled(Link)`
  ${ButtonStyles};
  position: relative;
  margin-top: 0.5em;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;

  padding: 0.5rem;

  &:visited,
  &:hover,
  &:active {
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
  icon: string
  name: string
}

export const ActiveNavLink = ({
  children,
  className,
  href,
  icon,
  name,
  ...props
}: PropsWithChildren<ActiveLinkProps>) => {
  const pathname = usePathname()

  const active = pathname.startsWith(href.toString())

  return (
    <StyledNavLink
      href={href}
      className={clsx(className, { active })}
      {...props}
    >
      <>
        <StyledNavIcon
          name={active ? `${icon}-filled` : icon}
          aria-hidden
        />
        <StyledLinkName title={name}>{name}</StyledLinkName>
        {children}
      </>
    </StyledNavLink>
  )
}
