export const APP_ROUTES = {
  CALENDAR: '/calendar',
  EXPLORE: '/explore',
  NOTIFICATIONS: '/notifications',
  BOOKMARKS: '/bookmarks',
  PROFILE: '/[username]',
  SETTINGS: '/settings',
  SIGN_OUT: '/sign-out',
  CREATE_EVENT: '/create/event'
} as const

export const AUTH_ROUTES = {
  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',
  FORGOT_PASSWORD: '/forgot-password',
  UPDATE_PASSWORD: '/update-password',
  MAGIC_LINK: '/magic-link',
} as const

export const MARKETING_ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const

export const LEGAL_ROUTES = {
  ALLOWED: '/allowed',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const

export const CALENDAR_ROUTES = {
  MONTH: 'month',
  WEEK: 'week',
  DAY: 'day',
} as const

export const CALENDAR_LINKS = [
  {
    name: 'month',
    route: CALENDAR_ROUTES.MONTH,
  },
  {
    name: 'week',
    route: CALENDAR_ROUTES.WEEK,
  },
  {
    name: 'day',
    route: CALENDAR_ROUTES.DAY,
  },
] as const

export const NAV_LINKS = [
  {
    name: 'calendar',
    route: APP_ROUTES.CALENDAR,
    icon: 'calendar',
    links: CALENDAR_LINKS,
  },
  {
    name: 'explore',
    route: APP_ROUTES.EXPLORE,
    icon: 'bullhorn',
    links: null
  },
  {
    name: 'notifications',
    route: APP_ROUTES.NOTIFICATIONS,
    icon: 'bell',
    links: null
  },
  {
    name: 'bookmarks',
    route: APP_ROUTES.BOOKMARKS,
    icon: 'bookmark',
    links: null
  },
  {
    name: 'settings',
    route: APP_ROUTES.SETTINGS,
    icon: 'gear',
    links: null
  },
  {
    name: 'profile',
    route: APP_ROUTES.PROFILE,
    icon: 'user',
    links: null
  },
] as const

export const FOOTER_LINKS = [
  {
    name: 'terms of service',
    route: LEGAL_ROUTES.TERMS,
  },
  {
    name: 'privacy policy',
    route: LEGAL_ROUTES.PRIVACY,
  },
  {
    name: 'allowed use',
    route: LEGAL_ROUTES.ALLOWED,
  },
] as const

export const ALL_ROUTES = {
  ...APP_ROUTES,
  ...AUTH_ROUTES,
  ...MARKETING_ROUTES,
  ...LEGAL_ROUTES,
} as const

export const LOGGED_OUT_ROUTES = new Set<string>([
  AUTH_ROUTES.SIGN_UP,
  AUTH_ROUTES.SIGN_IN,
  AUTH_ROUTES.FORGOT_PASSWORD,
  AUTH_ROUTES.UPDATE_PASSWORD,
  AUTH_ROUTES.MAGIC_LINK,
  MARKETING_ROUTES.HOME,
])

export const PROTECTED_ROUTES = new Set<string>([
  APP_ROUTES.CALENDAR,
  APP_ROUTES.EXPLORE,
  APP_ROUTES.NOTIFICATIONS,
  APP_ROUTES.BOOKMARKS,
  APP_ROUTES.SETTINGS,
  APP_ROUTES.SIGN_OUT,
])
