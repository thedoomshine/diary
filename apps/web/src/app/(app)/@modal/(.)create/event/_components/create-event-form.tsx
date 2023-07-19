'use client'

import {
  Button,
  Checkbox,
  DatePicker,
  FillButton,
  Input,
  TimePicker,
  WYSIWYGEditor,
  defaultTimePickerFormat,
  defaultTimePickerOptions,
  formatTimePickerOptions,
} from '@diaryco/design-system'
import type { TimePickerOption } from '@diaryco/design-system'
import { type JSONContent } from '@tiptap/react'
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
import { atom, useAtom } from 'jotai'
import { useCallback, useMemo, useState } from 'react'
import type { FocusEvent } from 'react'
import styled from 'styled-components'

import { TimeZonePopover } from './timezone-popover'
import { lighten } from 'polished'

// import placeholderContent from './placeholder-content.json'

// const defaultContent = placeholderContent


const defaultStartDate = roundToNearestMinutes(new Date(), { nearestTo: 15 })

const defaultFormData = {
  allDay: false,
  description: undefined,
  duration: 60,
  startDate: defaultStartDate,
  title: '',
}

const contentAtom = atom<JSONContent | undefined>(undefined)

export const CreateEventForm = () => {
  const formData = { ...defaultFormData }
  const [eventStartTime, setEventStartTime] = useState(formData.startDate!)
  const [content, setContentSource] = useAtom(contentAtom)
  const [allDayEvent, setAllDayEvent] = useState(formData.allDay!)
  const [duration, setDuration] = useState(formData.duration!)
  const [popoverOpen, setPopoverOpen] = useState(false)

  const eventEndTime = allDayEvent
    ? addDays(eventStartTime, 1)
    : addMinutes(eventStartTime, duration)

  const isSingleDay = isSameDay(eventStartTime, eventEndTime)
  const localTimeZone = DEFAULT_TIMEZONES.get(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )?.identifier || 'UTC'

  const [selectedTimezones, setSelectedTimezones] = useState([
    localTimeZone,
    localTimeZone,
  ])


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
        defaultValue={formData.title}
      />

      <Fieldset>
        <DatesWrapper>
          <DateTimeWrapper>
            <DatePicker
              onChange={handleStartDateChange}
              onBlur={handleStartDateBlur}
              selected={eventStartTime}
              dateFormat={getDateFormat(eventStartTime)}
            />
            {!allDayEvent && (
              <TimePicker
                onChange={handleEventStartTimeChange}
                value={eventStartTime}
              />
            )}
          </DateTimeWrapper>
          &mdash;
          <DateTimeWrapper>
            {!allDayEvent && (
              <TimePicker
                onChange={handleEventEndTimeChange}
                options={eventEndTimeOptions}
                value={eventEndTime}
              />
            )}
            {(!isSingleDay || allDayEvent) && (
              <DatePicker
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
          eventStartTime={eventStartTime}
          handleClosePopover={() => setPopoverOpen(false)}
          localTimeZone={localTimeZone}
          onClick={() => setPopoverOpen(true)}
          onOpenChange={setPopoverOpen}
          open={popoverOpen}
          selectedTimezones={selectedTimezones}
          setSelectedTimezones={setSelectedTimezones}
          timezoneOptions={DEFAULT_TIMEZONES}
        />
      </Fieldset>
      <WYSIWYGEditor
        content={content}
        setContentSource={setContentSource}
      />

      <StyledFormFooter>
        <FillButton type='button'>save draft</FillButton>
        <StyledSubmitButton type='submit'>create event</StyledSubmitButton>
      </StyledFormFooter>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;

  height: 100%;
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
  gap: 0.25rem;
  align-items: center;
`

const DatesWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;
`

const StyledFormFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
  margin-top: 1rem;
`

const StyledSubmitButton = styled(FillButton)`
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.yellow};
  border-color: ${({ theme }) => theme.color.yellow};

  &:hover {
    background-color: ${({ theme }) => lighten(0.125, theme.color.yellow)};
  }
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
