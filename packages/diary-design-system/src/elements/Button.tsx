import { globalStyle, style, styleVariants } from '@vanilla-extract/css'
import clsx from 'clsx'
import { lighten, rgba } from 'polished'
import type {
  FC,
  HTMLProps,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from 'react'
import { forwardRef } from 'react'

import { themeVars } from '~/foundation/theme.css'

import { Icon } from './Icon/Icon'

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
  children?: ReactNode | ReactNode[]
  onClick?: MouseEventHandler<HTMLButtonElement>
  role?: React.AriaRole
  type?: 'button' | 'submit' | 'reset'
  variant?: 'icon' | 'outline' | 'fill' | 'cta'
}

export const baseButtonStyles = {
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  flex: '0 0 auto',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 1rem',
  color: 'inherit',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: themeVars.radii.md,
  selectors: {
    ':hover:not(:disabled)': {
      backgroundColor: rgba(themeVars.color.white, 0.05),
    },
    ':focus-visible': {
      outline: `solid 0.0125rem ${themeVars.color.yellow}`,
    },
    ':disabled': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
}

export const buttonStyles = style({
  position: 'relative',
  cursor: 'pointer',
  display: 'flex',
  flex: '0 0 auto',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem 1rem',
  color: 'inherit',
  textAlign: 'center',
  textDecoration: 'none',
  borderRadius: themeVars.radii.md,
  selectors: {
    ':hover:not(:disabled)': {
      backgroundColor: rgba(themeVars.color.white, 0.05),
    },
    ':focus-visible': {
      outline: `solid 0.0125rem ${themeVars.color.yellow}`,
    },
    ':disabled': {
      pointerEvents: 'none',
      opacity: 0.5,
    },
  },
})

globalStyle(`${buttonStyles} > svg:hover`, {
  fill: themeVars.color.yellow,
})

export const buttonVariantStyles = styleVariants({
  icon: [
    buttonStyles,
    {
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0.5rem',
      gap: '0.25rem',
    },
  ],
  outline: [
    buttonStyles,
    {
      border: 'solid 0.125rem currentColor',
    },
  ],
  fill: [
    buttonStyles,
    {
      color: themeVars.color.white,
      backgroundColor: themeVars.color.black,
      ':hover': {
        backgroundColor: lighten(0.025, themeVars.color.black),
      },
    },
  ],
  cta: [
    buttonStyles,
    {
      color: themeVars.color.white,
      backgroundColor: themeVars.color.black,
      perspective: '64rem',
      fontWeight: themeVars.fontWeight.bold,
      transitionDuration: themeVars.duration[500],
      transitionProperty: 'box-shadow, transform',
      ':hover': {
        willChange: 'box-shadow, transform',
        transform: 'translate(8px, -8px)',
        boxShadow: themeVars.shadow.isometric,
        backgroundColor: lighten(0.025, themeVars.color.black),
      },
    },
  ],
})

export const Button = forwardRef<ButtonBaseElements, any>(
  (
    {
      href,
      disabled,
      children,
      onClick,
      role,
      type = 'button',
      variant,
      classNames,
      ...props
    },
    ref
  ) => (
    <button
      ref={ref as MutableRefObject<ButtonBaseElements>}
      as={href ? 'a' : 'button'}
      href={href}
      role={role ?? href ? 'link' : 'button'}
      type={type}
      disabled={disabled}
      classNames={clsx(buttonStyles[variant], classNames)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
)

export type IconButtonProps = ButtonBaseElementProps & {
  icon: string
  iconPosition?: 'start' | 'end'
}

export const IconButton: FC<IconButtonProps> = ({
  icon,
  iconPosition = 'start',
  children,
  className,
  ...props
}) => (
  <Button
    variant='icon'
    className={className}
    {...props}
  >
    {iconPosition === 'start' && <Icon name={icon} />}
    {children}
    {iconPosition === 'end' && <Icon name={icon} />}
  </Button>
)

export const OutlineButton: FC<ButtonBaseElementProps> = ({
  className,
  ...props
}) => (
  <Button
    variant='outline'
    className={className}
    {...props}
  />
)

export const FillButton: FC<ButtonBaseElementProps> = ({
  className,
  ...props
}) => (
  <Button
    variant='fill'
    classNames={className}
    {...props}
  />
)

export const CTAButton: FC<ButtonBaseElementProps> = ({
  className,
  ...props
}) => (
  <Button
    variant='cta'
    className={className}
    {...props}
  />
)
