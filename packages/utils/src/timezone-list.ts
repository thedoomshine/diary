export interface TimezoneEntry {
  identifier: string
  name: string
  group: string
}

export type TimezoneMap = Map<string, string>

export const timezones: TimezoneMap = new Map([
  ['America/Los_Angeles', 'Pacific Time - US & Canada'],
  ['America/Denver', 'Mountain Time - US & Canada'],
  ['America/Chicago', 'Central Time - US & Canada'],
  ['America/New_York', 'Eastern Time - US & Canada'],
  ['America/Anchorage', 'Alaska Time'],
  ['America/Phoenix', 'Arizona, Yukon Time'],
  ['America/St_Johns', 'Newfoundland Time'],
  ['Pacific/Honolulu', 'Hawaii Time'],
  ['America/Adak', 'America/Adak'],
  ['America/Argentina/Buenos_Aires', 'Buenos Aires Time'],
  ['America/Asuncion', 'Asuncion Time'],
  ['America/Bogota', 'Bogota, Jamaica, Lima Time'],
  ['America/Campo_Grande', 'America/Campo Grande'],
  ['America/Caracas', 'Caracas Time'],
  ['America/Godthab', 'America/Godthab'],
  ['America/Goose_Bay', 'Atlantic Time'],
  ['America/Guatemala', 'Saskatchewan, Guatemala, Costa Rica Time'],
  ['America/Havana', 'America/Havana'],
  ['America/Mazatlan', 'America/Mazatlan'],
  ['America/Mexico_City', 'Mexico City Time'],
  ['America/Montevideo', 'Montevideo Time'],
  ['America/Miquelon', 'America/Miquelon'],
  ['America/Noronha', 'America/Noronha'],
  ['America/Santiago', 'Santiago Time'],
  ['America/Santa_Isabel', 'America/Santa Isabel'],
  ['America/Santo_Domingo', 'Atlantic Standard Time'],
  ['America/Sao_Paulo', 'Brasilia Time'],
  ['Africa/Cairo', 'Africa/Cairo'],
  ['Africa/Johannesburg', 'Central Africa Time'],
  ['Africa/Lagos', 'West Africa Time'],
  ['Africa/Windhoek', 'Africa/Windhoek'],
  ['Asia/Amman', 'Jordan Time'],
  ['Asia/Baghdad', 'Baghdad, East Africa Time'],
  ['Asia/Baku', 'Asia/Baku'],
  ['Asia/Beirut', 'Lebanon Time'],
  ['Asia/Damascus', 'Syria Time'],
  ['Asia/Dhaka', 'Asia/Dhaka'],
  ['Asia/Dubai', 'Dubai Time'],
  ['Asia/Gaza', 'Asia/Gaza'],
  ['Asia/Irkutsk', 'Asia/Irkutsk'],
  ['Asia/Jakarta', 'Indochina Time'],
  ['Asia/Jerusalem', 'Israel Time'],
  ['Asia/Kabul', 'Kabul Time'],
  ['Asia/Kamchatka', 'Pacific/Majuro'],
  ['Asia/Karachi', 'Pakistan, Maldives Time'],
  ['Asia/Kathmandu', 'Kathmandu Time'],
  ['Asia/Kolkata', 'India, Sri Lanka Time'],
  ['Asia/Krasnoyarsk', 'Krasnoyarsk Time'],
  ['Asia/Omsk', 'Asia/Omsk'],
  ['Asia/Rangoon', 'Asia/Rangoon'],
  ['Asia/Shanghai', 'China, Singapore, Perth'],
  ['Asia/Tehran', 'Tehran Time'],
  ['Asia/Tokyo', 'Japan, Korea Time'],
  ['Asia/Vladivostok', 'Asia/Vladivostok'],
  ['Asia/Yakutsk', 'Asia/Yakutsk'],
  ['Asia/Yekaterinburg', 'Yekaterinburg Time'],
  ['Asia/Yerevan', 'Asia/Yerevan'],
  ['Atlantic/Azores', 'Azores Time'],
  ['Atlantic/Cape_Verde', 'Cape Verde Time'],
  ['Australia/Adelaide', 'Adelaide Time'],
  ['Australia/Brisbane', 'Brisbane Time'],
  ['Australia/Darwin', 'Australia/Darwin'],
  ['Australia/Eucla', 'Australia/Eucla'],
  ['Australia/Lord_Howe', 'Australia/Lord Howe'],
  ['Australia/Perth', 'Australia/Perth'],
  ['Australia/Sydney', 'Sydney, Melbourne Time'],
  ['UTC', 'UTC Time'],
  ['Europe/Berlin', 'Central European Time'],
  ['Europe/Helsinki', 'Eastern European Time'],
  ['Europe/London', 'UK, Ireland, Lisbon Time'],
  ['Europe/Minsk', 'Minsk Time'],
  ['Europe/Moscow', 'Moscow Time'],
  ['Europe/Istanbul', 'Turkey Time'],
  ['Pacific/Apia', 'Pacific/Apia'],
  ['Pacific/Auckland', 'Auckland Time'],
  ['Pacific/Chatham', 'Pacific/Chatham'],
  ['Pacific/Easter', 'Pacific/Easter'],
  ['Pacific/Fiji', 'Pacific/Fiji'],
  ['Pacific/Gambier', 'Pacific/Gambier'],
  ['Pacific/Kiritimati', 'Pacific/Kiritimati'],
  ['Pacific/Majuro', 'Pacific/Majuro'],
  ['Pacific/Marquesas', 'Pacific/Marquesas'],
  ['Pacific/Norfolk', 'Pacific/Norfolk'],
  ['Pacific/Noumea', 'Pacific/Noumea'],
  ['Pacific/Pago_Pago', 'Pacific/Pago Pago'],
  ['Pacific/Pitcairn', 'Pacific/Pitcairn'],
  ['Pacific/Tarawa', 'Pacific/Tarawa'],
  ['Pacific/Tongatapu', 'Pacific/Tongatapu'],
])

export const groupedTimezones: [
  string,
  {
    identifier: string
    name: string
    group: string
  }[]][] = [
  [
    'US/Canada',
    [
      {
        identifier: 'America/Los_Angeles',
        name: 'Pacific Time - US & Canada',
        group: 'US/Canada',
      },
      {
        identifier: 'America/Denver',
        name: 'Mountain Time - US & Canada',
        group: 'US/Canada',
      },
      {
        identifier: 'America/Chicago',
        name: 'Central Time - US & Canada',
        group: 'US/Canada',
      },
      {
        identifier: 'America/New_York',
        name: 'Eastern Time - US & Canada',
        group: 'US/Canada',
      },
      {
        identifier: 'America/Anchorage',
        name: 'Alaska Time',
        group: 'US/Canada',
      },
      {
        identifier: 'America/Phoenix',
        name: 'Arizona, Yukon Time',
        group: 'US/Canada',
      },
      {
        identifier: 'America/St_Johns',
        name: 'Newfoundland Time',
        group: 'US/Canada',
      },
      {
        identifier: 'Pacific/Honolulu',
        name: 'Hawaii Time',
        group: 'US/Canada',
      },
    ],
  ],
  [
    'America',
    [
      {
        identifier: 'America/Adak',
        name: 'America/Adak',
        group: 'America',
      },
      {
        identifier: 'America/Argentina/Buenos_Aires',
        name: 'Buenos Aires Time',
        group: 'America',
      },
      {
        identifier: 'America/Asuncion',
        name: 'Asuncion Time',
        group: 'America',
      },
      {
        identifier: 'America/Bogota',
        name: 'Bogota, Jamaica, Lima Time',
        group: 'America',
      },
      {
        identifier: 'America/Campo_Grande',
        name: 'America/Campo Grande',
        group: 'America',
      },
      {
        identifier: 'America/Caracas',
        name: 'Caracas Time',
        group: 'America',
      },
      {
        identifier: 'America/Godthab',
        name: 'America/Godthab',
        group: 'America',
      },
      {
        identifier: 'America/Goose_Bay',
        name: 'Atlantic Time',
        group: 'America',
      },
      {
        identifier: 'America/Guatemala',
        name: 'Saskatchewan, Guatemala, Costa Rica Time',
        group: 'America',
      },
      {
        identifier: 'America/Havana',
        name: 'America/Havana',
        group: 'America',
      },
      {
        identifier: 'America/Mazatlan',
        name: 'America/Mazatlan',
        group: 'America',
      },
      {
        identifier: 'America/Mexico_City',
        name: 'Mexico City Time',
        group: 'America',
      },
      {
        identifier: 'America/Montevideo',
        name: 'Montevideo Time',
        group: 'America',
      },
      {
        identifier: 'America/Miquelon',
        name: 'America/Miquelon',
        group: 'America',
      },
      {
        identifier: 'America/Noronha',
        name: 'America/Noronha',
        group: 'America',
      },
      {
        identifier: 'America/Santiago',
        name: 'Santiago Time',
        group: 'America',
      },
      {
        identifier: 'America/Santa_Isabel',
        name: 'America/Santa Isabel',
        group: 'America',
      },
      {
        identifier: 'America/Santo_Domingo',
        name: 'Atlantic Standard Time',
        group: 'America',
      },
      {
        identifier: 'America/Sao_Paulo',
        name: 'Brasilia Time',
        group: 'America',
      },
    ],
  ],
  [
    'Africa',
    [
      {
        identifier: 'Africa/Cairo',
        name: 'Africa/Cairo',
        group: 'Africa',
      },
      {
        identifier: 'Africa/Johannesburg',
        name: 'Central Africa Time',
        group: 'Africa',
      },
      {
        identifier: 'Africa/Lagos',
        name: 'West Africa Time',
        group: 'Africa',
      },
      {
        identifier: 'Africa/Windhoek',
        name: 'Africa/Windhoek',
        group: 'Africa',
      },
    ],
  ],
  [
    'Asia',
    [
      {
        identifier: 'Asia/Amman',
        name: 'Jordan Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Baghdad',
        name: 'Baghdad, East Africa Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Baku',
        name: 'Asia/Baku',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Beirut',
        name: 'Lebanon Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Damascus',
        name: 'Syria Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Dhaka',
        name: 'Asia/Dhaka',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Dubai',
        name: 'Dubai Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Gaza',
        name: 'Asia/Gaza',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Irkutsk',
        name: 'Asia/Irkutsk',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Jakarta',
        name: 'Indochina Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Jerusalem',
        name: 'Israel Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Kabul',
        name: 'Kabul Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Kamchatka',
        name: 'Pacific/Majuro',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Karachi',
        name: 'Pakistan, Maldives Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Kathmandu',
        name: 'Kathmandu Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Kolkata',
        name: 'India, Sri Lanka Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Krasnoyarsk',
        name: 'Krasnoyarsk Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Omsk',
        name: 'Asia/Omsk',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Rangoon',
        name: 'Asia/Rangoon',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Shanghai',
        name: 'China, Singapore, Perth',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Tehran',
        name: 'Tehran Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Tokyo',
        name: 'Japan, Korea Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Vladivostok',
        name: 'Asia/Vladivostok',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Yakutsk',
        name: 'Asia/Yakutsk',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Yekaterinburg',
        name: 'Yekaterinburg Time',
        group: 'Asia',
      },
      {
        identifier: 'Asia/Yerevan',
        name: 'Asia/Yerevan',
        group: 'Asia',
      },
    ],
  ],
  [
    'Atlantic',
    [
      {
        identifier: 'Atlantic/Azores',
        name: 'Azores Time',
        group: 'Atlantic',
      },
      {
        identifier: 'Atlantic/Cape_Verde',
        name: 'Cape Verde Time',
        group: 'Atlantic',
      },
    ],
  ],
  [
    'Australia',
    [
      {
        identifier: 'Australia/Adelaide',
        name: 'Adelaide Time',
        group: 'Australia',
      },
      {
        identifier: 'Australia/Brisbane',
        name: 'Brisbane Time',
        group: 'Australia',
      },
      {
        identifier: 'Australia/Darwin',
        name: 'Australia/Darwin',
        group: 'Australia',
      },
      {
        identifier: 'Australia/Eucla',
        name: 'Australia/Eucla',
        group: 'Australia',
      },
      {
        identifier: 'Australia/Lord_Howe',
        name: 'Australia/Lord Howe',
        group: 'Australia',
      },
      {
        identifier: 'Australia/Perth',
        name: 'Australia/Perth',
        group: 'Australia',
      },
      {
        identifier: 'Australia/Sydney',
        name: 'Sydney, Melbourne Time',
        group: 'Australia',
      },
    ],
  ],
  [
    'UTC',
    [
      {
        identifier: 'UTC',
        name: 'UTC Time',
        group: 'UTC',
      },
    ],
  ],
  [
    'Europe',
    [
      {
        identifier: 'Europe/Berlin',
        name: 'Central European Time',
        group: 'Europe',
      },
      {
        identifier: 'Europe/Helsinki',
        name: 'Eastern European Time',
        group: 'Europe',
      },
      {
        identifier: 'Europe/London',
        name: 'UK, Ireland, Lisbon Time',
        group: 'Europe',
      },
      {
        identifier: 'Europe/Minsk',
        name: 'Minsk Time',
        group: 'Europe',
      },
      {
        identifier: 'Europe/Moscow',
        name: 'Moscow Time',
        group: 'Europe',
      },
      {
        identifier: 'Europe/Istanbul',
        name: 'Turkey Time',
        group: 'Europe',
      },
    ],
  ],
  [
    'Pacific',
    [
      {
        identifier: 'Pacific/Apia',
        name: 'Pacific/Apia',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Auckland',
        name: 'Auckland Time',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Chatham',
        name: 'Pacific/Chatham',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Easter',
        name: 'Pacific/Easter',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Fiji',
        name: 'Pacific/Fiji',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Gambier',
        name: 'Pacific/Gambier',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Kiritimati',
        name: 'Pacific/Kiritimati',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Majuro',
        name: 'Pacific/Majuro',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Marquesas',
        name: 'Pacific/Marquesas',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Norfolk',
        name: 'Pacific/Norfolk',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Noumea',
        name: 'Pacific/Noumea',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Pago_Pago',
        name: 'Pacific/Pago Pago',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Pitcairn',
        name: 'Pacific/Pitcairn',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Tarawa',
        name: 'Pacific/Tarawa',
        group: 'Pacific',
      },
      {
        identifier: 'Pacific/Tongatapu',
        name: 'Pacific/Tongatapu',
        group: 'Pacific',
      },
    ],
  ],
]
