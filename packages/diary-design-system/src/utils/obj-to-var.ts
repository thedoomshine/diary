export const objToVar = (theme: Record<any, any>) => {
  return Object.entries(theme).reduce((acc, [prefix, value]) => {
    return `${acc}\n ${Object.entries(value).reduce(
      (section, [key, variable]) => `${section}\n  --${prefix}-${key}: ${variable};`,
      ``
    )}`
  }, ``)
}
