import { format } from 'date-fns'
import { darken, lighten } from 'polished'
import { forwardRef, useEffect, useState, type FC, type FocusEvent } from 'react'
import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker'

import { css, cx } from 'style-engine/css'
import { token } from 'style-engine/tokens'
import { SystemStyleObject } from 'style-engine/types'
import { Button, baseButtonStyles, buttonStyles } from '~/elements'

const triangleArrowPseudoStyles = {
  content: '',
  position: 'absolute',
  zIndex: -1,
  left: '-0.5rem',
  boxSizing: 'content-box',
  width: '1px',
  height: 0,
  borderWidth: 'md',
} as SystemStyleObject

const triangleArrowStyles = {
  position: 'absolute',
  width: 0,
  marginLeft: '-0.25rem',
  _after: {
    ...triangleArrowPseudoStyles,
  },
  _before: {
    ...triangleArrowPseudoStyles,
    borderBottomColor: 'black',
  },
} as SystemStyleObject

const triangleArrowUpPseudoStyles = {
  borderTop: 'none',
  borderBottomColor: 'black',
} as SystemStyleObject

const triangleArrowUpStyles = {
  ...triangleArrowStyles,
  top: 0,
  marginTop: '-0.5rem',
  _after: {
    ...triangleArrowUpPseudoStyles,
    top: 0,
  },
  _before: {
    ...triangleArrowUpPseudoStyles,
    top: '-1px',
    borderBottomColor: 'black',
  },
} as SystemStyleObject

const triangleArrowDownPseudoStyles = {
  borderTopColor: 'black',
  borderBottom: 'none',
} as SystemStyleObject
const triangleArrowDownStyles = {
  ...triangleArrowStyles,
  bottom: 0,
  marginBottom: '-0.5rem',
  _after: {
    ...triangleArrowDownPseudoStyles,
    bottom: 0,
  },
  _before: {
    ...triangleArrowDownPseudoStyles,
    bottom: '-1px',
    borderTopColor: 'black',
  },
} as SystemStyleObject

const datepickerWrapperStyles = css({
  position: 'relative',
  alignSelf: 'flex-start',
  textTransform: 'lowercase',
  '& > .react-datepicker__triangle': {
    position: 'absolute',
    left: '50px',
  },
  '& > .react-datepicker-popper': {
    zIndex: 3,
    top: '0.5rem',
    padding: '0.25rem',
    paddingBottom: '0.125rem',
    backgroundColor: 'black',
    borderRadius: '0.5rem',
    boxShadow: 'normal',
    '&[data-placement^="bottom"]': {
      paddingTop: 'calc(0.5rem + 2px)',
    },
    '&[data-placement^="bottom"] > .react-datepicker__triangle': {
      ...triangleArrowUpStyles,
    },
    '&[data-placement="bottom-end"] > .react-datepicker__triangle, &[data-placement="top-end"] > .react-datepicker__triangle':
      {
        right: '50px',
        left: 'auto',
      },
    '&[data-placement^="top"]': {
      paddingBottom: 'calc(0.5rem + 2px)',
    },
    '&[data-placement^="top"] > .react-datepicker__triangle': {
      ...triangleArrowDownStyles,
    },
    '&[data-placement^="right"]': {
      paddingLeft: '0.5rem',
    },
    '&[data-placement^="right"] > .react-datepicker__triangle': {
      right: '42px',
      left: 'auto',
    },
    '&[data-placement^="left"]': {
      paddingRight: '0.5rem',
    },
    '&[data-placement^="left"] > .react-datepicker__triangle': {
      right: 'auto',
      left: '42px',
    },
  },
  '& > .react-datepicker__month': {
    display: 'grid',
    gap: '0.25rem',
  },
  '& > .react-datepicker__navigation, & > .react-datepicker__day': {
    ...baseButtonStyles,
  },
  '& > .react-datepicker__navigation, & > .react-datepicker__day-name, & > .react-datepicker__day':
    {
      display: 'flex',
      gap: '0.25rem',
      aspectRatio: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  '& > . react-datepicker__day-name': {
    fontWeight: '700',
    textAlign: 'center',
  },
  '& > .react-datepicker__day-names, & > .react-datepicker__week': {
    display: 'grid',
    gridTemplateColumns: 'repeat(7, 2.5rem)',
    textTransform: 'lowercase',
  },
  '& > .react-datepicker__today-button': {
    ...baseButtonStyles,
    fontWeight: '700',
    width: '100%',
  },
  '& > .react-datepicker__day--outside-month': {
    color: 'silver',
  },
  '& > .react-datepicker__day--keyboard-selected': {
    backgroundColor: darken(0.25, token('colors.yellow')),
    border: 0,
  },
  '& > .react-datepicker__day--selected': {
    color: 'black',
    backgroundColor: 'yellow',
    _hover: {
      backgroundColor: lighten(0.025, token('colors.yellow')),
    },
  },
  '& > .react-datepicker__day--today': {
    fontWeight: '700',
  },
  '& > .react-datepicker__aria-live': {
    position: 'absolute',
    overflow: 'hidden',
    width: '1px',
    height: '1px',
    margin: '-1px',
    padding: 0,
    whiteSpace: 'nowrap',
    clipPath: 'circle(0)',
    border: 0,
  },
})

const datepickerHeaderStyles = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '0 0.125rem',
})

const DatePickerHeader: FC<ReactDatePickerCustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
  return (
    <div className={datepickerHeaderStyles}>
      <Button
        variant='icon'
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        icon='chevron-left'
      />
      {format(date, 'MMMM yyyy').toLocaleLowerCase()}
      <Button
        variant='icon'
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        icon='chevron-right'
      />
    </div>
  )
}

const datepickerInputWrapperStyles = cx(
  buttonStyles({ type: 'fill' }),
  css({
    border: 'solid 1px {colors.grey}',
    padding: '0.5rem',
    position: 'relative',
    '& > input': {
      position: 'absolute',
      width: '100%',
      margin: 0,
      padding: '0.25rem',
      verticalAlign: 'top',
      border: 'none',
    },
  })
)

const datepickerTemplateStyles = css({
  position: 'relative',
  zIndex: 'behind',
  color: 'transparent',
})

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
      <div className={cx(datepickerInputWrapperStyles, className)}>
        <span
          className={datepickerTemplateStyles}
          aria-hidden
        >
          {temp}
        </span>
        <input
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </div>
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
    <div className={datepickerWrapperStyles}>
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
              offset: [0, 12],
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
    </div>
  )
}
