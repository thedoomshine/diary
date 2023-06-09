import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { FC, ReactNode } from 'react'
import styled from 'styled-components'

import { ButtonStyles, Icon } from '~/elements'

const CheckboxRoot = styled(CheckboxPrimitive.Root)`
  ${ButtonStyles}
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;

  background-color: ${({ theme }) => theme.color.black};
  box-shadow: inset 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 50%);

  &:focus {
    box-shadow: 0 0 0 0.125rem ${({ theme }) => theme.color.yellow};
  }
`

const Label = styled.label`
  cursor: pointer;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  padding: 0.5rem;

  line-height: 1;
`

interface CheckboxProps {
  asChild?: boolean
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  children: ReactNode | ReactNode[]
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
  children,
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
    {children}
  </Label>
)