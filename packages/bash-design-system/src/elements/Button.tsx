import { forwardRef, HTMLProps, MutableRefObject } from 'react'
import { rgba } from 'polished'
import styled, { css } from 'styled-components'

import { ButtonSelectors } from '../utils'

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
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 0.125rem;
  border-style: solid;
  border-color: transparent;
  padding: 0.5rem;
  text-align: center;
  color: inherit;
  cursor: pointer;
  text-decoration: none;
  ${ButtonSelectors.HOVER} {
    background-color: ${({ theme }) => rgba(theme.color.white, 0.05)};
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
  border-color: currentColor;
`

export const OutlineButton = styled(Button)`
  ${OutlineButtonStyles};
  padding: 0.5rem 0.75rem;
`

export const FillButtonStyles = css`
  ${ButtonStyles};
  display: flex;
  perspective: 64rem;
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.yellow};
  font-weight: ${({ theme }) => theme.fontWeight['800']};
  transition-property: box-shadow, transform;
  transition-duration: 0.25s;
  will-change: box-shadow, transform;

  ${ButtonSelectors.HOVER} {
    background-color: ${({ theme }) => theme.color.yellow};
    box-shadow: 0px 0px 0 ${({ theme }) => theme.color.black},
      -1px 1px 0 ${({ theme }) => theme.color.black},
      -2px 2px 0 ${({ theme }) => theme.color.black},
      -3px 3px 0 ${({ theme }) => theme.color.black},
      -4px 4px 0 ${({ theme }) => theme.color.black},
      -5px 5px 0 ${({ theme }) => theme.color.black},
      -6px 6px 0 ${({ theme }) => theme.color.black},
      -7px 7px 0 ${({ theme }) => theme.color.black},
      -8px 8px 0 ${({ theme }) => theme.color.black};
    transform: translate(8px, -8px);
  }
`

export const FillButton = styled(Button)`
  ${FillButtonStyles};
`
