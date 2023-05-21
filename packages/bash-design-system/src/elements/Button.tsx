import {
  forwardRef,
  HTMLProps,
  MutableRefObject,
} from 'react'
import { rgba } from 'polished'
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

export enum ButtonSelectors {
  HOVER = '&:hover',
  ACTIVE = '&:active',
  FOCUS = '&:focus',
  DISABLED = "[disabled], &:disabled, &[aria-disabled='true']",
  FOCUS_VISIBLE = ' &:focus-visible',
  OUTLINE = '&::before',
  OUTLINE_FOCUS_VISIBLE = '&:focus-visible::before',
  SHADOW = '&::after',
  SHADOW_HOVER = '&:hover::after',
  SHADOW_ACTIVE = '&:active::after',
  SHADOW_DISABLED = "[disabled]::after, &:disabled::after, &[aria-disabled='true']::after",
}

export enum Selectors {
  AFTER = '&::after',
  BEFORE = '&::before',
  HOVER = '&:hover',
  FOCUS = '&:focus',
  ACTIVE = '&[active], &:active, &.active',
  DISABLED = '&[disabled], &:disabled, &.disabled',
  FOCUS_VISIBLE = '&:focus-visible',
  VISITED = '&:visited',
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
    { href, disabled, children, role, type = 'button', classNames, ...rest },
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
`

export const FillButtonStyles = css`
  ${ButtonStyles};
  display: flex;
  perspective: 64rem;
  border-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.yellow};
  font-weight: ${({ theme }) => theme.fontWeight['800']};
  transition-property: box-shadow, transform;
  transition-duration: 0.25s;
  will-change: box-shadow, transform;

  ${Selectors.HOVER} {
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
