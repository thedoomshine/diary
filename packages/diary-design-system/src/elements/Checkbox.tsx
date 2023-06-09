import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { FC, ReactNode } from 'react';
import styled from 'styled-components';



import { ButtonStyles, Icon } from '~/elements';


const CheckboxRoot = styled(CheckboxPrimitive.Root)`
  ${ButtonStyles}
  display: flex;
  align-items: center;
  justify-content: center;

  width: 1.5rem;
  height: 1.5rem;

  background-color: ${({ theme }) => theme.color.black};

  &:focus:visible {
    box-shadow: 0 0 0 0.0125rem ${({ theme }) => theme.color.yellow};
  }

  &:checked,
  &[data-state='checked'] {
    svg {
      fill: ${({ theme }) => theme.color.yellow};
    }
  }
`

const Label = styled.label`
  cursor: pointer;

  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

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