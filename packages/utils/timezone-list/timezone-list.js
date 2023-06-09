/**
 * @fileoverview
 *
 * This package contains an array of timezones based on conventional options found online.
 * It does not follow any complete data set, but all names are according to the tz format:
 * https://en.wikipedia.org/wiki/List_of_tz_database_time_zones.
 *
 * More specifically, the fields in the array are:
 * - label, a readable label that contains the offset and a longer, descriptive label of the timezone
 * - tzCode, the value from the tz standard
 */

/**
 *
 * @type {Array.<{ tzCode: string, label: string }>}
 */
module.exports = [
  { tzCode: 'Pacific/Pago_Pago', label: '(GMT-11:00) Samoa Time - Pago Pago' },
  { tzCode: 'Pacific/Midway', label: '(GMT-11:00) Samoa Time - Midway' },
  { tzCode: 'Pacific/Niue', label: '(GMT-11:00) Niue Time - Niue' },
  { tzCode: 'Pacific/Tahiti', label: '(GMT-10:00) Tahiti Time - Tahiti' },
  {
    tzCode: 'Pacific/Johnston',
    label: '(GMT-10:00) Hawaii-Aleutian Time - Johnston',
  },
  {
    tzCode: 'Pacific/Honolulu',
    label: '(GMT-10:00) Hawaii-Aleutian Time - Honolulu',
  },
  {
    tzCode: 'Pacific/Rarotonga',
    label: '(GMT-10:00) Cook Islands Time - Rarotonga',
  },
  {
    tzCode: 'Pacific/Marquesas',
    label: '(GMT-09:30) Marquesas Time - Marquesas',
  },
  { tzCode: 'America/Adak', label: '(GMT-09:00) Hawaii-Aleutian Time - Adak' },
  { tzCode: 'Pacific/Gambier', label: '(GMT-09:00) Gambier Time - Gambier' },
  { tzCode: 'Pacific/Pitcairn', label: '(GMT-08:00) Pitcairn Time - Pitcairn' },
  { tzCode: 'America/Yakutat', label: '(GMT-08:00) Alaska Time - Yakutat' },
  { tzCode: 'America/Sitka', label: '(GMT-08:00) Alaska Time - Sitka' },
  { tzCode: 'America/Nome', label: '(GMT-08:00) Alaska Time - Nome' },
  {
    tzCode: 'America/Metlakatla',
    label: '(GMT-08:00) Alaska Time - Metlakatla',
  },
  { tzCode: 'America/Juneau', label: '(GMT-08:00) Alaska Time - Juneau' },
  { tzCode: 'America/Anchorage', label: '(GMT-08:00) Alaska Time - Anchorage' },
  {
    tzCode: 'America/Whitehorse',
    label: '(GMT-07:00) Yukon Time - Whitehorse',
  },
  { tzCode: 'America/Dawson', label: '(GMT-07:00) Yukon Time - Dawson' },
  {
    tzCode: 'America/Vancouver',
    label: '(GMT-07:00) Pacific Time - Vancouver',
  },
  { tzCode: 'America/Tijuana', label: '(GMT-07:00) Pacific Time - Tijuana' },
  {
    tzCode: 'America/Los_Angeles',
    label: '(GMT-07:00) Pacific Time - Los Angeles',
  },
  {
    tzCode: 'America/Santa_Isabel',
    label: '(GMT-07:00) Northwest Mexico Time - Santa Isabel',
  },
  { tzCode: 'America/Phoenix', label: '(GMT-07:00) Mountain Time - Phoenix' },
  {
    tzCode: 'America/Fort_Nelson',
    label: '(GMT-07:00) Mountain Time - Fort Nelson',
  },
  {
    tzCode: 'America/Dawson_Creek',
    label: '(GMT-07:00) Mountain Time - Dawson Creek',
  },
  { tzCode: 'America/Creston', label: '(GMT-07:00) Mountain Time - Creston' },
  {
    tzCode: 'America/Mazatlan',
    label: '(GMT-07:00) Mexican Pacific Time - Mazatlan',
  },
  {
    tzCode: 'America/Hermosillo',
    label: '(GMT-07:00) Mexican Pacific Time - Hermosillo',
  },
  {
    tzCode: 'America/Yellowknife',
    label: '(GMT-06:00) Mountain Time - Yellowknife',
  },
  { tzCode: 'America/Inuvik', label: '(GMT-06:00) Mountain Time - Inuvik' },
  { tzCode: 'America/Edmonton', label: '(GMT-06:00) Mountain Time - Edmonton' },
  { tzCode: 'America/Denver', label: '(GMT-06:00) Mountain Time - Denver' },
  {
    tzCode: 'America/Ciudad_Juarez',
    label: '(GMT-06:00) Mountain Time - Ciudad Juarez',
  },
  {
    tzCode: 'America/Cambridge_Bay',
    label: '(GMT-06:00) Mountain Time - Cambridge Bay',
  },
  { tzCode: 'America/Boise', label: '(GMT-06:00) Mountain Time - Boise' },
  {
    tzCode: 'Pacific/Galapagos',
    label: '(GMT-06:00) Galapagos Time - Galapagos',
  },
  {
    tzCode: 'Pacific/Easter',
    label: '(GMT-06:00) Easter Island Time - Easter',
  },
  {
    tzCode: 'America/Tegucigalpa',
    label: '(GMT-06:00) Central Time - Tegucigalpa',
  },
  {
    tzCode: 'America/Swift_Current',
    label: '(GMT-06:00) Central Time - Swift Current',
  },
  { tzCode: 'America/Regina', label: '(GMT-06:00) Central Time - Regina' },
  {
    tzCode: 'America/Monterrey',
    label: '(GMT-06:00) Central Time - Monterrey',
  },
  {
    tzCode: 'America/Mexico_City',
    label: '(GMT-06:00) Central Time - Mexico City',
  },
  { tzCode: 'America/Merida', label: '(GMT-06:00) Central Time - Merida' },
  { tzCode: 'America/Managua', label: '(GMT-06:00) Central Time - Managua' },
  {
    tzCode: 'America/Guatemala',
    label: '(GMT-06:00) Central Time - Guatemala',
  },
  {
    tzCode: 'America/El_Salvador',
    label: '(GMT-06:00) Central Time - El Salvador',
  },
  {
    tzCode: 'America/Costa_Rica',
    label: '(GMT-06:00) Central Time - Costa Rica',
  },
  {
    tzCode: 'America/Chihuahua',
    label: '(GMT-06:00) Central Time - Chihuahua',
  },
  { tzCode: 'America/Belize', label: '(GMT-06:00) Central Time - Belize' },
  {
    tzCode: 'America/Bahia_Banderas',
    label: '(GMT-06:00) Central Time - Bahia Banderas',
  },
  { tzCode: 'America/Lima', label: '(GMT-05:00) Peru Time - Lima' },
  {
    tzCode: 'America/Guayaquil',
    label: '(GMT-05:00) Ecuador Time - Guayaquil',
  },
  { tzCode: 'America/Panama', label: '(GMT-05:00) Eastern Time - Panama' },
  { tzCode: 'America/Jamaica', label: '(GMT-05:00) Eastern Time - Jamaica' },
  {
    tzCode: 'America/Coral_Harbour',
    label: '(GMT-05:00) Eastern Time - Coral Harbour',
  },
  { tzCode: 'America/Cayman', label: '(GMT-05:00) Eastern Time - Cayman' },
  { tzCode: 'America/Cancun', label: '(GMT-05:00) Eastern Time - Cancun' },
  { tzCode: 'America/Bogota', label: '(GMT-05:00) Colombia Time - Bogota' },
  { tzCode: 'America/Winnipeg', label: '(GMT-05:00) Central Time - Winnipeg' },
  {
    tzCode: 'America/Indiana/Tell_City',
    label: '(GMT-05:00) Central Time - Tell City, Indiana',
  },
  { tzCode: 'America/Resolute', label: '(GMT-05:00) Central Time - Resolute' },
  {
    tzCode: 'America/Rankin_Inlet',
    label: '(GMT-05:00) Central Time - Rankin Inlet',
  },
  {
    tzCode: 'America/Rainy_River',
    label: '(GMT-05:00) Central Time - Rainy River',
  },
  { tzCode: 'America/Ojinaga', label: '(GMT-05:00) Central Time - Ojinaga' },
  {
    tzCode: 'America/North_Dakota/New_Salem',
    label: '(GMT-05:00) Central Time - New Salem, North Dakota',
  },
  {
    tzCode: 'America/Menominee',
    label: '(GMT-05:00) Central Time - Menominee',
  },
  {
    tzCode: 'America/Matamoros',
    label: '(GMT-05:00) Central Time - Matamoros',
  },
  {
    tzCode: 'America/Indiana/Knox',
    label: '(GMT-05:00) Central Time - Knox, Indiana',
  },
  { tzCode: 'America/Chicago', label: '(GMT-05:00) Central Time - Chicago' },
  {
    tzCode: 'America/North_Dakota/Center',
    label: '(GMT-05:00) Central Time - Center, North Dakota',
  },
  {
    tzCode: 'America/North_Dakota/Beulah',
    label: '(GMT-05:00) Central Time - Beulah, North Dakota',
  },
  { tzCode: 'America/Rio_Branco', label: '(GMT-05:00) Acre Time - Rio Branco' },
  { tzCode: 'America/Eirunepe', label: '(GMT-05:00) Acre Time - Eirunepe' },
  { tzCode: 'America/Caracas', label: '(GMT-04:00) Venezuela Time - Caracas' },
  { tzCode: 'America/Asuncion', label: '(GMT-04:00) Paraguay Time - Asuncion' },
  { tzCode: 'America/Montreal', label: '(GMT-04:00) Montreal' },
  { tzCode: 'America/Guyana', label: '(GMT-04:00) Guyana Time - Guyana' },
  {
    tzCode: 'America/Indiana/Winamac',
    label: '(GMT-04:00) Eastern Time - Winamac, Indiana',
  },
  {
    tzCode: 'America/Indiana/Vincennes',
    label: '(GMT-04:00) Eastern Time - Vincennes, Indiana',
  },
  {
    tzCode: 'America/Indiana/Vevay',
    label: '(GMT-04:00) Eastern Time - Vevay, Indiana',
  },
  { tzCode: 'America/Toronto', label: '(GMT-04:00) Eastern Time - Toronto' },
  {
    tzCode: 'America/Thunder_Bay',
    label: '(GMT-04:00) Eastern Time - Thunder Bay',
  },
  {
    tzCode: 'America/Port-au-Prince',
    label: '(GMT-04:00) Eastern Time - Port-au-Prince',
  },
  {
    tzCode: 'America/Indiana/Petersburg',
    label: '(GMT-04:00) Eastern Time - Petersburg, Indiana',
  },
  {
    tzCode: 'America/Pangnirtung',
    label: '(GMT-04:00) Eastern Time - Pangnirtung',
  },
  { tzCode: 'America/Nipigon', label: '(GMT-04:00) Eastern Time - Nipigon' },
  { tzCode: 'America/New_York', label: '(GMT-04:00) Eastern Time - New York' },
  { tzCode: 'America/Nassau', label: '(GMT-04:00) Eastern Time - Nassau' },
  {
    tzCode: 'America/Kentucky/Monticello',
    label: '(GMT-04:00) Eastern Time - Monticello, Kentucky',
  },
  {
    tzCode: 'America/Indiana/Marengo',
    label: '(GMT-04:00) Eastern Time - Marengo, Indiana',
  },
  {
    tzCode: 'America/Louisville',
    label: '(GMT-04:00) Eastern Time - Louisville',
  },
  { tzCode: 'America/Iqaluit', label: '(GMT-04:00) Eastern Time - Iqaluit' },
  {
    tzCode: 'America/Indianapolis',
    label: '(GMT-04:00) Eastern Time - Indianapolis',
  },
  {
    tzCode: 'America/Grand_Turk',
    label: '(GMT-04:00) Eastern Time - Grand Turk',
  },
  { tzCode: 'America/Detroit', label: '(GMT-04:00) Eastern Time - Detroit' },
  { tzCode: 'America/Havana', label: '(GMT-04:00) Cuba Time - Havana' },
  { tzCode: 'America/Santiago', label: '(GMT-04:00) Chile Time - Santiago' },
  { tzCode: 'America/La_Paz', label: '(GMT-04:00) Bolivia Time - La Paz' },
  { tzCode: 'America/Tortola', label: '(GMT-04:00) Atlantic Time - Tortola' },
  {
    tzCode: 'America/St_Vincent',
    label: '(GMT-04:00) Atlantic Time - St Vincent',
  },
  {
    tzCode: 'America/St_Thomas',
    label: '(GMT-04:00) Atlantic Time - St Thomas',
  },
  { tzCode: 'America/St_Lucia', label: '(GMT-04:00) Atlantic Time - St Lucia' },
  { tzCode: 'America/St_Kitts', label: '(GMT-04:00) Atlantic Time - St Kitts' },
  {
    tzCode: 'America/St_Barthelemy',
    label: '(GMT-04:00) Atlantic Time - St Barthelemy',
  },
  {
    tzCode: 'America/Santo_Domingo',
    label: '(GMT-04:00) Atlantic Time - Santo Domingo',
  },
  {
    tzCode: 'America/Puerto_Rico',
    label: '(GMT-04:00) Atlantic Time - Puerto Rico',
  },
  {
    tzCode: 'America/Port_of_Spain',
    label: '(GMT-04:00) Atlantic Time - Port of Spain',
  },
  {
    tzCode: 'America/Montserrat',
    label: '(GMT-04:00) Atlantic Time - Montserrat',
  },
  {
    tzCode: 'America/Martinique',
    label: '(GMT-04:00) Atlantic Time - Martinique',
  },
  { tzCode: 'America/Marigot', label: '(GMT-04:00) Atlantic Time - Marigot' },
  {
    tzCode: 'America/Lower_Princes',
    label: '(GMT-04:00) Atlantic Time - Lower Princes',
  },
  {
    tzCode: 'America/Kralendijk',
    label: '(GMT-04:00) Atlantic Time - Kralendijk',
  },
  {
    tzCode: 'America/Guadeloupe',
    label: '(GMT-04:00) Atlantic Time - Guadeloupe',
  },
  { tzCode: 'America/Grenada', label: '(GMT-04:00) Atlantic Time - Grenada' },
  { tzCode: 'America/Dominica', label: '(GMT-04:00) Atlantic Time - Dominica' },
  { tzCode: 'America/Curacao', label: '(GMT-04:00) Atlantic Time - Curacao' },
  {
    tzCode: 'America/Blanc-Sablon',
    label: '(GMT-04:00) Atlantic Time - Blanc-Sablon',
  },
  { tzCode: 'America/Barbados', label: '(GMT-04:00) Atlantic Time - Barbados' },
  { tzCode: 'America/Aruba', label: '(GMT-04:00) Atlantic Time - Aruba' },
  { tzCode: 'America/Antigua', label: '(GMT-04:00) Atlantic Time - Antigua' },
  { tzCode: 'America/Anguilla', label: '(GMT-04:00) Atlantic Time - Anguilla' },
  {
    tzCode: 'America/Porto_Velho',
    label: '(GMT-04:00) Amazon Time - Porto Velho',
  },
  { tzCode: 'America/Manaus', label: '(GMT-04:00) Amazon Time - Manaus' },
  { tzCode: 'America/Cuiaba', label: '(GMT-04:00) Amazon Time - Cuiaba' },
  {
    tzCode: 'America/Campo_Grande',
    label: '(GMT-04:00) Amazon Time - Campo Grande',
  },
  { tzCode: 'America/Boa_Vista', label: '(GMT-04:00) Amazon Time - Boa Vista' },
  {
    tzCode: 'America/Montevideo',
    label: '(GMT-03:00) Uruguay Time - Montevideo',
  },
  {
    tzCode: 'America/Paramaribo',
    label: '(GMT-03:00) Suriname Time - Paramaribo',
  },
  { tzCode: 'Antarctica/Rothera', label: '(GMT-03:00) Rothera Time - Rothera' },
  { tzCode: 'America/Punta_Arenas', label: '(GMT-03:00) Punta Arenas' },
  { tzCode: 'Antarctica/Palmer', label: '(GMT-03:00) Palmer' },
  {
    tzCode: 'America/Cayenne',
    label: '(GMT-03:00) French Guiana Time - Cayenne',
  },
  {
    tzCode: 'Atlantic/Stanley',
    label: '(GMT-03:00) Falkland Islands Time - Stanley',
  },
  {
    tzCode: 'America/Sao_Paulo',
    label: '(GMT-03:00) Brasilia Time - Sao Paulo',
  },
  { tzCode: 'America/Santarem', label: '(GMT-03:00) Brasilia Time - Santarem' },
  { tzCode: 'America/Recife', label: '(GMT-03:00) Brasilia Time - Recife' },
  { tzCode: 'America/Maceio', label: '(GMT-03:00) Brasilia Time - Maceio' },
  {
    tzCode: 'America/Fortaleza',
    label: '(GMT-03:00) Brasilia Time - Fortaleza',
  },
  { tzCode: 'America/Belem', label: '(GMT-03:00) Brasilia Time - Belem' },
  { tzCode: 'America/Bahia', label: '(GMT-03:00) Brasilia Time - Bahia' },
  {
    tzCode: 'America/Araguaina',
    label: '(GMT-03:00) Brasilia Time - Araguaina',
  },
  { tzCode: 'America/Thule', label: '(GMT-03:00) Atlantic Time - Thule' },
  { tzCode: 'America/Moncton', label: '(GMT-03:00) Atlantic Time - Moncton' },
  { tzCode: 'America/Halifax', label: '(GMT-03:00) Atlantic Time - Halifax' },
  {
    tzCode: 'America/Goose_Bay',
    label: '(GMT-03:00) Atlantic Time - Goose Bay',
  },
  {
    tzCode: 'America/Glace_Bay',
    label: '(GMT-03:00) Atlantic Time - Glace Bay',
  },
  { tzCode: 'Atlantic/Bermuda', label: '(GMT-03:00) Atlantic Time - Bermuda' },
  {
    tzCode: 'America/Argentina/Ushuaia',
    label: '(GMT-03:00) Argentina Time - Ushuaia, Argentina',
  },
  {
    tzCode: 'America/Argentina/Tucuman',
    label: '(GMT-03:00) Argentina Time - Tucuman, Argentina',
  },
  {
    tzCode: 'America/Argentina/San_Luis',
    label: '(GMT-03:00) Argentina Time - San Luis, Argentina',
  },
  {
    tzCode: 'America/Argentina/San_Juan',
    label: '(GMT-03:00) Argentina Time - San Juan, Argentina',
  },
  {
    tzCode: 'America/Argentina/Salta',
    label: '(GMT-03:00) Argentina Time - Salta, Argentina',
  },
  {
    tzCode: 'America/Argentina/Rio_Gallegos',
    label: '(GMT-03:00) Argentina Time - Rio Gallegos, Argentina',
  },
  { tzCode: 'America/Mendoza', label: '(GMT-03:00) Argentina Time - Mendoza' },
  {
    tzCode: 'America/Argentina/La_Rioja',
    label: '(GMT-03:00) Argentina Time - La Rioja, Argentina',
  },
  { tzCode: 'America/Jujuy', label: '(GMT-03:00) Argentina Time - Jujuy' },
  { tzCode: 'America/Cordoba', label: '(GMT-03:00) Argentina Time - Cordoba' },
  {
    tzCode: 'America/Catamarca',
    label: '(GMT-03:00) Argentina Time - Catamarca',
  },
  {
    tzCode: 'America/Buenos_Aires',
    label: '(GMT-03:00) Argentina Time - Buenos Aires',
  },
  {
    tzCode: 'America/St_Johns',
    label: '(GMT-02:30) Newfoundland Time - St Johns',
  },
  {
    tzCode: 'America/Godthab',
    label: '(GMT-02:00) West Greenland Time - Godthab',
  },
  {
    tzCode: 'America/Miquelon',
    label: '(GMT-02:00) St. Pierre & Miquelon Time - Miquelon',
  },
  {
    tzCode: 'Atlantic/South_Georgia',
    label: '(GMT-02:00) South Georgia Time - South Georgia',
  },
  {
    tzCode: 'America/Noronha',
    label: '(GMT-02:00) Fernando de Noronha Time - Noronha',
  },
  {
    tzCode: 'Atlantic/Cape_Verde',
    label: '(GMT-01:00) Cape Verde Time - Cape Verde',
  },
  { tzCode: 'Atlantic/Azores', label: '(GMT+00:00) Azores Time - Azores' },
  {
    tzCode: 'America/Scoresbysund',
    label: '(GMT+00:00) East Greenland Time - Scoresbysund',
  },
  {
    tzCode: 'Africa/Abidjan',
    label: '(GMT+00:00) Greenwich Mean Time - Abidjan',
  },
  { tzCode: 'Africa/Accra', label: '(GMT+00:00) Greenwich Mean Time - Accra' },
  {
    tzCode: 'Africa/Bamako',
    label: '(GMT+00:00) Greenwich Mean Time - Bamako',
  },
  {
    tzCode: 'Africa/Banjul',
    label: '(GMT+00:00) Greenwich Mean Time - Banjul',
  },
  {
    tzCode: 'Africa/Bissau',
    label: '(GMT+00:00) Greenwich Mean Time - Bissau',
  },
  {
    tzCode: 'Africa/Conakry',
    label: '(GMT+00:00) Greenwich Mean Time - Conakry',
  },
  { tzCode: 'Africa/Dakar', label: '(GMT+00:00) Greenwich Mean Time - Dakar' },
  {
    tzCode: 'America/Danmarkshavn',
    label: '(GMT+00:00) Greenwich Mean Time - Danmarkshavn',
  },
  {
    tzCode: 'Africa/Freetown',
    label: '(GMT+00:00) Greenwich Mean Time - Freetown',
  },
  { tzCode: 'Africa/Lome', label: '(GMT+00:00) Greenwich Mean Time - Lome' },
  {
    tzCode: 'Africa/Monrovia',
    label: '(GMT+00:00) Greenwich Mean Time - Monrovia',
  },
  {
    tzCode: 'Africa/Nouakchott',
    label: '(GMT+00:00) Greenwich Mean Time - Nouakchott',
  },
  {
    tzCode: 'Africa/Ouagadougou',
    label: '(GMT+00:00) Greenwich Mean Time - Ouagadougou',
  },
  {
    tzCode: 'Atlantic/Reykjavik',
    label: '(GMT+00:00) Greenwich Mean Time - Reykjavik',
  },
  {
    tzCode: 'Africa/Sao_Tome',
    label: '(GMT+00:00) Greenwich Mean Time - Sao Tome',
  },
  {
    tzCode: 'Atlantic/St_Helena',
    label: '(GMT+00:00) Greenwich Mean Time - St Helena',
  },
  { tzCode: 'Europe/London', label: '(GMT+01:00) British Time - London' },
  { tzCode: 'Africa/Casablanca', label: '(GMT+01:00) Casablanca' },
  {
    tzCode: 'Africa/Algiers',
    label: '(GMT+01:00) Central European Time - Algiers',
  },
  {
    tzCode: 'Africa/Tunis',
    label: '(GMT+01:00) Central European Time - Tunis',
  },
  { tzCode: 'Africa/El_Aaiun', label: '(GMT+01:00) El Aaiun' },
  { tzCode: 'Europe/Guernsey', label: '(GMT+01:00) Guernsey' },
  { tzCode: 'Europe/Dublin', label: '(GMT+01:00) Irish Time - Dublin' },
  { tzCode: 'Europe/Isle_of_Man', label: '(GMT+01:00) Isle of Man' },
  { tzCode: 'Europe/Jersey', label: '(GMT+01:00) Jersey' },
  {
    tzCode: 'Africa/Bangui',
    label: '(GMT+01:00) West Africa Time - Bangui',
  },
  {
    tzCode: 'Africa/Brazzaville',
    label: '(GMT+01:00) West Africa Time - Brazzaville',
  },
  {
    tzCode: 'Africa/Douala',
    label: '(GMT+01:00) West Africa Time - Douala',
  },
  {
    tzCode: 'Africa/Kinshasa',
    label: '(GMT+01:00) West Africa Time - Kinshasa',
  },
  {
    tzCode: 'Africa/Lagos',
    label: '(GMT+01:00) West Africa Time - Lagos',
  },
  {
    tzCode: 'Africa/Libreville',
    label: '(GMT+01:00) West Africa Time - Libreville',
  },
  {
    tzCode: 'Africa/Luanda',
    label: '(GMT+01:00) West Africa Time - Luanda',
  },
  {
    tzCode: 'Africa/Malabo',
    label: '(GMT+01:00) West Africa Time - Malabo',
  },
  {
    tzCode: 'Africa/Ndjamena',
    label: '(GMT+01:00) West Africa Time - Ndjamena',
  },
  {
    tzCode: 'Africa/Niamey',
    label: '(GMT+01:00) West Africa Time - Niamey',
  },
  {
    tzCode: 'Africa/Porto-Novo',
    label: '(GMT+01:00) West Africa Time - Porto-Novo',
  },
  {
    tzCode: 'Atlantic/Canary',
    label: '(GMT+01:00) Western European Time - Canary',
  },
  {
    tzCode: 'Atlantic/Faeroe',
    label: '(GMT+01:00) Western European Time - Faeroe',
  },
  {
    tzCode: 'Europe/Lisbon',
    label: '(GMT+01:00) Western European Time - Lisbon',
  },
  {
    tzCode: 'Atlantic/Madeira',
    label: '(GMT+01:00) Western European Time - Madeira',
  },
  {
    tzCode: 'Africa/Blantyre',
    label: '(GMT+02:00) Central Africa Time - Blantyre',
  },
  {
    tzCode: 'Africa/Bujumbura',
    label: '(GMT+02:00) Central Africa Time - Bujumbura',
  },
  {
    tzCode: 'Africa/Gaborone',
    label: '(GMT+02:00) Central Africa Time - Gaborone',
  },
  {
    tzCode: 'Africa/Harare',
    label: '(GMT+02:00) Central Africa Time - Harare',
  },
  { tzCode: 'Africa/Juba', label: '(GMT+02:00) Central Africa Time - Juba' },
  {
    tzCode: 'Africa/Khartoum',
    label: '(GMT+02:00) Central Africa Time - Khartoum',
  },
  {
    tzCode: 'Africa/Kigali',
    label: '(GMT+02:00) Central Africa Time - Kigali',
  },
  {
    tzCode: 'Africa/Lubumbashi',
    label: '(GMT+02:00) Central Africa Time - Lubumbashi',
  },
  {
    tzCode: 'Africa/Lusaka',
    label: '(GMT+02:00) Central Africa Time - Lusaka',
  },
  {
    tzCode: 'Africa/Maputo',
    label: '(GMT+02:00) Central Africa Time - Maputo',
  },
  {
    tzCode: 'Africa/Windhoek',
    label: '(GMT+02:00) Central Africa Time - Windhoek',
  },
  {
    tzCode: 'Europe/Amsterdam',
    label: '(GMT+02:00) Central European Time - Amsterdam',
  },
  {
    tzCode: 'Europe/Andorra',
    label: '(GMT+02:00) Central European Time - Andorra',
  },
  {
    tzCode: 'Europe/Belgrade',
    label: '(GMT+02:00) Central European Time - Belgrade',
  },
  {
    tzCode: 'Europe/Berlin',
    label: '(GMT+02:00) Central European Time - Berlin',
  },
  {
    tzCode: 'Europe/Bratislava',
    label: '(GMT+02:00) Central European Time - Bratislava',
  },
  {
    tzCode: 'Europe/Brussels',
    label: '(GMT+02:00) Central European Time - Brussels',
  },
  {
    tzCode: 'Europe/Budapest',
    label: '(GMT+02:00) Central European Time - Budapest',
  },
  {
    tzCode: 'Europe/Busingen',
    label: '(GMT+02:00) Central European Time - Busingen',
  },
  {
    tzCode: 'Africa/Ceuta',
    label: '(GMT+02:00) Central European Time - Ceuta',
  },
  {
    tzCode: 'Europe/Copenhagen',
    label: '(GMT+02:00) Central European Time - Copenhagen',
  },
  {
    tzCode: 'Europe/Gibraltar',
    label: '(GMT+02:00) Central European Time - Gibraltar',
  },
  {
    tzCode: 'Europe/Ljubljana',
    label: '(GMT+02:00) Central European Time - Ljubljana',
  },
  {
    tzCode: 'Arctic/Longyearbyen',
    label: '(GMT+02:00) Central European Time - Longyearbyen',
  },
  {
    tzCode: 'Europe/Luxembourg',
    label: '(GMT+02:00) Central European Time - Luxembourg',
  },
  {
    tzCode: 'Europe/Madrid',
    label: '(GMT+02:00) Central European Time - Madrid',
  },
  {
    tzCode: 'Europe/Malta',
    label: '(GMT+02:00) Central European Time - Malta',
  },
  {
    tzCode: 'Europe/Monaco',
    label: '(GMT+02:00) Central European Time - Monaco',
  },
  {
    tzCode: 'Europe/Oslo',
    label: '(GMT+02:00) Central European Time - Oslo',
  },
  {
    tzCode: 'Europe/Paris',
    label: '(GMT+02:00) Central European Time - Paris',
  },
  {
    tzCode: 'Europe/Podgorica',
    label: '(GMT+02:00) Central European Time - Podgorica',
  },
  {
    tzCode: 'Europe/Prague',
    label: '(GMT+02:00) Central European Time - Prague',
  },
  {
    tzCode: 'Europe/Rome',
    label: '(GMT+02:00) Central European Time - Rome',
  },
  {
    tzCode: 'Europe/San_Marino',
    label: '(GMT+02:00) Central European Time - San Marino',
  },
  {
    tzCode: 'Europe/Sarajevo',
    label: '(GMT+02:00) Central European Time - Sarajevo',
  },
  {
    tzCode: 'Europe/Skopje',
    label: '(GMT+02:00) Central European Time - Skopje',
  },
  {
    tzCode: 'Europe/Stockholm',
    label: '(GMT+02:00) Central European Time - Stockholm',
  },
  {
    tzCode: 'Europe/Tirane',
    label: '(GMT+02:00) Central European Time - Tirane',
  },
  {
    tzCode: 'Europe/Vaduz',
    label: '(GMT+02:00) Central European Time - Vaduz',
  },
  {
    tzCode: 'Europe/Vatican',
    label: '(GMT+02:00) Central European Time - Vatican',
  },
  {
    tzCode: 'Europe/Vienna',
    label: '(GMT+02:00) Central European Time - Vienna',
  },
  {
    tzCode: 'Europe/Warsaw',
    label: '(GMT+02:00) Central European Time - Warsaw',
  },
  {
    tzCode: 'Europe/Zagreb',
    label: '(GMT+02:00) Central European Time - Zagreb',
  },
  {
    tzCode: 'Europe/Zurich',
    label: '(GMT+02:00) Central European Time - Zurich',
  },
  {
    tzCode: 'Europe/Kaliningrad',
    label: '(GMT+02:00) Eastern European Time - Kaliningrad',
  },
  {
    tzCode: 'Africa/Tripoli',
    label: '(GMT+02:00) Eastern European Time - Tripoli',
  },
  {
    tzCode: 'Africa/Johannesburg',
    label: '(GMT+02:00) South Africa Time - Johannesburg',
  },
  {
    tzCode: 'Africa/Maseru',
    label: '(GMT+02:00) South Africa Time - Maseru',
  },
  {
    tzCode: 'Africa/Mbabane',
    label: '(GMT+02:00) South Africa Time - Mbabane',
  },
  { tzCode: 'Antarctica/Troll', label: '(GMT+02:00) Troll' },
  { tzCode: 'Asia/Amman', label: '(GMT+03:00) Amman' },
  { tzCode: 'Asia/Aden', label: '(GMT+03:00) Arabian Time - Aden' },
  { tzCode: 'Asia/Baghdad', label: '(GMT+03:00) Arabian Time - Baghdad' },
  { tzCode: 'Asia/Bahrain', label: '(GMT+03:00) Arabian Time - Bahrain' },
  { tzCode: 'Asia/Kuwait', label: '(GMT+03:00) Arabian Time - Kuwait' },
  { tzCode: 'Asia/Qatar', label: '(GMT+03:00) Arabian Time - Qatar' },
  { tzCode: 'Asia/Riyadh', label: '(GMT+03:00) Arabian Time - Riyadh' },
  { tzCode: 'Asia/Damascus', label: '(GMT+03:00) Damascus' },
  {
    tzCode: 'Africa/Addis_Ababa',
    label: '(GMT+03:00) East Africa Time - Addis Ababa',
  },
  {
    tzCode: 'Indian/Antananarivo',
    label: '(GMT+03:00) East Africa Time - Antananarivo',
  },
  { tzCode: 'Africa/Asmera', label: '(GMT+03:00) East Africa Time - Asmera' },
  { tzCode: 'Indian/Comoro', label: '(GMT+03:00) East Africa Time - Comoro' },
  {
    tzCode: 'Africa/Dar_es_Salaam',
    label: '(GMT+03:00) East Africa Time - Dar es Salaam',
  },
  {
    tzCode: 'Africa/Djibouti',
    label: '(GMT+03:00) East Africa Time - Djibouti',
  },
  { tzCode: 'Africa/Kampala', label: '(GMT+03:00) East Africa Time - Kampala' },
  { tzCode: 'Indian/Mayotte', label: '(GMT+03:00) East Africa Time - Mayotte' },
  {
    tzCode: 'Africa/Mogadishu',
    label: '(GMT+03:00) East Africa Time - Mogadishu',
  },
  { tzCode: 'Africa/Nairobi', label: '(GMT+03:00) East Africa Time - Nairobi' },
  {
    tzCode: 'Europe/Athens',
    label: '(GMT+03:00) Eastern European Time - Athens',
  },
  {
    tzCode: 'Asia/Beirut',
    label: '(GMT+03:00) Eastern European Time - Beirut',
  },
  {
    tzCode: 'Europe/Bucharest',
    label: '(GMT+03:00) Eastern European Time - Bucharest',
  },
  {
    tzCode: 'Africa/Cairo',
    label: '(GMT+03:00) Eastern European Time - Cairo',
  },
  {
    tzCode: 'Europe/Chisinau',
    label: '(GMT+03:00) Eastern European Time - Chisinau',
  },
  { tzCode: 'Asia/Gaza', label: '(GMT+03:00) Eastern European Time - Gaza' },
  {
    tzCode: 'Asia/Hebron',
    label: '(GMT+03:00) Eastern European Time - Hebron',
  },
  {
    tzCode: 'Europe/Helsinki',
    label: '(GMT+03:00) Eastern European Time - Helsinki',
  },
  {
    tzCode: 'Europe/Kiev',
    label: '(GMT+03:00) Eastern European Time - Kiev',
  },
  {
    tzCode: 'Europe/Mariehamn',
    label: '(GMT+03:00) Eastern European Time - Mariehamn',
  },
  {
    tzCode: 'Asia/Nicosia',
    label: '(GMT+03:00) Eastern European Time - Nicosia',
  },
  {
    tzCode: 'Europe/Riga',
    label: '(GMT+03:00) Eastern European Time - Riga',
  },
  {
    tzCode: 'Europe/Sofia',
    label: '(GMT+03:00) Eastern European Time - Sofia',
  },
  {
    tzCode: 'Europe/Tallinn',
    label: '(GMT+03:00) Eastern European Time - Tallinn',
  },
  {
    tzCode: 'Europe/Uzhgorod',
    label: '(GMT+03:00) Eastern European Time - Uzhgorod',
  },
  {
    tzCode: 'Europe/Vilnius',
    label: '(GMT+03:00) Eastern European Time - Vilnius',
  },
  {
    tzCode: 'Europe/Zaporozhye',
    label: '(GMT+03:00) Eastern European Time - Zaporozhye',
  },
  { tzCode: 'Asia/Famagusta', label: '(GMT+03:00) Famagusta' },
  {
    tzCode: 'Asia/Jerusalem',
    label: '(GMT+03:00) Israel Time - Jerusalem',
  },
  { tzCode: 'Europe/Istanbul', label: '(GMT+03:00) Istanbul' },
  { tzCode: 'Europe/Kirov', label: '(GMT+03:00) Kirov' },
  { tzCode: 'Europe/Minsk', label: '(GMT+03:00) Moscow Time - Minsk' },
  { tzCode: 'Europe/Moscow', label: '(GMT+03:00) Moscow Time - Moscow' },
  {
    tzCode: 'Europe/Simferopol',
    label: '(GMT+03:00) Moscow Time - Simferopol',
  },
  { tzCode: 'Antarctica/Syowa', label: '(GMT+03:00) Syowa Time - Syowa' },
  {
    tzCode: 'Europe/Volgograd',
    label: '(GMT+03:00) Volgograd Time - Volgograd',
  },
  { tzCode: 'Asia/Tehran', label: '(GMT+03:30) Iran Time - Tehran' },
  { tzCode: 'Asia/Yerevan', label: '(GMT+04:00) Armenia Time - Yerevan' },
  { tzCode: 'Europe/Astrakhan', label: '(GMT+04:00) Astrakhan' },
  { tzCode: 'Asia/Baku', label: '(GMT+04:00) Azerbaijan Time - Baku' },
  { tzCode: 'Asia/Tbilisi', label: '(GMT+04:00) Georgia Time - Tbilisi' },
  { tzCode: 'Asia/Dubai', label: '(GMT+04:00) Gulf Time - Dubai' },
  { tzCode: 'Asia/Muscat', label: '(GMT+04:00) Gulf Time - Muscat' },
  {
    tzCode: 'Indian/Mauritius',
    label: '(GMT+04:00) Mauritius Time - Mauritius',
  },
  { tzCode: 'Indian/Reunion', label: '(GMT+04:00) Réunion Time - Reunion' },
  { tzCode: 'Europe/Samara', label: '(GMT+04:00) Samara Time - Samara' },
  { tzCode: 'Europe/Saratov', label: '(GMT+04:00) Saratov' },
  { tzCode: 'Indian/Mahe', label: '(GMT+04:00) Seychelles Time - Mahe' },
  { tzCode: 'Europe/Ulyanovsk', label: '(GMT+04:00) Ulyanovsk' },
  { tzCode: 'Asia/Kabul', label: '(GMT+04:30) Afghanistan Time - Kabul' },
  {
    tzCode: 'Indian/Kerguelen',
    label: '(GMT+05:00) French Southern & Antarctic Time - Kerguelen',
  },
  { tzCode: 'Indian/Maldives', label: '(GMT+05:00) Maldives Time - Maldives' },
  { tzCode: 'Antarctica/Mawson', label: '(GMT+05:00) Mawson Time - Mawson' },
  { tzCode: 'Asia/Karachi', label: '(GMT+05:00) Pakistan Time - Karachi' },
  { tzCode: 'Asia/Dushanbe', label: '(GMT+05:00) Tajikistan Time - Dushanbe' },
  {
    tzCode: 'Asia/Ashgabat',
    label: '(GMT+05:00) Turkmenistan Time - Ashgabat',
  },
  {
    tzCode: 'Asia/Samarkand',
    label: '(GMT+05:00) Uzbekistan Time - Samarkand',
  },
  {
    tzCode: 'Asia/Tashkent',
    label: '(GMT+05:00) Uzbekistan Time - Tashkent',
  },
  { tzCode: 'Asia/Aqtau', label: '(GMT+05:00) West Kazakhstan Time - Aqtau' },
  { tzCode: 'Asia/Aqtobe', label: '(GMT+05:00) West Kazakhstan Time - Aqtobe' },
  { tzCode: 'Asia/Atyrau', label: '(GMT+05:00) West Kazakhstan Time - Atyrau' },
  { tzCode: 'Asia/Oral', label: '(GMT+05:00) West Kazakhstan Time - Oral' },
  {
    tzCode: 'Asia/Qyzylorda',
    label: '(GMT+05:00) West Kazakhstan Time - Qyzylorda',
  },
  {
    tzCode: 'Asia/Yekaterinburg',
    label: '(GMT+05:00) Yekaterinburg Time - Yekaterinburg',
  },
  { tzCode: 'Asia/Calcutta', label: '(GMT+05:30) India Time - Calcutta' },
  { tzCode: 'Asia/Colombo', label: '(GMT+05:30) India Time - Colombo' },
  { tzCode: 'Asia/Katmandu', label: '(GMT+05:45) Nepal Time - Katmandu' },
  { tzCode: 'Asia/Dhaka', label: '(GMT+06:00) Bangladesh Time - Dhaka' },
  { tzCode: 'Asia/Thimphu', label: '(GMT+06:00) Bhutan Time - Thimphu' },
  { tzCode: 'Asia/Almaty', label: '(GMT+06:00) East Kazakhstan Time - Almaty' },
  {
    tzCode: 'Asia/Qostanay',
    label: '(GMT+06:00) East Kazakhstan Time - Qostanay',
  },
  { tzCode: 'Indian/Chagos', label: '(GMT+06:00) Indian Ocean Time - Chagos' },
  { tzCode: 'Asia/Bishkek', label: '(GMT+06:00) Kyrgyzstan Time - Bishkek' },
  { tzCode: 'Asia/Omsk', label: '(GMT+06:00) Omsk Time - Omsk' },
  { tzCode: 'Asia/Urumqi', label: '(GMT+06:00) Urumqi' },
  { tzCode: 'Antarctica/Vostok', label: '(GMT+06:00) Vostok Time - Vostok' },
  { tzCode: 'Indian/Cocos', label: '(GMT+06:30) Cocos Islands Time - Cocos' },
  { tzCode: 'Asia/Rangoon', label: '(GMT+06:30) Myanmar Time - Rangoon' },
  { tzCode: 'Asia/Barnaul', label: '(GMT+07:00) Barnaul' },
  {
    tzCode: 'Indian/Christmas',
    label: '(GMT+07:00) Christmas Island Time - Christmas',
  },
  { tzCode: 'Antarctica/Davis', label: '(GMT+07:00) Davis Time - Davis' },
  { tzCode: 'Asia/Hovd', label: '(GMT+07:00) Hovd Time - Hovd' },
  { tzCode: 'Asia/Bangkok', label: '(GMT+07:00) Indochina Time - Bangkok' },
  {
    tzCode: 'Asia/Phnom_Penh',
    label: '(GMT+07:00) Indochina Time - Phnom Penh',
  },
  { tzCode: 'Asia/Saigon', label: '(GMT+07:00) Indochina Time - Saigon' },
  { tzCode: 'Asia/Vientiane', label: '(GMT+07:00) Indochina Time - Vientiane' },
  {
    tzCode: 'Asia/Krasnoyarsk',
    label: '(GMT+07:00) Krasnoyarsk Time - Krasnoyarsk',
  },
  {
    tzCode: 'Asia/Novokuznetsk',
    label: '(GMT+07:00) Krasnoyarsk Time - Novokuznetsk',
  },
  {
    tzCode: 'Asia/Novosibirsk',
    label: '(GMT+07:00) Novosibirsk Time - Novosibirsk',
  },
  { tzCode: 'Asia/Tomsk', label: '(GMT+07:00) Tomsk' },
  {
    tzCode: 'Asia/Jakarta',
    label: '(GMT+07:00) Western Indonesia Time - Jakarta',
  },
  {
    tzCode: 'Asia/Pontianak',
    label: '(GMT+07:00) Western Indonesia Time - Pontianak',
  },
  {
    tzCode: 'Australia/Perth',
    label: '(GMT+08:00) Australian Western Time - Perth',
  },
  {
    tzCode: 'Asia/Brunei',
    label: '(GMT+08:00) Brunei Darussalam Time - Brunei',
  },
  {
    tzCode: 'Asia/Makassar',
    label: '(GMT+08:00) Central Indonesia Time - Makassar',
  },
  { tzCode: 'Asia/Macau', label: '(GMT+08:00) China Time - Macau' },
  { tzCode: 'Asia/Shanghai', label: '(GMT+08:00) China Time - Shanghai' },
  {
    tzCode: 'Asia/Hong_Kong',
    label: '(GMT+08:00) Hong Kong Time - Hong Kong',
  },
  { tzCode: 'Asia/Irkutsk', label: '(GMT+08:00) Irkutsk Time - Irkutsk' },
  {
    tzCode: 'Asia/Kuala_Lumpur',
    label: '(GMT+08:00) Malaysia Time - Kuala Lumpur',
  },
  { tzCode: 'Asia/Kuching', label: '(GMT+08:00) Malaysia Time - Kuching' },
  { tzCode: 'Asia/Manila', label: '(GMT+08:00) Philippine Time - Manila' },
  {
    tzCode: 'Asia/Singapore',
    label: '(GMT+08:00) Singapore Time - Singapore',
  },
  { tzCode: 'Asia/Taipei', label: '(GMT+08:00) Taipei Time - Taipei' },
  {
    tzCode: 'Asia/Choibalsan',
    label: '(GMT+08:00) Ulaanbaatar Time - Choibalsan',
  },
  {
    tzCode: 'Asia/Ulaanbaatar',
    label: '(GMT+08:00) Ulaanbaatar Time - Ulaanbaatar',
  },
  {
    tzCode: 'Australia/Eucla',
    label: '(GMT+08:45) Australian Central Western Time - Eucla',
  },
  { tzCode: 'Asia/Dili', label: '(GMT+09:00) East Timor Time - Dili' },
  {
    tzCode: 'Asia/Jayapura',
    label: '(GMT+09:00) Eastern Indonesia Time - Jayapura',
  },
  { tzCode: 'Asia/Tokyo', label: '(GMT+09:00) Japan Time - Tokyo' },
  {
    tzCode: 'Asia/Pyongyang',
    label: '(GMT+09:00) Korean Time - Pyongyang',
  },
  { tzCode: 'Asia/Seoul', label: '(GMT+09:00) Korean Time - Seoul' },
  { tzCode: 'Pacific/Palau', label: '(GMT+09:00) Palau Time - Palau' },
  { tzCode: 'Asia/Chita', label: '(GMT+09:00) Yakutsk Time - Chita' },
  {
    tzCode: 'Asia/Khandyga',
    label: '(GMT+09:00) Yakutsk Time - Khandyga',
  },
  { tzCode: 'Asia/Yakutsk', label: '(GMT+09:00) Yakutsk Time - Yakutsk' },
  {
    tzCode: 'Australia/Adelaide',
    label: '(GMT+09:30) Australian Central Time - Adelaide',
  },
  {
    tzCode: 'Australia/Broken_Hill',
    label: '(GMT+09:30) Australian Central Time - Broken Hill',
  },
  {
    tzCode: 'Australia/Darwin',
    label: '(GMT+09:30) Australian Central Time - Darwin',
  },
  {
    tzCode: 'Australia/Brisbane',
    label: '(GMT+10:00) Australian Eastern Time - Brisbane',
  },
  {
    tzCode: 'Australia/Currie',
    label: '(GMT+10:00) Australian Eastern Time - Currie',
  },
  {
    tzCode: 'Australia/Hobart',
    label: '(GMT+10:00) Australian Eastern Time - Hobart',
  },
  {
    tzCode: 'Australia/Lindeman',
    label: '(GMT+10:00) Australian Eastern Time - Lindeman',
  },
  {
    tzCode: 'Antarctica/Macquarie',
    label: '(GMT+10:00) Australian Eastern Time - Macquarie',
  },
  {
    tzCode: 'Australia/Melbourne',
    label: '(GMT+10:00) Australian Eastern Time - Melbourne',
  },
  {
    tzCode: 'Australia/Sydney',
    label: '(GMT+10:00) Australian Eastern Time - Sydney',
  },
  { tzCode: 'Pacific/Guam', label: '(GMT+10:00) Chamorro Time - Guam' },
  {
    tzCode: 'Pacific/Saipan',
    label: '(GMT+10:00) Chamorro Time - Saipan',
  },
  { tzCode: 'Pacific/Truk', label: '(GMT+10:00) Chuuk Time - Truk' },
  {
    tzCode: 'Antarctica/DumontDUrville',
    label: '(GMT+10:00) Dumont-d’Urville Time - DumontDUrville',
  },
  {
    tzCode: 'Pacific/Port_Moresby',
    label: '(GMT+10:00) Papua New Guinea Time - Port Moresby',
  },
  {
    tzCode: 'Asia/Ust-Nera',
    label: '(GMT+10:00) Vladivostok Time - Ust-Nera',
  },
  {
    tzCode: 'Asia/Vladivostok',
    label: '(GMT+10:00) Vladivostok Time - Vladivostok',
  },
  {
    tzCode: 'Australia/Lord_Howe',
    label: '(GMT+10:30) Lord Howe Time - Lord Howe',
  },
  { tzCode: 'Pacific/Bougainville', label: '(GMT+11:00) Bougainville' },
  { tzCode: 'Antarctica/Casey', label: '(GMT+11:00) Casey Time - Casey' },
  { tzCode: 'Pacific/Kosrae', label: '(GMT+11:00) Kosrae Time - Kosrae' },
  { tzCode: 'Asia/Magadan', label: '(GMT+11:00) Magadan Time - Magadan' },
  {
    tzCode: 'Pacific/Noumea',
    label: '(GMT+11:00) New Caledonia Time - Noumea',
  },
  {
    tzCode: 'Pacific/Norfolk',
    label: '(GMT+11:00) Norfolk Island Time - Norfolk',
  },
  { tzCode: 'Pacific/Ponape', label: '(GMT+11:00) Ponape Time - Ponape' },
  {
    tzCode: 'Asia/Sakhalin',
    label: '(GMT+11:00) Sakhalin Time - Sakhalin',
  },
  {
    tzCode: 'Pacific/Guadalcanal',
    label: '(GMT+11:00) Solomon Islands Time - Guadalcanal',
  },
  { tzCode: 'Asia/Srednekolymsk', label: '(GMT+11:00) Srednekolymsk' },
  { tzCode: 'Pacific/Efate', label: '(GMT+11:00) Vanuatu Time - Efate' },
  { tzCode: 'Asia/Anadyr', label: '(GMT+12:00) Anadyr Time - Anadyr' },
  { tzCode: 'Pacific/Fiji', label: '(GMT+12:00) Fiji Time - Fiji' },
  {
    tzCode: 'Pacific/Tarawa',
    label: '(GMT+12:00) Gilbert Islands Time - Tarawa',
  },
  {
    tzCode: 'Pacific/Kwajalein',
    label: '(GMT+12:00) Marshall Islands Time - Kwajalein',
  },
  {
    tzCode: 'Pacific/Majuro',
    label: '(GMT+12:00) Marshall Islands Time - Majuro',
  },
  { tzCode: 'Pacific/Nauru', label: '(GMT+12:00) Nauru Time - Nauru' },
  {
    tzCode: 'Pacific/Auckland',
    label: '(GMT+12:00) New Zealand Time - Auckland',
  },
  {
    tzCode: 'Antarctica/McMurdo',
    label: '(GMT+12:00) New Zealand Time - McMurdo',
  },
  {
    tzCode: 'Asia/Kamchatka',
    label: '(GMT+12:00) Petropavlovsk-Kamchatski Time - Kamchatka',
  },
  { tzCode: 'Pacific/Funafuti', label: '(GMT+12:00) Tuvalu Time - Funafuti' },
  { tzCode: 'Pacific/Wake', label: '(GMT+12:00) Wake Island Time - Wake' },
  {
    tzCode: 'Pacific/Wallis',
    label: '(GMT+12:00) Wallis & Futuna Time - Wallis',
  },
  {
    tzCode: 'Pacific/Chatham',
    label: '(GMT+12:45) Chatham Time - Chatham',
  },
  { tzCode: 'Pacific/Apia', label: '(GMT+13:00) Apia Time - Apia' },
  {
    tzCode: 'Pacific/Enderbury',
    label: '(GMT+13:00) Phoenix Islands Time - Enderbury',
  },
  { tzCode: 'Pacific/Fakaofo', label: '(GMT+13:00) Tokelau Time - Fakaofo' },
  {
    tzCode: 'Pacific/Tongatapu',
    label: '(GMT+13:00) Tonga Time - Tongatapu',
  },
  {
    tzCode: 'Pacific/Kiritimati',
    label: '(GMT+14:00) Line Islands Time - Kiritimati',
  },
]
