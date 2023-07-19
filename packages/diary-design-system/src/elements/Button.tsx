import { lighten, rgba } from 'polished'
import { forwardRef } from 'react'
import type { HTMLProps, MouseEventHandler, ReactNode } from 'react'
import styled, { css } from 'styled-components'

import { Icon } from './Icon/Icon'

export type ButtonProps = {
  as?: never
  classNames?: string
  href?: string
  disabled?: boolean
  children?: ReactNode | ReactNode[]
  onClick?: MouseEventHandler<HTMLButtonElement>
  role?: React.AriaRole
  type?: 'button' | 'submit' | 'reset'
} & HTMLProps<HTMLButtonElement>

export const ButtonStyles = css`
  cursor: pointer;

  position: relative;

  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;

  padding: 0.5rem 1rem;

  line-height: ${({ theme }) => theme.lineHeight.element};
  color: inherit;
  text-align: center;
  text-decoration: none;

  border: ${({ theme }) => `solid ${theme.spacing[1]} transparent`};
  border-radius: ${({ theme }) => theme.radii.md};

  &:hover {
    background-color: ${({ theme }) => rgba(theme.color.white, 0.05)};
    .icon {
      fill: ${({ theme }) => theme.color.yellow};
    }
  }

  &:focus-visible {
    outline: ${({ theme }) =>
      `solid ${theme.spacing[1]} ${theme.color.yellow}`};
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    &:hover {
      background-color: unset;
    }
  }
`
export const StyledButton = styled.button`
  ${ButtonStyles};
`

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { disabled, children, onClick, role, type = 'button', className, ...props },
    ref
  ) => (
    <StyledButton
      ref={ref}
      role={role ?? 'button'}
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
)

export const IconButtonStyles = css`
  ${ButtonStyles};
  padding: 0.5rem;
  gap: 0.25rem;

  &:focus-visible {
    background-color: ${({ theme }) => rgba(theme.color.white, 0.05)};
    .icon {
      fill: ${({ theme }) => theme.color.yellow};
    }
  }
`

const StyledIconButton = styled(Button)`
  ${IconButtonStyles}
`

export type IconButtonProps = {
  icon: string
  iconPosition?: 'start' | 'end'
} & Omit<ButtonProps, 'ref'>

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, iconPosition = 'start', children, onClick, ...props }, ref) => (
    <StyledIconButton
      ref={ref}
      onClick={onClick}
      {...props}
    >
      {iconPosition === 'start' && <Icon name={icon} />}
      {children}
      {iconPosition === 'end' && <Icon name={icon} />}
    </StyledIconButton>
  )
)

export const OutlineButtonStyles = css`
  ${ButtonStyles};
  border: ${({ theme }) => `solid ${theme.spacing[2]} ${theme.color.white}`};
`

export const OutlineButton = styled(Button)`
  ${OutlineButtonStyles};
`

export const FillButtonStyles = css`
  ${ButtonStyles};
  display: flex;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  border: ${({ theme }) => `solid ${theme.spacing[1]} ${theme.color.grey}`};

  &:hover {
    background-color: ${({ theme }) => lighten(0.025, theme.color.black)};
  }
`

export const FillButton = styled(Button)`
  ${FillButtonStyles};
`

export const CTAButtonStyles = css`
  --button-shadow-color: ${({ theme }) => theme.color.black};

  ${FillButtonStyles};
  perspective: 64rem;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  transition-duration: 0.25s;
  transition-property: box-shadow, transform;

  &:hover {
    will-change: box-shadow, transform;
    transform: translate(8px, -8px);
    background-color: var(--button-background-color);
    box-shadow: 0 0 0 var(--button-shadow-color),
      -1px 1px 0 var(--button-shadow-color),
      -2px 2px 0 var(--button-shadow-color),
      -3px 3px 0 var(--button-shadow-color),
      -4px 4px 0 var(--button-shadow-color),
      -5px 5px 0 var(--button-shadow-color),
      -6px 6px 0 var(--button-shadow-color),
      -7px 7px 0 var(--button-shadow-color),
      -8px 8px 0 var(--button-shadow-color);
  }
`

export const CTAButton = styled(FillButton)`
  ${CTAButtonStyles}
`
