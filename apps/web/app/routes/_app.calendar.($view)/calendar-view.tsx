import { grainyGradientBackground } from '@diaryco/design-system'
import cn from 'classnames'
import {
  endOfMonth,
  getDaysInMonth,
  isThisWeek,
  isToday,
  startOfMonth,
} from 'date-fns'
import { rgba } from 'polished'
import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import type { FC } from 'react'
import styled, { css } from 'styled-components'

import { CalendarViewEnum } from './types'

const GridStyles = css`
  position: relative;
  display: grid;
  grid-gap: 0.25em;

  &.month-view {
    grid-template-columns: repeat(7, 1fr);
  }

  &.week-view {
    grid-template-columns: 3rem repeat(7, 1fr);
  }

  &.day-view {
    grid-template-columns: 3rem 1fr;
  }

  &.week-view,
  &.day-view {
    .time-grid-item {
      grid-column: 1/-1;
    }
  }
`

const Calendar = styled.div`
  ${GridStyles}
  position: relative;
  grid-template-rows: min-content auto;
  height: 100%;
  padding: ${({ theme }) =>
    `${theme.space.xxs} ${theme.space.sm} ${theme.space.sm}`};
`

const WeekdayHeaderUl = styled.ul`
  ${GridStyles}
  grid-column: 1/-1;
  margin-bottom: ${({ theme }) => theme.space.xxs};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight['800']};

  &.week-view {
    grid-column: 2/-1;
    grid-template-columns: repeat(7, 1fr);
  }

  &.day-view li {
    grid-column: 2;
  }
`

const CalendarMainContent = styled.div`
  ${GridStyles}
  grid-column: 1/-1;
  height: 100%;

  &.month-view {
    .calendar-day.current-month:not(.today) {
      background-color: ${({ theme }) => rgba(theme.color.grey, 0.75)};
    }
  }

  &.week-view {
    .calendar-day.today {
      background-color: ${({ theme }) => rgba(theme.color.yellow, 0.33)};
      box-shadow: 0 0 16rem 0.125rem
        ${({ theme }) => rgba(theme.color.yellow, 0.125)};
    }
  }

  &.day-view {
    .calendar-day.today {
      background-color: ${({ theme }) => rgba(theme.color.yellow, 0.15)};
      box-shadow: 0 0 16rem 0.125rem
        ${({ theme }) => rgba(theme.color.yellow, 0.125)};
    }
  }

  &.week-view,
  &.day-view {
    .calendar-day {
      grid-column-start: 2;
    }

    .calendar-day ~ .calendar-day {
      grid-column-start: unset;
    }
  }
`

const CalendarCellStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 0;

  list-style: none;

  border-radius: 0.5rem;
`

const WeekdayCell = styled.li`
  ${CalendarCellStyles}
`

const StyledCalendarCell = styled.div`
  ${CalendarCellStyles}
  align-items: flex-start;
  justify-content: flex-start;

  padding: ${({ theme }) => theme.space.xxs};

  background-color: ${({ theme }) => rgba(theme.color.charcoal, 0.25)};
  backdrop-filter: blur(0.125rem);
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 50%);

  ${grainyGradientBackground()}

  &.today {
    background-color: ${({ theme }) => rgba(theme.color.yellow, 0.5)};
    box-shadow: 0 0 16rem 0.125rem
      ${({ theme }) => rgba(theme.color.yellow, 0.5)};
  }
`

const TimeGridContainer = styled.div`
  pointer-events: none;

  position: absolute;
  z-index: 2;

  display: grid;
  grid-template-rows: repeat(24, 1fr);

  width: 100%;
  height: 100%;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.silver};
`

const TimeGridItem = styled.div`
  align-self: flex-end;

  padding-bottom: ${({ theme }) => `0 ${theme.space.xxs}`};

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.silver};

  border-bottom: solid 1px ${({ theme }) => rgba(theme.color.silver, 0.25)};

  &:last-of-type {
    border-bottom: 0;
  }
`

const StyledTimeMarker = styled.span`
  pointer-events: none;
  will-change: top;

  position: absolute;
  z-index: 2;
  right: 0;

  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;

  width: calc(100% - 3.25rem);
  height: 1px;

  background-color: ${({ theme }) => theme.color.red};

  &.current-week,
  &.today {
    &::after {
      content: '';

      position: absolute;
      top: 0;
      bottom: 0;
      transform: translate(-50%, -50%);

      width: 0.66em;
      height: 0.66em;

      background-color: ${({ theme }) => theme.color.red};
      border-radius: 100%;
    }
  }

  &.current-week::after {
    left: calc(var(--marker-position, 0) + 0.125rem);
  }

  &.today::after {
    left: 0;
  }
`

interface CalendarViewProps {
  activeDate: Date
  view?: CalendarViewEnum
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
  date,
})

const generateWeekDays = (date: Date, view: CalendarViewEnum) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const START_OF_WEEK = date.getDate() - date.getDay()

  return view === CalendarViewEnum.DAY
    ? [formatWeekdays(date)]
    : Array.from(Array(7), (_, i) =>
        formatWeekdays(new Date(year, month, START_OF_WEEK + i))
      )
}

const generateTime = (date: Date) => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate() + 1
  return Array.from(Array(24), (_, i) => new Date(year, month, day, i + 1))
}

interface WeekdayHeaderProps {
  activeDate: Date
  view: CalendarViewEnum
}

const WeekdayHeader: FC<WeekdayHeaderProps> = ({ activeDate, view }) => {
  const weekDays = generateWeekDays(activeDate, view)

  const getCellTitle = (name: string, abbrv: string, date: Date) => {
    if (view === CalendarViewEnum.DAY) {
      return name
    }

    if (view === CalendarViewEnum.WEEK) {
      return `${abbrv} ${date.getDate()}`
    }

    if (view === CalendarViewEnum.MONTH) {
      return abbrv
    }
  }

  return (
    <WeekdayHeaderUl className={cn(`${view}-view`)}>
      {weekDays.map(({ abbrv, name, date }) => (
        <WeekdayCell key={`weekday-header-${abbrv}-${date.getDate()}`}>
          <abbr title={name}>{getCellTitle(name, abbrv, date)}</abbr>
        </WeekdayCell>
      ))}
    </WeekdayHeaderUl>
  )
}

interface TimeGridProps {
  date: Date
  view: CalendarViewEnum
}

interface TimeMarkerProps {
  date: Date
  view: CalendarViewEnum
}

const TimeMarker: FC<TimeMarkerProps> = ({ date, view }) => {
  const [timeMarkerPos, setTimeMarkerPos] = useState('')
  const getTimeMarkerPos = () => {
    const d = new Date()
    setTimeMarkerPos(
      `${
        (d.getHours() * 3600 +
          d.getMinutes() * 60 +
          d.getSeconds() +
          d.getMilliseconds() / 1000) /
        864
      }%`
    )
  }

  useEffect(() => {
    if (!timeMarkerPos) {
      getTimeMarkerPos()
    }
    const timer = setTimeout(() => {
      getTimeMarkerPos()
    }, 10000)
    return () => clearTimeout(timer)
  }, [timeMarkerPos])

  const markerPosition = {
    '--marker-position':
      view === CalendarViewEnum.WEEK && `${(new Date().getDay() / 7) * 100}%`,
  } as CSSProperties

  if (!timeMarkerPos) return null
  return (
    <StyledTimeMarker
      className={cn({
        'current-week': view === CalendarViewEnum.WEEK && isThisWeek(date),
        today: view === CalendarViewEnum.DAY && isToday(date),
      })}
      style={{
        top: timeMarkerPos,
        ...markerPosition,
      }}
    />
  )
}

const TimeGrid: FC<TimeGridProps> = ({ date, view }) => {
  const getTimeContent = (time: Date) =>
    time.toLocaleTimeString('default', { hour: '2-digit' })

  if (view === CalendarViewEnum.MONTH) return null
  return (
    <TimeGridContainer>
      {generateTime(date).map((time) => (
        <TimeGridItem
          className='time-grid-item'
          key={`time-grid-${time.getHours()}`}
          aria-hidden
        >
          {getTimeContent(time)}
        </TimeGridItem>
      ))}
      <TimeMarker
        date={date}
        view={view}
        aria-hidden
      />
    </TimeGridContainer>
  )
}

interface CalendarCellProps {
  month: number
  date: Date
  view: CalendarViewEnum
  className?: string
}

const CalendarCell: FC<CalendarCellProps> = memo(
  ({ month, date, view, className, ...props }) => (
    <StyledCalendarCell
      className={cn({
        [`current-month`]: month === date.getMonth(),
        today: isToday(date),
        [`${className}`]: !!className,
      })}
      {...props}
    >
      {view === CalendarViewEnum.MONTH && date.getDate()}
    </StyledCalendarCell>
  )
)

export const CalendarView: FC<CalendarViewProps> = ({
  activeDate,
  view = CalendarViewEnum.MONTH,
}) => {
  const generateDayView = useCallback(() => {
    return [activeDate]
  }, [activeDate])

  const generateWeekView = useCallback(() => {
    const year = activeDate.getFullYear()
    const month = activeDate.getMonth()
    const START_OF_WEEK = activeDate.getDate() - activeDate.getDay()

    return Array.from(
      Array(7),
      (_, i) => new Date(year, month, START_OF_WEEK + i)
    )
  }, [activeDate])

  const generateMonthView = useCallback(() => {
    const year = activeDate.getFullYear()
    const month = activeDate.getMonth()

    const START_OF_MONTH = startOfMonth(activeDate).getDay()
    const NUMBER_OF_DAYS = getDaysInMonth(activeDate)
    const END_OF_MONTH = endOfMonth(activeDate).getDay()

    return Array.from(
      Array(START_OF_MONTH + NUMBER_OF_DAYS + (6 - END_OF_MONTH)),
      (e, i) => new Date(year, month, -START_OF_MONTH + 1 + i)
    )
  }, [activeDate])

  const generateCalendarCells = useCallback(() => {
    switch (view) {
      case CalendarViewEnum.DAY:
        return generateDayView()
      case CalendarViewEnum.WEEK:
        return generateWeekView()
      case CalendarViewEnum.MONTH:
      default:
        return generateMonthView()
    }
  }, [generateDayView, generateMonthView, generateWeekView, view])

  const calendarCells = useMemo(generateCalendarCells, [generateCalendarCells])

  return (
    <Calendar className={cn(`${view}-view`)}>
      <WeekdayHeader
        activeDate={activeDate}
        view={view}
      />
      <CalendarMainContent className={cn(`${view}-view`)}>
        <TimeGrid
          date={activeDate}
          view={view}
        />
        {calendarCells.map((date) => (
          <CalendarCell
            className='calendar-day'
            key={`calendar-cell-${date.toLocaleDateString()}`}
            month={activeDate.getMonth()}
            date={date}
            view={view}
          />
        ))}
      </CalendarMainContent>
    </Calendar>
  )
}
