import {
  Checkbox,
  DatePicker,
  MarkdownEditor,
  Input,
  TimePicker,
  defaultTimePickerFormat,
  defaultTimePickerOptions,
  formatTimePickerOptions,
} from '@diaryco/design-system'
import type { TimePickerOption } from '@diaryco/design-system'
import { Form } from '@remix-run/react'
import {
  addDays,
  addMinutes,
  differenceInMinutes,
  isAfter,
  isSameDay,
  isThisYear,
  isValid,
  roundToNearestMinutes,
} from 'date-fns'
import { timezones as DEFAULT_TIMEZONES } from 'diary-utils'
import { useCallback, useMemo, useState } from 'react'
import type { FC, FocusEvent } from 'react'
import styled from 'styled-components'

import { TimeZonePopover } from './timezone-popover'

const StyledForm = styled(Form)`
  padding: 0.5rem;
`

const Fieldset = styled.fieldset`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 1rem;
`

const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const DatesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const getDistance = (start: Date, finish: Date) => {
  const diff = differenceInMinutes(finish, start)
  if (diff < 60) {
    return `${diff} mins`
  }
  if (diff === 60) {
    return `1 hr`
  }
  return `${Number((diff / 60).toFixed(1))} hrs`
}

interface CreateEventFormProps {
  formData?: {
    allDay?: boolean
    title?: string
    startDate?: Date
    duration?: number
  }
  isSubmitting?: boolean
}

export const CreateEventForm: FC<CreateEventFormProps> = ({
  formData,
  isSubmitting = false,
}) => {
  const defaultEventTitle = formData?.title || ''
  const defaultStartDate =
    formData?.startDate || roundToNearestMinutes(new Date(), { nearestTo: 15 })
  const defaultDuration = formData?.duration || 60
  const defaultAllDay = formData?.allDay || false

  const [eventStartTime, setEventStartTime] = useState(defaultStartDate)
  const [allDayEvent, setAllDayEvent] = useState(defaultAllDay)
  const [duration, setDuration] = useState(defaultDuration)

  const eventEndTime = allDayEvent
    ? addDays(eventStartTime, 1)
    : addMinutes(eventStartTime, duration)

  const isSingleDay = isSameDay(eventStartTime, eventEndTime)
  const localTimeZone = DEFAULT_TIMEZONES.get(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )

  const [selectedTimezones, setSelectedTimezones] = useState([
    localTimeZone,
    localTimeZone,
  ])

  const [popoverOpen, setPopoverOpen] = useState(false)

  const getNextDate = (next: Date, prev: Date) =>
    new Date(
      next.getFullYear(),
      next.getMonth(),
      next.getDate(),
      prev.getHours(),
      prev.getMinutes()
    )

  const handleSetStartDate = (next: Date) => {
    setEventStartTime((prev: Date) => getNextDate(next, prev))
  }

  const handleStartDateBlur = (event: FocusEvent<HTMLInputElement>) => {
    const next = new Date(event?.target?.value)
    if (isValid(next)) {
      handleSetStartDate(next)
    }
  }

  const handleStartDateChange = (next: Date) => {
    if (isValid(next)) {
      handleSetStartDate(next)
    }
  }

  const handleEventStartTimeChange = (value: string) => {
    const next = new Date(value)
    if (isValid(next)) {
      setEventStartTime(next)
    }
  }

  const handleSetEndDate = (next: Date) => {
    if (isAfter(eventStartTime, next)) {
      setDuration(60)
    } else {
      setDuration(differenceInMinutes(next, eventStartTime))
    }
  }

  const handleEndDateBlur = (event: FocusEvent<HTMLInputElement>) => {
    const next = new Date(event?.target?.value)
    if (isValid(next)) {
      handleSetEndDate(next)
    }
  }

  const handleEndDateChange = (next: Date) => {
    if (isValid(next)) {
      handleSetEndDate(next)
    }
  }

  const handleEventEndTimeChange = (value: string) => {
    const next = new Date(value)
    if (isValid(next)) {
      handleSetEndDate(next)
    }
  }

  const handleOnCheckedChange = (value: boolean) => {
    setAllDayEvent(value)
  }

  const sameDayOptions = useMemo(
    () =>
      Array.from({ length: 48 }, (_, i) => addMinutes(eventStartTime, i * 30)),
    [eventStartTime]
  )

  const formatEventEndTimeOptions = useCallback(
    (date: Date) =>
      `${defaultTimePickerFormat(date)} (${getDistance(eventStartTime, date)})`,
    [eventStartTime]
  )

  const getDateFormat = (date: Date) =>
    `eeee, MMMM do${!isThisYear(date) ? ' yyyy' : ''}`

  const eventEndTimeOptions = useMemo<TimePickerOption[]>(() => {
    return isSingleDay
      ? formatTimePickerOptions(sameDayOptions, formatEventEndTimeOptions)
      : defaultTimePickerOptions(eventEndTime)
  }, [isSingleDay, sameDayOptions, formatEventEndTimeOptions, eventEndTime])

  return (
    <StyledForm method='post'>
      <Input
        label='event title'
        name='title'
        type='text'
        placeholder='add title'
        defaultValue={defaultEventTitle}
        disabled={isSubmitting}
      />

      <Fieldset>
        <DatesWrapper>
          <DateTimeWrapper>
            <DatePicker
              disabled={isSubmitting}
              onChange={handleStartDateChange}
              onBlur={handleStartDateBlur}
              selected={eventStartTime}
              dateFormat={getDateFormat(eventStartTime)}
            />
            {!allDayEvent && (
              <TimePicker
                disabled={isSubmitting}
                onChange={handleEventStartTimeChange}
                value={eventStartTime}
              />
            )}
          </DateTimeWrapper>
          –
          <DateTimeWrapper>
            {!allDayEvent && (
              <TimePicker
                disabled={isSubmitting}
                onChange={handleEventEndTimeChange}
                options={eventEndTimeOptions}
                value={eventEndTime}
              />
            )}
            {(!isSingleDay || allDayEvent) && (
              <DatePicker
                disabled={isSubmitting}
                onChange={handleEndDateChange}
                onBlur={handleEndDateBlur}
                selected={eventEndTime}
                dateFormat={getDateFormat(eventEndTime)}
              />
            )}
          </DateTimeWrapper>
        </DatesWrapper>
      </Fieldset>
      <Fieldset>
        <Checkbox
          name='all-day'
          defaultChecked={allDayEvent}
          checked={allDayEvent}
          onCheckedChange={handleOnCheckedChange}
        >
          all day
        </Checkbox>
        <TimeZonePopover
          eventEndTime={eventEndTime}
          handleClosePopover={() => setPopoverOpen(false)}
          localTimeZone={localTimeZone}
          onClick={() => setPopoverOpen(true)}
          onOpenChange={setPopoverOpen}
          open={popoverOpen}
          setSelectedTimezones={setSelectedTimezones}
          eventStartTime={eventStartTime}
          timezoneOptions={DEFAULT_TIMEZONES}
          selectedTimezones={selectedTimezones}
        />
      </Fieldset>
      <Fieldset>
        <MarkdownEditor markdown="# Hello World" />
      </Fieldset>
    </StyledForm>
  )
}
