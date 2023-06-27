import type { CheckboxProps as CheckboxPrimitiveProps } from '@radix-ui/react-checkbox'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import type { FC, ReactNode } from 'react'

import { buttonStyles } from './Button'
import { Icon } from './Icon/Icon'

import { css, cx } from 'style-engine/css'

const checkboxRootStyles = cx(buttonStyles(), css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.5rem',
  width: '1.5rem',
  height: '1.5rem',
  backgroundColor: 'black',
  border: 'solid 1px {colors.grey}',
  '&:focus-visible': {
    boxShadow: '0 0 0 0.0125rem {colors.yellow}',
  },
  '&:checked, &[data-state="checked"]': {
    '& > svg': {
      fill: 'yellow',
    },
  },
}))

const labelStyles = css({
  cursor: 'pointer',
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  justifyContent: 'center',
  lineHeight: 'title',
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
        <Icon name='check' />
      </CheckboxPrimitive.Indicator>
      {children}
    </CheckboxPrimitive.Root>
  </label>
)
