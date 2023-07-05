import { style } from '@vanilla-extract/css'
import clsx from 'clsx'
import { format } from 'date-fns'
import { darken, lighten } from 'polished'
import {
  type FC,
  type FocusEvent,
  forwardRef,
  useEffect,
  useState,
} from 'react'
import ReactDatePicker, {
  ReactDatePickerCustomHeaderProps,
} from 'react-datepicker'

import { Button, baseButtonStyles, buttonVariantStyles } from '~/elements'
import { themeVars } from '~/foundation/theme.css'

const triangleArrowPseudoStyles = {
  content: '',
  position: 'absolute',
  zIndex: -1,
  left: '-0.5rem',
  boxSizing: 'content-box',
  width: '1px',
  height: 0,
  borderWidth: themeVars.radii.md,
}

const triangleArrowStyles = {
  position: 'absolute',
  width: 0,
  marginLeft: '-0.25rem',
  selectors: {
    '::after': {
      ...triangleArrowPseudoStyles,
    },
    '::before': {
      ...triangleArrowPseudoStyles,
      borderBottomColor: themeVars.color.black,
    },
  },
}

const triangleArrowUpPseudoStyles = {
  borderTop: 'none',
  borderBottomColor: themeVars.color.black,
}

const triangleArrowUpStyles = {
  ...triangleArrowStyles,
  top: 0,
  marginTop: '-0.5rem',
  selectors: {
    '::after': {
      ...triangleArrowStyles.selectors['::after'],
      ...triangleArrowUpPseudoStyles,
      top: 0,
    },
    '::before': {
      ...triangleArrowStyles.selectors['::before'],
      ...triangleArrowUpPseudoStyles,
      top: '-1px',
      borderBottomColor: themeVars.color.black,
    },
  },
}

const triangleArrowDownPseudoStyles = {
  borderTopColor: themeVars.color.black,
  borderBottom: 'none',
}
const triangleArrowDownStyles = {
  ...triangleArrowStyles,
  bottom: 0,
  marginBottom: '-0.5rem',
  selectors: {
    '::after': {
      ...triangleArrowStyles.selectors['::after'],
      ...triangleArrowDownPseudoStyles,
      bottom: 0,
    },
    '::before': {
      ...triangleArrowStyles.selectors['::before'],
      ...triangleArrowDownPseudoStyles,
      bottom: '-1px',
      borderTopColor: themeVars.color.black,
    },
  },
}

const datepickerPopperStyles = style({
  zIndex: 3,
  top: '0.5rem',
  padding: '0.25rem',
  paddingBottom: '0.125rem',
  backgroundColor: themeVars.color.black,
  borderRadius: '0.5rem',
  boxShadow: themeVars.shadow.normal,
  selectors: {
    '&[data-placement^="bottom"]': {
      paddingTop: 'calc(0.5rem + 2px)',
    },
    // '&[data-placement^="bottom"] > .react-datepicker__triangle': {
    //   ...triangleArrowUpStyles,
    // },
    [`& > [data-placement="bottom-end"] > .react-datepicker__triangle,
    &[data-placement="top-end"] > .react-datepicker__triangle`
    ]: {
      right: '50px',
      left: 'auto',
    },
    '& > [data-placement^="top"]': {
      paddingBottom: 'calc(0.5rem + 2px)',
    },
    // '& > [data-placement^="top"] > .react-datepicker__triangle': {
    //   ...triangleArrowDownStyles,
    // },
    '& > [data-placement^="right"]': {
      paddingLeft: '0.5rem',
    },
    '& > [data-placement^="right"] > .react-datepicker__triangle': {
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
})

const datepickerWrapperStyles = style({
  position: 'relative',
  alignSelf: 'flex-start',
  textTransform: 'lowercase',
  selectors: {
    '& > .react-datepicker__triangle': {
      position: 'absolute',
      left: '50px',
    },
    '& > .react-datepicker__month': {
      display: 'grid',
      gap: '0.25rem',
    },
    // [`& > .react-datepicker__navigation,
    // & > .react-datepicker__day`]: {
    //   ...baseButtonStyles,
    // },
    '& > .react-datepicker__navigation, & > .react-datepicker__day-name, & > .react-datepicker__day':
      {
        display: 'flex',
        gap: '0.25rem',
        aspectRatio: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    '& > . react-datepicker__day-name': {
      fontWeight: themeVars.fontWeight.bold,
      textAlign: 'center',
    },
    '& > .react-datepicker__day-names, & > .react-datepicker__week': {
      display: 'grid',
      gridTemplateColumns: 'repeat(7, 2.5rem)',
      textTransform: 'lowercase',
    },
    // '& > .react-datepicker__today-button': {
    //   ...baseButtonStyles,
    //   fontWeight: themeVars.fontWeight.bold,
    //   width: '100%',
    // },
    '& > .react-datepicker__day--outside-month': {
      color: themeVars.color.silver,
    },
    '& > .react-datepicker__day--keyboard-selected': {
      backgroundColor: darken(0.25, themeVars.color.yellow),
      border: 0,
    },
    '& > .react-datepicker__day--selected': {
      color: themeVars.color.black,
      backgroundColor: themeVars.color.yellow,
      // ':hover': {
      //   backgroundColor: lighten(0.025, themeVars.color.yellow),
      // },
    },
    '& > .react-datepicker__day--today': {
      fontWeight: themeVars.fontWeight.bold,
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
  },
})

const datepickerHeaderStyles = style({
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

const datepickerInputWrapperStyles = style([
  buttonVariantStyles['fill'],
  style({
    border: `solid 1px ${themeVars.color.grey}`,
    padding: '0.5rem',
    position: 'relative',
    selectors: {
      '& > input': {
        position: 'absolute',
        width: '100%',
        margin: 0,
        padding: '0.25rem',
        verticalAlign: 'top',
        border: 'none',
      },
    },
  }),
])

const datepickerTemplateStyles = style({
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
      <div className={clsx(datepickerInputWrapperStyles, className)}>
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
        popperClassName={datepickerPopperStyles}
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
