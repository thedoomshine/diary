import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker'
import type { FC } from 'react'
import { format, isThisYear } from 'date-fns'

import styled from 'styled-components'
import 'react-datepicker/dist/react-datepicker-cssmodules.css'
import { Button, ButtonStyles, Icon } from '../'
import { rgba } from 'polished'

const Wrapper = styled.div`
  align-self: flex-start;
  text-transform: lowercase;

  .react-datepicker__input-container {
    ${ButtonStyles}
  }

  .react-datepicker {
    background-color: ${({ theme }) => theme.color.charcoal};
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
    padding: ${({ theme }) => theme.space.sm};
    padding-bottom: ${({ theme }) => theme.space.xxs};
  }

  .react-datepicker__navigation {
    ${ButtonStyles}
  }

  .react-datepicker__day-name {
    text-align: center;
  }

  .react-datepicker__day-names {
    padding: ${({ theme }) => `${theme.space.sm} 0`};
  }

  .react-datepicker__day-names,
  .react-datepicker__week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    text-transform: lowercase;
  }

  .react-datepicker__today-button,
  .react-datepicker__day {
    ${ButtonStyles}
  }

  .react-datepicker__today-button {
    width: 100%;
  }

  .react-datepicker__day--outside-month {
    color: ${({ theme }) => theme.color.silver};
  }

  .react-datepicker__day--selected {
    background-color: ${({ theme }) => theme.color.yellow};
    color: ${({ theme }) => theme.color.black};
    &:hover {
      background-color: ${({ theme }) => rgba(theme.color.yellow, 0.75)};
    }
  }

  .react-datepicker__day--today {
    font-weight: ${({ theme }) => theme.fontWeight[800]};
  }

  .react-datepicker-popper {
    z-index: 1;
  }

  .react-datepicker__aria-live {
    position: absolute;
    clip-path: circle(0);
    border: 0;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    width: 1px;
    white-space: nowrap;
  }
`

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: ${({ theme }) => `0 ${theme.space.xxs}`};
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
      <Button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <Icon name='chevron-left' />
      </Button>
      {format(date, 'MMMM yyyy').toLocaleLowerCase()}
      <Button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <Icon name='chevron-right' />
      </Button>
    </StyledHeader>
  )
}

interface DatePickerProps {
  disabled?: boolean
  onChange: (value: Date) => void
  value: Date
}

export const DatePicker: FC<DatePickerProps> = ({
  disabled = false,
  onChange,
  value,
  ...props
}) => {
  return (
    <Wrapper>
      <ReactDatePicker
        renderCustomHeader={DatePickerHeader}
        dateFormat={`eeee, MMMM do${!isThisYear(value) ? ', yyyy' : ''}`}
        disabled={disabled}
        dropdownMode='select'
        onChange={onChange}
        todayButton='today'
        selected={value}
        {...props}
      />
    </Wrapper>
  )
}
