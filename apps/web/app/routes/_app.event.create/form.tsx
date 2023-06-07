import {
  Checkbox,
  DatePicker,
  Input,
  Select,
  SelectItem,
  TimePicker,
  defaultTimePickerFormat,
  defaultTimePickerOptions,
  formatTimePickerOptions,
} from '@diaryco/design-system'
import type { TimePickerOption } from '@diaryco/design-system'
import { Form } from '@remix-run/react'
import {
  addHours,
  addMinutes,
  differenceInMinutes,
  format,
  isAfter,
  isSameDay,
  isSameMinute,
  isThisYear,
  roundToNearestMinutes,
} from 'date-fns'
import { formatInTimeZone } from 'date-fns-tz'
import { useCallback, useEffect, useMemo, useState } from 'react'
import type { FC, FocusEvent } from 'react'
import styled from 'styled-components'

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 1rem;
  align-items: flex-start;
`

const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
`

const DatesWrapper = styled.div`
  align-items: center;
  display: flex;
`

const StyledSelect = styled(Select)``

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
    title?: string
    startDate?: Date
    endDate?: Date
  }
  isSubmitting?: boolean
}

export const CreateEventForm: FC<CreateEventFormProps> = ({
  formData,
  isSubmitting = false,
}) => {
  const today = new Date()

  const defaultStartDate =
    formData?.startDate || roundToNearestMinutes(today, { nearestTo: 15 })
  const defaultEndDate =
    formData?.endDate ||
    roundToNearestMinutes(addHours(defaultStartDate, 1), { nearestTo: 15 })

  const [startTime, setStartTime] = useState(defaultStartDate)
  const [endTime, setEndTime] = useState(defaultEndDate)

  const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

  const [timeZones, setTimeZones] = useState([userTimeZone, userTimeZone])

  const isValidDate = (date: Date) =>
    date instanceof Date && !isNaN(Number(date.valueOf()))

  useEffect(() => {
    if (isAfter(startTime, endTime) && !isSameMinute(startTime, endTime)) {
      setEndTime(
        roundToNearestMinutes(addHours(startTime, 1), { nearestTo: 15 })
      )
    }
  }, [startTime, endTime])

  const handleStartDateBlur = (event: FocusEvent<HTMLInputElement>) => {
    const next = new Date(event?.target?.value)
    if (isValidDate(next)) {
      setStartTime(
        (prev: Date) =>
          new Date(
            next.getFullYear(),
            next.getMonth(),
            next.getDate(),
            prev.getHours(),
            prev.getMinutes()
          )
      )
    }
  }

  const handleStartDateChange = (value: Date) => {
    if (isValidDate(value)) {
      setStartTime(
        (prev: Date) =>
          new Date(
            value.getFullYear(),
            value.getMonth(),
            value.getDate(),
            prev.getHours(),
            prev.getMinutes()
          )
      )
    }
  }

  const handleStartTimeChange = (value: string) => {
    const date = new Date(value)
    if (isValidDate(date)) {
      setStartTime(date)
    }
  }

  const handleEndDateBlur = (event: FocusEvent<HTMLInputElement>) => {
    const next = new Date(event?.target?.value)
    if (isValidDate(next)) {
      setEndTime(
        (prev: Date) =>
          new Date(
            next.getFullYear(),
            next.getMonth(),
            next.getDate(),
            prev.getHours(),
            prev.getMinutes()
          )
      )
    }
  }

  const handleEndDateChange = (value: Date) => {
    if (isValidDate(value)) {
      setEndTime(
        (prev: Date) =>
          new Date(
            value.getFullYear(),
            value.getMonth(),
            value.getDate(),
            prev.getHours(),
            prev.getMinutes()
          )
      )
    }
  }

  const handleEndTimeChange = (value: string) => {
    const date = new Date(value)
    if (isValidDate(date)) {
      setEndTime(date)
    }
  }

  const isSingleDay = isSameDay(startTime, endTime)

  const generateSameDayOptions = useCallback(
    () => Array.from({ length: 48 }, (_, i) => addMinutes(startTime, i * 30)),
    [startTime]
  )

  const formatEndTimeOptions = useCallback(
    (date: Date) =>
      `${defaultTimePickerFormat(date)} (${getDistance(startTime, date)})`,
    [startTime]
  )

  const endTimeOptions = useMemo<TimePickerOption[]>(() => {
    return isSingleDay
      ? formatTimePickerOptions(generateSameDayOptions(), formatEndTimeOptions)
      : defaultTimePickerOptions(endTime)
  }, [isSingleDay, generateSameDayOptions, formatEndTimeOptions, endTime])

  const getDateFormat = (date: Date) =>
    `eeee, MMMM do${!isThisYear(date) ? ' yyyy' : ''}`

  const formatTimeZoneName = (zone: string) => {
    const now = startTime
    const formatter = new Intl.DateTimeFormat('default', {
      timeZone: zone,
      timeStyle: 'full',
    })

    const GMTOffset = formatInTimeZone(now, zone, 'OOOO', {
      timeZone: zone,
    })
    const timeZoneName = formatter.formatToParts(now.valueOf()).pop()?.value
    const timeZoneLocation = zone.split('/')[1].replaceAll('_', ' ')

    return `(${GMTOffset}) ${
      GMTOffset !== timeZoneName ? `${timeZoneName} - ` : ''
    }${timeZoneLocation}`
  }

  const TIMEZONES = useMemo(
    () =>
      Intl.supportedValuesOf('timeZone')
        .sort((a: string, b: string) =>
          formatTimeZoneName(a).localeCompare(formatTimeZoneName(b))
        )
        .sort((a: string, b: string) => {
          const now = startTime
          const REGEX = /([-]*[0-9]+)/
          const first = formatInTimeZone(now, a, 'O', {
            timeZone: a,
          })
            .replaceAll(':', '.')
            .match(REGEX)!
          const second = formatInTimeZone(now, b, 'O', {
            timeZone: b,
          })
            .replaceAll(':', '.')
            .match(REGEX)!

          return Number(first[0]) - Number(second[0])
        }),
    [startTime]
  )

  return (
    <Form method='post'>
      <Input
        label='event title'
        name='title'
        type='text'
        placeholder='add title'
        defaultValue={formData?.title}
        disabled={isSubmitting}
      />

      <Fieldset>
        <DatesWrapper>
          <DateTimeWrapper>
            <DatePicker
              disabled={isSubmitting}
              onChange={handleStartDateChange}
              onBlur={handleStartDateBlur}
              selected={startTime}
              dateFormat={getDateFormat(startTime)}
            />
            <TimePicker
              disabled={isSubmitting}
              onChange={handleStartTimeChange}
              value={startTime}
            />
          </DateTimeWrapper>
          –
          <DateTimeWrapper>
            <TimePicker
              disabled={isSubmitting}
              onChange={handleEndTimeChange}
              options={endTimeOptions}
              value={endTime}
            />
            {!isSingleDay && (
              <DatePicker
                disabled={isSubmitting}
                onChange={handleEndDateChange}
                onBlur={handleEndDateBlur}
                selected={endTime}
                dateFormat={getDateFormat(endTime)}
              />
            )}
          </DateTimeWrapper>
        </DatesWrapper>
      </Fieldset>
      <Fieldset>
        <Checkbox
          label='all day'
          name='all-day'
        />
        <StyledSelect defaultValue={timeZones[0]}>
          {TIMEZONES.map((zone: string) => (
            <SelectItem
              key={zone}
              value={zone}
              onSelect={(event) =>
                setTimeZones([
                  event.currentTarget.value,
                  event.currentTarget.value,
                ])
              }
            >
              {formatTimeZoneName(zone)}
            </SelectItem>
          ))}
        </StyledSelect>
      </Fieldset>
    </Form>
  )
}
