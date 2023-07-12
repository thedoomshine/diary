import { ValueOf } from '~/@types'

export const CALENDAR_VIEWS = {
  DAY: 'day',
  WEEK: 'week',
  MONTH: 'month',
} as const

export type CalendarViewType = ValueOf<typeof CALENDAR_VIEWS>

