export const generateTokens = (obj: {
  [key: string]: string | number | string[] | number[]
}) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: { value },
    }),
    {}
  )
