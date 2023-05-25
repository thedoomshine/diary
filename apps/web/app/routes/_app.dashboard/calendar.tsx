import { useMemo } from 'react'
import type { FC } from 'react'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'

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
      backdrop-filter: blur(0.125rem);
      background: linear-gradient(
          0,
          ${({ theme }) => theme.color.black},
          ${({ theme }) => rgba(theme.color.grey, 0)}
        ),
        url("data:image/svg+xml,%3C!-- svg: first layer --%3E%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='4' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
    }

    &.current-month {
      background-color: ${({ theme }) => rgba(theme.color.grey, 0.5)};
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
  overflow: hidden;
`

const WEEK_DAYS = [
  {
    abbrv: 'sun',
    name: 'sunday',
  },
  {
    abbrv: 'mon',
    name: 'monday',
  },
  {
    abbrv: 'tues',
    name: 'tuesday',
  },
  {
    abbrv: 'wed',
    name: 'wednesday',
  },
  {
    abbrv: 'thurs',
    name: 'thursday',
  },
  {
    abbrv: 'fri',
    name: 'friday',
  },
  {
    abbrv: 'sat',
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
  const monthName = new Date(year, month, 1)
    .toLocaleString('default', {
      month: 'long',
    })
    .toLocaleLowerCase()

  const daysOfWeek = useMemo(() => {
    const firstOfMonth = new Date(year, month, 1).getDay()

    return Array.from(
      Array(35), // exactly 5 weeks, getting us up to the last sunday of the last month and the first saturday of the next month
      (e, i) => new Date(year, month, -firstOfMonth + 1 + i)
    )
  }, [year, month])

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
          <CalendarCell
            key={`${date.getMonth()} ${date.getDate()}`}
            className={date.getMonth() === month ? `current-month` : ''}
          >
            {date.getDate()}
          </CalendarCell>
        ))}
      </CalendarDays>
    </Container>
  )
}
