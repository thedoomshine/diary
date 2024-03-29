import { format } from 'date-fns'
import { darken, lighten } from 'polished'
import { forwardRef, useEffect, useState } from 'react'
import type { FC, FocusEvent } from 'react'
import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker'
import styled, { css } from 'styled-components'

import {
  ButtonStyles,
  FillButtonStyles,
  IconButton,
  IconButtonStyles,
} from '~/elements'

const triangleArrow = css`
  position: absolute;
  width: 0;
  margin-left: calc(-0.5rem * 0.5);

  &::before,
  &::after {
    content: '';

    position: absolute;
    z-index: -1;
    left: -0.5rem;

    box-sizing: content-box;
    width: 1px;
    height: 0;

    border: 0.5rem solid transparent;
    border-width: 0.5rem;
  }

  &::before {
    border-bottom-color: ${({ theme }) => theme.color.black};
  }
`

const triangleArrowUp = css`
  ${triangleArrow}
  top: 0;
  margin-top: -0.5rem;

  &::before,
  &::after {
    border-top: none;
    border-bottom-color: ${({ theme }) => theme.color.black};
  }

  &::after {
    top: 0;
  }

  &::before {
    top: -1px;
    border-bottom-color: ${({ theme }) => theme.color.black};
  }
`

const triangleArrowDown = css`
  ${triangleArrow}
  bottom: 0;
  margin-bottom: -0.5rem;

  &::before,
  &::after {
    border-top-color: ${({ theme }) => theme.color.black};
    border-bottom: none;
  }

  &::after {
    bottom: 0;
  }

  &::before {
    bottom: -1px;
    border-top-color: ${({ theme }) => theme.color.black};
  }
`

const Wrapper = styled.div`
  position: relative;
  align-self: flex-start;
  text-transform: lowercase;

  .react-datepicker__triangle {
    position: absolute;
    left: 50px;
  }

  .react-datepicker-popper {
    z-index: 3;
    top: 0.5rem;

    background-color: ${({ theme }) => theme.color.black};
    border-radius: ${({ theme }) => theme.radii.md};
    box-shadow: ${({ theme }) => theme.shadow.normal};

    &[data-placement^='bottom'] {
      padding-top: calc(0.5rem + 2px);

      .react-datepicker__triangle {
        ${triangleArrowUp}
      }
    }

    &[data-placement='bottom-end'],
    &[data-placement='top-end'] {
      .react-datepicker__triangle {
        right: 50px;
        left: auto;
      }
    }

    &[data-placement^='top'] {
      padding-bottom: calc(0.5rem + 2px);

      .react-datepicker__triangle {
        ${triangleArrowDown}
      }
    }

    &[data-placement^='right'] {
      padding-left: 0.5rem;

      .react-datepicker__triangle {
        right: 42px;
        left: auto;
      }
    }

    &[data-placement^='left'] {
      padding-right: 0.5rem;

      .react-datepicker__triangle {
        right: auto;
        left: 42px;
      }
    }
  }

  .react-datepicker__month {
    display: grid;
    gap: 0.25rem;
  }

  .react-datepicker__navigation,
  .react-datepicker__day {
    ${IconButtonStyles}
  }

  .react-datepicker__navigation,
  .react-datepicker__day-name,
  .react-datepicker__day {
    display: flex;
    gap: 0.25rem;
    align-items: center;
    justify-content: center;

    aspect-ratio: 1 / 1;
  }

  .react-datepicker__day-name {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    text-align: center;
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 2.5rem);
    text-transform: lowercase;
  }

  .react-datepicker__today-button {
    ${ButtonStyles}
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  .react-datepicker__today-button {
    width: 100%;
  }

  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.color.silver};
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${({ theme }) => darken(0.25, theme.color.yellow)};
    border: 0;
  }

  .react-datepicker__day--selected {
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.yellow};

    &:hover {
      background-color: ${({ theme }) => lighten(0.025, theme.color.yellow)};
    }
  }

  .react-datepicker__day--today {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  .react-datepicker__aria-live {
    position: absolute;

    overflow: hidden;

    width: ${({ theme }) => theme.spacing[1]};
    height: ${({ theme }) => theme.spacing[1]};
    margin: ${({ theme }) => -theme.spacing[2]};
    padding: 0;

    white-space: nowrap;

    clip-path: circle(0);
    border: 0;
  }
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => `0 ${theme.spacing[4]} ${theme.spacing[4]}`};
`

const DatePickerHeader: FC<ReactDatePickerCustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  return (
    <StyledHeader>
      <IconButton
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        icon='chevron-left'
      />
      {format(date, 'MMMM yyyy').toLocaleLowerCase()}
      <IconButton
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        icon='chevron-right'
      />
    </StyledHeader>
  )
}

const InputWrapper = styled.div`
  ${FillButtonStyles}
  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  padding: 0.5rem;
  position: relative;

  input {
    position: absolute;

    width: 100%;
    margin: 0;
    padding: 0.25rem;

    vertical-align: top;

    border: none;
  }

  &:has(input:focus-visible) {
    outline: ${({ theme }) =>
      `solid ${theme.spacing[1]} ${theme.color.yellow}`};
  }
`

const Template = styled.span`
  position: relative;
  z-index: -1;
  color: transparent;
`

interface DatePickerInputProps {
  dateFormat: string
  className?: string
  selected: Date
  temp: string
  setTemp: React.Dispatch<React.SetStateAction<string>>
}

const DatePickerInput = forwardRef<HTMLInputElement, DatePickerInputProps>(
  ({ className, dateFormat, selected, temp, setTemp, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
      if (!isFocused) {
        const formatted = format(selected, dateFormat)
        setTemp(formatted)
      }
    }, [selected, isFocused])

    return (
      <InputWrapper className={className}>
        <Template aria-hidden>{temp}</Template>
        <input
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </InputWrapper>
    )
  }
)

interface DatePickerProps {
  dateFormat?: string
  disabled?: boolean
  minDate?: Date
  onChange: (value: Date) => void
  onBlur: (event: FocusEvent<HTMLInputElement>) => void
  selected: Date
}

export const DatePicker: FC<DatePickerProps> = ({
  dateFormat = `eeee, MMMM do`,
  disabled = false,
  onChange,
  onBlur,
  selected,
  ...props
}) => {
  const [temp, setTemp] = useState(format(selected, dateFormat))

  const handleSelect = (date: Date) => {
    setTemp(format(date, dateFormat))
    onChange(date)
  }

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    onBlur(event)
  }

  return (
    <Wrapper>
      <ReactDatePicker
        customInput={
          <DatePickerInput
            dateFormat={dateFormat}
            selected={selected}
            temp={temp}
            setTemp={setTemp}
          />
        }
        dateFormat={dateFormat}
        disabled={disabled}
        onChange={() => {
          undefined
        }}
        onSelect={handleSelect}
        onBlur={handleBlur}
        popperModifiers={[
          {
            name: 'offset',
            options: {
              offset: [12, 14],
            },
          },
          {
            name: 'preventOverflow',
            options: {
              rootBoundary: 'viewport',
              tether: true,
              altAxis: true,
            },
          },
        ]}
        renderCustomHeader={DatePickerHeader}
        selected={selected}
        todayButton='today'
        {...props}
      />
    </Wrapper>
  )
}
