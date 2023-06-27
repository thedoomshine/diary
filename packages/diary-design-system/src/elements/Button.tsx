import { lighten, rgba } from 'polished'
import type {
  FC,
  HTMLProps,
  MouseEventHandler,
  MutableRefObject,
  ReactNode,
} from 'react'
import { forwardRef } from 'react'

import { cva, cx } from 'style-engine/css'
import { token } from 'style-engine/tokens'
import { SystemStyleObject } from 'style-engine/types'

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
  borderRadius: 'md',
  _hover: {
    '& > svg': {
      fill: token('colors.yellow'),
    },
    backgroundColor: rgba(token('colors.white'), 0.05),
  },
  '&:focus-visible': {
    outline: `solid 0.0125rem ${token('colors.yellow')}`,
  },
  '&:disabled': {
    pointerEvents: 'none',
    opacity: 0.5,
    _hover: {
      backgroundColor: 'unset',
    },
  },
} as SystemStyleObject

export const buttonStyles = cva({
  base: baseButtonStyles,
  variants: {
    type: {
      icon: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0.5rem',
        gap: '0.25rem',
      },
      outline: {
        border: 'solid 0.125rem currentColor',
      },
      fill: {
        color: 'white',
        backgroundColor: 'black',
        _hover: {
          backgroundColor: lighten(0.025, token('colors.black')),
        },
      },
      cta: {
        color: 'white',
        backgroundColor: 'black',
        perspective: '64rem',
        fontWeight: '700',
        transitionDuration: '0.25s',
        transitionProperty: 'box-shadow, transform',
        _hover: {
          willChange: 'box-shadow, transform',
          transform: 'translate(8px, -8px)',
          boxShadow: 'isometric',
          backgroundColor: lighten(0.025, token('colors.black')),
        },
      }
    }
  }
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
      classNames={cx(buttonStyles({ type: variant }), classNames)}
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
  <Button variant='icon' className={className} {...props}>
    {iconPosition === 'start' && <Icon name={icon} />}
    {children}
    {iconPosition === 'end' && <Icon name={icon} />}
  </Button>
)

export const OutlineButton: FC<ButtonBaseElementProps> = ({ className, ...props }) => (
  <Button variant='outline' className={className} {...props} />
)

export const FillButton: FC<ButtonBaseElementProps> = ({ className, ...props }) => (
  <Button variant='fill' classNames={className} {...props} />
)

export const CTAButton: FC<ButtonBaseElementProps> = ({ className, ...props }) => (
  <Button variant='cta' className={className} {...props} />
)
