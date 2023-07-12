'use client'

import { Icon, OutlineButton } from '@diaryco/design-system'
import { useParams } from 'next/navigation'
import { type ReactNode } from 'react'
import styled from 'styled-components'

import { CALENDAR_VIEWS } from '~/@types'

import { useActiveDate } from './date-context'

const NavBar = styled.nav`
  display: flex;
  flex-flow: column-reverse;
  justify-content: space-between;

  padding: ${({ theme }) => theme.spacing[8]};
  padding-bottom: 0;

  @media ${({ theme }) => theme.breakpoints.md} {
    flex-flow: row;
  }
`

const StyledH1 = styled.h1`
  display: block;
  flex: 0 0 auto;
  align-self: flex-end;

  margin-top: 0.125em;
  margin-bottom: 0.5em;

  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: right;

  @media ${({ theme }) => theme.breakpoints.md} {
    margin-bottom: 0;
  }
`

const StyledIcon = styled(Icon)`
  display: inline-block;

  &.left {
    margin-right: 0.5em;
  }

  &.right {
    margin-left: 0.5em;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 42%;
`

export default function CalendarLayout({ children }: { children: ReactNode }) {
  const [activeDate, setActiveDate] = useActiveDate()
  const { view } = useParams()

  const title = new Date(
    activeDate.getFullYear(),
    activeDate.getMonth(),
    activeDate.getDate()
  )
    .toLocaleString('default', {
      month: 'long',
      year: 'numeric',
      day: view === 'day' ? '2-digit' : undefined,
    })
    .toLocaleUpperCase()

  const handleNavigateMonth = (direction: number) => {
    setActiveDate(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + direction, 1)
    )
  }

  const handleNavigateWeek = (direction: number) => {
    setActiveDate(
      (prev) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth(),
          prev.getDate() + direction
        )
    )
  }

  const handleNavigateDay = (direction: number) => {
    setActiveDate(
      (prev) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth(),
          prev.getDate() + direction
        )
    )
  }

  const onPrevClick = () => {
    switch (view) {
      case CALENDAR_VIEWS.DAY:
        return handleNavigateDay(-1)
      case CALENDAR_VIEWS.WEEK:
        return handleNavigateWeek(-7)
      case CALENDAR_VIEWS.MONTH:
      default:
        return handleNavigateMonth(-1)
    }
  }

  const onTodayClick = () => {
    setActiveDate(new Date())
  }

  const onNextClick = () => {
    switch (view) {
      case CALENDAR_VIEWS.DAY:
        return handleNavigateDay(1)
      case CALENDAR_VIEWS.WEEK:
        return handleNavigateWeek(7)
      case CALENDAR_VIEWS.MONTH:
      default:
        return handleNavigateMonth(1)
    }
  }

  return (
    <>
      <NavBar>
        <ButtonsWrapper>
          <OutlineButton onClick={onPrevClick}>
            <StyledIcon
              className='left'
              name='chevron-left'
            />{' '}
            prev
          </OutlineButton>
          <OutlineButton onClick={onTodayClick}>today</OutlineButton>
          <OutlineButton onClick={onNextClick}>
            next{' '}
            <StyledIcon
              className='right'
              name='chevron-right'
            />
          </OutlineButton>
        </ButtonsWrapper>
        <StyledH1>{title}</StyledH1>
      </NavBar>
      {children}
    </>
  )
}
