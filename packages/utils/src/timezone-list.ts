export type TimezoneEntry = {
  identifier: string
  name: string
  group: string
}

type GroupedTimezoneEntry = Omit<TimezoneEntry, 'group'>

type GroupedTimezonesObjectType = { [key: string]: GroupedTimezoneEntry[] }

type GroupedTimezonesType = [string, GroupedTimezoneEntry[]][]

export type TimezoneMap = Map<string, TimezoneEntry>

export const timezones: TimezoneMap = new Map([
  [
    'America/Los_Angeles',
    {
      identifier: 'America/Los_Angeles',
      name: 'Pacific Time - US & Canada',
      group: 'US/Canada',
    },
  ],
  [
    'America/Denver',
    {
      identifier: 'America/Denver',
      name: 'Mountain Time - US & Canada',
      group: 'US/Canada',
    },
  ],
  [
    'America/Chicago',
    {
      identifier: 'America/Chicago',
      name: 'Central Time - US & Canada',
      group: 'US/Canada',
    },
  ],
  [
    'America/New_York',
    {
      identifier: 'America/New_York',
      name: 'Eastern Time - US & Canada',
      group: 'US/Canada',
    },
  ],
  [
    'America/Anchorage',
    {
      identifier: 'America/Anchorage',
      name: 'Alaska Time',
      group: 'US/Canada',
    },
  ],
  [
    'America/Phoenix',
    {
      identifier: 'America/Phoenix',
      name: 'Arizona, Yukon Time',
      group: 'US/Canada',
    },
  ],
  [
    'America/St_Johns',
    {
      identifier: 'America/St_Johns',
      name: 'Newfoundland Time',
      group: 'US/Canada',
    },
  ],
  [
    'Pacific/Honolulu',
    {
      identifier: 'Pacific/Honolulu',
      name: 'Hawaii Time',
      group: 'US/Canada',
    },
  ],
  [
    'America/Adak',
    {
      identifier: 'America/Adak',
      name: 'America/Adak',
      group: 'America',
    },
  ],
  [
    'America/Argentina/Buenos_Aires',
    {
      identifier: 'America/Argentina/Buenos_Aires',
      name: 'Buenos Aires Time',
      group: 'America',
    },
  ],
  [
    'America/Asuncion',
    {
      identifier: 'America/Asuncion',
      name: 'Asuncion Time',
      group: 'America',
    },
  ],
  [
    'America/Bogota',
    {
      identifier: 'America/Bogota',
      name: 'Bogota, Jamaica, Lima Time',
      group: 'America',
    },
  ],
  [
    'America/Campo_Grande',
    {
      identifier: 'America/Campo_Grande',
      name: 'America/Campo Grande',
      group: 'America',
    },
  ],
  [
    'America/Caracas',
    {
      identifier: 'America/Caracas',
      name: 'Caracas Time',
      group: 'America',
    },
  ],
  [
    'America/Godthab',
    {
      identifier: 'America/Godthab',
      name: 'America/Godthab',
      group: 'America',
    },
  ],
  [
    'America/Goose_Bay',
    {
      identifier: 'America/Goose_Bay',
      name: 'Atlantic Time',
      group: 'America',
    },
  ],
  [
    'America/Guatemala',
    {
      identifier: 'America/Guatemala',
      name: 'Saskatchewan, Guatemala, Costa Rica Time',
      group: 'America',
    },
  ],
  [
    'America/Havana',
    {
      identifier: 'America/Havana',
      name: 'America/Havana',
      group: 'America',
    },
  ],
  [
    'America/Mazatlan',
    {
      identifier: 'America/Mazatlan',
      name: 'America/Mazatlan',
      group: 'America',
    },
  ],
  [
    'America/Mexico_City',
    {
      identifier: 'America/Mexico_City',
      name: 'Mexico City Time',
      group: 'America',
    },
  ],
  [
    'America/Montevideo',
    {
      identifier: 'America/Montevideo',
      name: 'Montevideo Time',
      group: 'America',
    },
  ],
  [
    'America/Miquelon',
    {
      identifier: 'America/Miquelon',
      name: 'America/Miquelon',
      group: 'America',
    },
  ],
  [
    'America/Noronha',
    {
      identifier: 'America/Noronha',
      name: 'America/Noronha',
      group: 'America',
    },
  ],
  [
    'America/Santiago',
    {
      identifier: 'America/Santiago',
      name: 'Santiago Time',
      group: 'America',
    },
  ],
  [
    'America/Santa_Isabel',
    {
      identifier: 'America/Santa_Isabel',
      name: 'America/Santa Isabel',
      group: 'America',
    },
  ],
  [
    'America/Santo_Domingo',
    {
      identifier: 'America/Santo_Domingo',
      name: 'Atlantic Standard Time',
      group: 'America',
    },
  ],
  [
    'America/Sao_Paulo',
    {
      identifier: 'America/Sao_Paulo',
      name: 'Brasilia Time',
      group: 'America',
    },
  ],
  [
    'Africa/Cairo',
    {
      identifier: 'Africa/Cairo',
      name: 'Africa/Cairo',
      group: 'Africa',
    },
  ],
  [
    'Africa/Johannesburg',
    {
      identifier: 'Africa/Johannesburg',
      name: 'Central Africa Time',
      group: 'Africa',
    },
  ],
  [
    'Africa/Lagos',
    {
      identifier: 'Africa/Lagos',
      name: 'West Africa Time',
      group: 'Africa',
    },
  ],
  [
    'Africa/Windhoek',
    {
      identifier: 'Africa/Windhoek',
      name: 'Africa/Windhoek',
      group: 'Africa',
    },
  ],
  [
    'Asia/Amman',
    {
      identifier: 'Asia/Amman',
      name: 'Jordan Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Baghdad',
    {
      identifier: 'Asia/Baghdad',
      name: 'Baghdad, East Africa Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Baku',
    {
      identifier: 'Asia/Baku',
      name: 'Asia/Baku',
      group: 'Asia',
    },
  ],
  [
    'Asia/Beirut',
    {
      identifier: 'Asia/Beirut',
      name: 'Lebanon Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Damascus',
    {
      identifier: 'Asia/Damascus',
      name: 'Syria Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Dhaka',
    {
      identifier: 'Asia/Dhaka',
      name: 'Asia/Dhaka',
      group: 'Asia',
    },
  ],
  [
    'Asia/Dubai',
    {
      identifier: 'Asia/Dubai',
      name: 'Dubai Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Gaza',
    {
      identifier: 'Asia/Gaza',
      name: 'Asia/Gaza',
      group: 'Asia',
    },
  ],
  [
    'Asia/Irkutsk',
    {
      identifier: 'Asia/Irkutsk',
      name: 'Asia/Irkutsk',
      group: 'Asia',
    },
  ],
  [
    'Asia/Jakarta',
    {
      identifier: 'Asia/Jakarta',
      name: 'Indochina Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Jerusalem',
    {
      identifier: 'Asia/Jerusalem',
      name: 'Israel Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Kabul',
    {
      identifier: 'Asia/Kabul',
      name: 'Kabul Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Kamchatka',
    {
      identifier: 'Asia/Kamchatka',
      name: 'Pacific/Majuro',
      group: 'Asia',
    },
  ],
  [
    'Asia/Karachi',
    {
      identifier: 'Asia/Karachi',
      name: 'Pakistan, Maldives Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Kathmandu',
    {
      identifier: 'Asia/Kathmandu',
      name: 'Kathmandu Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Kolkata',
    {
      identifier: 'Asia/Kolkata',
      name: 'India, Sri Lanka Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Krasnoyarsk',
    {
      identifier: 'Asia/Krasnoyarsk',
      name: 'Krasnoyarsk Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Omsk',
    {
      identifier: 'Asia/Omsk',
      name: 'Asia/Omsk',
      group: 'Asia',
    },
  ],
  [
    'Asia/Rangoon',
    {
      identifier: 'Asia/Rangoon',
      name: 'Asia/Rangoon',
      group: 'Asia',
    },
  ],
  [
    'Asia/Shanghai',
    {
      identifier: 'Asia/Shanghai',
      name: 'China, Singapore, Perth',
      group: 'Asia',
    },
  ],
  [
    'Asia/Tehran',
    {
      identifier: 'Asia/Tehran',
      name: 'Tehran Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Tokyo',
    {
      identifier: 'Asia/Tokyo',
      name: 'Japan, Korea Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Vladivostok',
    {
      identifier: 'Asia/Vladivostok',
      name: 'Asia/Vladivostok',
      group: 'Asia',
    },
  ],
  [
    'Asia/Yakutsk',
    {
      identifier: 'Asia/Yakutsk',
      name: 'Asia/Yakutsk',
      group: 'Asia',
    },
  ],
  [
    'Asia/Yekaterinburg',
    {
      identifier: 'Asia/Yekaterinburg',
      name: 'Yekaterinburg Time',
      group: 'Asia',
    },
  ],
  [
    'Asia/Yerevan',
    {
      identifier: 'Asia/Yerevan',
      name: 'Asia/Yerevan',
      group: 'Asia',
    },
  ],
  [
    'Atlantic/Azores',
    {
      identifier: 'Atlantic/Azores',
      name: 'Azores Time',
      group: 'Atlantic',
    },
  ],
  [
    'Atlantic/Cape_Verde',
    {
      identifier: 'Atlantic/Cape_Verde',
      name: 'Cape Verde Time',
      group: 'Atlantic',
    },
  ],
  [
    'Australia/Adelaide',
    {
      identifier: 'Australia/Adelaide',
      name: 'Adelaide Time',
      group: 'Australia',
    },
  ],
  [
    'Australia/Brisbane',
    {
      identifier: 'Australia/Brisbane',
      name: 'Brisbane Time',
      group: 'Australia',
    },
  ],
  [
    'Australia/Darwin',
    {
      identifier: 'Australia/Darwin',
      name: 'Australia/Darwin',
      group: 'Australia',
    },
  ],
  [
    'Australia/Eucla',
    {
      identifier: 'Australia/Eucla',
      name: 'Australia/Eucla',
      group: 'Australia',
    },
  ],
  [
    'Australia/Lord_Howe',
    {
      identifier: 'Australia/Lord_Howe',
      name: 'Australia/Lord Howe',
      group: 'Australia',
    },
  ],
  [
    'Australia/Perth',
    {
      identifier: 'Australia/Perth',
      name: 'Australia/Perth',
      group: 'Australia',
    },
  ],
  [
    'Australia/Sydney',
    {
      identifier: 'Australia/Sydney',
      name: 'Sydney, Melbourne Time',
      group: 'Australia',
    },
  ],
  [
    'UTC',
    {
      identifier: 'UTC',
      name: 'UTC Time',
      group: 'UTC',
    },
  ],
  [
    'Europe/Berlin',
    {
      identifier: 'Europe/Berlin',
      name: 'Central European Time',
      group: 'Europe',
    },
  ],
  [
    'Europe/Helsinki',
    {
      identifier: 'Europe/Helsinki',
      name: 'Eastern European Time',
      group: 'Europe',
    },
  ],
  [
    'Europe/London',
    {
      identifier: 'Europe/London',
      name: 'UK, Ireland, Lisbon Time',
      group: 'Europe',
    },
  ],
  [
    'Europe/Minsk',
    {
      identifier: 'Europe/Minsk',
      name: 'Minsk Time',
      group: 'Europe',
    },
  ],
  [
    'Europe/Moscow',
    {
      identifier: 'Europe/Moscow',
      name: 'Moscow Time',
      group: 'Europe',
    },
  ],
  [
    'Europe/Istanbul',
    {
      identifier: 'Europe/Istanbul',
      name: 'Turkey Time',
      group: 'Europe',
    },
  ],
  [
    'Pacific/Apia',
    {
      identifier: 'Pacific/Apia',
      name: 'Pacific/Apia',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Auckland',
    {
      identifier: 'Pacific/Auckland',
      name: 'Auckland Time',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Chatham',
    {
      identifier: 'Pacific/Chatham',
      name: 'Pacific/Chatham',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Easter',
    {
      identifier: 'Pacific/Easter',
      name: 'Pacific/Easter',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Fiji',
    {
      identifier: 'Pacific/Fiji',
      name: 'Pacific/Fiji',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Gambier',
    {
      identifier: 'Pacific/Gambier',
      name: 'Pacific/Gambier',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Kiritimati',
    {
      identifier: 'Pacific/Kiritimati',
      name: 'Pacific/Kiritimati',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Majuro',
    {
      identifier: 'Pacific/Majuro',
      name: 'Pacific/Majuro',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Marquesas',
    {
      identifier: 'Pacific/Marquesas',
      name: 'Pacific/Marquesas',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Norfolk',
    {
      identifier: 'Pacific/Norfolk',
      name: 'Pacific/Norfolk',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Noumea',
    {
      identifier: 'Pacific/Noumea',
      name: 'Pacific/Noumea',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Pago_Pago',
    {
      identifier: 'Pacific/Pago_Pago',
      name: 'Pacific/Pago Pago',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Pitcairn',
    {
      identifier: 'Pacific/Pitcairn',
      name: 'Pacific/Pitcairn',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Tarawa',
    {
      identifier: 'Pacific/Tarawa',
      name: 'Pacific/Tarawa',
      group: 'Pacific',
    },
  ],
  [
    'Pacific/Tongatapu',
    {
      identifier: 'Pacific/Tongatapu',
      name: 'Pacific/Tongatapu',
      group: 'Pacific',
    },
  ],
])

export const groupedTimezones: GroupedTimezonesType = Object.entries([...timezones.entries()].reduce((groups,
  [_,
    { identifier, name, group },
  ]: [string, TimezoneEntry]) => {
  if (!(group in groups)) {
    groups[group] = []
  }

  groups[group].push({
    identifier,
    name,
  })
  return groups
}, {} as GroupedTimezonesObjectType))
