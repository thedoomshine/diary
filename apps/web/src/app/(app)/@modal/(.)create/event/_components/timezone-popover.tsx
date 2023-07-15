'use client'

import {
  Button,
  Checkbox,
  FillButton,
  FillButtonStyles,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@diaryco/design-system'
import type { PopoverProps } from '@diaryco/design-system'
import clsx from 'clsx'
import type { TimezoneMap } from 'diary-utils'
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
  border: solid 1px ${({ theme }) => theme.color.grey};
  padding: 0.5rem;
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
  background-color: ${({ theme }) => theme.color.yellow};
  color: ${({ theme }) => theme.color.black};
  &:hover {
    background-color: ${({ theme }) => lighten(0.25, theme.color.yellow)};
  }
`

export interface TimeZonePopoverProps extends PopoverProps {
  eventEndTime: Date
  eventStartTime: Date
  handleClosePopover: () => void
  localTimeZone: string
  onClick: () => void
  onOpenChange: (open: boolean) => void
  open: boolean
  selectedTimezones: string[]
  setSelectedTimezones: Dispatch<SetStateAction<string[]>>
  timezoneOptions: TimezoneMap
}

export const TimeZonePopover: FC<TimeZonePopoverProps> = ({
  eventEndTime,
  eventStartTime,
  handleClosePopover,
  localTimeZone,
  onClick,
  onOpenChange,
  open,
  selectedTimezones,
  setSelectedTimezones,
  timezoneOptions,
  ...props
}) => {
  const [separateTimezones, setSeparateTimezones] = useState(false)
  const [tempTzs, setTempTzs] = useState([...selectedTimezones])

  const handleValueChange = (value: string, index: number) => {
    const nextValue = timezoneOptions.get(value)?.identifier
    if (!nextValue) return

    if (!separateTimezones) {
      return setTempTzs([nextValue, nextValue])
    }
    setTempTzs((prev) => {
      prev.splice(index, 1, nextValue)
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

  const localTz = Boolean(tempTzs[0] === localTimeZone)
  const differentTimezones = tempTzs[0] !== tempTzs[1]
  const PICKER_LABELS = ['start', 'end']

  const getIdentifier = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return value.map((item) => timezoneOptions.get(item)?.name).join(' - ')
    }
    return timezoneOptions.get(value)?.name
  }

  const popoverTriggerLabel = !localTz
    ? separateTimezones
      ? getIdentifier(selectedTimezones)
      : getIdentifier(selectedTimezones[0])
    : 'time zone'

  return (
    <Popover
      open={open}
      onOpenChange={handleOpenChange}
    >
      <StyledPopoverTrigger>
        {popoverTriggerLabel}
      </StyledPopoverTrigger>
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
            {tempTzs.map((value, index) => {
              const isDisabled = !separateTimezones && index === 1
              return (
                <div key={index}>
                  <StyledLabel
                    className={clsx({
                      disabled: !separateTimezones && index === 1,
                    })}
                  >
                    event {PICKER_LABELS[index]} time zone
                  </StyledLabel>
                  <TimeZonePicker
                    disabled={isDisabled}
                    onValueChange={(value: string) =>
                      handleValueChange(value, index)
                    }
                    value={value}
                  />
                </div>
              )
            })}
          </DropdownWrapper>

          <IconButton
            disabled={!differentTimezones}
            onClick={handleSwapDates}
            icon='swap'
          />
        </SelectorWrapper>
        <StyledFooter>
          <Button
            onClick={handleUseLocalTz}
            disabled={!localTz}
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
