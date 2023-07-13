'use client'

import { Select, SelectItem } from '@diaryco/design-system'
import { TimezoneMap } from 'diary-utils'
import { memo } from 'react';
import type { FC } from 'react';


type TimeZoneOptionProps = {
  tzCode: string
  label: string
}

const TimeZoneOption: FC<TimeZoneOptionProps> = memo(({ tzCode, label }) => (
  <SelectItem
    key={tzCode}
    value={tzCode}
  >
    {label}
  </SelectItem>
))

type TimeZonePickerProps = {
  defaultValue: string
  disabled?: boolean
  onValueChange: (value: string) => void
  timezoneOptions: TimezoneMap
  value: string
}

export const TimeZonePicker: FC<TimeZonePickerProps> = ({
  defaultValue,
  disabled = false,
  onValueChange,
  timezoneOptions,
  value,
  ...props
}) => {
  return (
    <Select
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
      disabled={disabled}
      {...props}
    >
      {[...timezoneOptions.values()].map(({ tzCode, label }) => (
        <TimeZoneOption
          key={tzCode}
          tzCode={tzCode}
          label={label}
        />
      ))}
    </Select>
  )
}
