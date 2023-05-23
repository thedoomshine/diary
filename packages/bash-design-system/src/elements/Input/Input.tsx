import { FC, useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon/Icon'
import { Button } from '../Button'
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

  &:has(+ * > :not(:focus):not(:placeholder-shown):invalid) {
    color: ${({ theme }) => theme.color.red};
  }
`

const InputWrapper = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  border: solid 0.125rem transparent;
  box-shadow: inset 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  border-radius: 0.5em;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.md};

  &:has(:not(:focus):not(:placeholder-shown):invalid) {
    border-color: ${({ theme }) => theme.color.red};
  }
`

const StyledInput = styled.input`
  flex: 1 1 auto;
  font-size: inherit;
  border-radius: 0.5em;
  padding: 0.5rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.grey};
    opacity: 0.75;
    font-style: italic;
  }
`

const PasswordToggleButton = styled(Button)`
  padding-left: 0.75em;
  padding-right: 0.75em;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

const PasswordToggleIcon = styled(Icon)<PasswordToggleIconProps>`
  color: ${({ isMasked, theme }) =>
    isMasked ? theme.color.grey : theme.color.white};
`

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.red};
  margin-top: 0.5em;
  margin-left: 0.5em;
`

const ErrorIcon = styled(Icon)`
  font-size: inherit;
  margin-right: 0.5em;
  height: 1.25em;
`

interface InputProps {
  defaultValue?: string
  errorMessages?: { [key: string]: string }
  label?: string
  name: string
  pattern?: string
  placeholder?: string
  prefixIcon?: string
  required?: boolean
  serverError?: string
  suffixIcon?: string
  title?: string
  type?: string
}

interface PasswordToggleProps {
  isMasked: boolean
  onClick: () => void
}

interface PasswordToggleIconProps {
  isMasked: boolean
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
        <PasswordToggleButton onClick={onClick} {...props}>
          <PasswordToggleIcon
            isMasked={isMasked}
            name={isMasked ? 'eye-slash' : 'eye'}
          />
        </PasswordToggleButton>
      </Tooltip>
    </TooltipProvider>
  )
}

export const Input: FC<InputProps> = ({
  defaultValue,
  errorMessages,
  label,
  name,
  pattern,
  placeholder = '',
  required,
  title,
  type = 'text',
  prefixIcon,
  suffixIcon,
  serverError = '',
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
    setIsMasked(prev => !prev)
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

  const handleInput = () => {
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
          id={name}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
          required={required}
          title={title}
          type={getInputType()}
          onBlur={handleValidate}
          onInput={handleInput}
          ref={ref}
          {...props}
        />
        {isPassword ? (
          <PasswordToggle isMasked={isMasked} onClick={togglePasswordMask} />
        ) : (
          suffixIcon && <Icon name={suffixIcon} />
        )}
      </InputWrapper>
      <ErrorMessage aria-live='polite'>
        {showError && (
          <>
            <ErrorIcon name='error' /> {error}
          </>
        )}
      </ErrorMessage>
    </InputContainer>
  )
}
