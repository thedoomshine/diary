import styled from 'styled-components'

const Fieldset = styled.fieldset`
  all: 'unset';
  display: 'flex';
  gap: 20;
  align-items: 'center';
  margin-bottom: 15;
`

const Label = styled.label`
  font-size: 15;
  width: 90;
  text-align: 'right';
`

const Input = styled.input`
  width: '100%';
  flex: '1';
  display: 'inline-flex';
  align-items: 'center';
  justify-content: 'center';
  border-radius: 4;
  padding: '0 10px';
  font-size: 15;
  line-height: 1;
  height: 35;
`

export default function Login() {
  return (
    <>
      <h1>Login</h1>
    </>
  )
}
