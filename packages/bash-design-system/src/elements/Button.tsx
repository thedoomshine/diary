import { forwardRef, HTMLProps, MutableRefObject } from 'react'
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
  border-radius: 0.5rem;
  border-width: 0.0125rem;
  border-style: solid;
  border-color: transparent;
  color: inherit;
  cursor: pointer;
  ${ButtonSelectors.HOVER} {
    color: ${({ theme }) => theme.color.yellow};
    background-color: ${({ theme }) => rgba(theme.color.white, 0.05)};
  }
`

export const OutlineButtonStyles = css`
  ${ButtonStyles}
  border-color: ${({ theme }) => theme.color.white};
`

export const StyledButton = styled.button`
  ${ButtonStyles}
`

export const ButtonBase = forwardRef<ButtonBaseElements, any>(
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

export const OutlineButton: React.FC<ButtonBaseElementProps> = ({
  children,
  ...props
}) => <ButtonBase {...props}>{children}</ButtonBase>

export const Button: React.FC<ButtonBaseElementProps> = ({
  children,
  ...props
}) => <ButtonBase {...props}>{children}</ButtonBase>
