import { ChangeEvent, FC, useEffect, useState } from 'react'
import { Form } from '@remix-run/react'
import {
  addHours,
  format,
  isAfter,
  isSameDay,
  roundToNearestMinutes,
} from 'date-fns'

import styled from 'styled-components'
import { Input } from '@diary/design-system'

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
    if (isAfter(startTime, endTime)) {
      setEndTime(
        roundToNearestMinutes(addHours(startTime, 1), { nearestTo: 15 })
      )
    }
  }, [startTime, endTime])

  const handleStartDateChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    const next = element.valueAsDate as Date
    setStartTime(
      prev =>
        new Date(
          next.getUTCFullYear(),
          next.getUTCMonth(),
          next.getUTCDate(),
          prev.getUTCHours(),
          prev.getUTCMinutes()
        )
    )
  }

  const handleStartTimeChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    const next = element.valueAsDate as Date

    setStartTime(
      prev =>
        new Date(
          prev.getUTCFullYear(),
          prev.getUTCMonth(),
          prev.getUTCDate(),
          next.getUTCHours(),
          next.getUTCMinutes()
        )
    )
  }

  const handleEndDateChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    const next = element.valueAsDate as Date
    setEndTime(
      prev =>
        new Date(
          next.getUTCFullYear(),
          next.getUTCMonth(),
          next.getUTCDate(),
          prev.getUTCHours(),
          prev.getUTCMinutes()
        )
    )
  }

  const handleEndTimeChange = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    const next = element.valueAsDate as Date
    setEndTime(
      prev =>
        new Date(
          prev.getUTCFullYear(),
          prev.getUTCMonth(),
          prev.getUTCDate(),
          next.getUTCHours(),
          next.getUTCMinutes()
        )
    )
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
        <Input
          name='date'
          type='date'
          value={format(startTime, 'yyyy-MM-dd')}
          onChange={handleStartDateChange}
          disabled={isSubmitting}
        />
        <Input
          name='start-time'
          type='time'
          value={format(startTime, 'HH:mm:ss')}
          onChange={handleStartTimeChange}
          step='900'
          disabled={isSubmitting}
        />
      </Fieldset>
      <Fieldset>
        <Input
          name='date'
          type='date'
          value={format(endTime, 'yyyy-MM-dd')}
          min={format(startTime, 'yyyy-MM-dd')}
          onChange={handleEndDateChange}
          disabled={isSubmitting}
        />
        <Input
          name='end-time'
          type='time'
          value={format(endTime, 'HH:mm:ss')}
          min={format(startTime, 'HH:mm:ss')}
          onChange={handleEndTimeChange}
          step='900'
          disabled={isSubmitting}
        />
      </Fieldset>
    </Form>
  )
}
