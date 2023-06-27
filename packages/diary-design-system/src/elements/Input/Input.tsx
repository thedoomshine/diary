import clsx from 'clsx'
import { lighten } from 'polished'
import type { ChangeEvent, FC } from 'react'
import {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
    useState,
} from 'react'

import { css } from 'style-engine/css'
import { token } from 'style-engine/tokens'

import { Button } from '../Button'
import { Icon } from '../Icon/Icon'
import { Tooltip, TooltipProvider } from '../Tooltip'

const containerStyles = css({
  display: 'flex',
  flexDirection: 'column',
})

const labelStyles = css({
  marginBottom: '0.25em',
  marginLeft: '0.25em',
  fontSize: 'md',
  color: 'white',
  '&:has(~ * > [data-input-error-message]:not(:placeholder-shown))': {
    color: 'red',
  },
})

const wrapperStyles = css({
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flex: '1 1 auto',
  width: '100%',
  fontSize: 'md',
  color: 'white',
  backgroundColor: 'black',
  border: 'solid 1px grey',
  borderRadius: 'md',
  _hover: {
    backgroundColor: lighten(0.025, token('colors.black')),
  },
  '&:has(~ * > [data-input-error-message]:not(:placeholder-shown))': {
    borderColor: 'red',
  },
})

const inputStyles = css({
  flex: '1 1 auto',
  padding: '0.5rem',
  fontSize: 'inherit',
  colorScheme: 'dark',
  '&::placeholder': {
    fontStyle: 'italic',
    color: 'grey',
    opacity: 0.75,
  },
})

const toggleButtonStyles = css({
  paddingRight: '0.75em',
  paddingLeft: '0.75em',
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
})

const toggleIconStyles = css({
  color: 'white',
  '&.masked': {
    color: 'grey',
  },
})

const errorMessageStyles = css({
  display: 'flex',
  alignItems: 'center',
  height: '1.25em',
  marginTop: '0.5em',
  marginLeft: '0.5em',
  fontSize: 'sm',
  color: 'red',
})

const errorIconStyles = css({
  display: 'none',
  height: '1.25em',
  marginRight: '0.5em',
  fontSize: 'inherit',
  '&:has(~ * > [data-input-error-message]:not(:placeholder-shown))': {
    display: 'block',
  },
})

export type InputProps = {
  defaultValue?: string | number | readonly string[]
  disabled?: boolean
  errorMessages?: { [key: string]: string }
  label?: string
  minLength?: string | number
  maxLength?: string | number
  name: string
  onChange?: (event: ChangeEvent) => void
  pattern?: string
  placeholder?: string
  prefixIcon?: string
  required?: boolean
  serverError?: string
  step?: string | number
  suffixIcon?: string
  title?: string
  type?: React.HTMLInputTypeAttribute
}

interface PasswordToggleProps {
  isMasked: boolean
  onClick: () => void
}

const PasswordToggle: FC<PasswordToggleProps> = ({
  isMasked,
  onClick,
  ...props
}) => {
  return (
    <TooltipProvider>
      <Tooltip
        align='end'
        side='bottom'
        content={`${isMasked ? 'show' : 'hide'} password`}
      >
        <Button
          className={toggleButtonStyles}
          onClick={onClick}
          {...props}
        >
          <Icon
            className={clsx({masked: isMasked}, toggleIconStyles)}
            name={isMasked ? 'eye-slash' : 'eye'}
          />
        </Button>
      </Tooltip>
    </TooltipProvider>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      defaultValue,
      disabled = false,
      errorMessages,
      label,
      maxLength,
      minLength,
      name,
      onChange,
      pattern,
      placeholder,
      prefixIcon,
      required,
      serverError,
      step,
      suffixIcon,
      title,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement | null>(null)
    const [isMasked, setIsMasked] = useState(true)
    const [showError, setShowError] = useState(Boolean(serverError))
    const [error, setError] = useState(serverError)

    const isPassword = type === 'password'

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => internalRef.current
    )

    useEffect(() => {
      if (serverError) {
        setError(serverError)
        setShowError(Boolean(serverError))
      }
    }, [serverError])

    const getInputType = () =>
      isPassword ? (isMasked ? 'password' : 'text') : type

    const togglePasswordMask = () => {
      setIsMasked((prev) => !prev)
    }

    const handleValidate = () => {
      if (!internalRef?.current) {
        return
      }
      const el = internalRef.current

      if (el.validity.valid) {
        setError('')
        setShowError(false)
      } else {
        handleShowError()
      }
    }

    const handleInput = (event: ChangeEvent) => {
      if (onChange) {
        onChange(event)
      }
      if (showError) {
        handleValidate()
      }
    }

    const handleShowError = () => {
      if (!internalRef?.current) {
        return
      }
      const el = internalRef.current

      if (el.validity.valueMissing && errorMessages?.required) {
        setError(errorMessages.required)
      } else if (el.validity.tooShort && errorMessages?.minLength) {
        setError(errorMessages.minLength)
      } else if (el.validity.tooLong && errorMessages?.maxLength) {
        setError(errorMessages.maxLength)
      } else if (el.validity.patternMismatch && errorMessages?.pattern) {
        setError(errorMessages.pattern)
      }
      setShowError(true)
    }

    return (
      <div className={containerStyles}>
        {label && <label className={labelStyles} htmlFor={name}>{label}</label>}
        <div className={wrapperStyles}>
          {prefixIcon && <Icon name={prefixIcon} />}
          <input
            className={inputStyles}
            defaultValue={defaultValue}
            disabled={disabled}
            id={name}
            min={minLength}
            max={maxLength}
            name={name}
            onBlur={handleValidate}
            onChange={handleInput}
            pattern={pattern}
            placeholder={placeholder}
            ref={internalRef}
            required={required}
            step={step}
            title={title}
            type={getInputType()}
            {...props}
          />
          {isPassword ? (
            <PasswordToggle
              isMasked={isMasked}
              onClick={togglePasswordMask}
            />
          ) : (
            suffixIcon && <Icon name={suffixIcon} />
          )}
        </div>
        <div className={errorMessageStyles} aria-live='polite'>
          <Icon className={errorIconStyles} name='error' />{' '}
          <input
            className={inputStyles}
            aria-readonly
            data-input-error-message
            disabled
            placeholder=' '
            readOnly
            tabIndex={-1}
            value={error}
          />
        </div>
      </div>
    )
  }
)
