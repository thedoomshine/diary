import { Checkbox, DatePicker, Input, TimePicker, defaultTimePickerFormat, defaultTimePickerOptions, formatTimePickerOptions } from '@diaryco/design-system';
import type { TimePickerOption } from '@diaryco/design-system';
import { Form } from '@remix-run/react';
import { addHours, addMinutes, differenceInMinutes, isAfter, isSameDay, isSameMinute, isThisYear, roundToNearestMinutes } from 'date-fns';
import { timezones as DEFAULT_TIMEZONES } from 'diary-utils';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { FC, FocusEvent } from 'react';
import styled from 'styled-components';



import { TimeZonePopover } from './timezone-popover';


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

  const localTimeZone = useMemo(
    () =>
      DEFAULT_TIMEZONES.find(
        (item) =>
          item.tzCode === Intl.DateTimeFormat().resolvedOptions().timeZone
      )!,
    []
  )

  // convert DEFAULT_TIMEZONES to an object, store the key and access the tzCode, label, and offset with it
  const [selectedTimezones, setSelectedTimezones] = useState([
    localTimeZone,
    localTimeZone,
  ])

  const [popoverOpen, setPopoverOpen] = useState(false)

  const isValidDate = (date: Date) =>
    date instanceof Date && !isNaN(Number(date.valueOf()))

  useEffect(() => {
    if (isAfter(startTime, endTime) && !isSameMinute(startTime, endTime)) {
      setEndTime(
        roundToNearestMinutes(addHours(startTime, 1), { nearestTo: 15 })
      )
    }
  }, [startTime, endTime])

  const getNextDate = (next: Date, prev: Date) =>
    new Date(
      next.getFullYear(),
      next.getMonth(),
      next.getDate(),
      prev.getHours(),
      prev.getMinutes()
    )

  const handleSetStartDate = (next: Date) => {
    setStartTime((prev: Date) => getNextDate(next, prev))
  }

  const handleStartDateBlur = (event: FocusEvent<HTMLInputElement>) => {
    const next = new Date(event?.target?.value)
    if (isValidDate(next)) {
      handleSetStartDate(next)
    }
  }

  const handleStartDateChange = (next: Date) => {
    if (isValidDate(next)) {
      handleSetStartDate(next)
    }
  }

  const handleStartTimeChange = (value: string) => {
    const next = new Date(value)
    if (isValidDate(next)) {
      setStartTime(next)
    }
  }

  const handleSetEndDate = (next: Date) => {
    setEndTime((prev: Date) => getNextDate(next, prev))
  }

  const handleEndDateBlur = (event: FocusEvent<HTMLInputElement>) => {
    const next = new Date(event?.target?.value)
    if (isValidDate(next)) {
      handleSetEndDate(next)
    }
  }

  const handleEndDateChange = (next: Date) => {
    if (isValidDate(next)) {
      handleSetEndDate(next)
    }
  }

  const handleEndTimeChange = (value: string) => {
    const next = new Date(value)
    if (isValidDate(next)) {
      setEndTime(next)
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
        <Checkbox name='all-day'>all day</Checkbox>
        <TimeZonePopover
          endTime={endTime}
          handleClosePopover={() => setPopoverOpen(false)}
          localTimeZone={localTimeZone}
          onClick={() => setPopoverOpen(true)}
          onOpenChange={setPopoverOpen}
          open={popoverOpen}
          setSelectedTimezones={setSelectedTimezones}
          startTime={startTime}
          timezoneOptions={DEFAULT_TIMEZONES}
          selectedTimezones={selectedTimezones}
        />
      </Fieldset>
    </Form>
  )
}
