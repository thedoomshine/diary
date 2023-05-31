export const fluidType = (
  minVW: string,
  maxVW: string,
  minFontSize: string,
  maxFontSize: string
): string => `clamp(
      ${minFontSize},
      calc(
        ${minFontSize} + ${parseFloat(maxFontSize) - parseFloat(minFontSize)} *
          ((100vw - ${minVW}) / ${parseFloat(maxVW) - parseFloat(minVW)})
      ),
      ${maxFontSize}
    )`
