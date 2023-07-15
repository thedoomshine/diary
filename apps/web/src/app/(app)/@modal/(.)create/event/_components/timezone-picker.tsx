'use client'

import {
  Select,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from '@diaryco/design-system'
import { groupedTimezones } from 'diary-utils'
import { Fragment, memo } from 'react'
import type { FC } from 'react'

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
  disabled?: boolean
  onValueChange: (value: string) => void
  value: string
}

export const TimeZonePicker: FC<TimeZonePickerProps> = ({
  disabled = false,
  onValueChange,
  value,
  ...props
}) => {
  return (
    <Select
      defaultValue={value}
      onValueChange={onValueChange}
      value={value}
      disabled={disabled}
      {...props}
    >
      {groupedTimezones.map(([key, group]) => (
        <Fragment key={key}>
          <SelectGroup>
            <SelectLabel>{key}</SelectLabel>
            {group.map(({ identifier, name }) => (
              <TimeZoneOption
                key={identifier}
                tzCode={identifier}
                label={name}
              />
            ))}
          </SelectGroup>
        </Fragment>
      ))}
    </Select>
  )
}
