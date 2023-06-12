import { addMinutes, format, startOfDay } from 'date-fns'
import { useMemo } from 'react'
import type { FC } from 'react'

import { Select, SelectItem } from '~/elements'

export const defaultTimePickerFormat = (date: Date) =>
  format(date, 'p').toLocaleLowerCase()

export const defaultTimePickerArray = (date: Date): Date[] =>
  Array.from({ length: 96 }, (_, i) => addMinutes(startOfDay(date), i * 15))

export const defaultTimePickerOptions = (date: Date) =>
  formatTimePickerOptions(defaultTimePickerArray(date))

export const formatTimePickerOptions = (
  arr: Date[],
  formatTimePickerName = defaultTimePickerFormat
): TimePickerOption[] =>
  arr.reduce(
    (acc: TimePickerOption[], date: Date) => [
      ...acc,
      { date, name: formatTimePickerName(date) },
    ],
    []
  )

export interface TimePickerOption {
  date: Date
  name: string
}

interface TimePickerProps {
  disabled?: boolean
  onChange: (value: string) => void
  options?: TimePickerOption[]
  value: Date
}

export const TimePicker: FC<TimePickerProps> = ({
  disabled,
  onChange,
  options,
  value,
}) => {
  const selectOptions: TimePickerOption[] =
    options ??
    useMemo(
      () => defaultTimePickerOptions(value),
      [defaultTimePickerOptions, value]
    )

  const getString = (option: Date) => format(option, 'Pp')

  return (
    <Select
      disabled={disabled}
      hideIcon
      onValueChange={onChange}
      value={getString(value)}
    >
      {selectOptions.map(({ date, name }) => (
        <SelectItem
          key={`${getString(date)}`}
          value={getString(date)}
        >
          {name}
        </SelectItem>
      ))}
    </Select>
  )
}
