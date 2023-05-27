import { useMemo } from 'react'
import type { FC } from 'react'
import { endOfMonth, getDaysInMonth, isToday, startOfMonth } from 'date-fns'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import cn from 'classnames'
import { startOfWeek } from 'date-fns'

import { grainyGradientPseudo } from '@bash/design-system'
import { CalendarViewEnum } from './types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
`

const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-align: right;
  align-self: flex-end;
  margin-top: 0.125em;
  flex: 0 0 auto;
  padding: 0 ${({ theme }) => theme.space.sm};
`

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  max-width: 100%;
  padding: ${({ theme }) => theme.space.sm};
`

const CalendarLayoutStyles = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.5em;

  &:has(li:only-child) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const WeekdayHeader = styled.ul`
  ${CalendarLayoutStyles}
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight['800']};
  margin-bottom: 1em;
  flex: 0 0 auto;
`

const CalendarDays = styled.ol`
  ${CalendarLayoutStyles}
  flex: 1 1 auto;
  li {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 0.5em;
    backdrop-filter: blur(0.125rem);
    background-color: ${({ theme }) => rgba(theme.color.charcoal, 0.25)};
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
    position: relative;

    ${grainyGradientPseudo()}

    &.current-month {
      background-color: ${({ theme }) => rgba(theme.color.grey, 0.75)};
    }

    &.today {
      background-color: ${({ theme }) => rgba(theme.color.yellow, 0.5)};
      box-shadow: 0 0 16rem 0.125rem
        ${({ theme }) => rgba(theme.color.yellow, 0.5)};
    }
  }

  &.day-view {
    li.today {
      background-color: ${({ theme }) => rgba(theme.color.yellow, 0.25)};
      box-shadow: 0 0 16rem 0.125rem
        ${({ theme }) => rgba(theme.color.yellow, 0.125)};
    }
  }

  &.week-view {
    li.today {
      background-color: ${({ theme }) => rgba(theme.color.yellow, 0.33)};
      box-shadow: 0 0 16rem 0.125rem
        ${({ theme }) => rgba(theme.color.yellow, 0.125)};
    }
  }
`

const CalendarCell = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
  border-radius: 0.5rem;
`

interface CalendarViewProps {
  activeDate: Date
  view?: CalendarViewEnum
}

const generateDayView = (date: Date) => {
  return [date]
}

const generateWeekView = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()

  const START_OF_WEEK = startOfWeek(date).getDate()

  return Array.from(
    Array(7),
    (_, i) => new Date(year, month, START_OF_WEEK + i)
  )
}

const generateMonthView = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()

  const START_OF_MONTH = startOfMonth(date).getDay()
  const NUMBER_OF_DAYS = getDaysInMonth(date)
  const END_OF_MONTH = endOfMonth(date).getDay()

  return Array.from(
    Array(START_OF_MONTH + NUMBER_OF_DAYS + (6 - END_OF_MONTH)),
    (e, i) => new Date(year, month, -START_OF_MONTH + 1 + i)
  )
}

const formatWeekdays = (date: Date) => ({
  abbrv: date
    .toLocaleDateString('default', {
      weekday: 'short',
    })
    .toLocaleLowerCase(),
  name: date
    .toLocaleDateString('default', {
      weekday: 'long',
    })
    .toLocaleLowerCase(),
})

const generateWeekDays = (date: Date, view: CalendarViewEnum) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const START_OF_MONTH = startOfMonth(date).getDay()
  return view === 'day'
    ? [formatWeekdays(date)]
    : Array.from(Array(7), (_, i) =>
        formatWeekdays(new Date(year, month, -START_OF_MONTH + 1 + i))
      )
}

export const CalendarView: FC<CalendarViewProps> = ({
  activeDate,
  view = CalendarViewEnum.MONTH,
}) => {
  const year = activeDate.getFullYear()
  const month = activeDate.getMonth()

  const title = new Date(year, month, 1)
    .toLocaleString('default', {
      month: 'short',
      year: 'numeric',
    })
    .toLocaleLowerCase()

  const weekDays = useMemo(() => {
    return generateWeekDays(activeDate, view)
  }, [activeDate, view])

  const calendarCells = useMemo(() => {
    switch (view) {
      case CalendarViewEnum.DAY:
        return generateDayView(activeDate)
      case CalendarViewEnum.WEEK:
        return generateWeekView(activeDate)
      case CalendarViewEnum.MONTH:
      default:
        return generateMonthView(activeDate)
    }
  }, [activeDate, view])

  return (
    <Container>
      <StyledH1>{title}</StyledH1>

      <CalendarWrapper>
        <WeekdayHeader>
          {weekDays.map(({ abbrv, name }) => (
            <CalendarCell key={name}>
              <abbr title={name}>{abbrv}</abbr>
            </CalendarCell>
          ))}
        </WeekdayHeader>
        <CalendarDays className={cn(`${view}-view`)}>
          {calendarCells.map(date => (
            <CalendarCell
              key={date.toLocaleDateString()}
              className={cn({
                [`current-month`]: month === date.getMonth(),
                today: isToday(date),
              })}
            >
              {date.getDate()}
            </CalendarCell>
          ))}
        </CalendarDays>
      </CalendarWrapper>
    </Container>
  )
}
