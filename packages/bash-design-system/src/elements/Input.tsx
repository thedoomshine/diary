import { FC } from 'react'
import styled from 'styled-components'

import { Icon } from './Icon/Icon'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabel = styled.label<ErrorProps>`
  color: ${({ error, theme }) => (error ? theme.color.red : theme.color.white)};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-left: 0.25rem;
`

const StyledInput = styled.input<ErrorProps>`
  background-color: ${({ theme }) => theme.color.black};
  border-color: ${({ error, theme }) => error ?? theme.color.red};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  position: relative;
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 0.25rem;
  line-height: 1;
`

const ErrorMessage = styled.span`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.red};
  margin-top: 0.25rem;
  margin-left: 0.25rem;
`

const ErrorIcon = styled(Icon)`
  font-size: inherit;
  margin-right: 0.5em;
`

interface InputProps {
  defaultValue?: string
  error?: string
  label?: string
  name: string
  pattern?: string
  placeholder?: string
  required?: boolean
  type?: string
  title?: string
}

interface ErrorProps {
  error?: boolean
}

export const Input: FC<InputProps> = ({
  label,
  name,
  defaultValue,
  error,
  type = 'text',
  pattern,
  placeholder,
  required,
  title,
  ...props
}) => {
  return (
    <InputContainer>
      {label && (
        <StyledLabel error={Boolean(error)} htmlFor={name}>
          {label}
        </StyledLabel>
      )}
      <StyledInput
        aria-invalid={Boolean(error)}
        defaultValue={defaultValue}
        id={name}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        required={required}
        title={title}
        type={type}
        error={Boolean(error)}
        {...props}
      />
      <ErrorMessage>
        {Boolean(error) && <ErrorIcon name='error' />}
        {error}
      </ErrorMessage>
    </InputContainer>
  )
}
