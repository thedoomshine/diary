import { useState } from 'react'
import { useLoaderData } from '@remix-run/react'
import { CalendarView } from './calendar-view'
import { CalendarViewEnum } from './types'

import styled from 'styled-components'

import { OutlineButton, Icon } from '@bash/design-system'
import type { LoaderFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { CALENDAR_ROUTES, ROUTES } from '../types'

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: ${({ theme }) => theme.space.sm};
  padding-bottom: 0;
  flex-flow: column-reverse;

  @media ${({ theme }) => theme.media.lg} {
    flex-flow: row;
  }
`

const StyledH1 = styled.h1`
  display: block;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: right;
  align-self: flex-end;
  margin-top: 0.125em;
  margin-bottom: 0.5em;
  flex: 0 0 auto;
  @media ${({ theme }) => theme.media.lg} {
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

export const loader: LoaderFunction = ({ params }) => {
  if (!params.view) {
    return redirect(`${ROUTES.CALENDAR}${CALENDAR_ROUTES.MONTH}`)
  }

  return params
}

export default () => {
  const [activeDate, setActiveDate] = useState(new Date())
  const { view } = useLoaderData()

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
      prev => new Date(prev.getFullYear(), prev.getMonth() + direction, 1)
    )
  }

  const handleNavigateWeek = (direction: number) => {
    setActiveDate(
      prev =>
        new Date(
          prev.getFullYear(),
          prev.getMonth(),
          prev.getDate() + direction
        )
    )
  }

  const handleNavigateDay = (direction: number) => {
    setActiveDate(
      prev =>
        new Date(
          prev.getFullYear(),
          prev.getMonth(),
          prev.getDate() + direction
        )
    )
  }

  const onPrevClick = () => {
    switch (view) {
      case CalendarViewEnum.DAY:
        return handleNavigateDay(-1)
      case CalendarViewEnum.WEEK:
        return handleNavigateWeek(-7)
      case CalendarViewEnum.MONTH:
      default:
        return handleNavigateMonth(-1)
    }
  }

  const onTodayClick = () => {
    setActiveDate(new Date())
  }

  const onNextClick = () => {
    switch (view) {
      case CalendarViewEnum.DAY:
        return handleNavigateDay(1)
      case CalendarViewEnum.WEEK:
        return handleNavigateWeek(7)
      case CalendarViewEnum.MONTH:
      default:
        return handleNavigateMonth(1)
    }
  }

  return (
    <>
      <NavBar>
        <ButtonsWrapper>
          <OutlineButton onClick={onPrevClick}>
            <StyledIcon className='left' name='chevron-left' /> prev
          </OutlineButton>
          <OutlineButton onClick={onTodayClick}>today</OutlineButton>
          <OutlineButton onClick={onNextClick}>
            next <StyledIcon className='right' name='chevron-right' />
          </OutlineButton>
        </ButtonsWrapper>
        <StyledH1>{title}</StyledH1>
      </NavBar>

      <CalendarView activeDate={activeDate} view={view as CalendarViewEnum} />
    </>
  )
}
