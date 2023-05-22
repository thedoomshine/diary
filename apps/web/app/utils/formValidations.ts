const EMAIL_REGEX_PATTERN =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
const PASSWORD_PATTERN =
  /^(?=.*\d)(?=.*[!@#$%^&*/\\])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/
const PHONE_NUMBER_PATTERN =
  /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

export const Validations = {
  email: {
    required: { value: true, message: 'Enter email address' },
    pattern: {
      value: EMAIL_REGEX_PATTERN,
      message: 'Must be an email',
    },
  },
  phone: {
    required: { value: true, message: 'Enter phone' },
    pattern: {
      value: PHONE_NUMBER_PATTERN,
      message: 'Please enter a valid phone number',
    },
  },
  password: {
    required: { value: true, message: 'Enter a password' },
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters long',
    },
    pattern: {
      value: PASSWORD_PATTERN,
      message: 'Password must contain 1 special character and 1 capital letter',
    },
  },
}
