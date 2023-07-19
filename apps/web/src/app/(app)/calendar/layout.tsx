'use client'

import { IconButton, OutlineButton } from '@diaryco/design-system'
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

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`

const StyledOutlineButton = styled(OutlineButton)`
  border-radius: 0;

  &:hover {
    color: ${({ theme }) => theme.color.yellow};
  }
`

const StyledIconButton = styled(IconButton)`
  border-color: ${({ theme }) => theme.color.white};
  border-width: ${({ theme }) => theme.spacing[2]};

  &:first-child {
    border-right: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  &:last-child {
    border-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
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
          <StyledIconButton
            onClick={onPrevClick}
            icon='chevron-left'
          />
          <StyledOutlineButton onClick={onTodayClick}>today</StyledOutlineButton>
          <StyledIconButton
            onClick={onNextClick}
            icon='chevron-right'
          />
        </ButtonsWrapper>
        <StyledH1>{title}</StyledH1>
      </NavBar>
      {children}
    </>
  )
}
