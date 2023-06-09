import { timezones } from 'diary-utils'
import { memo } from 'react'
import type { FC } from 'react'
import styled from 'styled-components'

import { Select, SelectItem } from '~/elements/Select'

const StyledSelect = styled(Select)``

interface TimeZoneOptionProps {
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

interface TimeZonePickerProps {
  defaultValue: string
  disabled?: boolean
  onValueChange: (value: string) => void
  value: string
}

export const TimeZonePicker: FC<TimeZonePickerProps> = ({
  defaultValue,
  disabled = false,
  onValueChange,
  value,
  ...props
}) => {
  return (
    <StyledSelect
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      value={value}
      disabled={disabled}
      {...props}
    >
      {timezones.map(({ tzCode, label }) => (
        <TimeZoneOption
          key={tzCode}
          tzCode={tzCode}
          label={label}
        />
      ))}
    </StyledSelect>
  )
}
