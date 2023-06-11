import {
  Button,
  Checkbox,
  FillButton,
  FillButtonStyles,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@diaryco/design-system'
import type { PopoverProps } from '@diaryco/design-system'
import cn from 'classnames'
import type { TimezoneEntry } from 'diary-utils'
import { lighten } from 'polished'
import { useState } from 'react'
import type { Dispatch, FC, SetStateAction } from 'react'
import styled from 'styled-components'

import { TimeZonePicker } from './timezone-picker'

const StyledPopoverContent = styled(PopoverContent)`
  --popover-background-color: ${({ theme }) => theme.color.black};

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: flex-start;

  padding: 1rem;
`

const StyledPopoverTrigger = styled(PopoverTrigger)`
  ${FillButtonStyles};
`

const SelectorWrapper = styled.div`
  display: flex;
  align-items: center;
`

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  width: 100%;
`

const StyledCheckbox = styled(Checkbox)`
  background-color: ${({ theme }) => theme.color.charcoal};
`

const StyledLabel = styled.label`
  padding: 0 0.25rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.silver};

  &.disabled {
    pointer-events: none;
    cursor: not-allowed;
    opacity: 0.5;
  }
`

const StyledFillButton = styled(FillButton)`
  --button-background-color: ${({ theme }) => theme.color.yellow};
  --button-text-color: ${({ theme }) => theme.color.black};
  --button-background-color-hover: ${({ theme }) =>
    lighten(0.25, theme.color.yellow)};
`

export interface TimeZonePopoverProps extends PopoverProps {
  endTime: Date
  handleClosePopover: () => void
  localTimeZone: TimezoneEntry
  onClick: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
  setSelectedTimezones: Dispatch<SetStateAction<TimezoneEntry[]>>
  startTime: Date
  selectedTimezones: TimezoneEntry[]
  timezoneOptions: TimezoneEntry[]
}

export const TimeZonePopover: FC<TimeZonePopoverProps> = ({
  endTime,
  handleClosePopover,
  localTimeZone,
  open,
  onClick,
  onOpenChange,
  setSelectedTimezones,
  startTime,
  selectedTimezones,
  timezoneOptions,
  ...props
}) => {
  const [separateTimezones, setSeparateTimezones] = useState(false)
  const [tempTzs, setTempTzs] = useState([...selectedTimezones])

  const handleValueChange = (value: TimezoneEntry, index: number) => {
    if (!separateTimezones) {
      return setTempTzs([value, value])
    }
    setTempTzs((prev) => {
      prev.splice(index, 1, value)
      return [...prev]
    })
  }

  const handleSaveAndClose = () => {
    setSelectedTimezones(tempTzs)
    handleClosePopover()
  }

  const handleSwapDates = () => {
    setTempTzs((prev) => [...prev].reverse())
  }

  const handleUseLocalTz = () => {
    setSeparateTimezones(false)
    setTempTzs([localTimeZone, localTimeZone])
    handleSaveAndClose()
  }

  const resetTempTzs = () => {
    setTempTzs([...selectedTimezones])
  }

  const handleOpenChange = (boolean: boolean) => {
    resetTempTzs()
    onOpenChange(boolean)
  }

  const notLocalTz = !Boolean(tempTzs.find((item) => item !== localTimeZone))
  const differentTimezones = tempTzs[0] !== tempTzs[1]

  const popoverTriggerLabel =
    !separateTimezones && selectedTimezones[0].tzCode !== localTimeZone.tzCode
      ? selectedTimezones[0].label
      : 'time zone'

  return (
    <Popover
      open={open}
      onOpenChange={handleOpenChange}
    >
      <StyledPopoverTrigger>{popoverTriggerLabel}</StyledPopoverTrigger>
      <StyledPopoverContent {...props}>
        <StyledCheckbox
          checked={separateTimezones}
          onCheckedChange={(boolean: boolean) => setSeparateTimezones(boolean)}
          name='separate-time-zones'
        >
          use separate start and end time zones
        </StyledCheckbox>
        <SelectorWrapper>
          <DropdownWrapper>
            {tempTzs.map(({ tzCode, label, offset }, index) => {
              const isDisabled = !separateTimezones && index === 1
              const pickerLabels = ['start', 'end']
              return (
                <div key={index}>
                  <StyledLabel
                    className={cn({
                      disabled: !separateTimezones && index === 1,
                    })}
                  >
                    event {pickerLabels[index]} time zone
                  </StyledLabel>
                  <TimeZonePicker
                    timezoneOptions={timezoneOptions}
                    defaultValue={tzCode}
                    onValueChange={(value: TimezoneEntry) =>
                      handleValueChange(value, index)
                    }
                    value={tzCode}
                    disabled={isDisabled}
                  />
                </div>
              )
            })}
          </DropdownWrapper>

          <Button
            disabled={!differentTimezones}
            onClick={handleSwapDates}
          >
            <Icon name='swap' />
          </Button>
        </SelectorWrapper>
        <StyledFooter>
          <Button
            onClick={handleUseLocalTz}
            disabled={notLocalTz}
          >
            use current time zone
          </Button>
          <Button onClick={handleClosePopover}>cancel</Button>
          <StyledFillButton onClick={handleSaveAndClose}>okay</StyledFillButton>
        </StyledFooter>
      </StyledPopoverContent>
    </Popover>
  )
}
