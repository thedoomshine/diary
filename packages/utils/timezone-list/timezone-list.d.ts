export interface TimezoneEntry {
  /** a readable label that contains the offset and a longer, descriptive name of the timezone */
  label: string
  /** the value from the tz standard */
  tzCode: string
}

declare const timezones: TimezoneEntry[]
export default timezones
