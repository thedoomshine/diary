import clsx from 'clsx'
import { lighten } from 'polished'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import type { FC, HTMLProps } from 'react'
import styled from 'styled-components'

import { IconButton } from '../Button'
import { Icon } from '../Icon/Icon'
import { Tooltip, TooltipProvider } from '../Tooltip'

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin: 0 0.25rem 0.25rem;
`

const StyledLabel = styled.label`
  cursor: pointer;

  &.error {
    color: ${({ theme }) => theme.color.red};
  }
`

const InputWrapper = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  flex: 1 1 auto;

  overflow: hidden;

  width: 100%;

  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.color.white};

  background-color: ${({ theme }) => theme.color.black};
  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};
  border-radius: ${({ theme }) => theme.radii.md};

  &:hover {
    background-color: ${({ theme }) => lighten(0.025, theme.color.black)};
  }

  &:has(input:focus-visible) {
    outline: ${({ theme }) =>
      `solid ${theme.spacing[1]} ${theme.color.yellow}`};
  }

  &.error:not(:has(input:focus-visible)) {
    border-color: ${({ theme }) => theme.color.red};
  }
`

const StyledInput = styled.input`
  flex: 1 1 auto;
  padding: 0.5rem 0.75rem;
  font-size: inherit;
  color-scheme: dark;
  line-height: ${({ theme }) => theme.lineHeight.element};

  &::placeholder {
    font-style: italic;
    color: ${({ theme }) => theme.color.grey};
    opacity: 0.75;
  }
`

const PasswordToggleButton = styled(IconButton)`
  padding: 0 0.75em;

  aspect-ratio: 1 / 1;

  border: ${({ theme }) => `solid ${theme.spacing[1]} transparent`};
  border-radius: 0;
  border-left-color: ${({ theme }) => theme.color.grey};

  color: ${({ theme }) => theme.color.white};

  &.masked {
    color: ${({ theme }) => theme.color.grey};
  }
`

const ErrorMessage = styled.div`
  display: flex;
  align-items: flex-start;

  min-height: 0;
  margin-top: 0.5em;
  margin-left: 0.5em;
  gap: 0.5em;

  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.color.red};
`

const ErrorIcon = styled(Icon)`
  height: 1.25em;
  margin-top: 0.125rem;
  margin-right: 0.5em;
  font-size: inherit;
`

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  aspect-ratio: 1 / 1;

  padding: 0.5rem 0.75rem;

  pointer-events: none;

  &.prefix {
    border-right: ${({ theme }) =>
      `solid ${theme.spacing[1]} ${theme.color.grey}`};
  }

  &.suffix {
    border-left: ${({ theme }) =>
      `solid ${theme.spacing[1]} ${theme.color.grey}`};
  }
`

export type InputProps = {
  ForgotPasswordLink?: React.ReactNode
  defaultValue?: string | number | readonly string[]
  error?: string
  label?: string
  name: string
  placeholder?: string
  prefixIcon?: string
  required?: boolean
  suffixIcon?: string
} & HTMLProps<HTMLInputElement>

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
          className={clsx({ masked: isMasked })}
          icon={isMasked ? 'eye-slash' : 'eye'}
          onClick={onClick}
          {...props}
        />
      </Tooltip>
    </TooltipProvider>
  )
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      ForgotPasswordLink,
      className,
      defaultValue,
      disabled = false,
      error,
      id,
      label,
      name,
      placeholder,
      prefixIcon,
      suffixIcon,
      title,
      type = 'text',
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement | null>(null)
    const [isMasked, setIsMasked] = useState(true)

    const isPassword = type === 'password'

    useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
      ref,
      () => internalRef.current
    )

    const getInputType = () =>
      isPassword ? (isMasked ? 'password' : 'text') : type

    const togglePasswordMask = () => {
      setIsMasked((prev) => !prev)
    }

    return (
      <InputContainer className={clsx(className)}>
        <StyledLabelWrapper>
          {label && (
            <StyledLabel
              className={clsx({ error })}
              htmlFor={id || name}
            >
              {label}
            </StyledLabel>
          )}
          {isPassword && ForgotPasswordLink}
        </StyledLabelWrapper>
        <InputWrapper className={clsx({ error })}>
          {prefixIcon && (
            <StyledIconWrapper className='prefix'>
              <Icon name={prefixIcon} />
            </StyledIconWrapper>
          )}
          <StyledInput
            defaultValue={defaultValue}
            disabled={disabled}
            id={id || name}
            name={name}
            placeholder={placeholder}
            ref={internalRef}
            title={title}
            type={getInputType()}
            className={clsx({ password: isPassword })}
            {...props}
          />
          {isPassword ? (
            <PasswordToggle
              isMasked={isMasked}
              onClick={togglePasswordMask}
            />
          ) : (
            suffixIcon && (
              <StyledIconWrapper className='suffix'>
                <Icon name={suffixIcon} />
              </StyledIconWrapper>
            )
          )}
        </InputWrapper>
        <ErrorMessage aria-live='polite'>
          {Boolean(error) && (
            <>
              <ErrorIcon name='error' />
              <p>{error}</p>
            </>
          )}
        </ErrorMessage>
      </InputContainer>
    )
  }
)
