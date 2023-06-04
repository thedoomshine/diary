import { useEffect, useMemo, useState } from 'react'
import type { FC } from 'react'
import { Form } from '@remix-run/react'
import {
  addHours,
  addMinutes,
  differenceInMinutes,
  format,
  isAfter,
  isSameDay,
  roundToNearestMinutes,
  startOfDay,
} from 'date-fns'

import styled from 'styled-components'
import { DatePicker, Input, Select, SelectItem } from '@diary/design-system'

const Fieldset = styled.fieldset`
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

  useEffect(() => {
    // if (isAfter(startTime, endTime)) {
    //   setEndTime(
    //     roundToNearestMinutes(addHours(startTime, 1), { nearestTo: 15 })
    //   )
    // }
  }, [startTime, endTime])

  const handleStartDateChange = (value: Date) => {
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

  const handleStartTimeChange = (value: string) => {
    const next = new Date(Number(value))
    setStartTime(
      (prev: Date) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth(),
          prev.getDate(),
          next.getHours(),
          next.getMinutes()
        )
    )
  }

  const handleEndDateChange = (value: Date) => {
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

  const handleEndTimeChange = (value: string) => {
    const next = new Date(Number(value))
    console.log(next)
    setEndTime(
      (prev: Date) =>
        new Date(
          prev.getFullYear(),
          prev.getMonth(),
          prev.getDate(),
          next.getHours(),
          next.getMinutes()
        )
    )
  }

  const isSingleDay = isSameDay(startTime, endTime)

  const startTimeOptions = useMemo(
    () =>
      Array.from({ length: 96 }, (_, i) =>
        addMinutes(startOfDay(startTime), i * 15)
      ),
    [startTime]
  )

  const endTimeOptions = useMemo(
    () => Array.from({ length: 48 }, (_, i) => addMinutes(startTime, i * 30)),
    [startTime]
  )

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
        <DatePicker
          value={startTime}
          onChange={handleStartDateChange}
          disabled={isSubmitting}
        />
        <Select
          onValueChange={handleStartTimeChange}
          value={startTime.valueOf().toString()}
        >
          {startTimeOptions.map((option: Date) => (
            <SelectItem
              key={`start-${option.valueOf().toString()}`}
              value={option.valueOf().toString()}
            >
              {format(option, 'p').toLocaleLowerCase()}
            </SelectItem>
          ))}
        </Select>
        –
        <Select
          onValueChange={handleEndTimeChange}
          value={endTime.valueOf().toString()}
        >
          {endTimeOptions.map((option: Date) => (
            <SelectItem
              key={`end-${option.valueOf().toString()}`}
              value={option.valueOf().toString()}
            >
              {format(option, 'p').toLocaleLowerCase()}
              {` `}({getDistance(startTime, option)})
            </SelectItem>
          ))}
        </Select>
        <DatePicker
          value={endTime}
          onChange={handleEndDateChange}
          disabled={isSubmitting}
        />
      </Fieldset>
    </Form>
  )
}
