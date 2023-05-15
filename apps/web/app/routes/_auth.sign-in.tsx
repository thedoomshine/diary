import { Form } from '@remix-run/react'

import styled from 'styled-components'

import { Button } from '@bash/design-system'

const StyledForm = styled(Form)`
  background-color: ${({theme}) => theme.color.grey};
  color: ${({theme}) => theme.color.white};
  border: solid 0.0125rem currentColor;
  border-radius: 0.5rem;
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
  background-color: ${({theme}) => theme.color.black};
  color: ${({theme}) => theme.color.white};
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: solid 0.0125rem currentColor;
  border-radius: 0.25rem;
  padding: 0.5rem;
  font-size: ${({theme}) => theme.fontSize['1']};
  margin-top: 0.25rem;
  line-height: 1;
`

const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.purple};
  width: 100%;
`

export default function SignIn() {
  return (
    <StyledForm>
      <Fieldset>
        <Label>username or email address</Label>
        <Input type="text" name="email" />
      </Fieldset>

      <Fieldset>
        <Label>password</Label>
        <Input type="password" name="password" />
      </Fieldset>

      <StyledButton>sign in</StyledButton>
    </StyledForm>
  )
}
