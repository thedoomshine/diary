import { lighten, rgba } from 'polished'
import { forwardRef } from 'react'
import type {
  HTMLProps,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from 'react'
import styled, { css } from 'styled-components'

export type ButtonBaseElements = HTMLAnchorElement | HTMLButtonElement
export type ButtonBaseRef =
  | ((instance: ButtonBaseElements | null) => void)
  | MutableRefObject<ButtonBaseElements | null>
  | null

export type ButtonBaseElementProps = HTMLProps<
  HTMLAnchorElement | HTMLButtonElement
> & {
  as?: never
  ref?: ButtonBaseRef
  classNames?: string
  href?: string
  disabled?: boolean
  children: ReactNode | ReactNode[]
  onClick?: MouseEventHandler<HTMLButtonElement>
  role?: React.AriaRole
  type?: 'button' | 'submit' | 'reset'
}

export const ButtonStyles = css`
  --button-background-color: transparent;
  --button-background-color-hover: ${({ theme }) =>
    rgba(theme.color.white, 0.05)};

  cursor: pointer;

  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  color: inherit;
  text-align: center;
  text-decoration: none;

  border-radius: 0.5rem;

  &:hover {
    background-color: var(--button-background-color-hover);
    svg {
      fill: ${({ theme }) => theme.color.yellow};
    }
  }

  &:focus-visible {
    outline: solid 0.0125rem ${({ theme }) => theme.color.yellow};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    &:hover {
      background-color: unset;
    }
  }
`
export const StyledButton = styled.button`
  ${ButtonStyles};
`

export const Button = forwardRef<ButtonBaseElements, any>(
  (
    {
      href,
      disabled,
      children,
      onClick,
      role,
      type = 'button',
      classNames,
      ...props
    },
    ref
  ) => (
    <StyledButton
      ref={ref as MutableRefObject<ButtonBaseElements>}
      as={href ? 'a' : 'button'}
      href={href}
      role={role ?? href ? 'link' : 'button'}
      type={type}
      disabled={disabled}
      classNames={classNames}
      onClick={onClick}
      {...props}
    >
      {children}
    </StyledButton>
  )
)

export const OutlineButtonStyles = css`
  ${ButtonStyles};
  border: solid 0.125rem currentColor;
`

export const OutlineButton = styled(Button)`
  ${OutlineButtonStyles};
  padding: 0.5rem 0.75rem;
`

export const FillButtonStyles = css`
  ${ButtonStyles};
  --button-background-color: ${({ theme }) => theme.color.black};
  --button-background-color-hover: ${({ theme }) =>
    lighten(0.025, theme.color.black)};
  --button-text-color: ${({ theme }) => theme.color.white};

  display: flex;

  color: var(--button-text-color);
  background-color: var(--button-background-color);
`

export const FillButton = styled(Button)`
  ${FillButtonStyles};
`

export const CTAButtonStyles = css`
  --button-shadow-color: ${({ theme }) => theme.color.black};
  perspective: 64rem;
  font-weight: ${({ theme }) => theme.fontWeight['800']};

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
