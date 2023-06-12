export interface TimezoneEntry {
  /** a readable label that contains the offset and a longer, descriptive name of the timezone */
  label: string
  /** the value from the tz standard */
  tzCode: string
  /** the GMT offset of the current timezone (GMT+-0:00) */
  offset: string
}

export type TimezoneMap = Map<string, TimezoneEntry>

export const timezones: TimezoneMap = new Map([
  [
    'Pacific/Pago_Pago',
    {
      label: '(GMT-11:00) Samoa Time - Pago Pago',
      offset: 'GMT-11:00',
      tzCode: 'Pacific/Pago_Pago',
    },
  ],
  [
    'Pacific/Midway',
    {
      label: '(GMT-11:00) Samoa Time - Midway',
      offset: 'GMT-11:00',
      tzCode: 'Pacific/Midway',
    },
  ],
  [
    'Pacific/Niue',
    {
      label: '(GMT-11:00) Niue Time - Niue',
      offset: 'GMT-11:00',
      tzCode: 'Pacific/Niue',
    },
  ],
  [
    'Pacific/Tahiti',
    {
      label: '(GMT-10:00) Tahiti Time - Tahiti',
      offset: 'GMT-10:00',
      tzCode: 'Pacific/Tahiti',
    },
  ],
  [
    'Pacific/Johnston',
    {
      label: '(GMT-10:00) Hawaii-Aleutian Time - Johnston',
      offset: 'GMT-10:00',
      tzCode: 'Pacific/Johnston',
    },
  ],
  [
    'Pacific/Honolulu',
    {
      label: '(GMT-10:00) Hawaii-Aleutian Time - Honolulu',
      offset: 'GMT-10:00',
      tzCode: 'Pacific/Honolulu',
    },
  ],
  [
    'Pacific/Rarotonga',
    {
      label: '(GMT-10:00) Cook Islands Time - Rarotonga',
      offset: 'GMT-10:00',
      tzCode: 'Pacific/Rarotonga',
    },
  ],
  [
    'Pacific/Marquesas',
    {
      label: '(GMT-09:30) Marquesas Time - Marquesas',
      offset: 'GMT-09:30',
      tzCode: 'Pacific/Marquesas',
    },
  ],
  [
    'America/Adak',
    {
      label: '(GMT-09:00) Hawaii-Aleutian Time - Adak',
      offset: 'GMT-09:00',
      tzCode: 'America/Adak',
    },
  ],
  [
    'Pacific/Gambier',
    {
      label: '(GMT-09:00) Gambier Time - Gambier',
      offset: 'GMT-09:00',
      tzCode: 'Pacific/Gambier',
    },
  ],
  [
    'Pacific/Pitcairn',
    {
      label: '(GMT-08:00) Pitcairn Time - Pitcairn',
      offset: 'GMT-08:00',
      tzCode: 'Pacific/Pitcairn',
    },
  ],
  [
    'America/Yakutat',
    {
      label: '(GMT-08:00) Alaska Time - Yakutat',
      offset: 'GMT-08:00',
      tzCode: 'America/Yakutat',
    },
  ],
  [
    'America/Sitka',
    {
      label: '(GMT-08:00) Alaska Time - Sitka',
      offset: 'GMT-08:00',
      tzCode: 'America/Sitka',
    },
  ],
  [
    'America/Nome',
    {
      label: '(GMT-08:00) Alaska Time - Nome',
      offset: 'GMT-08:00',
      tzCode: 'America/Nome',
    },
  ],
  [
    'America/Metlakatla',
    {
      label: '(GMT-08:00) Alaska Time - Metlakatla',
      offset: 'GMT-08:00',
      tzCode: 'America/Metlakatla',
    },
  ],
  [
    'America/Juneau',
    {
      label: '(GMT-08:00) Alaska Time - Juneau',
      offset: 'GMT-08:00',
      tzCode: 'America/Juneau',
    },
  ],
  [
    'America/Anchorage',
    {
      label: '(GMT-08:00) Alaska Time - Anchorage',
      offset: 'GMT-08:00',
      tzCode: 'America/Anchorage',
    },
  ],
  [
    'America/Whitehorse',
    {
      label: '(GMT-07:00) Yukon Time - Whitehorse',
      offset: 'GMT-07:00',
      tzCode: 'America/Whitehorse',
    },
  ],
  [
    'America/Dawson',
    {
      label: '(GMT-07:00) Yukon Time - Dawson',
      offset: 'GMT-07:00',
      tzCode: 'America/Dawson',
    },
  ],
  [
    'America/Vancouver',
    {
      label: '(GMT-07:00) Pacific Time - Vancouver',
      offset: 'GMT-07:00',
      tzCode: 'America/Vancouver',
    },
  ],
  [
    'America/Tijuana',
    {
      label: '(GMT-07:00) Pacific Time - Tijuana',
      offset: 'GMT-07:00',
      tzCode: 'America/Tijuana',
    },
  ],
  [
    'America/Los_Angeles',
    {
      label: '(GMT-07:00) Pacific Time - Los Angeles',
      offset: 'GMT-07:00',
      tzCode: 'America/Los_Angeles',
    },
  ],
  [
    'America/Santa_Isabel',
    {
      label: '(GMT-07:00) Northwest Mexico Time - Santa Isabel',
      offset: 'GMT-07:00',
      tzCode: 'America/Santa_Isabel',
    },
  ],
  [
    'America/Phoenix',
    {
      label: '(GMT-07:00) Mountain Time - Phoenix',
      offset: 'GMT-07:00',
      tzCode: 'America/Phoenix',
    },
  ],
  [
    'America/Fort_Nelson',
    {
      label: '(GMT-07:00) Mountain Time - Fort Nelson',
      offset: 'GMT-07:00',
      tzCode: 'America/Fort_Nelson',
    },
  ],
  [
    'America/Dawson_Creek',
    {
      label: '(GMT-07:00) Mountain Time - Dawson Creek',
      offset: 'GMT-07:00',
      tzCode: 'America/Dawson_Creek',
    },
  ],
  [
    'America/Creston',
    {
      label: '(GMT-07:00) Mountain Time - Creston',
      offset: 'GMT-07:00',
      tzCode: 'America/Creston',
    },
  ],
  [
    'America/Mazatlan',
    {
      label: '(GMT-07:00) Mexican Pacific Time - Mazatlan',
      offset: 'GMT-07:00',
      tzCode: 'America/Mazatlan',
    },
  ],
  [
    'America/Hermosillo',
    {
      label: '(GMT-07:00) Mexican Pacific Time - Hermosillo',
      offset: 'GMT-07:00',
      tzCode: 'America/Hermosillo',
    },
  ],
  [
    'America/Yellowknife',
    {
      label: '(GMT-06:00) Mountain Time - Yellowknife',
      offset: 'GMT-06:00',
      tzCode: 'America/Yellowknife',
    },
  ],
  [
    'America/Inuvik',
    {
      label: '(GMT-06:00) Mountain Time - Inuvik',
      offset: 'GMT-06:00',
      tzCode: 'America/Inuvik',
    },
  ],
  [
    'America/Edmonton',
    {
      label: '(GMT-06:00) Mountain Time - Edmonton',
      offset: 'GMT-06:00',
      tzCode: 'America/Edmonton',
    },
  ],
  [
    'America/Denver',
    {
      label: '(GMT-06:00) Mountain Time - Denver',
      offset: 'GMT-06:00',
      tzCode: 'America/Denver',
    },
  ],
  [
    'America/Ciudad_Juarez',
    {
      label: '(GMT-06:00) Mountain Time - Ciudad Juarez',
      offset: 'GMT-06:00',
      tzCode: 'America/Ciudad_Juarez',
    },
  ],
  [
    'America/Cambridge_Bay',
    {
      label: '(GMT-06:00) Mountain Time - Cambridge Bay',
      offset: 'GMT-06:00',
      tzCode: 'America/Cambridge_Bay',
    },
  ],
  [
    'America/Boise',
    {
      label: '(GMT-06:00) Mountain Time - Boise',
      offset: 'GMT-06:00',
      tzCode: 'America/Boise',
    },
  ],
  [
    'Pacific/Galapagos',
    {
      label: '(GMT-06:00) Galapagos Time - Galapagos',
      offset: 'GMT-06:00',
      tzCode: 'Pacific/Galapagos',
    },
  ],
  [
    'Pacific/Easter',
    {
      label: '(GMT-06:00) Easter Island Time - Easter',
      offset: 'GMT-06:00',
      tzCode: 'Pacific/Easter',
    },
  ],
  [
    'America/Tegucigalpa',
    {
      label: '(GMT-06:00) Central Time - Tegucigalpa',
      offset: 'GMT-06:00',
      tzCode: 'America/Tegucigalpa',
    },
  ],
  [
    'America/Swift_Current',
    {
      label: '(GMT-06:00) Central Time - Swift Current',
      offset: 'GMT-06:00',
      tzCode: 'America/Swift_Current',
    },
  ],
  [
    'America/Regina',
    {
      label: '(GMT-06:00) Central Time - Regina',
      offset: 'GMT-06:00',
      tzCode: 'America/Regina',
    },
  ],
  [
    'America/Monterrey',
    {
      label: '(GMT-06:00) Central Time - Monterrey',
      offset: 'GMT-06:00',
      tzCode: 'America/Monterrey',
    },
  ],
  [
    'America/Mexico_City',
    {
      label: '(GMT-06:00) Central Time - Mexico City',
      offset: 'GMT-06:00',
      tzCode: 'America/Mexico_City',
    },
  ],
  [
    'America/Merida',
    {
      label: '(GMT-06:00) Central Time - Merida',
      offset: 'GMT-06:00',
      tzCode: 'America/Merida',
    },
  ],
  [
    'America/Managua',
    {
      label: '(GMT-06:00) Central Time - Managua',
      offset: 'GMT-06:00',
      tzCode: 'America/Managua',
    },
  ],
  [
    'America/Guatemala',
    {
      label: '(GMT-06:00) Central Time - Guatemala',
      offset: 'GMT-06:00',
      tzCode: 'America/Guatemala',
    },
  ],
  [
    'America/El_Salvador',
    {
      label: '(GMT-06:00) Central Time - El Salvador',
      offset: 'GMT-06:00',
      tzCode: 'America/El_Salvador',
    },
  ],
  [
    'America/Costa_Rica',
    {
      label: '(GMT-06:00) Central Time - Costa Rica',
      offset: 'GMT-06:00',
      tzCode: 'America/Costa_Rica',
    },
  ],
  [
    'America/Chihuahua',
    {
      label: '(GMT-06:00) Central Time - Chihuahua',
      offset: 'GMT-06:00',
      tzCode: 'America/Chihuahua',
    },
  ],
  [
    'America/Belize',
    {
      label: '(GMT-06:00) Central Time - Belize',
      offset: 'GMT-06:00',
      tzCode: 'America/Belize',
    },
  ],
  [
    'America/Bahia_Banderas',
    {
      label: '(GMT-06:00) Central Time - Bahia Banderas',
      offset: 'GMT-06:00',
      tzCode: 'America/Bahia_Banderas',
    },
  ],
  [
    'America/Lima',
    {
      label: '(GMT-05:00) Peru Time - Lima',
      offset: 'GMT-05:00',
      tzCode: 'America/Lima',
    },
  ],
  [
    'America/Guayaquil',
    {
      label: '(GMT-05:00) Ecuador Time - Guayaquil',
      offset: 'GMT-05:00',
      tzCode: 'America/Guayaquil',
    },
  ],
  [
    'America/Panama',
    {
      label: '(GMT-05:00) Eastern Time - Panama',
      offset: 'GMT-05:00',
      tzCode: 'America/Panama',
    },
  ],
  [
    'America/Jamaica',
    {
      label: '(GMT-05:00) Eastern Time - Jamaica',
      offset: 'GMT-05:00',
      tzCode: 'America/Jamaica',
    },
  ],
  [
    'America/Coral_Harbour',
    {
      label: '(GMT-05:00) Eastern Time - Coral Harbour',
      offset: 'GMT-05:00',
      tzCode: 'America/Coral_Harbour',
    },
  ],
  [
    'America/Cayman',
    {
      label: '(GMT-05:00) Eastern Time - Cayman',
      offset: 'GMT-05:00',
      tzCode: 'America/Cayman',
    },
  ],
  [
    'America/Cancun',
    {
      label: '(GMT-05:00) Eastern Time - Cancun',
      offset: 'GMT-05:00',
      tzCode: 'America/Cancun',
    },
  ],
  [
    'America/Bogota',
    {
      label: '(GMT-05:00) Colombia Time - Bogota',
      offset: 'GMT-05:00',
      tzCode: 'America/Bogota',
    },
  ],
  [
    'America/Winnipeg',
    {
      label: '(GMT-05:00) Central Time - Winnipeg',
      offset: 'GMT-05:00',
      tzCode: 'America/Winnipeg',
    },
  ],
  [
    'America/Indiana/Tell_City',
    {
      label: '(GMT-05:00) Central Time - Tell City, Indiana',
      offset: 'GMT-05:00',
      tzCode: 'America/Indiana/Tell_City',
    },
  ],
  [
    'America/Resolute',
    {
      label: '(GMT-05:00) Central Time - Resolute',
      offset: 'GMT-05:00',
      tzCode: 'America/Resolute',
    },
  ],
  [
    'America/Rankin_Inlet',
    {
      label: '(GMT-05:00) Central Time - Rankin Inlet',
      offset: 'GMT-05:00',
      tzCode: 'America/Rankin_Inlet',
    },
  ],
  [
    'America/Rainy_River',
    {
      label: '(GMT-05:00) Central Time - Rainy River',
      offset: 'GMT-05:00',
      tzCode: 'America/Rainy_River',
    },
  ],
  [
    'America/Ojinaga',
    {
      label: '(GMT-05:00) Central Time - Ojinaga',
      offset: 'GMT-05:00',
      tzCode: 'America/Ojinaga',
    },
  ],
  [
    'America/North_Dakota/New_Salem',
    {
      label: '(GMT-05:00) Central Time - New Salem, North Dakota',
      offset: 'GMT-05:00',
      tzCode: 'America/North_Dakota/New_Salem',
    },
  ],
  [
    'America/Menominee',
    {
      label: '(GMT-05:00) Central Time - Menominee',
      offset: 'GMT-05:00',
      tzCode: 'America/Menominee',
    },
  ],
  [
    'America/Matamoros',
    {
      label: '(GMT-05:00) Central Time - Matamoros',
      offset: 'GMT-05:00',
      tzCode: 'America/Matamoros',
    },
  ],
  [
    'America/Indiana/Knox',
    {
      label: '(GMT-05:00) Central Time - Knox, Indiana',
      offset: 'GMT-05:00',
      tzCode: 'America/Indiana/Knox',
    },
  ],
  [
    'America/Chicago',
    {
      label: '(GMT-05:00) Central Time - Chicago',
      offset: 'GMT-05:00',
      tzCode: 'America/Chicago',
    },
  ],
  [
    'America/North_Dakota/Center',
    {
      label: '(GMT-05:00) Central Time - Center, North Dakota',
      offset: 'GMT-05:00',
      tzCode: 'America/North_Dakota/Center',
    },
  ],
  [
    'America/North_Dakota/Beulah',
    {
      label: '(GMT-05:00) Central Time - Beulah, North Dakota',
      offset: 'GMT-05:00',
      tzCode: 'America/North_Dakota/Beulah',
    },
  ],
  [
    'America/Rio_Branco',
    {
      label: '(GMT-05:00) Acre Time - Rio Branco',
      offset: 'GMT-05:00',
      tzCode: 'America/Rio_Branco',
    },
  ],
  [
    'America/Eirunepe',
    {
      label: '(GMT-05:00) Acre Time - Eirunepe',
      offset: 'GMT-05:00',
      tzCode: 'America/Eirunepe',
    },
  ],
  [
    'America/Caracas',
    {
      label: '(GMT-04:00) Venezuela Time - Caracas',
      offset: 'GMT-04:00',
      tzCode: 'America/Caracas',
    },
  ],
  [
    'America/Asuncion',
    {
      label: '(GMT-04:00) Paraguay Time - Asuncion',
      offset: 'GMT-04:00',
      tzCode: 'America/Asuncion',
    },
  ],
  [
    'America/Montreal',
    {
      label: '(GMT-04:00) Montreal',
      offset: 'GMT-04:00',
      tzCode: 'America/Montreal',
    },
  ],
  [
    'America/Guyana',
    {
      label: '(GMT-04:00) Guyana Time - Guyana',
      offset: 'GMT-04:00',
      tzCode: 'America/Guyana',
    },
  ],
  [
    'America/Indiana/Winamac',
    {
      label: '(GMT-04:00) Eastern Time - Winamac, Indiana',
      offset: 'GMT-04:00',
      tzCode: 'America/Indiana/Winamac',
    },
  ],
  [
    'America/Indiana/Vincennes',
    {
      label: '(GMT-04:00) Eastern Time - Vincennes, Indiana',
      offset: 'GMT-04:00',
      tzCode: 'America/Indiana/Vincennes',
    },
  ],
  [
    'America/Indiana/Vevay',
    {
      label: '(GMT-04:00) Eastern Time - Vevay, Indiana',
      offset: 'GMT-04:00',
      tzCode: 'America/Indiana/Vevay',
    },
  ],
  [
    'America/Toronto',
    {
      label: '(GMT-04:00) Eastern Time - Toronto',
      offset: 'GMT-04:00',
      tzCode: 'America/Toronto',
    },
  ],
  [
    'America/Thunder_Bay',
    {
      label: '(GMT-04:00) Eastern Time - Thunder Bay',
      offset: 'GMT-04:00',
      tzCode: 'America/Thunder_Bay',
    },
  ],
  [
    'America/Port-au-Prince',
    {
      label: '(GMT-04:00) Eastern Time - Port-au-Prince',
      offset: 'GMT-04:00',
      tzCode: 'America/Port-au-Prince',
    },
  ],
  [
    'America/Indiana/Petersburg',
    {
      label: '(GMT-04:00) Eastern Time - Petersburg, Indiana',
      offset: 'GMT-04:00',
      tzCode: 'America/Indiana/Petersburg',
    },
  ],
  [
    'America/Pangnirtung',
    {
      label: '(GMT-04:00) Eastern Time - Pangnirtung',
      offset: 'GMT-04:00',
      tzCode: 'America/Pangnirtung',
    },
  ],
  [
    'America/Nipigon',
    {
      label: '(GMT-04:00) Eastern Time - Nipigon',
      offset: 'GMT-04:00',
      tzCode: 'America/Nipigon',
    },
  ],
  [
    'America/New_York',
    {
      label: '(GMT-04:00) Eastern Time - New York',
      offset: 'GMT-04:00',
      tzCode: 'America/New_York',
    },
  ],
  [
    'America/Nassau',
    {
      label: '(GMT-04:00) Eastern Time - Nassau',
      offset: 'GMT-04:00',
      tzCode: 'America/Nassau',
    },
  ],
  [
    'America/Kentucky/Monticello',
    {
      label: '(GMT-04:00) Eastern Time - Monticello, Kentucky',
      offset: 'GMT-04:00',
      tzCode: 'America/Kentucky/Monticello',
    },
  ],
  [
    'America/Indiana/Marengo',
    {
      label: '(GMT-04:00) Eastern Time - Marengo, Indiana',
      offset: 'GMT-04:00',
      tzCode: 'America/Indiana/Marengo',
    },
  ],
  [
    'America/Louisville',
    {
      label: '(GMT-04:00) Eastern Time - Louisville',
      offset: 'GMT-04:00',
      tzCode: 'America/Louisville',
    },
  ],
  [
    'America/Iqaluit',
    {
      label: '(GMT-04:00) Eastern Time - Iqaluit',
      offset: 'GMT-04:00',
      tzCode: 'America/Iqaluit',
    },
  ],
  [
    'America/Indianapolis',
    {
      label: '(GMT-04:00) Eastern Time - Indianapolis',
      offset: 'GMT-04:00',
      tzCode: 'America/Indianapolis',
    },
  ],
  [
    'America/Grand_Turk',
    {
      label: '(GMT-04:00) Eastern Time - Grand Turk',
      offset: 'GMT-04:00',
      tzCode: 'America/Grand_Turk',
    },
  ],
  [
    'America/Detroit',
    {
      label: '(GMT-04:00) Eastern Time - Detroit',
      offset: 'GMT-04:00',
      tzCode: 'America/Detroit',
    },
  ],
  [
    'America/Havana',
    {
      label: '(GMT-04:00) Cuba Time - Havana',
      offset: 'GMT-04:00',
      tzCode: 'America/Havana',
    },
  ],
  [
    'America/Santiago',
    {
      label: '(GMT-04:00) Chile Time - Santiago',
      offset: 'GMT-04:00',
      tzCode: 'America/Santiago',
    },
  ],
  [
    'America/La_Paz',
    {
      label: '(GMT-04:00) Bolivia Time - La Paz',
      offset: 'GMT-04:00',
      tzCode: 'America/La_Paz',
    },
  ],
  [
    'America/Tortola',
    {
      label: '(GMT-04:00) Atlantic Time - Tortola',
      offset: 'GMT-04:00',
      tzCode: 'America/Tortola',
    },
  ],
  [
    'America/St_Vincent',
    {
      label: '(GMT-04:00) Atlantic Time - St Vincent',
      offset: 'GMT-04:00',
      tzCode: 'America/St_Vincent',
    },
  ],
  [
    'America/St_Thomas',
    {
      label: '(GMT-04:00) Atlantic Time - St Thomas',
      offset: 'GMT-04:00',
      tzCode: 'America/St_Thomas',
    },
  ],
  [
    'America/St_Lucia',
    {
      label: '(GMT-04:00) Atlantic Time - St Lucia',
      offset: 'GMT-04:00',
      tzCode: 'America/St_Lucia',
    },
  ],
  [
    'America/St_Kitts',
    {
      label: '(GMT-04:00) Atlantic Time - St Kitts',
      offset: 'GMT-04:00',
      tzCode: 'America/St_Kitts',
    },
  ],
  [
    'America/St_Barthelemy',
    {
      label: '(GMT-04:00) Atlantic Time - St Barthelemy',
      offset: 'GMT-04:00',
      tzCode: 'America/St_Barthelemy',
    },
  ],
  [
    'America/Santo_Domingo',
    {
      label: '(GMT-04:00) Atlantic Time - Santo Domingo',
      offset: 'GMT-04:00',
      tzCode: 'America/Santo_Domingo',
    },
  ],
  [
    'America/Puerto_Rico',
    {
      label: '(GMT-04:00) Atlantic Time - Puerto Rico',
      offset: 'GMT-04:00',
      tzCode: 'America/Puerto_Rico',
    },
  ],
  [
    'America/Port_of_Spain',
    {
      label: '(GMT-04:00) Atlantic Time - Port of Spain',
      offset: 'GMT-04:00',
      tzCode: 'America/Port_of_Spain',
    },
  ],
  [
    'America/Montserrat',
    {
      label: '(GMT-04:00) Atlantic Time - Montserrat',
      offset: 'GMT-04:00',
      tzCode: 'America/Montserrat',
    },
  ],
  [
    'America/Martinique',
    {
      label: '(GMT-04:00) Atlantic Time - Martinique',
      offset: 'GMT-04:00',
      tzCode: 'America/Martinique',
    },
  ],
  [
    'America/Marigot',
    {
      label: '(GMT-04:00) Atlantic Time - Marigot',
      offset: 'GMT-04:00',
      tzCode: 'America/Marigot',
    },
  ],
  [
    'America/Lower_Princes',
    {
      label: '(GMT-04:00) Atlantic Time - Lower Princes',
      offset: 'GMT-04:00',
      tzCode: 'America/Lower_Princes',
    },
  ],
  [
    'America/Kralendijk',
    {
      label: '(GMT-04:00) Atlantic Time - Kralendijk',
      offset: 'GMT-04:00',
      tzCode: 'America/Kralendijk',
    },
  ],
  [
    'America/Guadeloupe',
    {
      label: '(GMT-04:00) Atlantic Time - Guadeloupe',
      offset: 'GMT-04:00',
      tzCode: 'America/Guadeloupe',
    },
  ],
  [
    'America/Grenada',
    {
      label: '(GMT-04:00) Atlantic Time - Grenada',
      offset: 'GMT-04:00',
      tzCode: 'America/Grenada',
    },
  ],
  [
    'America/Dominica',
    {
      label: '(GMT-04:00) Atlantic Time - Dominica',
      offset: 'GMT-04:00',
      tzCode: 'America/Dominica',
    },
  ],
  [
    'America/Curacao',
    {
      label: '(GMT-04:00) Atlantic Time - Curacao',
      offset: 'GMT-04:00',
      tzCode: 'America/Curacao',
    },
  ],
  [
    'America/Blanc-Sablon',
    {
      label: '(GMT-04:00) Atlantic Time - Blanc-Sablon',
      offset: 'GMT-04:00',
      tzCode: 'America/Blanc-Sablon',
    },
  ],
  [
    'America/Barbados',
    {
      label: '(GMT-04:00) Atlantic Time - Barbados',
      offset: 'GMT-04:00',
      tzCode: 'America/Barbados',
    },
  ],
  [
    'America/Aruba',
    {
      label: '(GMT-04:00) Atlantic Time - Aruba',
      offset: 'GMT-04:00',
      tzCode: 'America/Aruba',
    },
  ],
  [
    'America/Antigua',
    {
      label: '(GMT-04:00) Atlantic Time - Antigua',
      offset: 'GMT-04:00',
      tzCode: 'America/Antigua',
    },
  ],
  [
    'America/Anguilla',
    {
      label: '(GMT-04:00) Atlantic Time - Anguilla',
      offset: 'GMT-04:00',
      tzCode: 'America/Anguilla',
    },
  ],
  [
    'America/Porto_Velho',
    {
      label: '(GMT-04:00) Amazon Time - Porto Velho',
      offset: 'GMT-04:00',
      tzCode: 'America/Porto_Velho',
    },
  ],
  [
    'America/Manaus',
    {
      label: '(GMT-04:00) Amazon Time - Manaus',
      offset: 'GMT-04:00',
      tzCode: 'America/Manaus',
    },
  ],
  [
    'America/Cuiaba',
    {
      label: '(GMT-04:00) Amazon Time - Cuiaba',
      offset: 'GMT-04:00',
      tzCode: 'America/Cuiaba',
    },
  ],
  [
    'America/Campo_Grande',
    {
      label: '(GMT-04:00) Amazon Time - Campo Grande',
      offset: 'GMT-04:00',
      tzCode: 'America/Campo_Grande',
    },
  ],
  [
    'America/Boa_Vista',
    {
      label: '(GMT-04:00) Amazon Time - Boa Vista',
      offset: 'GMT-04:00',
      tzCode: 'America/Boa_Vista',
    },
  ],
  [
    'America/Montevideo',
    {
      label: '(GMT-03:00) Uruguay Time - Montevideo',
      offset: 'GMT-03:00',
      tzCode: 'America/Montevideo',
    },
  ],
  [
    'America/Paramaribo',
    {
      label: '(GMT-03:00) Suriname Time - Paramaribo',
      offset: 'GMT-03:00',
      tzCode: 'America/Paramaribo',
    },
  ],
  [
    'Antarctica/Rothera',
    {
      label: '(GMT-03:00) Rothera Time - Rothera',
      offset: 'GMT-03:00',
      tzCode: 'Antarctica/Rothera',
    },
  ],
  [
    'America/Punta_Arenas',
    {
      label: '(GMT-03:00) Punta Arenas',
      offset: 'GMT-03:00',
      tzCode: 'America/Punta_Arenas',
    },
  ],
  [
    'Antarctica/Palmer',
    {
      label: '(GMT-03:00) Palmer',
      offset: 'GMT-03:00',
      tzCode: 'Antarctica/Palmer',
    },
  ],
  [
    'America/Cayenne',
    {
      label: '(GMT-03:00) French Guiana Time - Cayenne',
      offset: 'GMT-03:00',
      tzCode: 'America/Cayenne',
    },
  ],
  [
    'Atlantic/Stanley',
    {
      label: '(GMT-03:00) Falkland Islands Time - Stanley',
      offset: 'GMT-03:00',
      tzCode: 'Atlantic/Stanley',
    },
  ],
  [
    'America/Sao_Paulo',
    {
      label: '(GMT-03:00) Brasilia Time - Sao Paulo',
      offset: 'GMT-03:00',
      tzCode: 'America/Sao_Paulo',
    },
  ],
  [
    'America/Santarem',
    {
      label: '(GMT-03:00) Brasilia Time - Santarem',
      offset: 'GMT-03:00',
      tzCode: 'America/Santarem',
    },
  ],
  [
    'America/Recife',
    {
      label: '(GMT-03:00) Brasilia Time - Recife',
      offset: 'GMT-03:00',
      tzCode: 'America/Recife',
    },
  ],
  [
    'America/Maceio',
    {
      label: '(GMT-03:00) Brasilia Time - Maceio',
      offset: 'GMT-03:00',
      tzCode: 'America/Maceio',
    },
  ],
  [
    'America/Fortaleza',
    {
      label: '(GMT-03:00) Brasilia Time - Fortaleza',
      offset: 'GMT-03:00',
      tzCode: 'America/Fortaleza',
    },
  ],
  [
    'America/Belem',
    {
      label: '(GMT-03:00) Brasilia Time - Belem',
      offset: 'GMT-03:00',
      tzCode: 'America/Belem',
    },
  ],
  [
    'America/Bahia',
    {
      label: '(GMT-03:00) Brasilia Time - Bahia',
      offset: 'GMT-03:00',
      tzCode: 'America/Bahia',
    },
  ],
  [
    'America/Araguaina',
    {
      label: '(GMT-03:00) Brasilia Time - Araguaina',
      offset: 'GMT-03:00',
      tzCode: 'America/Araguaina',
    },
  ],
  [
    'America/Thule',
    {
      label: '(GMT-03:00) Atlantic Time - Thule',
      offset: 'GMT-03:00',
      tzCode: 'America/Thule',
    },
  ],
  [
    'America/Moncton',
    {
      label: '(GMT-03:00) Atlantic Time - Moncton',
      offset: 'GMT-03:00',
      tzCode: 'America/Moncton',
    },
  ],
  [
    'America/Halifax',
    {
      label: '(GMT-03:00) Atlantic Time - Halifax',
      offset: 'GMT-03:00',
      tzCode: 'America/Halifax',
    },
  ],
  [
    'America/Goose_Bay',
    {
      label: '(GMT-03:00) Atlantic Time - Goose Bay',
      offset: 'GMT-03:00',
      tzCode: 'America/Goose_Bay',
    },
  ],
  [
    'America/Glace_Bay',
    {
      label: '(GMT-03:00) Atlantic Time - Glace Bay',
      offset: 'GMT-03:00',
      tzCode: 'America/Glace_Bay',
    },
  ],
  [
    'Atlantic/Bermuda',
    {
      label: '(GMT-03:00) Atlantic Time - Bermuda',
      offset: 'GMT-03:00',
      tzCode: 'Atlantic/Bermuda',
    },
  ],
  [
    'America/Argentina/Ushuaia',
    {
      label: '(GMT-03:00) Argentina Time - Ushuaia, Argentina',
      offset: 'GMT-03:00',
      tzCode: 'America/Argentina/Ushuaia',
    },
  ],
  [
    'America/Argentina/Tucuman',
    {
      label: '(GMT-03:00) Argentina Time - Tucuman, Argentina',
      offset: 'GMT-03:00',
      tzCode: 'America/Argentina/Tucuman',
    },
  ],
  [
    'America/Argentina/San_Luis',
    {
      label: '(GMT-03:00) Argentina Time - San Luis, Argentina',
      offset: 'GMT-03:00',
      tzCode: 'America/Argentina/San_Luis',
    },
  ],
  [
    'America/Argentina/San_Juan',
    {
      label: '(GMT-03:00) Argentina Time - San Juan, Argentina',
      offset: 'GMT-03:00',
      tzCode: 'America/Argentina/San_Juan',
    },
  ],
  [
    'America/Argentina/Salta',
    {
      label: '(GMT-03:00) Argentina Time - Salta, Argentina',
      offset: 'GMT-03:00',
      tzCode: 'America/Argentina/Salta',
    },
  ],
  [
    'America/Argentina/Rio_Gallegos',
    {
      label: '(GMT-03:00) Argentina Time - Rio Gallegos, Argentina',
      offset: 'GMT-03:00',
      tzCode: 'America/Argentina/Rio_Gallegos',
    },
  ],
  [
    'America/Mendoza',
    {
      label: '(GMT-03:00) Argentina Time - Mendoza',
      offset: 'GMT-03:00',
      tzCode: 'America/Mendoza',
    },
  ],
  [
    'America/Argentina/La_Rioja',
    {
      label: '(GMT-03:00) Argentina Time - La Rioja, Argentina',
      offset: 'GMT-03:00',
      tzCode: 'America/Argentina/La_Rioja',
    },
  ],
  [
    'America/Jujuy',
    {
      label: '(GMT-03:00) Argentina Time - Jujuy',
      offset: 'GMT-03:00',
      tzCode: 'America/Jujuy',
    },
  ],
  [
    'America/Cordoba',
    {
      label: '(GMT-03:00) Argentina Time - Cordoba',
      offset: 'GMT-03:00',
      tzCode: 'America/Cordoba',
    },
  ],
  [
    'America/Catamarca',
    {
      label: '(GMT-03:00) Argentina Time - Catamarca',
      offset: 'GMT-03:00',
      tzCode: 'America/Catamarca',
    },
  ],
  [
    'America/Buenos_Aires',
    {
      label: '(GMT-03:00) Argentina Time - Buenos Aires',
      offset: 'GMT-03:00',
      tzCode: 'America/Buenos_Aires',
    },
  ],
  [
    'America/St_Johns',
    {
      label: '(GMT-02:30) Newfoundland Time - St Johns',
      offset: 'GMT-02:30',
      tzCode: 'America/St_Johns',
    },
  ],
  [
    'America/Godthab',
    {
      label: '(GMT-02:00) West Greenland Time - Godthab',
      offset: 'GMT-02:00',
      tzCode: 'America/Godthab',
    },
  ],
  [
    'America/Miquelon',
    {
      label: '(GMT-02:00) St. Pierre &amp;amp; Miquelon Time - Miquelon',
      offset: 'GMT-02:00',
      tzCode: 'America/Miquelon',
    },
  ],
  [
    'Atlantic/South_Georgia',
    {
      label: '(GMT-02:00) South Georgia Time - South Georgia',
      offset: 'GMT-02:00',
      tzCode: 'Atlantic/South_Georgia',
    },
  ],
  [
    'America/Noronha',
    {
      label: '(GMT-02:00) Fernando de Noronha Time - Noronha',
      offset: 'GMT-02:00',
      tzCode: 'America/Noronha',
    },
  ],
  [
    'Atlantic/Cape_Verde',
    {
      label: '(GMT-01:00) Cape Verde Time - Cape Verde',
      offset: 'GMT-01:00',
      tzCode: 'Atlantic/Cape_Verde',
    },
  ],
  [
    'Atlantic/Azores',
    {
      label: '(GMT+00:00) Azores Time - Azores',
      offset: 'GMT+00:00',
      tzCode: 'Atlantic/Azores',
    },
  ],
  [
    'America/Scoresbysund',
    {
      label: '(GMT+00:00) East Greenland Time - Scoresbysund',
      offset: 'GMT+00:00',
      tzCode: 'America/Scoresbysund',
    },
  ],
  [
    'Africa/Abidjan',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Abidjan',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Abidjan',
    },
  ],
  [
    'Africa/Accra',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Accra',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Accra',
    },
  ],
  [
    'Africa/Bamako',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Bamako',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Bamako',
    },
  ],
  [
    'Africa/Banjul',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Banjul',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Banjul',
    },
  ],
  [
    'Africa/Bissau',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Bissau',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Bissau',
    },
  ],
  [
    'Africa/Conakry',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Conakry',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Conakry',
    },
  ],
  [
    'Africa/Dakar',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Dakar',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Dakar',
    },
  ],
  [
    'America/Danmarkshavn',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Danmarkshavn',
      offset: 'GMT+00:00',
      tzCode: 'America/Danmarkshavn',
    },
  ],
  [
    'Africa/Freetown',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Freetown',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Freetown',
    },
  ],
  [
    'Africa/Lome',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Lome',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Lome',
    },
  ],
  [
    'Africa/Monrovia',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Monrovia',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Monrovia',
    },
  ],
  [
    'Africa/Nouakchott',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Nouakchott',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Nouakchott',
    },
  ],
  [
    'Africa/Ouagadougou',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Ouagadougou',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Ouagadougou',
    },
  ],
  [
    'Atlantic/Reykjavik',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Reykjavik',
      offset: 'GMT+00:00',
      tzCode: 'Atlantic/Reykjavik',
    },
  ],
  [
    'Africa/Sao_Tome',
    {
      label: '(GMT+00:00) Greenwich Mean Time - Sao Tome',
      offset: 'GMT+00:00',
      tzCode: 'Africa/Sao_Tome',
    },
  ],
  [
    'Atlantic/St_Helena',
    {
      label: '(GMT+00:00) Greenwich Mean Time - St Helena',
      offset: 'GMT+00:00',
      tzCode: 'Atlantic/St_Helena',
    },
  ],
  [
    'Europe/London',
    {
      label: '(GMT+01:00) British Time - London',
      offset: 'GMT+01:00',
      tzCode: 'Europe/London',
    },
  ],
  [
    'Africa/Casablanca',
    {
      label: '(GMT+01:00) Casablanca',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Casablanca',
    },
  ],
  [
    'Africa/Algiers',
    {
      label: '(GMT+01:00) Central European Time - Algiers',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Algiers',
    },
  ],
  [
    'Africa/Tunis',
    {
      label: '(GMT+01:00) Central European Time - Tunis',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Tunis',
    },
  ],
  [
    'Africa/El_Aaiun',
    {
      label: '(GMT+01:00) El Aaiun',
      offset: 'GMT+01:00',
      tzCode: 'Africa/El_Aaiun',
    },
  ],
  [
    'Europe/Guernsey',
    {
      label: '(GMT+01:00) Guernsey',
      offset: 'GMT+01:00',
      tzCode: 'Europe/Guernsey',
    },
  ],
  [
    'Europe/Dublin',
    {
      label: '(GMT+01:00) Irish Time - Dublin',
      offset: 'GMT+01:00',
      tzCode: 'Europe/Dublin',
    },
  ],
  [
    'Europe/Isle_of_Man',
    {
      label: '(GMT+01:00) Isle of Man',
      offset: 'GMT+01:00',
      tzCode: 'Europe/Isle_of_Man',
    },
  ],
  [
    'Europe/Jersey',
    {
      label: '(GMT+01:00) Jersey',
      offset: 'GMT+01:00',
      tzCode: 'Europe/Jersey',
    },
  ],
  [
    'Africa/Bangui',
    {
      label: '(GMT+01:00) West Africa Time - Bangui',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Bangui',
    },
  ],
  [
    'Africa/Brazzaville',
    {
      label: '(GMT+01:00) West Africa Time - Brazzaville',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Brazzaville',
    },
  ],
  [
    'Africa/Douala',
    {
      label: '(GMT+01:00) West Africa Time - Douala',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Douala',
    },
  ],
  [
    'Africa/Kinshasa',
    {
      label: '(GMT+01:00) West Africa Time - Kinshasa',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Kinshasa',
    },
  ],
  [
    'Africa/Lagos',
    {
      label: '(GMT+01:00) West Africa Time - Lagos',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Lagos',
    },
  ],
  [
    'Africa/Libreville',
    {
      label: '(GMT+01:00) West Africa Time - Libreville',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Libreville',
    },
  ],
  [
    'Africa/Luanda',
    {
      label: '(GMT+01:00) West Africa Time - Luanda',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Luanda',
    },
  ],
  [
    'Africa/Malabo',
    {
      label: '(GMT+01:00) West Africa Time - Malabo',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Malabo',
    },
  ],
  [
    'Africa/Ndjamena',
    {
      label: '(GMT+01:00) West Africa Time - Ndjamena',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Ndjamena',
    },
  ],
  [
    'Africa/Niamey',
    {
      label: '(GMT+01:00) West Africa Time - Niamey',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Niamey',
    },
  ],
  [
    'Africa/Porto-Novo',
    {
      label: '(GMT+01:00) West Africa Time - Porto-Novo',
      offset: 'GMT+01:00',
      tzCode: 'Africa/Porto-Novo',
    },
  ],
  [
    'Atlantic/Canary',
    {
      label: '(GMT+01:00) Western European Time - Canary',
      offset: 'GMT+01:00',
      tzCode: 'Atlantic/Canary',
    },
  ],
  [
    'Atlantic/Faeroe',
    {
      label: '(GMT+01:00) Western European Time - Faeroe',
      offset: 'GMT+01:00',
      tzCode: 'Atlantic/Faeroe',
    },
  ],
  [
    'Europe/Lisbon',
    {
      label: '(GMT+01:00) Western European Time - Lisbon',
      offset: 'GMT+01:00',
      tzCode: 'Europe/Lisbon',
    },
  ],
  [
    'Atlantic/Madeira',
    {
      label: '(GMT+01:00) Western European Time - Madeira',
      offset: 'GMT+01:00',
      tzCode: 'Atlantic/Madeira',
    },
  ],
  [
    'Africa/Blantyre',
    {
      label: '(GMT+02:00) Central Africa Time - Blantyre',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Blantyre',
    },
  ],
  [
    'Africa/Bujumbura',
    {
      label: '(GMT+02:00) Central Africa Time - Bujumbura',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Bujumbura',
    },
  ],
  [
    'Africa/Gaborone',
    {
      label: '(GMT+02:00) Central Africa Time - Gaborone',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Gaborone',
    },
  ],
  [
    'Africa/Harare',
    {
      label: '(GMT+02:00) Central Africa Time - Harare',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Harare',
    },
  ],
  [
    'Africa/Juba',
    {
      label: '(GMT+02:00) Central Africa Time - Juba',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Juba',
    },
  ],
  [
    'Africa/Khartoum',
    {
      label: '(GMT+02:00) Central Africa Time - Khartoum',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Khartoum',
    },
  ],
  [
    'Africa/Kigali',
    {
      label: '(GMT+02:00) Central Africa Time - Kigali',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Kigali',
    },
  ],
  [
    'Africa/Lubumbashi',
    {
      label: '(GMT+02:00) Central Africa Time - Lubumbashi',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Lubumbashi',
    },
  ],
  [
    'Africa/Lusaka',
    {
      label: '(GMT+02:00) Central Africa Time - Lusaka',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Lusaka',
    },
  ],
  [
    'Africa/Maputo',
    {
      label: '(GMT+02:00) Central Africa Time - Maputo',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Maputo',
    },
  ],
  [
    'Africa/Windhoek',
    {
      label: '(GMT+02:00) Central Africa Time - Windhoek',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Windhoek',
    },
  ],
  [
    'Europe/Amsterdam',
    {
      label: '(GMT+02:00) Central European Time - Amsterdam',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Amsterdam',
    },
  ],
  [
    'Europe/Andorra',
    {
      label: '(GMT+02:00) Central European Time - Andorra',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Andorra',
    },
  ],
  [
    'Europe/Belgrade',
    {
      label: '(GMT+02:00) Central European Time - Belgrade',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Belgrade',
    },
  ],
  [
    'Europe/Berlin',
    {
      label: '(GMT+02:00) Central European Time - Berlin',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Berlin',
    },
  ],
  [
    'Europe/Bratislava',
    {
      label: '(GMT+02:00) Central European Time - Bratislava',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Bratislava',
    },
  ],
  [
    'Europe/Brussels',
    {
      label: '(GMT+02:00) Central European Time - Brussels',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Brussels',
    },
  ],
  [
    'Europe/Budapest',
    {
      label: '(GMT+02:00) Central European Time - Budapest',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Budapest',
    },
  ],
  [
    'Europe/Busingen',
    {
      label: '(GMT+02:00) Central European Time - Busingen',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Busingen',
    },
  ],
  [
    'Africa/Ceuta',
    {
      label: '(GMT+02:00) Central European Time - Ceuta',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Ceuta',
    },
  ],
  [
    'Europe/Copenhagen',
    {
      label: '(GMT+02:00) Central European Time - Copenhagen',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Copenhagen',
    },
  ],
  [
    'Europe/Gibraltar',
    {
      label: '(GMT+02:00) Central European Time - Gibraltar',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Gibraltar',
    },
  ],
  [
    'Europe/Ljubljana',
    {
      label: '(GMT+02:00) Central European Time - Ljubljana',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Ljubljana',
    },
  ],
  [
    'Arctic/Longyearbyen',
    {
      label: '(GMT+02:00) Central European Time - Longyearbyen',
      offset: 'GMT+02:00',
      tzCode: 'Arctic/Longyearbyen',
    },
  ],
  [
    'Europe/Luxembourg',
    {
      label: '(GMT+02:00) Central European Time - Luxembourg',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Luxembourg',
    },
  ],
  [
    'Europe/Madrid',
    {
      label: '(GMT+02:00) Central European Time - Madrid',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Madrid',
    },
  ],
  [
    'Europe/Malta',
    {
      label: '(GMT+02:00) Central European Time - Malta',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Malta',
    },
  ],
  [
    'Europe/Monaco',
    {
      label: '(GMT+02:00) Central European Time - Monaco',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Monaco',
    },
  ],
  [
    'Europe/Oslo',
    {
      label: '(GMT+02:00) Central European Time - Oslo',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Oslo',
    },
  ],
  [
    'Europe/Paris',
    {
      label: '(GMT+02:00) Central European Time - Paris',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Paris',
    },
  ],
  [
    'Europe/Podgorica',
    {
      label: '(GMT+02:00) Central European Time - Podgorica',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Podgorica',
    },
  ],
  [
    'Europe/Prague',
    {
      label: '(GMT+02:00) Central European Time - Prague',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Prague',
    },
  ],
  [
    'Europe/Rome',
    {
      label: '(GMT+02:00) Central European Time - Rome',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Rome',
    },
  ],
  [
    'Europe/San_Marino',
    {
      label: '(GMT+02:00) Central European Time - San Marino',
      offset: 'GMT+02:00',
      tzCode: 'Europe/San_Marino',
    },
  ],
  [
    'Europe/Sarajevo',
    {
      label: '(GMT+02:00) Central European Time - Sarajevo',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Sarajevo',
    },
  ],
  [
    'Europe/Skopje',
    {
      label: '(GMT+02:00) Central European Time - Skopje',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Skopje',
    },
  ],
  [
    'Europe/Stockholm',
    {
      label: '(GMT+02:00) Central European Time - Stockholm',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Stockholm',
    },
  ],
  [
    'Europe/Tirane',
    {
      label: '(GMT+02:00) Central European Time - Tirane',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Tirane',
    },
  ],
  [
    'Europe/Vaduz',
    {
      label: '(GMT+02:00) Central European Time - Vaduz',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Vaduz',
    },
  ],
  [
    'Europe/Vatican',
    {
      label: '(GMT+02:00) Central European Time - Vatican',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Vatican',
    },
  ],
  [
    'Europe/Vienna',
    {
      label: '(GMT+02:00) Central European Time - Vienna',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Vienna',
    },
  ],
  [
    'Europe/Warsaw',
    {
      label: '(GMT+02:00) Central European Time - Warsaw',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Warsaw',
    },
  ],
  [
    'Europe/Zagreb',
    {
      label: '(GMT+02:00) Central European Time - Zagreb',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Zagreb',
    },
  ],
  [
    'Europe/Zurich',
    {
      label: '(GMT+02:00) Central European Time - Zurich',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Zurich',
    },
  ],
  [
    'Europe/Kaliningrad',
    {
      label: '(GMT+02:00) Eastern European Time - Kaliningrad',
      offset: 'GMT+02:00',
      tzCode: 'Europe/Kaliningrad',
    },
  ],
  [
    'Africa/Tripoli',
    {
      label: '(GMT+02:00) Eastern European Time - Tripoli',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Tripoli',
    },
  ],
  [
    'Africa/Johannesburg',
    {
      label: '(GMT+02:00) South Africa Time - Johannesburg',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Johannesburg',
    },
  ],
  [
    'Africa/Maseru',
    {
      label: '(GMT+02:00) South Africa Time - Maseru',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Maseru',
    },
  ],
  [
    'Africa/Mbabane',
    {
      label: '(GMT+02:00) South Africa Time - Mbabane',
      offset: 'GMT+02:00',
      tzCode: 'Africa/Mbabane',
    },
  ],
  [
    'Antarctica/Troll',
    {
      label: '(GMT+02:00) Troll',
      offset: 'GMT+02:00',
      tzCode: 'Antarctica/Troll',
    },
  ],
  [
    'Asia/Amman',
    {
      label: '(GMT+03:00) Amman',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Amman',
    },
  ],
  [
    'Asia/Aden',
    {
      label: '(GMT+03:00) Arabian Time - Aden',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Aden',
    },
  ],
  [
    'Asia/Baghdad',
    {
      label: '(GMT+03:00) Arabian Time - Baghdad',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Baghdad',
    },
  ],
  [
    'Asia/Bahrain',
    {
      label: '(GMT+03:00) Arabian Time - Bahrain',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Bahrain',
    },
  ],
  [
    'Asia/Kuwait',
    {
      label: '(GMT+03:00) Arabian Time - Kuwait',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Kuwait',
    },
  ],
  [
    'Asia/Qatar',
    {
      label: '(GMT+03:00) Arabian Time - Qatar',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Qatar',
    },
  ],
  [
    'Asia/Riyadh',
    {
      label: '(GMT+03:00) Arabian Time - Riyadh',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Riyadh',
    },
  ],
  [
    'Asia/Damascus',
    {
      label: '(GMT+03:00) Damascus',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Damascus',
    },
  ],
  [
    'Africa/Addis_Ababa',
    {
      label: '(GMT+03:00) East Africa Time - Addis Ababa',
      offset: 'GMT+03:00',
      tzCode: 'Africa/Addis_Ababa',
    },
  ],
  [
    'Indian/Antananarivo',
    {
      label: '(GMT+03:00) East Africa Time - Antananarivo',
      offset: 'GMT+03:00',
      tzCode: 'Indian/Antananarivo',
    },
  ],
  [
    'Africa/Asmera',
    {
      label: '(GMT+03:00) East Africa Time - Asmera',
      offset: 'GMT+03:00',
      tzCode: 'Africa/Asmera',
    },
  ],
  [
    'Indian/Comoro',
    {
      label: '(GMT+03:00) East Africa Time - Comoro',
      offset: 'GMT+03:00',
      tzCode: 'Indian/Comoro',
    },
  ],
  [
    'Africa/Dar_es_Salaam',
    {
      label: '(GMT+03:00) East Africa Time - Dar es Salaam',
      offset: 'GMT+03:00',
      tzCode: 'Africa/Dar_es_Salaam',
    },
  ],
  [
    'Africa/Djibouti',
    {
      label: '(GMT+03:00) East Africa Time - Djibouti',
      offset: 'GMT+03:00',
      tzCode: 'Africa/Djibouti',
    },
  ],
  [
    'Africa/Kampala',
    {
      label: '(GMT+03:00) East Africa Time - Kampala',
      offset: 'GMT+03:00',
      tzCode: 'Africa/Kampala',
    },
  ],
  [
    'Indian/Mayotte',
    {
      label: '(GMT+03:00) East Africa Time - Mayotte',
      offset: 'GMT+03:00',
      tzCode: 'Indian/Mayotte',
    },
  ],
  [
    'Africa/Mogadishu',
    {
      label: '(GMT+03:00) East Africa Time - Mogadishu',
      offset: 'GMT+03:00',
      tzCode: 'Africa/Mogadishu',
    },
  ],
  [
    'Africa/Nairobi',
    {
      label: '(GMT+03:00) East Africa Time - Nairobi',
      offset: 'GMT+03:00',
      tzCode: 'Africa/Nairobi',
    },
  ],
  [
    'Europe/Athens',
    {
      label: '(GMT+03:00) Eastern European Time - Athens',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Athens',
    },
  ],
  [
    'Asia/Beirut',
    {
      label: '(GMT+03:00) Eastern European Time - Beirut',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Beirut',
    },
  ],
  [
    'Europe/Bucharest',
    {
      label: '(GMT+03:00) Eastern European Time - Bucharest',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Bucharest',
    },
  ],
  [
    'Africa/Cairo',
    {
      label: '(GMT+03:00) Eastern European Time - Cairo',
      offset: 'GMT+03:00',
      tzCode: 'Africa/Cairo',
    },
  ],
  [
    'Europe/Chisinau',
    {
      label: '(GMT+03:00) Eastern European Time - Chisinau',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Chisinau',
    },
  ],
  [
    'Asia/Gaza',
    {
      label: '(GMT+03:00) Eastern European Time - Gaza',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Gaza',
    },
  ],
  [
    'Asia/Hebron',
    {
      label: '(GMT+03:00) Eastern European Time - Hebron',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Hebron',
    },
  ],
  [
    'Europe/Helsinki',
    {
      label: '(GMT+03:00) Eastern European Time - Helsinki',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Helsinki',
    },
  ],
  [
    'Europe/Kiev',
    {
      label: '(GMT+03:00) Eastern European Time - Kiev',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Kiev',
    },
  ],
  [
    'Europe/Mariehamn',
    {
      label: '(GMT+03:00) Eastern European Time - Mariehamn',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Mariehamn',
    },
  ],
  [
    'Asia/Nicosia',
    {
      label: '(GMT+03:00) Eastern European Time - Nicosia',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Nicosia',
    },
  ],
  [
    'Europe/Riga',
    {
      label: '(GMT+03:00) Eastern European Time - Riga',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Riga',
    },
  ],
  [
    'Europe/Sofia',
    {
      label: '(GMT+03:00) Eastern European Time - Sofia',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Sofia',
    },
  ],
  [
    'Europe/Tallinn',
    {
      label: '(GMT+03:00) Eastern European Time - Tallinn',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Tallinn',
    },
  ],
  [
    'Europe/Uzhgorod',
    {
      label: '(GMT+03:00) Eastern European Time - Uzhgorod',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Uzhgorod',
    },
  ],
  [
    'Europe/Vilnius',
    {
      label: '(GMT+03:00) Eastern European Time - Vilnius',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Vilnius',
    },
  ],
  [
    'Europe/Zaporozhye',
    {
      label: '(GMT+03:00) Eastern European Time - Zaporozhye',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Zaporozhye',
    },
  ],
  [
    'Asia/Famagusta',
    {
      label: '(GMT+03:00) Famagusta',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Famagusta',
    },
  ],
  [
    'Asia/Jerusalem',
    {
      label: '(GMT+03:00) Israel Time - Jerusalem',
      offset: 'GMT+03:00',
      tzCode: 'Asia/Jerusalem',
    },
  ],
  [
    'Europe/Istanbul',
    {
      label: '(GMT+03:00) Istanbul',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Istanbul',
    },
  ],
  [
    'Europe/Kirov',
    {
      label: '(GMT+03:00) Kirov',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Kirov',
    },
  ],
  [
    'Europe/Minsk',
    {
      label: '(GMT+03:00) Moscow Time - Minsk',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Minsk',
    },
  ],
  [
    'Europe/Moscow',
    {
      label: '(GMT+03:00) Moscow Time - Moscow',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Moscow',
    },
  ],
  [
    'Europe/Simferopol',
    {
      label: '(GMT+03:00) Moscow Time - Simferopol',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Simferopol',
    },
  ],
  [
    'Antarctica/Syowa',
    {
      label: '(GMT+03:00) Syowa Time - Syowa',
      offset: 'GMT+03:00',
      tzCode: 'Antarctica/Syowa',
    },
  ],
  [
    'Europe/Volgograd',
    {
      label: '(GMT+03:00) Volgograd Time - Volgograd',
      offset: 'GMT+03:00',
      tzCode: 'Europe/Volgograd',
    },
  ],
  [
    'Asia/Tehran',
    {
      label: '(GMT+03:30) Iran Time - Tehran',
      offset: 'GMT+03:30',
      tzCode: 'Asia/Tehran',
    },
  ],
  [
    'Asia/Yerevan',
    {
      label: '(GMT+04:00) Armenia Time - Yerevan',
      offset: 'GMT+04:00',
      tzCode: 'Asia/Yerevan',
    },
  ],
  [
    'Europe/Astrakhan',
    {
      label: '(GMT+04:00) Astrakhan',
      offset: 'GMT+04:00',
      tzCode: 'Europe/Astrakhan',
    },
  ],
  [
    'Asia/Baku',
    {
      label: '(GMT+04:00) Azerbaijan Time - Baku',
      offset: 'GMT+04:00',
      tzCode: 'Asia/Baku',
    },
  ],
  [
    'Asia/Tbilisi',
    {
      label: '(GMT+04:00) Georgia Time - Tbilisi',
      offset: 'GMT+04:00',
      tzCode: 'Asia/Tbilisi',
    },
  ],
  [
    'Asia/Dubai',
    {
      label: '(GMT+04:00) Gulf Time - Dubai',
      offset: 'GMT+04:00',
      tzCode: 'Asia/Dubai',
    },
  ],
  [
    'Asia/Muscat',
    {
      label: '(GMT+04:00) Gulf Time - Muscat',
      offset: 'GMT+04:00',
      tzCode: 'Asia/Muscat',
    },
  ],
  [
    'Indian/Mauritius',
    {
      label: '(GMT+04:00) Mauritius Time - Mauritius',
      offset: 'GMT+04:00',
      tzCode: 'Indian/Mauritius',
    },
  ],
  [
    'Indian/Reunion',
    {
      label: '(GMT+04:00) Réunion Time - Reunion',
      offset: 'GMT+04:00',
      tzCode: 'Indian/Reunion',
    },
  ],
  [
    'Europe/Samara',
    {
      label: '(GMT+04:00) Samara Time - Samara',
      offset: 'GMT+04:00',
      tzCode: 'Europe/Samara',
    },
  ],
  [
    'Europe/Saratov',
    {
      label: '(GMT+04:00) Saratov',
      offset: 'GMT+04:00',
      tzCode: 'Europe/Saratov',
    },
  ],
  [
    'Indian/Mahe',
    {
      label: '(GMT+04:00) Seychelles Time - Mahe',
      offset: 'GMT+04:00',
      tzCode: 'Indian/Mahe',
    },
  ],
  [
    'Europe/Ulyanovsk',
    {
      label: '(GMT+04:00) Ulyanovsk',
      offset: 'GMT+04:00',
      tzCode: 'Europe/Ulyanovsk',
    },
  ],
  [
    'Asia/Kabul',
    {
      label: '(GMT+04:30) Afghanistan Time - Kabul',
      offset: 'GMT+04:30',
      tzCode: 'Asia/Kabul',
    },
  ],
  [
    'Indian/Kerguelen',
    {
      label: '(GMT+05:00) French Southern &amp;amp; Antarctic Time - Kerguelen',
      offset: 'GMT+05:00',
      tzCode: 'Indian/Kerguelen',
    },
  ],
  [
    'Indian/Maldives',
    {
      label: '(GMT+05:00) Maldives Time - Maldives',
      offset: 'GMT+05:00',
      tzCode: 'Indian/Maldives',
    },
  ],
  [
    'Antarctica/Mawson',
    {
      label: '(GMT+05:00) Mawson Time - Mawson',
      offset: 'GMT+05:00',
      tzCode: 'Antarctica/Mawson',
    },
  ],
  [
    'Asia/Karachi',
    {
      label: '(GMT+05:00) Pakistan Time - Karachi',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Karachi',
    },
  ],
  [
    'Asia/Dushanbe',
    {
      label: '(GMT+05:00) Tajikistan Time - Dushanbe',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Dushanbe',
    },
  ],
  [
    'Asia/Ashgabat',
    {
      label: '(GMT+05:00) Turkmenistan Time - Ashgabat',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Ashgabat',
    },
  ],
  [
    'Asia/Samarkand',
    {
      label: '(GMT+05:00) Uzbekistan Time - Samarkand',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Samarkand',
    },
  ],
  [
    'Asia/Tashkent',
    {
      label: '(GMT+05:00) Uzbekistan Time - Tashkent',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Tashkent',
    },
  ],
  [
    'Asia/Aqtau',
    {
      label: '(GMT+05:00) West Kazakhstan Time - Aqtau',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Aqtau',
    },
  ],
  [
    'Asia/Aqtobe',
    {
      label: '(GMT+05:00) West Kazakhstan Time - Aqtobe',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Aqtobe',
    },
  ],
  [
    'Asia/Atyrau',
    {
      label: '(GMT+05:00) West Kazakhstan Time - Atyrau',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Atyrau',
    },
  ],
  [
    'Asia/Oral',
    {
      label: '(GMT+05:00) West Kazakhstan Time - Oral',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Oral',
    },
  ],
  [
    'Asia/Qyzylorda',
    {
      label: '(GMT+05:00) West Kazakhstan Time - Qyzylorda',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Qyzylorda',
    },
  ],
  [
    'Asia/Yekaterinburg',
    {
      label: '(GMT+05:00) Yekaterinburg Time - Yekaterinburg',
      offset: 'GMT+05:00',
      tzCode: 'Asia/Yekaterinburg',
    },
  ],
  [
    'Asia/Calcutta',
    {
      label: '(GMT+05:30) India Time - Calcutta',
      offset: 'GMT+05:30',
      tzCode: 'Asia/Calcutta',
    },
  ],
  [
    'Asia/Colombo',
    {
      label: '(GMT+05:30) India Time - Colombo',
      offset: 'GMT+05:30',
      tzCode: 'Asia/Colombo',
    },
  ],
  [
    'Asia/Katmandu',
    {
      label: '(GMT+05:45) Nepal Time - Katmandu',
      offset: 'GMT+05:45',
      tzCode: 'Asia/Katmandu',
    },
  ],
  [
    'Asia/Dhaka',
    {
      label: '(GMT+06:00) Bangladesh Time - Dhaka',
      offset: 'GMT+06:00',
      tzCode: 'Asia/Dhaka',
    },
  ],
  [
    'Asia/Thimphu',
    {
      label: '(GMT+06:00) Bhutan Time - Thimphu',
      offset: 'GMT+06:00',
      tzCode: 'Asia/Thimphu',
    },
  ],
  [
    'Asia/Almaty',
    {
      label: '(GMT+06:00) East Kazakhstan Time - Almaty',
      offset: 'GMT+06:00',
      tzCode: 'Asia/Almaty',
    },
  ],
  [
    'Asia/Qostanay',
    {
      label: '(GMT+06:00) East Kazakhstan Time - Qostanay',
      offset: 'GMT+06:00',
      tzCode: 'Asia/Qostanay',
    },
  ],
  [
    'Indian/Chagos',
    {
      label: '(GMT+06:00) Indian Ocean Time - Chagos',
      offset: 'GMT+06:00',
      tzCode: 'Indian/Chagos',
    },
  ],
  [
    'Asia/Bishkek',
    {
      label: '(GMT+06:00) Kyrgyzstan Time - Bishkek',
      offset: 'GMT+06:00',
      tzCode: 'Asia/Bishkek',
    },
  ],
  [
    'Asia/Omsk',
    {
      label: '(GMT+06:00) Omsk Time - Omsk',
      offset: 'GMT+06:00',
      tzCode: 'Asia/Omsk',
    },
  ],
  [
    'Asia/Urumqi',
    {
      label: '(GMT+06:00) Urumqi',
      offset: 'GMT+06:00',
      tzCode: 'Asia/Urumqi',
    },
  ],
  [
    'Antarctica/Vostok',
    {
      label: '(GMT+06:00) Vostok Time - Vostok',
      offset: 'GMT+06:00',
      tzCode: 'Antarctica/Vostok',
    },
  ],
  [
    'Indian/Cocos',
    {
      label: '(GMT+06:30) Cocos Islands Time - Cocos',
      offset: 'GMT+06:30',
      tzCode: 'Indian/Cocos',
    },
  ],
  [
    'Asia/Rangoon',
    {
      label: '(GMT+06:30) Myanmar Time - Rangoon',
      offset: 'GMT+06:30',
      tzCode: 'Asia/Rangoon',
    },
  ],
  [
    'Asia/Barnaul',
    {
      label: '(GMT+07:00) Barnaul',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Barnaul',
    },
  ],
  [
    'Indian/Christmas',
    {
      label: '(GMT+07:00) Christmas Island Time - Christmas',
      offset: 'GMT+07:00',
      tzCode: 'Indian/Christmas',
    },
  ],
  [
    'Antarctica/Davis',
    {
      label: '(GMT+07:00) Davis Time - Davis',
      offset: 'GMT+07:00',
      tzCode: 'Antarctica/Davis',
    },
  ],
  [
    'Asia/Hovd',
    {
      label: '(GMT+07:00) Hovd Time - Hovd',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Hovd',
    },
  ],
  [
    'Asia/Bangkok',
    {
      label: '(GMT+07:00) Indochina Time - Bangkok',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Bangkok',
    },
  ],
  [
    'Asia/Phnom_Penh',
    {
      label: '(GMT+07:00) Indochina Time - Phnom Penh',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Phnom_Penh',
    },
  ],
  [
    'Asia/Saigon',
    {
      label: '(GMT+07:00) Indochina Time - Saigon',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Saigon',
    },
  ],
  [
    'Asia/Vientiane',
    {
      label: '(GMT+07:00) Indochina Time - Vientiane',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Vientiane',
    },
  ],
  [
    'Asia/Krasnoyarsk',
    {
      label: '(GMT+07:00) Krasnoyarsk Time - Krasnoyarsk',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Krasnoyarsk',
    },
  ],
  [
    'Asia/Novokuznetsk',
    {
      label: '(GMT+07:00) Krasnoyarsk Time - Novokuznetsk',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Novokuznetsk',
    },
  ],
  [
    'Asia/Novosibirsk',
    {
      label: '(GMT+07:00) Novosibirsk Time - Novosibirsk',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Novosibirsk',
    },
  ],
  [
    'Asia/Tomsk',
    {
      label: '(GMT+07:00) Tomsk',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Tomsk',
    },
  ],
  [
    'Asia/Jakarta',
    {
      label: '(GMT+07:00) Western Indonesia Time - Jakarta',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Jakarta',
    },
  ],
  [
    'Asia/Pontianak',
    {
      label: '(GMT+07:00) Western Indonesia Time - Pontianak',
      offset: 'GMT+07:00',
      tzCode: 'Asia/Pontianak',
    },
  ],
  [
    'Australia/Perth',
    {
      label: '(GMT+08:00) Australian Western Time - Perth',
      offset: 'GMT+08:00',
      tzCode: 'Australia/Perth',
    },
  ],
  [
    'Asia/Brunei',
    {
      label: '(GMT+08:00) Brunei Darussalam Time - Brunei',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Brunei',
    },
  ],
  [
    'Asia/Makassar',
    {
      label: '(GMT+08:00) Central Indonesia Time - Makassar',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Makassar',
    },
  ],
  [
    'Asia/Macau',
    {
      label: '(GMT+08:00) China Time - Macau',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Macau',
    },
  ],
  [
    'Asia/Shanghai',
    {
      label: '(GMT+08:00) China Time - Shanghai',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Shanghai',
    },
  ],
  [
    'Asia/Hong_Kong',
    {
      label: '(GMT+08:00) Hong Kong Time - Hong Kong',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Hong_Kong',
    },
  ],
  [
    'Asia/Irkutsk',
    {
      label: '(GMT+08:00) Irkutsk Time - Irkutsk',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Irkutsk',
    },
  ],
  [
    'Asia/Kuala_Lumpur',
    {
      label: '(GMT+08:00) Malaysia Time - Kuala Lumpur',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Kuala_Lumpur',
    },
  ],
  [
    'Asia/Kuching',
    {
      label: '(GMT+08:00) Malaysia Time - Kuching',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Kuching',
    },
  ],
  [
    'Asia/Manila',
    {
      label: '(GMT+08:00) Philippine Time - Manila',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Manila',
    },
  ],
  [
    'Asia/Singapore',
    {
      label: '(GMT+08:00) Singapore Time - Singapore',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Singapore',
    },
  ],
  [
    'Asia/Taipei',
    {
      label: '(GMT+08:00) Taipei Time - Taipei',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Taipei',
    },
  ],
  [
    'Asia/Choibalsan',
    {
      label: '(GMT+08:00) Ulaanbaatar Time - Choibalsan',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Choibalsan',
    },
  ],
  [
    'Asia/Ulaanbaatar',
    {
      label: '(GMT+08:00) Ulaanbaatar Time - Ulaanbaatar',
      offset: 'GMT+08:00',
      tzCode: 'Asia/Ulaanbaatar',
    },
  ],
  [
    'Australia/Eucla',
    {
      label: '(GMT+08:45) Australian Central Western Time - Eucla',
      offset: 'GMT+08:45',
      tzCode: 'Australia/Eucla',
    },
  ],
  [
    'Asia/Dili',
    {
      label: '(GMT+09:00) East Timor Time - Dili',
      offset: 'GMT+09:00',
      tzCode: 'Asia/Dili',
    },
  ],
  [
    'Asia/Jayapura',
    {
      label: '(GMT+09:00) Eastern Indonesia Time - Jayapura',
      offset: 'GMT+09:00',
      tzCode: 'Asia/Jayapura',
    },
  ],
  [
    'Asia/Tokyo',
    {
      label: '(GMT+09:00) Japan Time - Tokyo',
      offset: 'GMT+09:00',
      tzCode: 'Asia/Tokyo',
    },
  ],
  [
    'Asia/Pyongyang',
    {
      label: '(GMT+09:00) Korean Time - Pyongyang',
      offset: 'GMT+09:00',
      tzCode: 'Asia/Pyongyang',
    },
  ],
  [
    'Asia/Seoul',
    {
      label: '(GMT+09:00) Korean Time - Seoul',
      offset: 'GMT+09:00',
      tzCode: 'Asia/Seoul',
    },
  ],
  [
    'Pacific/Palau',
    {
      label: '(GMT+09:00) Palau Time - Palau',
      offset: 'GMT+09:00',
      tzCode: 'Pacific/Palau',
    },
  ],
  [
    'Asia/Chita',
    {
      label: '(GMT+09:00) Yakutsk Time - Chita',
      offset: 'GMT+09:00',
      tzCode: 'Asia/Chita',
    },
  ],
  [
    'Asia/Khandyga',
    {
      label: '(GMT+09:00) Yakutsk Time - Khandyga',
      offset: 'GMT+09:00',
      tzCode: 'Asia/Khandyga',
    },
  ],
  [
    'Asia/Yakutsk',
    {
      label: '(GMT+09:00) Yakutsk Time - Yakutsk',
      offset: 'GMT+09:00',
      tzCode: 'Asia/Yakutsk',
    },
  ],
  [
    'Australia/Adelaide',
    {
      label: '(GMT+09:30) Australian Central Time - Adelaide',
      offset: 'GMT+09:30',
      tzCode: 'Australia/Adelaide',
    },
  ],
  [
    'Australia/Broken_Hill',
    {
      label: '(GMT+09:30) Australian Central Time - Broken Hill',
      offset: 'GMT+09:30',
      tzCode: 'Australia/Broken_Hill',
    },
  ],
  [
    'Australia/Darwin',
    {
      label: '(GMT+09:30) Australian Central Time - Darwin',
      offset: 'GMT+09:30',
      tzCode: 'Australia/Darwin',
    },
  ],
  [
    'Australia/Brisbane',
    {
      label: '(GMT+10:00) Australian Eastern Time - Brisbane',
      offset: 'GMT+10:00',
      tzCode: 'Australia/Brisbane',
    },
  ],
  [
    'Australia/Currie',
    {
      label: '(GMT+10:00) Australian Eastern Time - Currie',
      offset: 'GMT+10:00',
      tzCode: 'Australia/Currie',
    },
  ],
  [
    'Australia/Hobart',
    {
      label: '(GMT+10:00) Australian Eastern Time - Hobart',
      offset: 'GMT+10:00',
      tzCode: 'Australia/Hobart',
    },
  ],
  [
    'Australia/Lindeman',
    {
      label: '(GMT+10:00) Australian Eastern Time - Lindeman',
      offset: 'GMT+10:00',
      tzCode: 'Australia/Lindeman',
    },
  ],
  [
    'Antarctica/Macquarie',
    {
      label: '(GMT+10:00) Australian Eastern Time - Macquarie',
      offset: 'GMT+10:00',
      tzCode: 'Antarctica/Macquarie',
    },
  ],
  [
    'Australia/Melbourne',
    {
      label: '(GMT+10:00) Australian Eastern Time - Melbourne',
      offset: 'GMT+10:00',
      tzCode: 'Australia/Melbourne',
    },
  ],
  [
    'Australia/Sydney',
    {
      label: '(GMT+10:00) Australian Eastern Time - Sydney',
      offset: 'GMT+10:00',
      tzCode: 'Australia/Sydney',
    },
  ],
  [
    'Pacific/Guam',
    {
      label: '(GMT+10:00) Chamorro Time - Guam',
      offset: 'GMT+10:00',
      tzCode: 'Pacific/Guam',
    },
  ],
  [
    'Pacific/Saipan',
    {
      label: '(GMT+10:00) Chamorro Time - Saipan',
      offset: 'GMT+10:00',
      tzCode: 'Pacific/Saipan',
    },
  ],
  [
    'Pacific/Truk',
    {
      label: '(GMT+10:00) Chuuk Time - Truk',
      offset: 'GMT+10:00',
      tzCode: 'Pacific/Truk',
    },
  ],
  [
    'Antarctica/DumontDUrville',
    {
      label: '(GMT+10:00) Dumont-d’Urville Time - DumontDUrville',
      offset: 'GMT+10:00',
      tzCode: 'Antarctica/DumontDUrville',
    },
  ],
  [
    'Pacific/Port_Moresby',
    {
      label: '(GMT+10:00) Papua New Guinea Time - Port Moresby',
      offset: 'GMT+10:00',
      tzCode: 'Pacific/Port_Moresby',
    },
  ],
  [
    'Asia/Ust-Nera',
    {
      label: '(GMT+10:00) Vladivostok Time - Ust-Nera',
      offset: 'GMT+10:00',
      tzCode: 'Asia/Ust-Nera',
    },
  ],
  [
    'Asia/Vladivostok',
    {
      label: '(GMT+10:00) Vladivostok Time - Vladivostok',
      offset: 'GMT+10:00',
      tzCode: 'Asia/Vladivostok',
    },
  ],
  [
    'Australia/Lord_Howe',
    {
      label: '(GMT+10:30) Lord Howe Time - Lord Howe',
      offset: 'GMT+10:30',
      tzCode: 'Australia/Lord_Howe',
    },
  ],
  [
    'Pacific/Bougainville',
    {
      label: '(GMT+11:00) Bougainville',
      offset: 'GMT+11:00',
      tzCode: 'Pacific/Bougainville',
    },
  ],
  [
    'Antarctica/Casey',
    {
      label: '(GMT+11:00) Casey Time - Casey',
      offset: 'GMT+11:00',
      tzCode: 'Antarctica/Casey',
    },
  ],
  [
    'Pacific/Kosrae',
    {
      label: '(GMT+11:00) Kosrae Time - Kosrae',
      offset: 'GMT+11:00',
      tzCode: 'Pacific/Kosrae',
    },
  ],
  [
    'Asia/Magadan',
    {
      label: '(GMT+11:00) Magadan Time - Magadan',
      offset: 'GMT+11:00',
      tzCode: 'Asia/Magadan',
    },
  ],
  [
    'Pacific/Noumea',
    {
      label: '(GMT+11:00) New Caledonia Time - Noumea',
      offset: 'GMT+11:00',
      tzCode: 'Pacific/Noumea',
    },
  ],
  [
    'Pacific/Norfolk',
    {
      label: '(GMT+11:00) Norfolk Island Time - Norfolk',
      offset: 'GMT+11:00',
      tzCode: 'Pacific/Norfolk',
    },
  ],
  [
    'Pacific/Ponape',
    {
      label: '(GMT+11:00) Ponape Time - Ponape',
      offset: 'GMT+11:00',
      tzCode: 'Pacific/Ponape',
    },
  ],
  [
    'Asia/Sakhalin',
    {
      label: '(GMT+11:00) Sakhalin Time - Sakhalin',
      offset: 'GMT+11:00',
      tzCode: 'Asia/Sakhalin',
    },
  ],
  [
    'Pacific/Guadalcanal',
    {
      label: '(GMT+11:00) Solomon Islands Time - Guadalcanal',
      offset: 'GMT+11:00',
      tzCode: 'Pacific/Guadalcanal',
    },
  ],
  [
    'Asia/Srednekolymsk',
    {
      label: '(GMT+11:00) Srednekolymsk',
      offset: 'GMT+11:00',
      tzCode: 'Asia/Srednekolymsk',
    },
  ],
  [
    'Pacific/Efate',
    {
      label: '(GMT+11:00) Vanuatu Time - Efate',
      offset: 'GMT+11:00',
      tzCode: 'Pacific/Efate',
    },
  ],
  [
    'Asia/Anadyr',
    {
      label: '(GMT+12:00) Anadyr Time - Anadyr',
      offset: 'GMT+12:00',
      tzCode: 'Asia/Anadyr',
    },
  ],
  [
    'Pacific/Fiji',
    {
      label: '(GMT+12:00) Fiji Time - Fiji',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Fiji',
    },
  ],
  [
    'Pacific/Tarawa',
    {
      label: '(GMT+12:00) Gilbert Islands Time - Tarawa',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Tarawa',
    },
  ],
  [
    'Pacific/Kwajalein',
    {
      label: '(GMT+12:00) Marshall Islands Time - Kwajalein',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Kwajalein',
    },
  ],
  [
    'Pacific/Majuro',
    {
      label: '(GMT+12:00) Marshall Islands Time - Majuro',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Majuro',
    },
  ],
  [
    'Pacific/Nauru',
    {
      label: '(GMT+12:00) Nauru Time - Nauru',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Nauru',
    },
  ],
  [
    'Pacific/Auckland',
    {
      label: '(GMT+12:00) New Zealand Time - Auckland',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Auckland',
    },
  ],
  [
    'Antarctica/McMurdo',
    {
      label: '(GMT+12:00) New Zealand Time - McMurdo',
      offset: 'GMT+12:00',
      tzCode: 'Antarctica/McMurdo',
    },
  ],
  [
    'Asia/Kamchatka',
    {
      label: '(GMT+12:00) Petropavlovsk-Kamchatski Time - Kamchatka',
      offset: 'GMT+12:00',
      tzCode: 'Asia/Kamchatka',
    },
  ],
  [
    'Pacific/Funafuti',
    {
      label: '(GMT+12:00) Tuvalu Time - Funafuti',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Funafuti',
    },
  ],
  [
    'Pacific/Wake',
    {
      label: '(GMT+12:00) Wake Island Time - Wake',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Wake',
    },
  ],
  [
    'Pacific/Wallis',
    {
      label: '(GMT+12:00) Wallis &amp;amp; Futuna Time - Wallis',
      offset: 'GMT+12:00',
      tzCode: 'Pacific/Wallis',
    },
  ],
  [
    'Pacific/Chatham',
    {
      label: '(GMT+12:45) Chatham Time - Chatham',
      offset: 'GMT+12:45',
      tzCode: 'Pacific/Chatham',
    },
  ],
  [
    'Pacific/Apia',
    {
      label: '(GMT+13:00) Apia Time - Apia',
      offset: 'GMT+13:00',
      tzCode: 'Pacific/Apia',
    },
  ],
  [
    'Pacific/Enderbury',
    {
      label: '(GMT+13:00) Phoenix Islands Time - Enderbury',
      offset: 'GMT+13:00',
      tzCode: 'Pacific/Enderbury',
    },
  ],
  [
    'Pacific/Fakaofo',
    {
      label: '(GMT+13:00) Tokelau Time - Fakaofo',
      offset: 'GMT+13:00',
      tzCode: 'Pacific/Fakaofo',
    },
  ],
  [
    'Pacific/Tongatapu',
    {
      label: '(GMT+13:00) Tonga Time - Tongatapu',
      offset: 'GMT+13:00',
      tzCode: 'Pacific/Tongatapu',
    },
  ],
  [
    'Pacific/Kiritimati',
    {
      label: '(GMT+14:00) Line Islands Time - Kiritimati',
      offset: 'GMT+14:00',
      tzCode: 'Pacific/Kiritimati',
    },
  ],
])
