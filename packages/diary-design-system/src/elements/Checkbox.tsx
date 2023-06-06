import type { FC } from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import styled from 'styled-components'

import { Icon } from './Icon'
import { ButtonStyles } from './Button'

const CheckboxRoot = styled(CheckboxPrimitive.Root)`
  ${ButtonStyles}
  background-color: ${({ theme }) => theme.color.black};
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: inset 0 0.125rem 0.5rem rgba(0, 0, 0, 0.5);

  &:focus {
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.color.yellow};
  }
`

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  line-height: 1;
  cursor: pointer;
`

interface CheckboxProps {
  asChild?: boolean
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  label: string
  name?: string
  onCheckedChange?: (checked: boolean | 'indeterminate') => void
  required?: boolean
  value?: string
}

export const Checkbox: FC<CheckboxProps> = ({
  defaultChecked = false,
  disabled = false,
  required = false,
  name,
  label,
  ...props
}) => (
  <Label>
    <CheckboxRoot
      defaultChecked={defaultChecked}
      disabled={disabled}
      required={required}
      name={name}
      {...props}
    >
      <CheckboxPrimitive.Indicator>
        <Icon name='check' />
      </CheckboxPrimitive.Indicator>
    </CheckboxRoot>
    {label}
  </Label>
)
