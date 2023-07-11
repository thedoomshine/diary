export const APP_ROUTES = {
  CALENDAR: '/calendar',
  EXPLORE: '/explore',
  NOTIFICATIONS: '/notifications',
  BOOKMARKS: '/bookmarks',
  SETTINGS: '/settings',
  HOME: '/',
  PROFILE: '/',
  SIGN_OUT: '/sign-out',
} as const

export const AUTH_ROUTES = {
  SIGN_UP: '/sign-up',
  SIGN_IN: '/sign-in',
  FORGOT_PASSWORD: '/forgot-password',
  UPDATE_PASSWORD: '/update-password',
  MAGIC_LINK: '/magic-link',
} as const

export const CALENDAR_ROUTES = {
  MONTH: '/month',
  WEEK: '/week',
  DAY: '/day',
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
]

export const ROUTES = {
  ...APP_ROUTES,
  ...AUTH_ROUTES,
} as const

export const NAV_LINKS = [
  {
    name: 'calendar',
    route: `${APP_ROUTES.CALENDAR}`,
    icon: 'calendar',
    links: CALENDAR_LINKS,
  },
  {
    name: 'explore',
    route: APP_ROUTES.EXPLORE,
    icon: 'bullhorn',
  },
  {
    name: 'notifications',
    route: APP_ROUTES.NOTIFICATIONS,
    icon: 'bell',
  },
  {
    name: 'bookmarks',
    route: APP_ROUTES.BOOKMARKS,
    icon: 'bookmark',
  },
  {
    name: 'settings',
    route: APP_ROUTES.SETTINGS,
    icon: 'gear',
  },
  {
    name: 'profile',
    route: APP_ROUTES.PROFILE,
    icon: 'user',
  },
]
