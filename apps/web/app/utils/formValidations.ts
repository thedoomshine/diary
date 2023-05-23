/* eslint-disable no-empty-character-class */
const EMAIL_REGEX_PATTERN =
  /([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])/

const PASSWORD_PATTERN =
  /^(?=.*\d)(?=.*[!@#$%^&*/\\])(?=.*[a-z])(?=.*[A-Z]).{8,128}$/

const PHONE_NUMBER_PATTERN =
  /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

export const ErrorMessages = {
  email: {
    required: 'please enter an email address',
    pattern: 'please enter a valid email address',
  },
  phone: {
    required: 'please enter a phone number',
    pattern: 'please enter a valid phone number',
  },
  password: {
    maxLength: 'password must be less than 128 characters long',
    minLength: 'password must be at least 8 characters long',
    required: 'please enter a password',
    pattern: 'password must contain 1 special character and 1 capital letter',
  },
}

export const Validations = {
  email: {
    required: { value: true, message: ErrorMessages.email.required },
    pattern: {
      value: EMAIL_REGEX_PATTERN,
      message: ErrorMessages.email.pattern,
    },
  },
  phone: {
    required: { value: true, message: ErrorMessages.phone.required },
    pattern: {
      value: PHONE_NUMBER_PATTERN,
      message: ErrorMessages.phone.pattern,
    },
  },
  password: {
    required: { value: true, message: ErrorMessages.password.required },
    minLength: {
      value: 8,
      message: ErrorMessages.password.minLength,
    },
    maxLength: {
      value: 128,
      message: ErrorMessages.password.maxLength,
    },
    pattern: {
      value: PASSWORD_PATTERN,
      message: ErrorMessages.password.pattern,
    },
  },
}

type ValidationKey = keyof typeof Validations

interface ValidationField {
  required?: {
    value: boolean
    message: string
  }
  pattern?: {
    value: RegExp
    message: string
  }
  minLength?: {
    value: number
    message: string
  }
}

export const validateField = (fieldName: ValidationKey, value: string) => {
  const validation: ValidationField = Validations[fieldName]

  if ('required' in validation && !value) {
    return validation.required!.message
  }

  if ('minLength' in validation && value.length < validation.minLength!.value) {
    return validation.minLength!.message
  }

  if ('pattern' in validation && !value.match(validation.pattern!.value)) {
    return validation.pattern!.message
  }

  return undefined
}
