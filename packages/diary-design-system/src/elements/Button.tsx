import { rgba } from 'polished'
import { HTMLProps, MutableRefObject, forwardRef } from 'react'
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
}

export const ButtonStyles = css`
  cursor: pointer;

  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  color: inherit;
  text-align: center;
  text-decoration: none;

  border-color: transparent;
  border-style: solid;
  border-width: 0.125rem;
  border-radius: 0.5rem;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.color.white, 0.05)};
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
      ...rest
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
      {...rest}
    >
      {children}
    </StyledButton>
  )
)

export const OutlineButtonStyles = css`
  ${ButtonStyles};
  border-color: currentcolor;
`

export const OutlineButton = styled(Button)`
  ${OutlineButtonStyles};
  padding: 0.5rem 0.75rem;
`

export const FillButtonStyles = css`
  ${ButtonStyles};
  will-change: box-shadow, transform;

  display: flex;

  font-weight: ${({ theme }) => theme.fontWeight['800']};
  color: ${({ theme }) => theme.color.black};

  perspective: 64rem;
  background-color: ${({ theme }) => theme.color.yellow};

  transition-duration: 0.25s;
  transition-property: box-shadow, transform;

  &:hover {
    transform: translate(8px, -8px);
    background-color: ${({ theme }) => theme.color.yellow};
    box-shadow: 0 0 0 ${({ theme }) => theme.color.black},
      -1px 1px 0 ${({ theme }) => theme.color.black},
      -2px 2px 0 ${({ theme }) => theme.color.black},
      -3px 3px 0 ${({ theme }) => theme.color.black},
      -4px 4px 0 ${({ theme }) => theme.color.black},
      -5px 5px 0 ${({ theme }) => theme.color.black},
      -6px 6px 0 ${({ theme }) => theme.color.black},
      -7px 7px 0 ${({ theme }) => theme.color.black},
      -8px 8px 0 ${({ theme }) => theme.color.black};
  }
`

export const FillButton = styled(Button)`
  ${FillButtonStyles};
`
