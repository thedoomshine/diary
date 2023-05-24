import { useMemo } from 'react'
import type { FC } from 'react'
import { differenceInDays } from 'date-fns'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const CalendarLayoutStyles = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1em;
  margin: 0 auto;
  max-width: 64em;
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
    background-color: ${({ theme }) => theme.color.charcoal};
  }
`

const CalendarCell = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
  height: 4vw;
`

const WEEK_DAYS = [
  {
    abbrv: 's',
    name: 'sunday',
  },
  {
    abbrv: 'm',
    name: 'monday',
  },
  {
    abbrv: 't',
    name: 'tuesday',
  },
  {
    abbrv: 'w',
    name: 'wednesday',
  },
  {
    abbrv: 'th',
    name: 'thursday',
  },
  {
    abbrv: 'f',
    name: 'friday',
  },
  {
    abbrv: 's',
    name: 'saturday',
  },
] as const

enum CalendarView {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
  YEAR = 'year',
}

enum Month {
  Jan = 0,
  Feb,
  Mar,
  Apr,
  May,
  June,
  July,
  Aug,
  Sept,
  Oct,
  Nov,
  Dec,
}

interface CalendarProps {
  month?: Month
  year?: number
  view?: CalendarView
}

export const Calendar: FC<CalendarProps> = ({
  month = new Date().getMonth(),
  year = new Date().getFullYear(),
  view = CalendarView.MONTH,
}) => {
  const monthName = new Date(year, month, 1).toLocaleString('default', {
    month: 'long',
  })

  const getLastSunday = () => {
    const date = new Date(year, month, 1, 12)
    const weekday = date.getDay()
    const dayDiff = weekday === 0 ? 7 : weekday
    date.setDate(date.getDate() - dayDiff)
    return date.toDateString()
  }

  const daysOfWeek = useMemo(
    () =>
      Array.from(
        Array(new Date(year, month, 0).getDate()),
        (e, i) => new Date(year, month, i + 1)
      ),
    [year, month]
  )

  return (
    <Container>
      <header>
        <h1>
          {monthName} {year}
        </h1>
      </header>

      <WeekdayHeader>
        {WEEK_DAYS.map(({ abbrv, name }) => (
          <CalendarCell key={name}>
            <abbr title={name}>{abbrv}</abbr>
          </CalendarCell>
        ))}
      </WeekdayHeader>
      <CalendarDays>
        {daysOfWeek.map(date => (
          <CalendarCell key={date.getDate()}>{date.getDate()}</CalendarCell>
        ))}
      </CalendarDays>
    </Container>
  )
}
