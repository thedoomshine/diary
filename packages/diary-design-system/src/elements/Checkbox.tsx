import { css, cx } from '@diaryco/style-engine/css'
import type { CheckboxProps as CheckboxPrimitiveProps } from '@radix-ui/react-checkbox'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { globalStyle, style } from '@vanilla-extract/css'
import type { FC, ReactNode } from 'react'

import { buttonStyles } from './Button'
import { Icon } from './Icon/Icon'
import { themeVars } from '~/foundation/theme.css'

const checkboxRootStyles = style([
  buttonStyles,
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    width: '1.5rem',
    height: '1.5rem',
    backgroundColor: themeVars.color.black,
    border: `solid 1px ${themeVars.color.grey}`,
    selectors: {
      ':focus-visible': {
        boxShadow: themeVars.shadow.glow,
      },
    },
  },
])

const iconStyles = style({
  selectors: {
    [`${checkboxRootStyles}:checked > &, ${checkboxRootStyles}[data-state="checked"]`]: {
      fill: themeVars.color.yellow,
    }
  }
})

globalStyle(`${checkboxRootStyles} > svg`, {
  fill: themeVars.color.yellow
})

const labelStyles = css({
  cursor: 'pointer',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: themeVars.lineHeight.element,
})

interface CheckboxProps extends CheckboxPrimitiveProps {
  asChild?: boolean
  checked?: boolean
  children: ReactNode | ReactNode[]
  defaultChecked?: boolean
  disabled?: boolean
  name?: string
  onCheckedChange?: (checked: boolean) => void
  required?: boolean
  value?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  checked = false,
  children,
  className,
  defaultChecked = false,
  disabled = false,
  name,
  onCheckedChange,
  required = false,
  ...props
}) => (
  <label className={cx(labelStyles, className)}>
    <CheckboxPrimitive.Root
      className={checkboxRootStyles}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onCheckedChange={onCheckedChange}
      required={required}
      name={name}
      checked={checked}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Icon className={iconStyles} name='check' />
      </CheckboxPrimitive.Indicator>
      {children}
    </CheckboxPrimitive.Root>
  </label>
)
