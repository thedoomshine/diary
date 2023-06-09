import { ButtonStyles, Checkbox, DatePicker, Input, Popover, PopoverContent, PopoverTrigger, TimePicker, TimeZonePicker, defaultTimePickerFormat, defaultTimePickerOptions, formatTimePickerOptions } from '@diaryco/design-system';
import type { TimePickerOption } from '@diaryco/design-system';
import { Form } from '@remix-run/react';
import cn from 'classnames';
import { addHours, addMinutes, differenceInMinutes, isAfter, isSameDay, isSameMinute, isThisYear, roundToNearestMinutes } from 'date-fns';
import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Dispatch, FC, FocusEvent, SetStateAction } from 'react';
import styled from 'styled-components';


const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: flex-start;

  margin-bottom: 1rem;
`

const DateTimeWrapper = styled.div`
  display: flex;
  align-items: center;
`

const DatesWrapper = styled.div`
  display: flex;
  align-items: center;
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
          timeZones={timeZones}
          setTimeZones={setTimeZones}
          startTime={startTime}
          endTime={endTime}
        />
      </Fieldset>
    </Form>
  )
}

const StyledPopoverContent = styled(PopoverContent)`
  --popover-background-color: ${({ theme }) => theme.color.black};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  align-items: flex-start;
`

const StyledPopoverTrigger = styled(PopoverTrigger)`
  ${ButtonStyles};
`

const StyledCheckbox = styled(Checkbox)`
  background-color: ${({ theme }) => theme.color.charcoal};
`

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.silver};
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding: 0 0.25rem;

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
`

interface TimeZonePopoverProps {
  startTime: Date
  endTime: Date
  timeZones: string[]
  setTimeZones: Dispatch<SetStateAction<string[]>>
}

const TimeZonePopover: FC<TimeZonePopoverProps> = ({
  startTime,
  endTime,
  timeZones,
  setTimeZones,
  ...props
}) => {
  const [separateTimeZones, setSeparateTimeZones] = useState(false)

  const handleValueChange = (value: string, index: 0 | 1) => {
    if (!separateTimeZones) {
      return setTimeZones([value, value])
    }
    setTimeZones((prev) => {
      prev.splice(index, 1, value)
      return [...prev]
    })
  }

  const handleCheckedChange = () => {
    setSeparateTimeZones((prev) => !prev)
  }

  return (
    <Popover>
      <StyledPopoverTrigger {...props}>time zone</StyledPopoverTrigger>
      <StyledPopoverContent>
        <StyledCheckbox
          value={`${separateTimeZones}`}
          onCheckedChange={handleCheckedChange}
          name='separate-time-zones'
        >
          use separate start and end time zones
        </StyledCheckbox>
        <div>
          <StyledLabel>event start time zone</StyledLabel>
          <TimeZonePicker
            defaultValue={timeZones[0]}
            onValueChange={(value: string) => handleValueChange(value, 0)}
            value={timeZones[0]}
          />
        </div>

        <div>
          <StyledLabel className={cn({ disabled: !separateTimeZones })}>
            event end time zone
          </StyledLabel>
          <TimeZonePicker
            defaultValue={timeZones[1]}
            onValueChange={(value: string) => handleValueChange(value, 1)}
            value={timeZones[1]}
            disabled={!separateTimeZones}
          />
        </div>
      </StyledPopoverContent>
    </Popover>
  )
}