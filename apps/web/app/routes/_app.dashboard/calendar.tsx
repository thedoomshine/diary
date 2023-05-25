import { useMemo } from 'react'
import type { FC } from 'react'
import { isToday } from 'date-fns'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import cn from 'classnames'

const Container = styled.div`
  width: 100%;
`

const CalendarLayoutStyles = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0.5em;
  margin: 0 auto;
  max-width: 100%;
  padding: 0;
`

const WeekdayHeader = styled.ul`
  ${CalendarLayoutStyles}
  margin-bottom: 1em;
  li {
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: ${({ theme }) => theme.fontWeight['800']};
  }
`

const CalendarDays = styled.ol`
  ${CalendarLayoutStyles}
  li {
    aspect-ratio: 1;
    backdrop-filter: blur(0.125rem);
    background-color: ${({ theme }) => rgba(theme.color.black, 0.75)};
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
    position: relative;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: '';
      height: 100%;
      width: 100%;
      opacity: 0.125;
      border-radius: 0.5rem;
      background: linear-gradient(
          0,
          ${({ theme }) => rgba(theme.color.black, 0.5)},
          ${({ theme }) => rgba(theme.color.white, 0)}
        ),
        url("data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    &.current-month {
      background-color: ${({ theme }) => rgba(theme.color.grey, 0.75)};
    }

    &.today {
      background-color: ${({ theme }) => rgba(theme.color.yellow, 0.5)};
      box-shadow: 0 0 16rem 0.125rem
        ${({ theme }) => rgba(theme.color.yellow, 0.5)};
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

enum CalendarView {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

interface CalendarProps {
  month?: number
  year?: number
  view?: CalendarView
}

export const Calendar: FC<CalendarProps> = ({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  view = CalendarView.MONTH,
}) => {
  const FIRST_OF_MONTH = useMemo(
    () => new Date(year, month, 1).getDay(),
    [year, month]
  )

  const NUMBER_OF_DAYS = useMemo(
    () => new Date(year, month + 1, 0).getDate(),
    [year, month]
  )

  const LAST_OF_MONTH = useMemo(
    () => new Date(year, month, NUMBER_OF_DAYS).getDay(),
    [year, month, NUMBER_OF_DAYS]
  )

  const DAYS_OF_THE_WEEK = useMemo(
    () =>
      Array.from(Array(7), (_, i) => {
        const DATE = new Date(year, month, -FIRST_OF_MONTH + 1 + i)
        return {
          abbrv: DATE.toLocaleDateString('default', {
            weekday: 'short',
          }).toLocaleLowerCase(),
          name: DATE.toLocaleDateString('default', {
            weekday: 'long',
          }).toLocaleLowerCase(),
        }
      }),
    [year, month, FIRST_OF_MONTH]
  )

  const monthName = new Date(year, month, 1)
    .toLocaleString('default', {
      month: 'short',
    })
    .toLocaleLowerCase()

  const calendarCells = useMemo(
    () =>
      Array.from(
        Array(FIRST_OF_MONTH + NUMBER_OF_DAYS + (6 - LAST_OF_MONTH)),
        (e, i) => new Date(year, month, -FIRST_OF_MONTH + 1 + i)
      ),
    [FIRST_OF_MONTH, NUMBER_OF_DAYS, LAST_OF_MONTH, year, month]
  )

  return (
    <Container>
      <header>
        <h1>
          {monthName} {year}
        </h1>
      </header>

      <WeekdayHeader>
        {DAYS_OF_THE_WEEK.map(({ abbrv, name }) => (
          <CalendarCell key={name}>
            <abbr title={name}>{abbrv}</abbr>
          </CalendarCell>
        ))}
      </WeekdayHeader>
      <CalendarDays>
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
    </Container>
  )
}
