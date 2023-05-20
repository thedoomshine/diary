import { Form } from '@remix-run/react'

import styled from 'styled-components'
import { Button } from '@bash/design-system'

const StyledForm = styled(Form)`
  background-color: ${({ theme }) => theme.color.charcoal};
  color: ${({ theme }) => theme.color.white};
  border-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.5rem 0 rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-top: 1rem;
  width: 100%;
`

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  gap: 20;
  margin-bottom: 1rem;
`

const Label = styled.label`
  font-size: 1rem;
`

const Input = styled.input`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-top: 0.25rem;
  line-height: 1;
`

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight['800']};
  background-color: ${({ theme }) => theme.color.yellow};
  width: 100%;
`

export default function SignUp() {
  return (
    <StyledForm>
      <Fieldset>
        <Label>username or email address</Label>
        <Input type='text' name='email' />
      </Fieldset>

      <Fieldset>
        <Label>password</Label>
        <Input type='password' name='password' />
      </Fieldset>

      <Fieldset>
        <Label>confirm password</Label>
        <Input type='password' name='confirm-password' />
      </Fieldset>

      <StyledButton>create account</StyledButton>
    </StyledForm>
  )
}
