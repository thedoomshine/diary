import {
  Checkbox,
  DatePicker,
  Input,
  MarkdownEditor,
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
import type { ChangeEvent, FC, FocusEvent } from 'react'
import styled from 'styled-components'

import { TimeZonePopover } from '../(.)create/event/_components/timezone-popover'

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
    description?: string
  }
  isSubmitting?: boolean
}

const defaultMarkdown = `# yeag :rabbit: :black_heart:

![i'm satan.](https://pbs.twimg.com/profile_banners/40705032/1629004121/1500x500)

**goth** *bitch* ***on patrol***

## level 2

>> you miss 100% of the shots you never take
>
> wayne gretzky
>
michael scott

### level 3

> blockquote
>> blockquote blockquote

#### level 4

1. ordered list item
    1. ordered sub list item
2. ordered list item
3. ordered list item

##### level 5

- unordered list item
    - unordered sub list item
- unordered list item
- unordered list item

***

###### level 6

[link](https://twitter.com/thedoomshine)


`

const defaultStartDate = roundToNearestMinutes(new Date(), { nearestTo: 15 })

const defaultFormData = {
  allDay: false,
  description: defaultMarkdown,
  duration: 60,
  startDate: defaultStartDate,
  title: ''
}

export const CreateEventForm: FC<CreateEventFormProps> = ({
  formData = {...defaultFormData},
  isSubmitting = false,
}) => {
  const [eventStartTime, setEventStartTime] = useState(formData.startDate!)
  const [markdown, setMarkdownSource] = useState(formData.description!)
  const [allDayEvent, setAllDayEvent] = useState(formData.allDay!)
  const [duration, setDuration] = useState(formData.duration!)
  const [popoverOpen, setPopoverOpen] = useState(false)

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
        <MarkdownEditor
          markdown={markdown}
          setMarkdownSource={({
            currentTarget,
          }: ChangeEvent<HTMLTextAreaElement>) =>
            setMarkdownSource(currentTarget.value)
          }
        />
      </Fieldset>
    </StyledForm>
  )
}
