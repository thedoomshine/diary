import cn from 'classnames'
import { lighten } from 'polished'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState } from 'react'
import type { ChangeEvent, FC, RefCallback } from 'react'
import styled from 'styled-components'

import { Button } from '../Button'
import { Icon } from '../Icon/Icon'
import { Tooltip, TooltipProvider } from '../Tooltip'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label`
  margin-bottom: 0.25em;
  margin-left: 0.25em;
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.white};

  &:has(~ * > [data-input-error-message]:not(:placeholder-shown)) {
    color: ${({ theme }) => theme.color.red};
  }
`

const InputWrapper = styled.div`
  position: relative;

  overflow: hidden;
  display: flex;
  flex: 1 1 auto;

  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.black};
  border-radius: 0.5em;

  &:hover {
    background-color: ${({ theme }) => lighten(0.025, theme.color.black)};
  }

  &:has(~ * > [data-input-error-message]:not(:placeholder-shown)) {
    border-color: ${({ theme }) => theme.color.red};
  }
`

const StyledInput = styled.input`
  flex: 1 1 auto;
  padding: 0.5rem;
  font-size: inherit;
  color-scheme: dark;

  &::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.color.grey};
    opacity: 0.75;
  }
`

const PasswordToggleButton = styled(Button)`
  padding-right: 0.75em;
  padding-left: 0.75em;
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

  height: 1.25em;
  margin-top: 0.5em;
  margin-left: 0.5em;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.red};
`

const ErrorIcon = styled(Icon)`
  display: none;
  height: 1.25em;
  margin-right: 0.5em;
  font-size: inherit;

  &:has(~ :not(:placeholder-shown)) {
    display: block;
  }
`

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
      <InputContainer>
        {label && <StyledLabel htmlFor={name}>{label}</StyledLabel>}
        <InputWrapper>
          {prefixIcon && <Icon name={prefixIcon} />}
          <StyledInput
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
)
