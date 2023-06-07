import cn from 'classnames'
import { ChangeEvent, FC, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Button } from '../Button'
import { Icon } from '../Icon/Icon'
import { Tooltip, TooltipProvider } from '../Tooltip'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-left: 0.25em;
  margin-bottom: 0.25em;

  &:has(~ * > [data-input-error-message]:not(:placeholder-shown)) {
    color: ${({ theme }) => theme.color.red};
  }
`

const InputWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  border: solid 0.125rem transparent;
  box-shadow: inset 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.5em;
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.md};

  &:has(~ * > [data-input-error-message]:not(:placeholder-shown)) {
    border-color: ${({ theme }) => theme.color.red};
  }
`

const StyledInput = styled.input`
  flex: 1 1 auto;
  font-size: inherit;
  padding: 0.5rem;
  color-scheme: dark;

  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
    font-style: italic;
    opacity: 0.75;
  }
`

const PasswordToggleButton = styled(Button)`
  padding-left: 0.75em;
  padding-right: 0.75em;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

const PasswordToggleIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.white};
  &.masked {
    color: ${({ theme }) => theme.color.grey};
  }
`

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.red};
  margin-top: 0.5em;
  margin-left: 0.5em;
  height: 1.25em;
`

const ErrorIcon = styled(Icon)`
  display: none;
  font-size: inherit;
  margin-right: 0.5em;
  height: 1.25em;

  &:has(~ :not(:placeholder-shown)) {
    display: block;
  }
`

interface InputProps {
  defaultValue?: string
  disabled?: boolean
  errorMessages?: { [key: string]: string }
  label?: string
  min?: string
  name: string
  onChange?: (event: ChangeEvent) => void
  pattern?: string
  placeholder?: string
  prefixIcon?: string
  required?: boolean
  serverError?: string
  step?: string
  suffixIcon?: string
  title?: string
  type?: string
  value?: string
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
        <PasswordToggleButton
          onClick={onClick}
          {...props}
        >
          <PasswordToggleIcon
            className={cn({ masked: isMasked })}
            name={isMasked ? 'eye-slash' : 'eye'}
          />
        </PasswordToggleButton>
      </Tooltip>
    </TooltipProvider>
  )
}

export const Input: FC<InputProps> = ({
  defaultValue,
  disabled = false,
  errorMessages,
  label,
  min,
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
  value,
  ...props
}) => {
  const ref = useRef<HTMLInputElement>(null)
  const [isMasked, setIsMasked] = useState(true)
  const [showError, setShowError] = useState(Boolean(serverError))
  const [error, setError] = useState(serverError)

  const isPassword = type === 'password'

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
    if (!ref.current) return
    const el = ref.current

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
    if (!ref.current) return
    const el = ref.current

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
    <InputContainer>
      {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
      <InputWrapper>
        {prefixIcon && <Icon name={prefixIcon} />}
        <StyledInput
          defaultValue={defaultValue}
          disabled={disabled}
          id={name}
          min={min}
          name={name}
          onBlur={handleValidate}
          onChange={handleInput}
          pattern={pattern}
          placeholder={placeholder}
          ref={ref}
          required={required}
          step={step}
          title={title}
          type={getInputType()}
          value={value}
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
      </InputWrapper>
      <ErrorMessage aria-live='polite'>
        <ErrorIcon name='error' />{' '}
        <StyledInput
          aria-readonly
          data-input-error-message
          disabled
          placeholder=' '
          readOnly
          tabIndex={-1}
          value={error}
        />
      </ErrorMessage>
    </InputContainer>
  )
}
