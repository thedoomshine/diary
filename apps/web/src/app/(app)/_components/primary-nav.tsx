'use client'

import { Icon } from '@diaryco/design-system'
import clsx from 'clsx'
import { atom, useAtom } from 'jotai'
import Link from 'next/link'
import { useEffect } from 'react'
import styled from 'styled-components'

import { NAV_LINKS } from '~/@types'
import { type CurrentUserResponseSuccess, getCurrentUser } from '~/utils'

import { ActiveNavLink } from './active-nav-link'
import { UserMenu } from './user-menu'
import { usePathname } from 'next/navigation'

const StyledIcon = styled(Icon)`
  font-size: ${({ theme }) => theme.fontSize.xl};

  @media ${({ theme }) => theme.breakpoints.xl} {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`

const StyledLogo = styled.h1`
  display: none;
  font-size: ${({ theme }) => theme.fontSize.h2};

  .accent {
    color: ${({ theme }) => theme.color.yellow};
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    display: inline-block;
  }
`

const StyledMobileLogo = styled(StyledIcon)`
  margin: 0.5rem auto 1rem;
  font-size: ${({ theme }) => theme.fontSize.h2};

  @media ${({ theme }) => theme.breakpoints.xl} {
    display: none;
  }
`

const StyledHeader = styled.header`
  position: relative;
  top: 0;

  display: flex;
  grid-column: 2;
  flex: 0 0 auto;
  flex-direction: column;

  height: 100dvh;
  padding: ${({ theme }) => `${theme.spacing[8]} ${theme.spacing[4]}`};

  @media ${({ theme }) => theme.breakpoints.xl} {
    flex: 1 0 auto;

    /* max-width: 14rem; */
  }
`

const MainHeaderContent = styled.div`
  margin-right: auto;
  margin-left: auto;
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: ${({ theme }) => theme.fontSize.md};
`

const NavLinkWrapper = styled.div`
  ul {
    will-change: height;

    overflow: hidden;
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    justify-content: flex-start;

    height: 0;
    padding-left: 0;

    text-align: center;

    transition-timing-function: ${({ theme }) => theme.easing.easeOut};
    transition-duration: ${({ theme }) => theme.duration[250]};
    transition-property: height;

    li a {
      display: block;

      padding: 0.5rem 0;

      font-size: ${({ theme }) => theme.fontSize.sm};
      color: ${({ theme }) => theme.color.white};
      text-decoration: none;

      &:hover, &.active {
        color: ${({ theme }) => theme.color.yellow};
      }

      &.active {
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        text-decoration: underline;
      }
    }
  }

  &:not(:has(> .active)) ul.visible {
    height: 0;
  }

  &:has(> .active) ul.visible {
    height: 8rem;
    transition-timing-function: ${({ theme }) => theme.easing.easeIn};
  }

  @media ${({ theme }) => theme.breakpoints.xl} {
    ul {
      padding-left: 2.75rem;
      text-align: left;
      list-style: disc;
    }
  }
`

type CurrentUserType = CurrentUserResponseSuccess

const userAtom = atom<CurrentUserType | null>(null)

export const PrimaryNav = () => {
  const pathname = usePathname()

  const [user, setUser] = useAtom(userAtom)

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const { data } = await getCurrentUser()
      if (data !== null) {
        setUser(data[0])
      }
    }

    fetchCurrentUser()
  }, [setUser])

  const getRouteUrl = (name: string, route: string) =>
    name === 'profile' ? `/${user?.username}` : route

  return (
    <StyledHeader>
      <MainHeaderContent>
        <StyledLogo id='logo'>
          diary<span className='accent'>.</span>
        </StyledLogo>
        <StyledMobileLogo
          name='logo-mobile'
          aria-hidden
        />
        <StyledNav aria-labelledby='logo'>
          {NAV_LINKS.map(({ icon, name, route, links }) => (
            <NavLinkWrapper key={name}>
              <ActiveNavLink
                href={getRouteUrl(name, route)}
                icon={icon}
                name={name}
              />
              {Boolean(links) && (
                <ul
                  className={clsx({
                    visible: Boolean(links),
                  })}
                >
                  {links &&
                    links.map(({ name: linkName, route: linkRoute }) => (
                      <li key={linkName}>
                        <Link className={clsx({ active:  pathname.includes(linkRoute.toString())})} href={getRouteUrl(linkName, linkRoute)}>
                          {linkName}
                        </Link>
                      </li>
                    ))}
                </ul>
              )}
            </NavLinkWrapper>
          ))}
        </StyledNav>
      </MainHeaderContent>
      {user && <UserMenu user={user} />}
    </StyledHeader>
  )
}
