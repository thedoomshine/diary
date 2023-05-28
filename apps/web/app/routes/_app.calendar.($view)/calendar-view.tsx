import { memo, useCallback, useEffect, useMemo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { endOfMonth, getDaysInMonth, isToday, startOfMonth } from 'date-fns'
import styled, { css } from 'styled-components'
import { rgba } from 'polished'
import cn from 'classnames'

import { grainyGradientPseudo } from '@bash/design-system'
import { CalendarViewEnum } from './types'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  width: 100%;
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

  &.week-view {
    grid-gap: 0.25em;
  }

  &.day-view {
    grid-template-columns: repeat(1, 1fr);
  }
`

const WeekdayHeaderUl = styled.ul`
  ${CalendarLayoutStyles}
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight['800']};
  margin-bottom: 0.5em;
  flex: 0 0 auto;

  &.day-view,
  &.week-view {
    padding-left: 3rem;
  }
`

const CalendarDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  position: relative;
`

const CalendarDays = styled.ol`
  ${CalendarLayoutStyles}
  flex: 1 1 auto;
  position: relative;
  height: 100%;
  li {
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0.5em;
    backdrop-filter: blur(0.125rem);
    background-color: ${({ theme }) => rgba(theme.color.charcoal, 0.25)};
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);

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

  &.week-view {
    li.today {
      background-color: ${({ theme }) => rgba(theme.color.yellow, 0.33)};
      box-shadow: 0 0 16rem 0.125rem
        ${({ theme }) => rgba(theme.color.yellow, 0.125)};
    }
  }

  &.day-view {
    li.today {
      background-color: ${({ theme }) => rgba(theme.color.grey, 0.75)};
      box-shadow: 0 0 16rem 0.125rem
        ${({ theme }) => rgba(theme.color.yellow, 0.125)};
    }
  }

  &.day-view,
  &.week-view {
    padding-left: 3rem;

    li {
      display: grid;
      grid-template-rows: repeat(24, 1fr);
    }
  }
`

const StyledCalendarCell = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-left: 0;
  border-radius: 0.5rem;
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

const StyledTimeGridItem = styled.div`
  border-bottom: solid 1px ${({ theme }) => rgba(theme.color.silver, 0.25)};
  align-self: flex-end;
  padding-bottom: 0.5em;
  &:last-of-type {
    border-bottom: 0;
  }
`

const TimeMarker = styled.div`
  display: flex;
  align-items: center;
  border-top: solid 1px ${({ theme }) => theme.color.red};
  height: 1px;
  position: absolute;
  right: 0;
  width: calc(100% - 3rem);
  z-index: 2;
  pointer-events: none;
  will-change: top;

  &:after {
    content: '';
    height: 0.5em;
    width: 0.5em;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.color.red};
    position: absolute;
    left: -0.25em;
    top: -0.25em;
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

  const getCellTitle = (
    view: CalendarViewEnum,
    name: string,
    abbrv: string,
    date: Date
  ) => {
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
        <StyledCalendarCell key={getCellTitle(view, name, abbrv, date)}>
          <abbr title={name}>{getCellTitle(view, name, abbrv, date)}</abbr>
        </StyledCalendarCell>
      ))}
    </WeekdayHeaderUl>
  )
}

interface TimeGridItemProps {
  children?: ReactNode | ReactNode[]
}

const TimeGridItem: FC<TimeGridItemProps> = memo(({ children }) => (
  <StyledTimeGridItem>{children}</StyledTimeGridItem>
))

interface TimeGridProps {
  date: Date
  view: CalendarViewEnum
}

const TimeGrid: FC<TimeGridProps> = ({ date, view }) => {
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

  const getTimeContent = (time: Date) =>
    time.toLocaleTimeString('default', { hour: '2-digit' })

  if (view === CalendarViewEnum.MONTH) return null
  return (
    <>
      <TimeGridContainer aria-hidden>
        {generateTime(date).map(time => (
          <TimeGridItem key={time.toUTCString()}>
            {getTimeContent(time)}
          </TimeGridItem>
        ))}
        {timeMarkerPos && <TimeMarker style={{ top: timeMarkerPos }} />}
      </TimeGridContainer>
    </>
  )
}

interface CalendarCellProps {
  month: number
  date: Date
  view: CalendarViewEnum
}

const CalendarCell: FC<CalendarCellProps> = memo(({ month, date, view }) => (
  <StyledCalendarCell
    className={cn({
      [`current-month`]: month === date.getMonth(),
      today: isToday(date),
    })}
  >
    {view === CalendarViewEnum.MONTH && date.getDate()}
    {generateTime(date).map(time => (
      <TimeGridItem key={time.toUTCString()} />
    ))}
  </StyledCalendarCell>
))

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
    <Container>
      <CalendarWrapper>
        <WeekdayHeader activeDate={activeDate} view={view} />
        <CalendarDayContainer className={cn(`${view}-view`)}>
          <TimeGrid date={activeDate} view={view} />

          <CalendarDays className={cn(`${view}-view`)}>
            {calendarCells.map(date => (
              <CalendarCell
                key={date.toLocaleDateString()}
                month={activeDate.getMonth()}
                date={date}
                view={view}
              />
            ))}
          </CalendarDays>
        </CalendarDayContainer>
      </CalendarWrapper>
    </Container>
  )
}
