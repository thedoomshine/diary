import { useCallback, useEffect, useMemo, useState } from 'react'
import type { FC, FocusEvent } from 'react'
import { Form } from '@remix-run/react'
import {
  addHours,
  addMinutes,
  differenceInMinutes,
  isAfter,
  isThisYear,
  isSameDay,
  isSameMinute,
  roundToNearestMinutes,
} from 'date-fns'

import styled from 'styled-components'
import {
  Input,
  DatePicker,
  TimePicker,
  defaultTimePickerOptions,
  formatTimePickerOptions,
  defaultTimePickerFormat,
} from '@diary/design-system'
import type { TimePickerOption } from '@diary/design-system'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
`

interface CreateEventFormProps {
  formData?: {
    title?: string
    startDate?: Date
    endDate?: Date
  }
  isSubmitting?: boolean
}

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
    const date = new Date(event?.target?.value)
    if (isValidDate(date)) {
      setStartTime(date)
    }
  }

  const handleStartDateChange = (value: Date) => {
    if (isValidDate(value)) {
      setStartTime(value)
    }
  }

  const handleStartTimeChange = (value: string) => {
    const date = new Date(value)
    if (isValidDate(date)) {
      setStartTime(date)
    }
  }

  const handleEndDateBlur = (event: FocusEvent<HTMLInputElement>) => {
    const date = new Date(event?.target?.value)
    if (isValidDate(date)) {
      setEndTime(date)
    }
  }

  const handleEndDateChange = (value: Date) => {
    if (isValidDate(value)) {
      setEndTime(value)
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

      <Wrapper>
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
      </Wrapper>
    </Form>
  )
}
