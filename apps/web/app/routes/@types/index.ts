export enum APP_ROUTE {
  DASHBOARD = '/dashboard',
  EXPLORE = '/explore',
  NOTIFICATIONS = '/notifications',
  BOOKMARKS = '/bookmarks',
  SETTINGS = '/settings',
  HOME = '/',
}

export enum AUTH_ROUTE {
  SIGN_UP = '/sign-up',
  SIGN_IN = '/sign-in',
  SIGN_OUT = '/sign-out',
}

export const ROUTES = {
  ...APP_ROUTE,
  ...AUTH_ROUTE,
} as const

export const NAV_LINKS = [
  {
    name: 'home',
    route: APP_ROUTE.HOME,
    icon: 'home'
  },
  {
    name: 'explore',
    route: APP_ROUTE.EXPLORE,
    icon: 'bullhorn'
  },
  {
    name: 'notifications',
    route: APP_ROUTE.NOTIFICATIONS,
    icon: 'bell'
  },
  {
    name: 'bookmarks',
    route: APP_ROUTE.BOOKMARKS,
    icon: 'bookmark'
  },
  {
    name: 'settings',
    route: APP_ROUTE.SETTINGS,
    icon: 'gear'
  },
]
