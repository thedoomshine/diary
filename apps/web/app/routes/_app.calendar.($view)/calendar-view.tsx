import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import type { FC } from 'react'
import {
  endOfMonth,
  getDaysInMonth,
  isThisWeek,
  isToday,
  startOfMonth,
} from 'date-fns'
import styled, { css } from 'styled-components'
import type { CSSProperties } from 'styled-components'
import { rgba } from 'polished'
import cn from 'classnames'

import { grainyGradientPseudo } from '@bash/design-system'
import { CalendarViewEnum } from './types'

const GridStyles = css`
  display: grid;
  grid-gap: 0.25em;
  position: relative;

  &.month-view {
    grid-template-columns: repeat(7, 1fr);
  }

  &.week-view {
    grid-template-columns: 3.5rem repeat(7, 1fr);
  }

  &.day-view {
    grid-template-columns: 3.5rem 1fr;
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
  height: 100%;
  grid-template-rows: min-content auto;
  position: relative;
  padding: ${({ theme }) =>
    `${theme.space.xxs} ${theme.space.sm} ${theme.space.sm}`};
`

const WeekdayHeaderUl = styled.ul`
  ${GridStyles}
  grid-column: 1/-1;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight['800']};
  margin-bottom: ${({ theme }) => theme.space.xxs};

  &.week-view {
    grid-template-columns: repeat(7, 1fr);
  }

  &.week-view {
    grid-column: 2/-1;
  }

  &.day-view li {
    grid-column: 2;
  }
`

const CalendarMainContent = styled.div`
  ${GridStyles}

  height: 100%;
  grid-column: 1/-1;

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
      background-color: ${({ theme }) => rgba(theme.color.grey, 0.75)};
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
  list-style: none;
  margin-left: 0;
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
  backdrop-filter: blur(0.125rem);
  background-color: ${({ theme }) => rgba(theme.color.charcoal, 0.25)};
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);

  ${grainyGradientPseudo()}

  &.today {
    background-color: ${({ theme }) => rgba(theme.color.yellow, 0.5)};
    box-shadow: 0 0 16rem 0.125rem
      ${({ theme }) => rgba(theme.color.yellow, 0.5)};
  }
`

const TimeGridContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(24, 1fr);
  position: absolute;
  z-index: 2;
  pointer-events: none;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.color.silver};
  font-size: ${({ theme }) => theme.fontSize.sm};
`

const TimeGridItem = styled.div`
  border-bottom: solid 1px ${({ theme }) => rgba(theme.color.silver, 0.25)};
  align-self: flex-end;
  color: ${({ theme }) => theme.color.silver};
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding-bottom: ${({ theme }) => `0 ${theme.space.xxs}`};
  &:last-of-type {
    border-bottom: 0;
  }
`

const StyledTimeMarker = styled.span`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  background-color: ${({ theme }) => theme.color.red};
  height: 1px;
  position: absolute;
  right: 0;
  width: calc(100% - 3.75rem);
  z-index: 2;
  pointer-events: none;
  will-change: top;

  &.current-week:after {
    content: '';
    height: 0.66em;
    width: 0.66em;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.color.red};
    position: absolute;
    left: var(--marker-position, 0);
    top: 0;
    bottom: 0;
    transform: translate(-50%, -50%);
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
      {weekDays.map(({ abbrv, name, date }, index) => (
        <WeekdayCell key={getCellTitle(name, abbrv, date)}>
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
    '--marker-position': view === CalendarViewEnum.WEEK && `${(new Date().getDay() / 7) * 100}%`,
  } as CSSProperties

  if (!timeMarkerPos) return null
  return (
    <StyledTimeMarker
      className={cn({ 'current-week': isThisWeek(date) })}
      style={{
        top: timeMarkerPos,
        ...markerPosition
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
      {generateTime(date).map(time => (
        <TimeGridItem
          className='time-grid-item'
          key={time.toUTCString()}
          aria-hidden
        >
          {getTimeContent(time)}
        </TimeGridItem>
      ))}
      <TimeMarker date={date} view={view} aria-hidden />
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
      {generateTime(date).map(time => (
        <TimeGridItem
          aria-hidden
          className='time-grid-item'
          key={time.toUTCString()}
        />
      ))}
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
      <WeekdayHeader activeDate={activeDate} view={view} />
      <CalendarMainContent className={cn(`${view}-view`)}>
        <TimeGrid date={activeDate} view={view} />
        {calendarCells.map(date => (
          <CalendarCell
            className='calendar-day'
            key={date.toLocaleDateString()}
            month={activeDate.getMonth()}
            date={date}
            view={view}
          />
        ))}
      </CalendarMainContent>
    </Calendar>
  )
}
