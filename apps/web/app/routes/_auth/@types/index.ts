export enum APP_ROUTES {
  DASHBOARD = '/dashboard',
  EXPLORE = '/explore',
  NOTIFICATIONS = '/notifications',
  BOOKMARKS = '/bookmarks',
  SETTINGS = '/settings',
  HOME = '/',
}

export enum AUTH_ROUTES {
  SIGN_UP = '/sign-up',
  SIGN_IN = '/sign-in',
  SIGN_OUT = '/sign-out',
}

export const ROUTES = {
  ...APP_ROUTES,
  ...AUTH_ROUTES,
} as const

export const NAV_LINKS = [
  {
    name: 'dashboard',
    route: APP_ROUTES.DASHBOARD,
    icon: 'home'
  },
  {
    name: 'explore',
    route: APP_ROUTES.EXPLORE,
    icon: 'bullhorn'
  },
  {
    name: 'notifications',
    route: APP_ROUTES.NOTIFICATIONS,
    icon: 'bell'
  },
  {
    name: 'bookmarks',
    route: APP_ROUTES.BOOKMARKS,
    icon: 'bookmark'
  },
  {
    name: 'settings',
    route: APP_ROUTES.SETTINGS,
    icon: 'gear'
  },
]
