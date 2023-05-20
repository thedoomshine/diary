
const EMAIL_REGEX_PATTERN = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[!@#$%^&*/\\])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/
const PHONE_NUMBER_PATTERN = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

export const Validations = {
  emailAddress: {
    required: { value: true, message: "Enter email address" },
    pattern: {
      value: EMAIL_REGEX_PATTERN,
      message: "Must be an email",
    },
  },
  phone: {
    required: { value: true, message: "Enter phone" },
    pattern: {
      value: PHONE_NUMBER_PATTERN,
      message: "Please enter a valid phone number",
    },
  },
  password: {
    required: { value: true, message: "Enter a password" },
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters long",
    },
    pattern: {
      value: PASSWORD_PATTERN,
      message: "Password must contain 1 special character and 1 capital letter",
    }
  },
}